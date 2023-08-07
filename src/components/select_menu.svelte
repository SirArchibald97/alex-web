<script lang="js">
    //@ts-nocheck
    import { Icon } from "@steeze-ui/svelte-icon";
    import { Check } from "@steeze-ui/heroicons";

    export let values;
    export let data;
    export let current;
    const { channels, guild } = JSON.parse(data);

    const items = values === "channels" ? channels : guild.roles;
    export let selected = items.find(i => i.id === current) || current;
    console.log(selected);

    let menuToggled = false;
    function toggleSelectMenu() { menuToggled = !menuToggled; }
    function selectOption(id) { selected = items.find(i => i.id === id).id; toggleSelectMenu(); }
</script>

<div>
    <div class="relative mt-2">
        <button on:click={toggleSelectMenu} type="button" class="relative w-full cursor-default rounded-md bg-zinc-700 py-1.5 pl-3 pr-10 text-left text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
            <span class="block truncate">{selected !== "0" ? `${values === "channels" ? "#" : "@"}${items.find(i => i.id === selected).name}` : "None"}</span>
            <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                </svg>
            </span>
        </button>
    
        {#if menuToggled}
        <ul class={`${menuToggled ? "opacity-100" : "transition ease-in duration-100 opacity-0"} absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-zinc-600 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3`}>
        {#each items as item}
        <div on:click={() => { selectOption(item.id) }} on:keypress={() => { }} >
            <li class="text-slate-100 hover:bg-red-500 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0">
                <span class={`block truncate ${item.id === selected ? "font-semibold" : "font-normal"}`}>{values === "channels" ? "#" : "@"}{item.name}</span>
                {#if item.id === selected}
                <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                    <Icon src={Check} class="w-6 h-6" />
                </span>
                {/if}
            </li>
        </div>
        {/each}
        </ul>
        {/if}
    </div>
</div>