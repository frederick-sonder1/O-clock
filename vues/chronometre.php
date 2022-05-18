<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../js/scriptchrono.js"></script>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/chrono.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <title>O-clock Chronomètre</title>
</head>

<body>
    <header>
        <a href="../index.php">Retour</a>
        <a href="timer.php">Minuteur</a>
        <a href="horloge.php">Horloge</a>
        <a href="alarme.php">Alarme</a>
    </header>
    <main>
        <div class="container">
            <div class="watch">
                <div class="outer-circle">
                    <div class="inner-circle">
                        <span class="text minute">00 :</span>
                        <span class="text sec">&nbsp; 00 :</span>
                        <span class="text msec">&nbsp; 00</span>
                    </div>
                </div>
                <div class="button-wrapper">
                    <button class="button reset hidden">Reset</button>
                    <button class="button play">play</button>
                    <button class="button lap hidden">laps</button>
                </div>
            </div>
            <ul class="laps">
                <button class="lap-clearbutton hidden">Remise à Zéro</button>
            </ul>
        </div>