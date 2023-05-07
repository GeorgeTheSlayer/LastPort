<script lang="ts">
  let isClicked = true;
</script>

<nav class="p-4">
  <div class="flex w-full items-center text-black">
    <div class="">
      <h3 class="ml-4 text-2xl font-bold text-black hover:opacity-50">
        <a href="/" class="text-black">
          Holland<span class="text-red-500">Sersen</span>
        </a>
      </h3>
    </div>
    <ul
      class="float-right ml-auto hidden gap-4 pr-4 text-xl font-light tracking-wide md:flex"
    >
      <li class="hover:opacity-50"><a href="/">Blog</a></li>
      <li class="hover:opacity-50"><a href="/">About</a></li>
      <li class="hover:opacity-50"><a href="/">Contact</a></li>
    </ul>
    <button
      on:click={() => (isClicked = !isClicked)}
      class="ml-auto block md:hidden"
    >
      {#if isClicked}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-menu-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-x"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      {/if}
    </button>
  </div>
  {#if !isClicked}
    <ul
      class="-mb-10 block w-full text-center text-xl font-light tracking-wide md:hidden"
    >
      <li class="hover:opacity-50"><a href="/">Blog</a></li>
      <li class="hover:opacity-50"><a href="/">About</a></li>
      <li class="hover:opacity-50"><a href="/">Contact</a></li>
    </ul>
  {/if}
</nav>
