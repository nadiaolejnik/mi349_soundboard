var firstButton = document.getElementById('first-button')

firstButton.addEventListener('mouseenter', () => {
    document.getElementById('applause1hover').play()
})
firstButton.addEventListener('click', () => {
    document.getElementById('applause2click').play()
})

var secondButton = document.getElementById('second-button')

secondButton.addEventListener('mouseenter', () => {
    document.getElementById('bubbling1hover').play()
})
secondButton.addEventListener('click', () => {
    document.getElementById("bubbling2click").play()
})



var thirdButton = document.getElementById('third-button')

thirdButton.addEventListener('mouseenter', () => {
    document.getElementById("camera1hover").play()
})
thirdButton.addEventListener('click', () => {
    document.getElementById("camera2click").play()
})