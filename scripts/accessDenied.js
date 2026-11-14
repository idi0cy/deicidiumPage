const popupContent = document.querySelector('.accessDeniedFoldContent')
const popupContentWrapper = document.querySelector('.accessDeniedFoldWrapper')

function closePopup () {
    popupContent.classList.remove('open')
    popupContentWrapper.classList.remove('open')
}
