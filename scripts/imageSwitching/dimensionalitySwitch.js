const imageSlide1 = document.querySelector('.docImage.firstImage')
const imageContainer1 = document.querySelector('.imgWrapper .firstImage')
console.log(imageSlide1)
const imageDesc1 = document.querySelector('.imgDesc1')
const firstTextSet = ["(1) The almighty soy sauce bucket.", "(2) If this is playing it should be working"]
const firstImageSet = ['../../../images/worldbuilding/cosmology/soySauceBucket.png', '../../../images/deicidiumlogo.svg']
var firstIndex = 0

imageDesc1.innerText = firstTextSet[firstIndex]
imageSlide1 = firstImageSet[firstIndex]

function switchImageForward(x) {
    console.log(x)
    if (firstIndex === (firstTextSet.length - 1)) {
        firstIndex = 0
    } else {
        firstIndex += 1
    }
    imageDesc1.innerText = firstTextSet[firstIndex]

    imageSlide1.src = firstImageSet[firstIndex]
}

function switchImageBack(x) {
    console.log(x)
    if (firstIndex === 0) {
        firstIndex = (firstTextSet.length - 1)
    } else {
        firstIndex -= 1
    }
    imageDesc1.innerText = firstTextSet[firstIndex]

    imageSlide1.src = firstImageSet[firstIndex]
}
