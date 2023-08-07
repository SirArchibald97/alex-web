<script lang="js">
    //@ts-nocheck
    export let data;
    export let form;

    import { Icon } from "@steeze-ui/svelte-icon";
    import { CalendarDays, ChevronRight, ChevronDown, ServerStack } from "@steeze-ui/heroicons";
    import Navbar from "../../../components/navbar.svelte";
    import SelectMenu from "../../../components/select_menu.svelte";
    import Toggle from "../../../components/toggle.svelte";

    const { bee, updates } = data.settings;

    console.log(bee, updates)
    let toggles = { bee: bee.toggled, updates: updates.toggled };
    let selectedChannels = { bee: bee.channel, updates: updates.channel };
    let selectedRoles = { bee: bee.role, updates: updates.role };
    
    let section_expanded = [false, false];
    function toggleSection(section) {
        section_expanded[section] = !section_expanded[section];
    }
</script>

<html lang="" class="from-red-800 to-red-500 bg-gradient-to-b">
    <head>
        <title>Alex • {data.guild.name}</title>
    </head>

    <body>
        <Navbar />

        <div class="flex flex-col justify-center max-w-5xl mx-auto">
            <div class="bg-zinc-700 flex justify-center my-5 sm:rounded-md shadow-lg">
                <img class="h-20 w-20 rounded-lg my-2" src={`https://cdn.discordapp.com/icons/${data.guild.id}/${data.guild.icon}.png`} alt="Guild Logo">
                <p class="text-xl text-slate-100 self-center ml-5">{data.guild.name}</p>
            </div>

            {#if form?.success}
            <div class="flex justify-center bg-green-500 text-slate-100 sm:rounded-md py-2 mb-3 shadow-lg">
                <p>Successfully updated settings!</p>
            </div>
            {:else if form?.success === false}
            <div class="flex justify-center bg-red-500 text-slate-100 sm:rounded-md py-2 mb-3 shadow-lg">
                <p>Something went wrong doing that!</p>
            </div>
            {/if}

            <div class="flex flex-col mb-5">
                <div class="bg-zinc-700 sm:rounded-lg p-3">
                    <div class="flex flex-row flex-wrap relative p-2">
                        <Icon src={CalendarDays} class="w-12 h-12 text-slate-100 mr-5"/>
                        <div class="flex flex-col">
                            <p class="text-slate-100 text-2xl font-bold">Bee Notifications</p>
                            <p class="text-slate-100 text-md">Customise your daily reminder to claim your Bee Freebie</p>
                        </div>
                        <button on:click={() => toggleSection(0)} class="bg-red-500 rounded-lg shadow-xl hover:bg-red-600 mr-3 right-0 sm:absolute mt-2">
                            <p class="text-slate-100 font-bold px-3 py-2 flex flex-row">
                                <Icon src={section_expanded[0] ? ChevronDown : ChevronRight} theme="solid" class="w-6 h-6 mr-2"/>Configure
                            </p>
                        </button>
                    </div>
                    {#if section_expanded[0]}
                    <div class="text-slate-100 bg-slate-600 rounded-lg mt-5 p-3">
                        <form method="POST">
                            <div>
                                <p class="text-sm font-medium leading-6 text-slate-100 pb-3">Toggle setting</p>
                                <Toggle bind:toggled={toggles.bee} data={JSON.stringify(data.settings.bee)} />
                                <input name="toggled" bind:value={toggles.bee} class="hidden" />
                            </div>
                            <div class="pt-3">
                                <p class="block text-sm font-medium leading-6 text-slate-100">Channel</p>
                                <SelectMenu bind:selected={selectedChannels.bee} values="channels" data={JSON.stringify(data)} current={selectedChannels.bee} />
                                <input name="channel" bind:value={selectedChannels.bee} class="hidden" />
                            </div>
                            <div class="pt-3">
                                <p class="block text-sm font-medium leading-6 text-slate-100">Roles</p>
                                <SelectMenu bind:selected={selectedRoles.bee} values="roles" data={JSON.stringify(data)} current={selectedRoles.bee} />
                                <input name="role" bind:value={selectedRoles.bee} class="hidden" />
                            </div>

                            <div>
                                <button formaction="?/savebeechanges" class="mt-5 px-3 py-1 rounded-md text-slate-100 bg-green-500 hover:bg-green-600">Save Changes</button>
                            </div>
                        </form>
                    </div>
                    {/if}
                </div>

                <div class="bg-zinc-700 sm:rounded-lg p-3 my-3">
                    <div class="flex flex-row flex-wrap relative p-2">
                        <Icon src={ServerStack} class="w-12 h-12 text-slate-100 mr-5"/>
                        <div class="flex flex-col">
                            <p class="text-slate-100 text-2xl font-bold">Update Notifications</p>
                            <p class="text-slate-100 text-md">Customise your maintenance and incident notifications</p>
                        </div>
                        <button on:click={() => toggleSection(1)} class="bg-red-500 rounded-lg shadow-xl hover:bg-red-600 mr-3 sm:absolute right-0 mt-2">
                            <p class="text-slate-100 font-bold px-3 py-2 flex flex-row">
                                <Icon src={section_expanded[1] ? ChevronDown : ChevronRight} theme="solid" class="w-6 h-6 mr-2"/>Configure
                            </p>
                        </button>
                    </div>
                    {#if section_expanded[1]}
                    <div class="text-slate-100 bg-slate-600 rounded-lg mt-5 p-3">
                        <form method="POST">
                            <div>
                                <p class="text-sm font-medium leading-6 text-slate-100 pb-3">Toggle setting</p>
                                <Toggle bind:toggled={toggles.updates} data={JSON.stringify(data.settings.updates)} />
                                <input name="toggled" bind:value={toggles.updates} class="hidden" />
                            </div>
                            <div class="pt-3">
                                <p class="block text-sm font-medium leading-6 text-slate-100">Channel</p>
                                <SelectMenu bind:selected={selectedChannels.updates} values="channels" data={JSON.stringify(data)} current={selectedChannels.updates} />
                                <input name="channel" bind:value={selectedChannels.updates} class="hidden" />
                            </div>
                            <div class="pt-3">
                                <p class="block text-sm font-medium leading-6 text-slate-100">Roles</p>
                                <SelectMenu bind:selected={selectedRoles.updates} values="roles" data={JSON.stringify(data)} current={selectedRoles.updates} />
                                <input name="role" bind:value={selectedRoles.updates} class="hidden" />
                            </div>

                            <div>
                                <button formaction="?/saveupdateschanges" class="mt-5 px-3 py-1 rounded-md text-slate-100 bg-green-500 hover:bg-green-600">Save Changes</button>
                            </div>
                        </form>
                    </div>
                    {/if}
                </div>
            </div>
        </div>
    </body>
</html>