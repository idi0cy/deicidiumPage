const popupContent = document.querySelector('.accessDeniedFoldContent')
const popupContentWrapper = document.querySelector('.accessDeniedFoldWrapper')

const question1Query = document.querySelector('.securityAnswer.first')
const passwordQuery = document.querySelector('.securityAnswer.second')
const validQ1answers = ['subconscious complex a', "amentic inc's soul", 'God(?)', 'the akrilith', "idiocy's soul", "machian's research", 'footnote 6a', 'the notwithstanding clause']

const errorPopupBackground = document.querySelector('.errorBackground')
const padlockSVG = document.querySelector('#padlockSVG')

const pageResponse = document.querySelector('.probablyJustSomeOneTimeUseTextOption')

const docText = document.querySelector('.docText')

var credentialsValid = false

function closePopup () {
    popupContent.classList.remove('open')
    popupContentWrapper.classList.remove('open')
}

const firstAnswer = document.querySelector('.securityAnswer.first')

//function name is null and void
function openCredentialPopup() {
    let tempCheck = false
    for (let i = 0; i < validQ1answers.length; i++) {
        if (validQ1answers[i].toLowerCase() === question1Query.value.toLowerCase()) {
            tempCheck = true
        }
    }

    if (passwordQuery.value === 'goodPassword' && tempCheck === true) {
        credentialsValid = true
        pageResponse.innerHTML = 'Page Response: <strong>GRANTED</strong>'
    } else {
        credentialsValid = false
        pageResponse.innerHTML = 'Page Response: <strong>DENIED</strong>'
    }

    document.querySelector('.settingLabel.credentials').innerHTML = 'Credentials: <strong>Configured</strong>'
}

const responsiveMessage = document.querySelector('.denyOrAccept')

function attemptUnlock() {
    if (credentialsValid) {
        responsiveMessage.innerText = 'GRANTED'
        if (!responsiveMessage.classList.contains('shown') && !responsiveMessage.classList.contains('hiding')) {
            responsiveMessage.classList.add('shown')
            setTimeout(() => {
                responsiveMessage.classList.add('hiding')
            }, 500)
            setTimeout(() => {
                responsiveMessage.classList.remove('hiding')
                responsiveMessage.classList.remove('shown')
            }, 1500)

            errorPopupBackground.style.animation = 'none'
            errorPopupBackground.offsetHeight
            errorPopupBackground.style.animation = null
            errorPopupBackground.style.animationDirection = 'reverse'

            setTimeout(() => {
                errorPopupBackground.remove()
            }, 2500)

            //code for removing the normal popup

            closePopup()

            docText.classList.remove('locked')
        }
    } else {
        responsiveMessage.innerText = 'DENIED'
        if (!responsiveMessage.classList.contains('shown') && !responsiveMessage.classList.contains('hiding')) {
            responsiveMessage.classList.add('shown')

            setTimeout(() => {
                responsiveMessage.classList.add('hiding')
            }, 500)

            setTimeout(() => {
                responsiveMessage.classList.remove('hiding')
                responsiveMessage.classList.remove('shown')
            }, 1500)
        }
    }
}

errorPopupBackground.addEventListener('click', function (event) {
    let selection = window.getSelection()
    if (event.target === event.currentTarget && selection.type != 'Range') {
        attemptUnlock()
    }
})
padlockSVG.addEventListener('click', attemptUnlock)

//Okay so I may or may not have decided to completely forget to upload all the screenshots I took onto my devlog
//moral of the story: don't be a waffle when it comes to doing things that you should definitely be doing
//you don't want to end up typing omments until you get some hackatime so you can write like a 1 minute devlog.