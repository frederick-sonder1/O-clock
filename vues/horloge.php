<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../js/scripthorloge.js" type="module"></script>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/horloge.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <title>O-clock Horloge</title>
</head>

<body>
    <header>
        <a href="../index.php">Retour</a>
        <a href="timer.php">Minuteur</a>
        <a href="alarme.php">Alarme</a>
        <a href="chronometre.php">Chronometre</a>
    </header>
    <main>

    <div class="horloge2">
        <div class=horloge>
            <div class="needle hr"></div>
            <div class="needle min"></div>
            <div class="needle sec"></div>
        </div>
    </div>
    
    </div>

<?= require_once('footer.php'); ?>