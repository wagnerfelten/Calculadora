class calcController{
    constructor(){

        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");

        
        this._currentDate;
        this.init();
    }

    init(){
    
        dateEl.innerHTML = "01/05/2022";
        timeEl.innerHTML = "4567";
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(date){
        this._currentDate = date;
    }
}