//Cool new code

// #region | image and text sets
const firstImageSet = [
    "../../../images/worldbuilding/cosmology/dimensionality/soySauceBucket.png",
    "../../../images/deicidiumLogo.svg",
    "../../../images/worldbuilding/cosmology/dimensionality/manBreaksChains.jpg"
]
const firstTextSet = ["this is description one",
    "will my new code actually work all of a sudden?",
    "Lorum ipsum that's the only part I know"
]

const secondImageSet = [
    "../../../images/worldbuilding/cosmology/dimensionality/manBreaksChains.jpg",
    "../../../images/worldbuilding/cosmology/dimensionality/manBreaksChains.jpg",
    "../../../images/worldbuilding/cosmology/dimensionality/manBreaksChains.jpg"
]
const secondTextSet = [
    "This is the second text set",
    "I hope the system is actually scalable",
    "third text option!"
]

const thirdImageSet = [
    "../../../images/worldbuilding/cosmology/dimensionality/manBreaksChains.jpg",
    "../../../images/worldbuilding/cosmology/dimensionality/soySauceBucket.png",
]
const thirdTextSet = [
    "Oh my god they made it a trio", 
    "it's almost as if I need more things to scale for futureproofing..."
]
// #endregion

var firstIndex = 0
var secondIndex = 0
var thirdIndex = 0

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

function updateImageAndDesc (whichOne, image, desc) {
    if (whichOne === 'First') {
        desc.innerText = firstTextSet[firstIndex]
        image.src = firstImageSet[firstIndex]
    } else if (whichOne === 'Second') {
        desc.innerText = secondTextSet[secondIndex]
        image.src = secondImageSet[secondIndex]
    } else if (whichOne === 'Third') {
        desc.innerText = thirdTextSet[thirdIndex]
        image.src = thirdImageSet[thirdIndex]
    }
}

function returnIndexToUse(whichOne) {
    if (whichOne === 'First') {
        return firstIndex
    } else if (whichOne === 'Second') {
        return secondIndex
    } else if (whichOne === 'Third') {
        return thirdIndex
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

    targetImageDesc.classList.add('hiding')
    targetImage.classList.add('hiding')

    targetImage.parentNode.setAttribute('style', `height:${(targetImage.offsetHeight + 3)}px;`)
    
    setTimeout(() => {
        updateImageAndDesc(index, targetImage, targetImageDesc)
    }, 200)
    
    targetIndexDisplays[returnIndexToUse(index)].classList.add('selected')
}

const allImages = document.querySelectorAll(".docImage")
const allDescriptions = document.querySelectorAll(".desc")

const allTextSets = [firstTextSet, secondTextSet, thirdTextSet]
const allImageSets = [firstImageSet, secondImageSet, thirdImageSet]

// #region | Declaring all images

const image1 = document.querySelector('.docImage.firstImage')
const image2 = document.querySelector('.docImage.secondImage')

// #endregion

function reveal() {
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].parentNode.setAttribute('style', `height:${(allImages[i].offsetHeight + 3)}px;`)
        allImages[i].classList.remove('hiding')
        allDescriptions[i].classList.remove('hiding')
    }
}


image1.onload = function () {
    reveal()
}
image2.onload = function () {
    reveal()
}

const indicator1_1 = document.querySelector(".displayIndicatorFirst")
const indicator2_1 = document.querySelector(".displayIndicatorSecond")

function initialImageSet () {
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].src = allImageSets[i][0]
        allDescriptions[i].innerText = allTextSets[i][0]
    }
    indicator1_1.classList.add("selected")
    indicator2_1.classList.add("selected")
}
initialImageSet()