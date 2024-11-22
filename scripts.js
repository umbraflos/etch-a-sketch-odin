

const main = document.querySelector("#main")

function drawSketch(column = 16,row = 16)
{
    for (let y = 0; y<row; ++y) 
        {
            const row = document.createElement("div")
            row.classList.toggle("row")

            for (let x = 0; x<column; ++x)
                {
                    const box = document.createElement("div")
                    box.classList.toggle("box")
                    
                    row.appendChild(box)
                }

            main.appendChild(row)
        }
    main.addEventListener("mouseover",(event)=>{                                      
                                            let target = event.target 
                                            if (target.id != "main"){target.style.backgroundColor = "red"}                                                                     
                                            }
                        )
}
drawSketch()

const button = document.querySelector("#button")
button.addEventListener("click",remakeSketch)

function remakeSketch()
    { 
        while(main.hasChildNodes()){main.removeChild(main.firstChild)}
        let y = 0
        let x = 0
        while (y >100 || x > 100 || y <= 0 || x <= 0)
            {
                console.log("asdw")
                y = prompt("Enter the number of column (<100).")
                x = prompt("Enter the number of row (<100).")
            }
        drawSketch(y,x)
    }
