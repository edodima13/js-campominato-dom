const select = document.getElementById("mode")
const startGame = document.getElementById("gioca")
const grigliaElement = document.getElementsByClassName("griglia")[0]
const message = document.getElementById("message")


startGame.addEventListener("click",function(){
    
    const mode = select.value
    
    let rows;
    let columns;
    let cellSize;
    let bombe;
    let score = 0

    switch (mode){
        case "1":
        rows = 10
        columns = 10
        
        break
        case "2":
            rows = 9
            columns = 9
        break
        case "3":
            rows = 7
            columns = 7
        break
    }

    const numerodicelle = rows * columns
    cellSize = `calc( 100% / ${ columns } )`
    grigliaElement.innerHTML = []
    //dichiarare numeri da generare nel math random
    bombe = generabombe(16,1,numerodicelle)
    //fare una funzione per generare le bombe
    function generabombe(total,min,max) {
        //cerare un array che continere i numeri delle celle corrispondenti alle bombe
        const arraybombe = []
        //non far ripetere i numeri nell'array
        do{
    
            const num = getrandom(min,max)
            
            if (!arraybombe.includes (num)){
                arraybombe.push(num)
            }

        } while (arraybombe.length < total)
        //far ritornare il numero delle bombe dalla funzione
        return arraybombe
    }

    //dichiarare quando la cella è una bomba
    function èunabomba(num, bombe){
        if(bombe.includes (parseInt(num))){
            return true
        } else {
            return false
        }
    }

    //generare math random
    function getrandom(min,max) {
        min = Math.ceil(min);
        msx = Math.floor(max);
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    for (let i = 0; i < numerodicelle; i++){
        const scoreUser = score
        const cell = document.createElement("div")
        cell.style.width = cellSize
        cell.append(i + 1)
        cell.classList.add("square")
        grigliaElement.append(cell)
        cell.addEventListener ("click", function (){
            
            const element = this
            
            //aggiungere la classe bomb se è una bomba altirmenti blue
            if (èunabomba(this.innerHTML, bombe)){
                element.classList.add("bomb")
            } else {
                element.classList.add("blue")
            }
            message.innerHTML = []
            score++
            message.append(`hai totalizzato ${scoreUser} punti`)
        })
    } 
    
})
