//Cool new code


//ensure that in this function index has its first letter capitalized
function switchImageForwards(index) {
    let upperDex = index
    let lowerDex = index.toLowerCase()

    console.log(upperDex)
    console.log(lowerDex)
}

function switchImageBackwards(index) {
    console.log("too lazy to universalize as of now")
}

//Fatuous old code

/*
const imageSlide1 = document.querySelector('.docImage.firstImage')
const firstImageIndexDisplays = document.getElementsByClassName('displayIndicatorFirst')
const imageDesc1 = document.querySelector('.imgDesc1')
const firstTextSet = ["(1) I haven't made assets. Yet.", "(2) WEIRD LOGO JUMPSCARE"]
const firstImageSet = ['../../../images/worldbuilding/cosmology/dimensionality/soySauceBucket.png', '../../../images/deicidiumLogo.svg']
var firstIndex = 0

imageDesc1.innerText = firstTextSet[firstIndex]
imageSlide1.src = firstImageSet[firstIndex]
firstImageIndexDisplays[firstIndex].classList.add('selected')

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

*/