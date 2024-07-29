const container = document.querySelector('.container')

const square = 500;
const colors = ["green","white","blue","red","yellow","pink","voilet","orange"]
function getRandomColor(colors) {
    return colors[Math.floor(Math.random()*colors.length)]
}

function setColor(element){
    element.style.backgroundColor = getRandomColor(colors)
}
function unsetColor(element){
    element.style.backgroundColor = "#1D1D1D"
    element.style.bosShadow = "0 0 2px 0 rgba(0,0,0,0.3)"
}

for (let i = 0; i <square; i++) {
    const square = document.createElement("div")
    square.classList.add('square')
    square.addEventListener("mouseover",()=>{
      setColor(square)
    })
    square.addEventListener("mouseout",()=>{
    unsetColor(square)
    })
    container.appendChild(square)
}