const imageSlide1 = document.querySelector('.docImage.firstImage')
const imageContainer1 = document.querySelector('.imgWrapper .firstImage')
const imageIndexDisplays = document.getElementsByClassName('displayIndicatorFirst')
const imageDesc1 = document.querySelector('.imgDesc1')
const firstTextSet = ["(1) The almighty soy sauce bucket.", "(2) Watch how the image box size changes smoooothly", "(3) Weird logo that I made."]
const firstImageSet = ['../../../images/worldbuilding/cosmology/dimensionality/soySauceBucket.png', '../../../images/worldbuilding/cosmology/dimensionality/manBreaksChains.jpg', '../../../images/deicidiumLogo.svg']
var firstIndex = 0

imageDesc1.innerText = firstTextSet[firstIndex]
imageSlide1.src = firstImageSet[firstIndex]
imageIndexDisplays[firstIndex].classList.add('selected')

function switchImageForward(x) {
    for (let i = 0; i < (imageIndexDisplays.length); i++) {
        imageIndexDisplays[i].classList.remove('selected')
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

        imageSlide1.parentNode.setAttribute('style', `height:${imageSlide1.offsetHeight + 3}px;`)

        imageIndexDisplays[firstIndex].classList.add('selected')
        imageSlide1.classList.remove('hiding')
        imageDesc1.classList.remove('hiding')
    }, 200)
}


function switchImageBack(x) {
    for (let i = 0; i < (imageIndexDisplays.length); i++) {
        imageIndexDisplays[i].classList.remove('selected')
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

        imageSlide1.parentNode.setAttribute('style', `height:${imageSlide1.offsetHeight + 3}px;`)

        imageIndexDisplays[firstIndex].classList.add('selected')
        imageSlide1.classList.remove('hiding')
        imageDesc1.classList.remove('hiding')
    }, 200)
}
