<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />


        <link rel="icon" type="image/png" sizes="32x32" href="{{asset('logo/' . 'icons8-flower-doodle-16.png')}}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{asset('logo/' . 'icons8-flower-doodle-16.png')}}">
        <!-- Scripts -->
        <script src="https://api-maps.yandex.ru/2.1/?apikey=f75932e1-558f-4d27-a887-8ef8e27b017d&lang=ru_RU" type="text/javascript"></script>
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead

    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
