<script lang="ts">
  import Mode from "./Mode.svelte";
  import { slide } from "svelte/transition";
  let isClicked = true;

  let isMode: undefined | boolean = undefined;

  if (localStorage.theme == "light") {
    isMode = true;
  } else {
    isMode = false;
  }

  $: {
    if (isMode) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  }
</script>

<nav class="mx-4 p-4">
  <div class="flex w-full items-center text-black dark:text-white">
    <div class="">
      <h3 class=" text-2xl font-bold text-black hover:opacity-50">
        <a href="/" class=" dark:text-white">
          Holland<span class="text-red-500">Sersen</span>
        </a>
      </h3>
    </div>
    <ul
      class="float-right ml-auto hidden gap-4 pr-4 text-xl font-light tracking-wide dark:text-white md:flex"
    >
      <li class=""><Mode bind:isDark={isMode} /></li>
      <li class="hover:text-red-500"><a href="/">Blog</a></li>
      <li class="hover:text-red-500"><a href="/">About</a></li>
      <li class="hover:text-red-500"><a href="/">Contact</a></li>
    </ul>
    <div class="ml-auto flex gap-2 md:hidden">
      <Mode bind:isDark={isMode} />

      <button
        on:click={() => (isClicked = !isClicked)}
        class=" hover:text-red-500"
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
  </div>
  {#if !isClicked}
    <ul
      transition:slide|local
      class="-mb-10 block w-full text-left text-xl font-light tracking-wide text-black dark:text-white md:hidden"
    >
      <li class="hover:text-red-500"><a href="/">Blog</a></li>
      <li class="hover:text-red-500"><a href="/">About</a></li>
      <li class="hover:text-red-500"><a href="/">Contact</a></li>
    </ul>
  {/if}
</nav>
