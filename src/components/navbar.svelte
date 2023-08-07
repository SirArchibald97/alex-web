<script lang="js">
    import { Icon } from "@steeze-ui/svelte-icon";
    import { ArrowLeftOnRectangle } from "@steeze-ui/heroicons";
</script>

<nav class="bg-bg-dark">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 justify-between">
            <div class="flex items-center justify-start">
                <a href="/dashboard" class="bg-red-500 rounded-lg shadow-xl hover:bg-red-600 mr-3">
                    <p class="text-slate-100 font-bold px-3 py-2 flex flex-row">
                        <Icon src={ArrowLeftOnRectangle} theme="solid" class="w-6 h-6 mr-2"/>Back to servers
                    </p>
                </a>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center justify-end ml-3 sm:static sm:inset-auto">
                <a href="/api/signout" class="bg-red-500 rounded-lg shadow-xl hover:bg-red-600">
                    <p class="text-slate-100 font-bold px-3 py-2">Logout</p>
                </a>
            </div>
        </div>
    </div>
</nav>