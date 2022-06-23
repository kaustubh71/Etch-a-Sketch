const divContainer = document.querySelector('#div-container')
const colorPicker = document.querySelector('#color-picker')
const colorBtn = document.querySelector('#color-btn')
const rainbowBtn = document.querySelector('#rainbow-btn')
const eraseBtn = document.querySelector('#erase-btn')
const clearBtn = document.querySelector('#clear-btn')
const sliderText = document.querySelector('#slider-text')
const slider = document.querySelector('#slider')

let sliderValue = slider.value

// part of logic so that mouse hover and changes background only when mouse button is clicked
let mouseDown = false
document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => {mouseDown = false}

const createGrid = (size) => {

    divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for(let i=0; i<=size*size; i++) {   
        
        const gridDiv = document.createElement('div');

        gridDiv.classList.add('gridElement')
        gridDiv.addEventListener('mousedown', (e) => {gridDiv.style.backgroundColor = '#55f991'})
        gridDiv.addEventListener('mouseover', (e) => {
            if(e.type === 'mouseover' && mouseDown === false) return
            else (gridDiv.style.backgroundColor = '#55f991')
        })
        
        divContainer.appendChild(gridDiv)

        clearBtn.addEventListener('click', () => {
            gridDiv.style.backgroundColor = '#1f2937'
        })

        eraseBtn.addEventListener('click', () => {
            gridDiv.addEventListener('mousedown', (e) => 
                {gridDiv.style.backgroundColor = '#1f2937'})
            gridDiv.addEventListener('mouseover', (e) => {
                if(e.type === 'mouseover' && mouseDown === false) return
                else (gridDiv.style.backgroundColor = '#1f2937')
            })
        })

        rainbowBtn.addEventListener('click', () => {
            gridDiv.addEventListener('mousedown', (e) => 
                {gridDiv.style.backgroundColor = createRainbowColor()})
            gridDiv.addEventListener('mouseover', (e) => {
                if(e.type === 'mouseover' && mouseDown === false) return
                else (gridDiv.style.backgroundColor = createRainbowColor())
            })
        })

        colorBtn.addEventListener('click', () => {
            gridDiv.addEventListener('mousedown', (e) => 
                {gridDiv.style.backgroundColor = colorPicker.value})
            gridDiv.addEventListener('mouseover', (e) => {
                if(e.type === 'mouseover' && mouseDown === false) return
                else (gridDiv.style.backgroundColor = colorPicker.value)
            })
        
            colorBtn.style.backgroundColor = colorPicker.value
        })
}}

const createRainbowColor = () => {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    return `rgb(${red}, ${green}, ${blue})`
}

createGrid(sliderValue)

slider.addEventListener('input', () => {
    sliderText.textContent = `${slider.value} X ${slider.value}`
    sliderValue = slider.value
    divContainer.innerHTML = ''
    createGrid(sliderValue)
})





 
