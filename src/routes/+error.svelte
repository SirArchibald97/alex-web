<script lang-="js">
    // @ts-nocheck
    import { page } from "$app/stores";
    const status = $page.status;

    const message = {
        403: "You are not authorized to view this page.",
        404: "We couldn't find the page you are looking for.",
        500: "An internal server error occured. Please try again later."
    }
</script>

<html lang="" class="from-red-900 to-red-500 bg-gradient-to-b sm:h-screen flex items-center justify-center">
    <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div class="flex flex-col justify-center items-center mb-4 sm:mb-0">
            <div>
                <a href="https://pin.it/2GOsBu8"><img class="inline-block h-32 w-40 rounded-md" src="/favicon.png" alt=""></a>
            </div>
            <div class="overflow-hidden bg-bg-dark shadow-2xl max-w-xs sm:max-w-4xl rounded-lg px-10 py-5">
                <div class="text-center">
                    <p class="text-red-500">{status}</p>
                    <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">Whoops, something went wrong!</h1>
                    <p class="mt-6 text-base leading-7 text-white">{message[status]}</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="/" class="rounded-md from-red-600 to-red-500 bg-gradient-to-r px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
                    </div>
                </div>
            </div> 
        </div>
    </main>
</html>