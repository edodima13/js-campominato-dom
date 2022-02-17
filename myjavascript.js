const select = document.getElementById("mode")
const startGame = document.getElementById("gioca")
const grigliaElement = document.getElementsByClassName("griglia")[0]


startGame.addEventListener("click",function(){
    
    const mode = select.value
    
    let rows;
    let columns;
    let cellSize;

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

    
    
    for (let i = 0; i < numerodicelle; i++){
        const cell = document.createElement("div")
        cell.style.width = cellSize
        cell.append(i + 1)
        cell.classList.add("square")
        grigliaElement.append(cell)
        cell.addEventListener ("click", function (){
            const element = this
            element.classList.add("blue")
        })
    } 
    
})
