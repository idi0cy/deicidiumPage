//Everything to do with rolling those credits!

function rollCredits(index) {
    let theContent = document.querySelector(`.creditsContent.${index}`)
    let theContentWrapper = document.querySelector(`.creditContentWrapper.${index}`)

    if (theContent.classList.contains('open')) {
        theContent.classList.remove('open')
        theContentWrapper.classList.remove('open')
    } else {
        theContent.classList.add('open')
        theContentWrapper.classList.add('open')
    }
}

