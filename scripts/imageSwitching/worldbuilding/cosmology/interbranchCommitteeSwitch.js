
// #region | image and text sets

const firstImageSet = [
    '../../../images/worldbuilding/cosmology/dimensionality/soySauceBucket.png',
    '../../../images/worldbuilding/cosmology/dimensionality/manBreaksChains.jpg',
    '../../../images/worldbuilding/cosmology/dimensionality/soySauceBucket.png',
    '../../../images/worldbuilding/cosmology/dimensionality/manBreaksChains.jpg',
    '../../../images/worldbuilding/cosmology/dimensionality/soySauceBucket.png'
]
const firstTextSet = ['very creative placeholder', 'yipeeeeeeeeeeees', 'okay well', 'it needs', 'five of these']

// #endregion


const image1 = document.querySelector('.docImage.firstImage')
//const image2 = document.querySelector('.docImage.firstImage')

var firstIndex = 0
var secondIndex = 0 //currently vestigial

///Index displays
const firstIndexDisplays = document.querySelectorAll('.displayIndicatorFirst')

///Image descriptions
const imageDesc1 = document.querySelector('.imgDesc1')

var targetImage
var targetDesc
var targetIndexDisplays
var targetIndex
var targetTextSet
var targetImageSet

function updateTargetIndex(index, orientation, targetTextSet) {
    if (orientation === '+') {
        if (index === (targetTextSet.length - 1)) {
            return 0
        } else {
            return (index + 1)
        }
    } else {
        if (index === 0) {
            return (targetTextSet.length - 1)
        } else {
            return (index - 1)
        }
    }
}

function updateContent(targetImage, targetDesc, index, imageSet, textSet) {
    targetImage.src = imageSet[index]
    targetDesc.innerText = textSet[index]
}

function switchImage(orientation, index) {
    switch (index) {
        case "first":
            targetImage = image1
            targetIndexDisplays = firstIndexDisplays
            targetDesc = imageDesc1
            targetTextSet = firstTextSet
            targetImageSet = firstImageSet

            firstIndex = updateTargetIndex(firstIndex, orientation, targetTextSet)

            targetIndex = firstIndex
            break
        
        case "second":
            //write much of the same logic over here
            targetImage = "there isn't a second one"
            break
        
        case "third":
            targetImage = "there isn't a third one"
            break
        
        default:
            console.log("this should never be happening")
    }

    for (let i = 0; i < (targetIndexDisplays.length); i++) {
        targetIndexDisplays[i].classList.remove('selected')
    }

    targetDesc.classList.add('hiding')
    targetImage.classList.add('hiding')

    targetImage.parentNode.setAttribute('style', `height:${(targetImage.offsetHeight + 3)}px;`)

    setTimeout (() => {
        updateContent(targetImage, targetDesc, targetIndex, targetImageSet, targetTextSet)
    }, 200)

    targetIndexDisplays[targetIndex].classList.add('selected')
}


const allImages = document.querySelectorAll('.docImage')
const allDescriptions = document.querySelectorAll('.desc')
const allImageSets = [firstImageSet]
const allTextSets = [firstTextSet]

function unHoudini() {
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].parentNode.setAttribute("style", `height:${(allImages[i].offsetHeight + 3)}px;`)
        allImages[i].classList.remove('hiding')
        allDescriptions[i].classList.remove('hiding')
    }
}

image1.onload = function () {
    unHoudini()
}

/* 
image2.onload = function () {
    unHoudini
}
*/

function initiate() {
    console.log("oh we're initiating")
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].src = allImageSets[i][0]
        allDescriptions.innerText = allTextSets[i][0]
    }
}

initiate()
