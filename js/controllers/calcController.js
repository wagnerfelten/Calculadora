class calcController{
    constructor(){

        this._operation = [];
        this._locale = "pt-br";
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        
        
        this._currentDate;
        this.init();
        this.initButtonsEvents();
        
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

    addEventListenerAll(element, events, fn){

            events.split(' ').forEach(event =>{
                element.addEventListener(event, fn, false);//com o false sera gerado apenas um evento de click e nao dois, pois sendo o botao e string atuando dividualmente 
            });
    }

    clearAll(){
        this._operation = [];
    }

    clearEntry(){
        this._operation.pop();
    }

    getLastOperation(){

        return this._operation[this._operation.length-1]; //vai pegar todos os arreys e tirar o ultimo
    
    }

    setLastOperation(value){

        this._operation[this._operation.length - 1] = value;
    
    }

    isOperation(value){
    
        return (['+', '-', '*', '/', '%'].indexOf(value) > -1);
    
    }

    pushOperation(value){
        this._operation.push(value);

        if(this._operation.length > 3){

            this.calc();
        }
    }

    calc(){
        
        let last = this._operation.pop();
            
        let result = eval(this._operation.join(""));

        this._operation = [result, last];

    }

    addOperation(value){

        if(isNaN(this.getLastOperation())){

            if(this.isOperation(value)){

                this.setLastOperation(value);
            
            }else if(isNaN(value)){
                console.log("outracois" + value)

            }else{
                this.pushOperation(value);
            }

        }else{

            if(this.isOperation(value)){

                this.pushOperation(value);

            }else{
            let newValue = this.getLastOperation().toString() + value.toString(); //vai tranformar o numero em String e conctenar os numeros em forma de string
            
            this.setLastOperation(parseInt(newValue));
            }
        }

        console.log(this._operation);
    }

    setError(){
        this.displayCalc = "ERROR"
    }

    execBtn(value){
        switch(value){
            case 'ac':
                    this.clearAll();
                break;

            case 'ce':
                    this.clearEntry();
                break;

            case 'soma':
                this.addOperation('+');
                break;
                   
            case 'subtracao':
                this.addOperation('-');
                break;

            case 'multiplicacao':
                this.addOperation('*');
                break;
            
            case 'divisao':
                this.addOperation('/');
                break;

            case 'porcento':
                this.addOperation('%');
                break;

            case 'igual':

                break;
            
            case 'ponto':
                this.addOperation('.');
                break;
            
            case '0':
            case '1':            
            case '2':
            case '3':                    
            case '4':
            case '5':                            
            case '6':
            case '7':                                    
            case '8':
            case '9':
                    this.addOperation(parseInt(value));                                            
                break;
            
            
            default:
                    this.setError();
                break;        
        }
    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g ");

            buttons.forEach((btn, index) =>{
                
                this.addEventListenerAll(btn, "click drag", e => {
                
                    let textBtn = btn.className.baseVal.replace("btn-" , "");

                    this.execBtn(textBtn);
                });

                this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>{
                    btn.style.cursor = "pointer";
                });
            })

    }

    setDisplayDateTime(){
       
        this.displayDate = this.currentDate.toLocaleDateString(this._locale,
            {
                //personalizacao da data com json
                day: "2-digit",
                month: "short",
                year: "numeric"
            }); //vai colocar a data atualizada no formado do Brasil na new Date.
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