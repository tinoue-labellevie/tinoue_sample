<script lang="ts">
    export let variant: 'primary' | 'secondary' = 'primary';
    export let size: 'small' | 'medium' | 'large' = 'medium';
    export let onClick: (event: MouseEvent) => void;
    export let disabled: boolean = false;
</script>

<button
    class:bg-blue-500={variant === 'primary'}
    class:hover:bg-blue-700={variant === 'primary'}
    class:text-white={variant === 'primary'}
    class:bg-gray-200={variant === 'secondary'}
    class:hover:bg-gray-300={variant === 'secondary'}
    class:text-gray-800={variant === 'secondary'}
    class:py-2={size === 'small'}
    class:px-4={size === 'small'}
    class:text-sm={size === 'small'}
    class:py-3={size === 'large'}
    class:px-6={size === 'large'}
    class:text-lg={size === 'large'}
    class:py-2.5={size === 'medium'}
    class:px-5={size === 'medium'}
    class:text-base={size === 'medium'}
    class:font-bold={true}
    class:rounded={true}
    class:opacity-50={disabled}
    class:cursor-not-allowed={disabled}
    {disabled}
    aria-disabled={disabled}
    on:click={onClick}
>
    <slot />
</button>