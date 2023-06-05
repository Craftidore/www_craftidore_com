<!DOCTYPE html>
<html>
<head>
    <title>Craftidore Website Design</title>
    <meta charset="utf-8">
</head>
<body>
    <header>
        <h1>Craftidore Website Design</h1>
        <div class="navbar"><!-- TODO: Fix links -->
            <div><a href="/">Home</a></div>
            <div><a href="/">Example Sites</a></div>
            <div><a href="/">Contact</a></div>
        </div>
    </header>
<?php
if ($_SERVER["REQUEST_METHOD"] === "GET") {
?>
<?php
} else {
?>

        <p>
            Are you a small business looking for a new website? You've come to the right place. 
            Craftidore website design works with you to create the perfect website for your customers.
            We aim to create lightweight yet modern looking websites.
        </p>
        <p>
            Speed: Websites nowadays are bogged down by frameworks designed to make websites simpler. 
            Those frameworks create complex web documents that require long loading times.
            Craftidore websites don't rely on heavy frameworks, and instead work with 
            root web technologies to create quick, modern websites.
        </p>
        <p>

        </p>


    <form action="post">Contact us!
        <label for="name">Name: </label><input type="text" id="name">
        <label for="Message">Message: </label><textform cols="50" rows="10">
    </form>

<?php
}
?>
    <footer>
        <div id="about"><a href="/about">About Me</a></div>
        <div id="privacy"><a href="/privacy">Privacy</a></div>
        <div id="license"><a href="/license">License</a></div>
    </footer>
</body>
</html>
