<script lang="ts">
    import { Icon } from "@steeze-ui/svelte-icon";
    import { Envelope, ArrowTopRightOnSquare } from "@steeze-ui/heroicons";
</script>

<main class="from-red-900 to-red-500 bg-gradient-to-b h-screen text-slate-100 flex justify-center items-center">
    <div class="flex flex-col justify-center items-center">
        <div class="pb-6">
            <a href="https://pin.it/2GOsBu8"><img class="inline-block h-32 w-40 rounded-md shadow-xl" src="/images/pfp.jpg" alt=""></a>
        </div>
        <div class="overflow-hidden bg-discord-light shadow-2xl sm:rounded-lg max-w-screen-md">
            <div class="px-4 py-8 sm:px-6">
                <h3 class="text-3xl font-bold leading-6">👋 Hi, I'm Alex!</h3>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:px-6 text-xl">

                <!-- information -->
                <p>I am a stats bot for MCC where you can see information on the MCC event, it's game and it's teams!</p>
                <div class="pt-4 pl-2">
                    <p class="py-2"><span class="text-2xl pr-2">🤝</span> View the teams and livestreams of the upcoming events!</p>
                    <p class="py-2"><span class="text-2xl pr-2">📊</span> Lookup world records in the Hall of Fame!</p>
                    <p class="py-2"><span class="text-2xl pr-2">🏆</span> See the placements from the previous event, and coin totals!</p>
                </div>
                
                <!-- buttons -->
                <div class="flex flex-row justify-center pt-4 pb-2">
                    <a href="https://discord.com/api/oauth2/authorize?client_id=1003967201298104360&permissions=2147534912&scope=bot%20applications.commands">
                        <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-red-500 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2">
                            <Icon src={Envelope} theme="solid" class="w-6 h-6 mr-2"/>
                            Invite
                        </button>
                    </a>
                    <a href="https://mccisland.net">
                        <button type="button" class="ml-4 inline-flex items-center rounded-md border border-transparent bg-slate-400 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <Icon src={ArrowTopRightOnSquare} theme="solid" class="w-6 h-6 mr-2"/>
                            MCC
                        </button>
                    </a>
                    <a href="https://github.com/sirarchibald97/alex">
                        <button type="button" class="ml-4 inline-flex items-center rounded-md border border-transparent bg-slate-400 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <Icon src={ArrowTopRightOnSquare} theme="solid" class="w-6 h-6 mr-2"/>
                            GitHub
                        </button>
                    </a>
                </div>

                <!-- footer -->
                <div class="text-sm mt-4 flex flex-row justify-around">
                    <p>Built by <a class="underline font-bold" href="https://sirarchibald.dev">SirArchibald</a> using <a class="underline font-bold" href="https://github.com/Noxcrew/mcchampionship-api">MCC API</a></p>
                    <p>I am in no way affiliated with MCC or Noxcrew!</p>
                </div>
            </div>
        </div> 
    </div>
</main>