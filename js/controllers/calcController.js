class calcController{
    constructor(){

        this._locale = "pt-br";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");

        
        this._currentDate;
        this.init();
    }

    init(){

        this.setDisplayDateTime();
    
         setInterval(()=> { //vai fazer um intervalo de atualizção da pagina
       
            this.setDisplayDateTime();
       
        }, 1000);
        
        /*  <-- teste do setTime com o clearInterval -->
        setTimeout(() => {
            clearInterval(interval); //vai conometrar a parada de atualizacao de pagina do setInterval
        }, 12000); */
    }

    setDisplayDateTime(){
       
        this.displayDate = this.currentDate.toLocaleDateString(this._locale); //vai colocar a data atualizada no formado do Brasil na new Date.
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale); //vai atualizar a hora
    
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate( ){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}