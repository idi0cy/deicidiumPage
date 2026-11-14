const popupContent = document.querySelector('.accessDeniedFoldContent')
const popupContentWrapper = document.querySelector('.accessDeniedFoldWrapper')


function closePopup () {
    popupContent.classList.remove('open')
    popupContentWrapper.classList.remove('open')
}

const firstAnswer = document.querySelector('.securityAnswer.first')

function checkCredentials() {
    console.log('debug strings are cool!1!!!1')
}

function openCredentialPopup() {
    console.log('even greater debug string')
}
