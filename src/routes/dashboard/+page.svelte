<script lang="js">
    export let data;
    const user_avatar = `https://cdn.discordapp.com/avatars/${data.user.id}/${data.user.avatar}.png`;
</script>

<html lang="" class="from-red-800 to-red-500 bg-gradient-to-b">
    <main>
        <title>Alex • Dashboard</title>
    </main>

    <body>
        <nav class="bg-bg-dark">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex rounded-full bg-gray-800 text-sm">
                            <img class="h-10 w-10 rounded-full" src={user_avatar} alt="">
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                            <p class="text-2xl text-slate-100 fond-bold align-bottom">{data.user.username}'s Servers</p>
                        </div>
                    </div>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <a href="/api/signout" class="bg-red-500 rounded-lg shadow-xl hover:bg-red-600">
                            <p class="text-slate-100 font-bold px-3 py-2">Logout</p>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
          
        {#if data.guilds_with_bot.length == 0 && data.guilds_without_bot.length == 0}
        <div>
            <p>You are in no guilds!</p>
        </div>
        {:else}
        <div class="grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-5xl gap-10 my-10">
            {#each data.guilds_with_bot as guild}
            <div class="flex flex-col shadow-lg">
                <div class="flex bg-zinc-700 rounded-lg p-3 mb-2">
                    <img class="h-16 w-16 rounded-lg" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt="Guild Logo">
                    <p class="text-slate-100 text-xl pl-3">{guild.name}</p>
                </div>
                <a href={`/dashboard/${guild.id}`} class="bg-red-600 p-2 rounded-lg text-center text-slate-100 hover:bg-red-700">
                    Manage
                </a>
            </div>
            {/each}

            {#each data.guilds_without_bot as guild}
            <div class="flex flex-col shadow-lg">
                <div class="flex bg-zinc-700 rounded-lg p-3 mb-2">
                    <img class="h-16 w-16 rounded-lg" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt="Guild Logo">
                    <p class="text-slate-100 text-xl pl-3">{guild.name}</p>
                </div>
                <a href="https://discord.com/api/oauth2/authorize?client_id=1003967201298104360&permissions=2147534912&scope=bot%20applications.commands"
                    class="bg-slate-500 p-2 rounded-lg text-center text-slate-100 hover:bg-slate-600">
                    Invite
                </a>
            </div>
            {/each}
        </div>
        {/if}
    </body>
</html>