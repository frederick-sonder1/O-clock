<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    
    <script src="../js/scriptreveil.js" /*type="module"*/ ></script>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/reveil.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <title>O-clock Alarme</title>
</head>

<body>
    <header>
        <a href="../index.php">Retour</a>
        <a href="timer.php">Minuteur</a>
        <a href="horloge.php">Horloge</a>
        <a href="chronometre.php">Chronometre</a>
    </header>
    <main>

    <div class="alarm"> 
        <div id ="clock"></div>  

        <form action="" id="form">
            
            <input name="alarmTime" id="alarmTime" type="datetime-local">

            <input type="text" name="message" id="message">

            <div class="controls">

                <button class="buton" id="set-alarm">
                    <span class="material-icons-outlined">access_alarms</span>
                </button>

                <button class="buton" id="clear-alarm">
                    <span class="material-icons-outlined">alarm_off</span>
                </button>

            </div>

        </form>
        <div class="text"></div>
    </div> 
    
<?= require_once('footer.php'); ?>
