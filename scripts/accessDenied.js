const popupContent = document.querySelector('.accessDeniedFoldContent')
const popupContentWrapper = document.querySelector('.accessDeniedFoldWrapper')

const question1Query = document.querySelector('.securityAnswer.first')
const passwordQuery = document.querySelector('.securityAnswer.second')
const validQ1answers = ['subconscious complex a', "amentic inc's soul", 'God(?)', 'the akrilith', "idiocy's soul", "machian's research", 'footnote 6a', 'the notwithstanding clause']

const errorPopupBackground = document.querySelector('.errorBackground')
const padlockSVG = document.querySelector('#padlockSVG')

var credentialsValid = false

function closePopup () {
    popupContent.classList.remove('open')
    popupContentWrapper.classList.remove('open')
}

const firstAnswer = document.querySelector('.securityAnswer.first')

function checkCredentials() {
    console.log('debug strings are cool!1!!!1')
}

//function name is null and void
function openCredentialPopup() {
    console.log(question1Query)
    console.log(passwordQuery)

    let tempCheck = false
    for (let i = 0; i < validQ1answers.length; i++) {
        if (validQ1answers[i].toLowerCase() === question1Query.value.toLowerCase()) {
            tempCheck = true
        }
    }

    if (passwordQuery.value === '' && tempCheck === true) {
        console.log('this would mean a success')
    }

    document.querySelector('.settingLabel.credentials').innerHTML = 'Credentials: <strong>configured</strong>'
}

const responsiveMessage = document.querySelector('.denyOrAccept')

function attemptUnlock() {
    if (credentialsValid) {
        console.log('your credentials be validing')
    } else {
        responsiveMessage.classList.remove('hiding')
        responsiveMessage.classList.remove('shown')

        responsiveMessage.classList.add('shown')

        setTimeout(() => {
            responsiveMessage.classList.add('hiding')
        }, 500)

        setTimeout(()=>{
            responsiveMessage.classList.remove('hiding')
        }, 250)
    }
}

errorPopupBackground.addEventListener('click', function (event) {
    let selection = window.getSelection()
    if (event.target === event.currentTarget && selection.type != 'Range') {
        attemptUnlock()
    }
})
padlockSVG.addEventListener('click', attemptUnlock)