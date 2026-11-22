
var userIgnore = false
var timePassed = false

setTimeout(() => {
    timePassed = true
}, 1000)

function checkPermissions() {
    if (localStorage.getItem('spoilersDisabled')) {
        if (localStorage.getItem('spoilersDisabled') === 'yes') {
            userIgnore = true
        } else {
            userIgnore = false
        }
    } else {
        localStorage.setItem('spoilersDisabled', 'yes')
    }
}

const spoilerBackgroundReal = document.querySelector('.spoilerAlertBackground')
const padLockNumber = document.querySelector('.padLockNumberWrap')

function closeSpoilerPopup() {
    if (timePassed) {
        spoilerBackgroundReal.style.animation = 'none'
        spoilerBackgroundReal.offsetHeight
        spoilerBackgroundReal.style.animation = null
        spoilerBackgroundReal.style.animationDirection = 'reverse'

        padLockNumber.style.animation = 'none'
        padLockNumber.offsetHeight
        padLockNumber.style.animation = null
        padLockNumber.style.animationDirection = 'reverse'

        spoilerBackgroundReal.classList.remove('open')

        setTimeout(() => {
            spoilerBackground.remove()
            padLockNumber.remove()
            console.log('removed')
        }, 1000)
    }
}

checkPermissions()

const spoilerBackground = document.querySelector('.spoilerAlertBackground2')

spoilerBackground.addEventListener('click', function (event) {
    let selection = window.getSelection()
    if (event.target === event.currentTarget && selection.type != 'Range') {
        closeSpoilerPopup()
    }
})
