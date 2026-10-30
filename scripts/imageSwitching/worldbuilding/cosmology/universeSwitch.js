//Cool new code

function doMathAgain(a, b, orientation) {
    if (orientation === '+') {
        return (a + b)
    } else if (orientation === '-') {
        return (a - b)
    } else {
        return 0
    }
}

const firstTextSet = ["this is description one", "will my new code actually work all of a sudden?"]
const secondTextSet = ["This is the second text set", "I hope the system is actually scalable"]
const thirdtextSet = ["Oh my god they made it a trio", "it's almost as if I need more things to scale for futureproofing..."]

var firstIndex = 0
var secondIndex = 0
var thirdIndex = 0

//Uncoded indexing territory

//End of that territory

function updateIndex (whichOne, orientation) {
    if (whichOne === 'First') {
        if (orientation === '+') {
            if (firstIndex === (firstTextSet.length - 1)) {
                firstIndex = 0
            } else {
                firstIndex += 1
            }
        } else {
            if (firstIndex === 0) {
                firstIndex = (firstTextSet.length - 1)
            } else {
                firstIndex -= 1
            }
        }
    } else if (whichOne === 'Second') {
        if (orientation === '+') {
            if (secondIndex === (secondTextSet.length - 1)) {
                secondIndex = 0
            } else {
                secondIndex += 1
            }
        } else {
            if (secondIndex === 0) {
                secondIndex = (secondTextSet.length - 1)
            } else {
                secondIndex -= 1
            }
        }
    } else if (whichOne === 'Third') {
        if (orientation === '+') {
            if (thirdIndex === (thirdTextSet.length - 1)) {
                thirdIndex = 0
            } else {
                thirdIndex += 1
            }
        } else {
            if (thirdIndex === 0) {
                thirdIndex = (thirdTextSet.length - 1)
            } else {
                thirdIndex -= 1
            }
        }
    }
}

//ensure that in this function index has its first letter capitalized
function switchImage(index, orientation, actualIndex) {
    let upperDex = index
    let lowerDex = index.toLowerCase()

    let targetImage = document.querySelector(`.docImage.${lowerDex}Image`)
    let targetIndexDisplays = document.getElementsByClassName(`displayIndicator${upperDex}`)
    let targetImageDesc = document.querySelector(`.imgDesc${actualIndex}`)

    for (let i = 0; i < (targetIndexDisplays.length); i++) {
        targetIndexDisplays[i].classList.remove('selected')
    }

    updateIndex(index, orientation)

    /* targetImageDesc.classList.add('hiding')
    targetImage.classList.add('hiding') */
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