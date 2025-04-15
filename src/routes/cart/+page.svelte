<script lang="ts">
  import { goto } from "$app/navigation";
  import { cart } from "$lib/stores/cart";
  import type { Product } from "$lib/stores/cart";

  let total: number = $cart.reduce(
    (sum: number, item: Product) => sum + item.price,
    0
  );

  function removeFromCart(index: number) {
    $cart = $cart.filter((_, i) => i !== index);
    total = $cart.reduce(
      (sum: number, item: Product) => sum + item.price,
      0
    );
  }

  function goBackToList() {
    goto("/");
  }
</script>

<div class="container mx-auto">
  <h1 class="text-2xl font-bold mb-4">カート</h1>
  {#if $cart.length === 0}
    <p>カートは空です。</p>
  {:else}
    <ul>
      {#each $cart as item, index}
        <li>
          {item.name} - ¥{item.price}
          <button on:click={() => removeFromCart(index)}>削除</button>
        </li>
      {/each}
    </ul>
    <p>合計: ¥{total}</p>
  {/if}
  <button
    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
    on:click={goBackToList}
  >
    商品一覧に戻る
  </button>
</div>