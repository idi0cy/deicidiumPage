
var userIgnore = false

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



function closePopup() {
    console.log('happening')
}

checkPermissions()
