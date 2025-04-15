<script lang="ts">
    import products from '$lib/data/products.json';
    import { goto } from '$app/navigation'; // gotoをインポート
	import Button from '../components/atoms/Button.svelte'; // ボタンコンポーネントをインポート

    interface Product {
        id: number;
        name: string;
        description: string;
        price: number;
        imageUrl: string;
    }

    function addToCart(product: Product) {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log("追加:", product.name);
    }

    function goToCart() { // カートページへ移動する関数
        goto('/cart');
    }
</script>

<div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-4">商品一覧</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {#each products as product}
            <div class="border p-4">
                <img src={product.imageUrl} alt={product.name} class="w-full" />
                <h2 class="text-lg font-semibold">{product.name}</h2>
                <p>{product.description}</p>
                <p class="text-sm font-bold">¥{product.price}</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => addToCart(product)}>カートに追加</button>
            </div>
        {/each}
    </div>
    <br>
    <div>
        <Button variant="secondary" onClick={goToCart} class="mt-4">
            カートを見る
        </Button>
    </div>
</div>