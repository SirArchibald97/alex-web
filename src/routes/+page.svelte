<script lang="ts">
    import { Icon } from "@steeze-ui/svelte-icon";
    import { Envelope, ArrowTopRightOnSquare } from "@steeze-ui/heroicons";
</script>

<html lang="" class="from-red-900 to-red-500 bg-gradient-to-b sm:h-screen flex items-center justify-center">
    <head>
        <title>Alex | MCC Stats Discord Bot</title>
        <meta name="description" content="Alex is an MCC stats bot for Discord that allows you to view information about upcoming events and its teams as well as results from previous events and stats in the Hall of Fame!">
    </head>
    <main class=" text-slate-100 flex flex-col items-center">
        <div class="flex flex-col justify-center items-center mb-4 sm:mb-0">
            <div>
                <a href="https://pin.it/2GOsBu8"><img class="inline-block h-32 w-40 rounded-md" src="/favicon.png" alt=""></a>
            </div>
            <div class="overflow-hidden bg-discord-light shadow-2xl max-w-xs sm:max-w-3xl rounded-lg">
                <div class="px-4 py-8 sm:px-6">
                    <h3 class="text-3xl font-bold leading-6">👋 Hi, I'm Alex!</h3>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:px-6 text-xl">

                    <!-- information -->
                    <p>I am a stats bot for MCC where you can see information on the MCC event, it's game and it's teams!</p>
                    <div class="pt-4 pl-2 flex flex-col">
                        <div class="flex flex-row pb-2">
                            <p>🤝</p>
                            <p class="ml-3">View the teams and livestreams of the upcoming events!</p>
                        </div>
                        <div class="flex flex-row pb-2">
                            <p>📊</p>
                            <p class="ml-3">Lookup world records in the Hall of Fame!</p>
                        </div>
                        <div class="flex flex-row pb-2">
                            <p>🏆</p>
                            <p class="ml-3">See the placements from the previous event and coin totals!</p>
                        </div>
                    </div>
                    
                    <!-- buttons -->
                    <div class="flex flex-col sm:flex-row items-center sm:justify-center pt-4 pb-2">
                        <a href="https://discord.com/api/oauth2/authorize?client_id=1003967201298104360&permissions=2147534912&scope=bot%20applications.commands">
                            <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-red-500 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 duration-75">
                                <Icon src={Envelope} theme="solid" class="w-6 h-6 mr-2"/>
                                Invite
                            </button>
                        </a>
                        <a href="https://mccisland.net" target="_blank" rel="noreferrer">
                            <button type="button" class="mt-2 sm:mt-0 sm:ml-4 inline-flex items-center rounded-md border border-transparent bg-slate-400 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 duration-75">
                                <Icon src={ArrowTopRightOnSquare} theme="solid" class="w-6 h-6 mr-2"/>
                                MCC
                            </button>
                        </a>
                        <a href="https://github.com/sirarchibald97/alex" target="_blank" rel="noreferrer">
                            <button type="button" class="mt-2 sm:mt-0 sm:ml-4 inline-flex items-center rounded-md border border-transparent bg-slate-400 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 duration-75">
                                <Icon src={ArrowTopRightOnSquare} theme="solid" class="w-6 h-6 mr-2"/>
                                GitHub
                            </button>
                        </a>
                    </div>

                    <!-- footer -->
                    <div class="text-sm mt-4 flex flex-col sm:flex-row justify-around text-center">
                        <p>Built by <a class="underline font-bold" href="https://sirarchibald.dev" target="_blank" rel="noreferrer">SirArchibald</a> using <a class="underline font-bold" href="https://github.com/Noxcrew/mcchampionship-api" target="_blank" rel="noreferrer">MCC API</a></p>
                        <p>I am in no way affiliated with MCC or Noxcrew!</p>
                    </div>
                </div>
            </div> 
        </div>
    </main>
</html>