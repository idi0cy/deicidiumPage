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

const allSections = document.querySelectorAll('.creditsSection')

var autoIndex = 0

/* No clue how these things work */
// const allSeeingEye1 = new IntersectionObserver(callback, allSections[0])

/* Try to make this scalable so I don't have to rewrite it like eight times */
function autoRollCredits() {
    console.log(allSections)
}

