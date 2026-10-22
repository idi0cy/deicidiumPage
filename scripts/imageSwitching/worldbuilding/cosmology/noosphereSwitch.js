//ALL OF THIS IS FIRST SECTION CODE
//FIRST SECTION CODE WILL BE MOSTLY COPIED FOR SECOND IMAGE
const imageSlide1 = document.querySelector('.docImage.firstImage')
const firstImageIndexDisplays = document.getElementsByClassName('displayIndicatorFirst')
const imageDesc1 = document.querySelector('.imgDesc1')
const firstTextSet = ["(1) I haven't made assets. Yet.", "(2) WEIRD LOGO JUMPSCARE"]
const firstImageSet = ['../../../images/worldbuilding/cosmology/dimensionality/soySauceBucket.png', '../../../images/deicidiumLogo.svg']
var firstIndex = 0

imageDesc1.innerText = firstTextSet[firstIndex]
imageSlide1.src = firstImageSet[firstIndex]
firstImageIndexDisplays[firstIndex].classList.add('selected')

console.log("literally anything")
console.log(imageSlide1)

function switchFirstImageForward() {
    for (let i = 0; i < (firstImageIndexDisplays.length); i++) {
        firstImageIndexDisplays[i].classList.remove('selected')
    }
    
    if (firstIndex === (firstTextSet.length - 1)) {
        firstIndex = 0
    } else {
        firstIndex += 1
    }
    
    imageDesc1.classList.add('hiding')
    imageSlide1.classList.add('hiding')

    imageSlide1.parentNode.setAttribute('style', `height:${imageSlide1.offsetHeight + 3}px;`)
    setTimeout(() => {
        imageDesc1.innerText = firstTextSet[firstIndex]
        imageSlide1.src = firstImageSet[firstIndex]
    }, 200)
}


function switchFirstImageBack() {
    for (let i = 0; i < (firstImageIndexDisplays.length); i++) {
        firstImageIndexDisplays[i].classList.remove('selected')
    }
    if (firstIndex === (0)) {
        firstIndex = firstTextSet.length - 1
    } else {
        firstIndex -= 1
    }
    
    imageDesc1.classList.add('hiding')
    imageSlide1.classList.add('hiding')

    imageSlide1.parentNode.setAttribute('style', `height:${imageSlide1.offsetHeight + 3}px;`)
    setTimeout(() => {
        imageDesc1.innerText = firstTextSet[firstIndex]
        imageSlide1.src = firstImageSet[firstIndex]
    }, 200)
}


//this function ensures that all the heights are calculated after the image is finished loading.
imageSlide1.onload = function() {
    imageSlide1.parentNode.setAttribute('style', `height:${imageSlide1.offsetHeight + 3}px;`)

    firstImageIndexDisplays[firstIndex].classList.add('selected')
    imageSlide1.classList.remove('hiding')
    imageDesc1.classList.remove('hiding')
}

//START OF THE SECOND SECTION

const imageSlide2 = document.querySelector('.docImage.secondImage')
const secondImageIndexDisplays = document.getElementsByClassName('displayIndicatorSecond')
const imageDesc2 = document.querySelector('.imgDesc2')
const secondTextSet = ["(1) This individual is NOT breaking their chains. File name lied.", "(2) Check out this terrible logo I made!"]
const secondImageSet = ['../../../images/worldbuilding/cosmology/dimensionality/manBreaksChains.jpg', '../../../images/deicidiumLogo.svg']
var secondIndex = 0


imageDesc2.innerText = secondTextSet[secondIndex]
imageSlide2.src = secondImageSet[secondIndex]
secondImageIndexDisplays[secondIndex].classList.add('selected')

function switchSecondImageForward() {
    for (let i = 0; i < (secondImageIndexDisplays.length); i++) {
        secondImageIndexDisplays[i].classList.remove('selected')
    }
    
    if (secondIndex === (secondTextSet.length - 1)) {
        secondIndex = 0
    } else {
        secondIndex += 1
    }
    
    imageDesc2.classList.add('hiding')
    imageSlide2.classList.add('hiding')

    imageSlide2.parentNode.setAttribute('style', `height:${imageSlide2.offsetHeight + 3}px;`)
    setTimeout(() => {
        imageDesc2.innerText = secondTextSet[secondIndex]
        imageSlide2.src = secondImageSet[secondIndex]
    }, 200)
}

function switchSecondImageBack() {
    for (let i = 0; i < (secondImageIndexDisplays.length); i++) {
        secondImageIndexDisplays[i].classList.remove('selected')
    }
    if (secondIndex === (0)) {
        secondIndex = secondTextSet.length - 1
    } else {
        secondIndex -= 1
    }
    
    imageDesc2.classList.add('hiding')
    imageSlide2.classList.add('hiding')

    imageSlide2.parentNode.setAttribute('style', `height:${imageSlide2.offsetHeight + 3}px;`)
    setTimeout(() => {
        imageDesc2.innerText = secondTextSet[secondIndex]
        imageSlide2.src = secondImageSet[secondIndex]
    }, 200)
}

imageSlide2.onload = function() {
    imageSlide2.parentNode.setAttribute('style', `height:${imageSlide2.offsetHeight + 3}px;`)

    secondImageIndexDisplays[secondIndex].classList.add('selected')
    imageSlide2.classList.remove('hiding')
    imageDesc2.classList.remove('hiding')
}
