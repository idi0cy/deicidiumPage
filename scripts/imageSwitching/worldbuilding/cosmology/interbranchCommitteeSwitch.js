
//now will this actually be an improvement?
//Yeah I think this will definitely be an improvement

const image1 = document.querySelector('.docImage.firstImage')
//const image2 = document.querySelector('.docImage.firstImage')

var firstIndex = 0
//var secondIndex = 0

var targetImage
var targetDesc
var targetIndexDisplays
var targetIndex

function switchImage(orientation, index) {
    switch (index) {
        case "first":
            targetImage = image1
            break
        case "second":
            targetImage = "there isn't a second one"
            break
        case "third":
            targetImage = "there isn't a third one"
            break
        default:
            console.log("this should never be happening")
    }

    console.log(targetImage)
}
