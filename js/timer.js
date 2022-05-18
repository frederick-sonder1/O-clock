export default class Timer {
    constructor(root){
        root.innerHTML = Timer.getHTML();

        this.element ={
            // recuperation des elements
            minutes: root.querySelector('.timer__part--minutes'),
            seconds: root.querySelector('.timer__part--seconds'),
            control: root.querySelector('.timer__btn--control'),
            reset: root.querySelector('.timer__btn--reset'),
        };

        this.interval = null;
        this.remainingSeconds =0; //unitée de temps en secondes entéré par l'utilisateur 

        this.element.control.addEventListener('click', ()=>{
            if(this.interval===null) {
                this.start();     //evenement sur le click du bouton start
            }else{
                this.stop();    //evenement sur le click du bouton stop
            }         
        });

        
        this.element.reset.addEventListener('click', ()=>{
            const inputMinutes = prompt('Entrez le nombre de minutes');  //popup pour entrer le nombre de minutes
            
            if(inputMinutes <60){
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            }
        
        });
    }

    updateInterfaceControls() {
        if(this.interval===null) {  //si le timer n'est pas en marche
            this.element.control.innerHTML = '<span class="material-icons">play_circle_filled</span>';
            this.element.control.classList.add('timer__btn--start');
            this.element.control.classList.remove('timer__btn--stop');
        }
        else {  // si le timer est en marche
            this.element.control.innerHTML = '<span class="material-icons">pause_circle_filled</span>';
            this.element.control.classList.add('timer__btn--stop');
            this.element.control.classList.remove('timer__btn--start');
        }
    }

    updateInterfaceTime(){  //defini combien dure une minute et une seconde
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;

        this.element.minutes.textContent = minutes.toString().padStart(2, '0');   //ajoute un 0 devant les minutes
        this.element.seconds.textContent = seconds.toString().padStart(2, '0');
    }

    start(){  //lance le timer
        if(this.remainingSeconds === 0) return;
        this.interval = setInterval(()=>{
            this.remainingSeconds--; //diminue le temps restant
            this.updateInterfaceTime(); //met à jour l'interface avec l temps courrant

            if(this.remainingSeconds === 0) {
                this.stop();
            }
        },1000);

        this.updateInterfaceControls();
    }

    stop(){  //arrete le timer  et met à jour l'interface
        clearInterval(this.interval);

        this.interval = null;

        this.updateInterfaceControls();
    }

    static getHTML(){  //defini le code html a afficher dans le DOM
        return '<span class="timer__part timer__part--minutes">00</span><span class="timer__part">:</span><span class="timer__part timer__part--seconds">00</span><button type="button" class="timer__btn timer__btn--control timer__btn--start"><span class="material-icons">play_circle_filled</span></button><button type="button" class="timer__btn timer__btn--control timer__btn--reset"><span class="material-icons">timer</span></button>';
    }
}