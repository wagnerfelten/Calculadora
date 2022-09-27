class calcController{
    constructor(){

        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");

        
        this._currentDate;
        this.init();
    }

    init(){
    
       setInterval(()=> { //vai fazer um intervalo de atualizção da pagina
            this.displayDate = this.currentDate.toLocaleDateString("pt-br");
       }, 1000);
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