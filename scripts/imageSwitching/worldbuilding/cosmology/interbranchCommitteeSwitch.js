
// #region | image and text sets

const firstImageSet = ['wow its the first invalid link', 'second one', 'fooooourth', 'dont you dare doubt my counting capacities', 'thiiiiiiiiird']
const firstTextSet = ['very creative placeholder', 'yipeeeeeeeeeeees', 'okay well', 'it needs', 'five of these']

// #endregion


const image1 = document.querySelector('.docImage.firstImage')
//const image2 = document.querySelector('.docImage.firstImage')

var firstIndex = 0
var secondIndex = 0 //currently vestigial

///Index displays
const firstIndexDisplays = document.querySelectorAll('.displayIndicatorFirst')

///Image descriptions
const imageDesc1 = document.querySelector('.imgDesc1')

var targetImage
var targetDesc
var targetIndexDisplays
var targetIndex
var targetTextSet
var targetImageSet

function updateTargetIndex(index, orientation, targetTextSet) {
    if (orientation === '+') {
        if (index === (targetTextSet.length - 1)) {
            return 0
        } else {
            return (index + 1)
        }
    } else {
        if (index === 0) {
            return (targetTextSet.length - 1)
        } else {
            return (index - 1)
        }
    }
}

function switchImage(orientation, index) {
    switch (index) {
        case "first":
            targetImage = image1
            targetIndexDisplays = firstIndexDisplays
            targetDesc = imageDesc1
            targetTextSet = firstTextSet
            targetImageSet = firstImageSet

            firstIndex = updateTargetIndex(firstIndex, orientation, targetTextSet)

            targetIndex = firstIndex
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

    console.log(targetIndex)
}
