
function collapseSection(selector) {
    let targetSectionHeader = document.querySelector(`.docCollapseTrigger.${selector}`)
    let targetSectionArrow = document.querySelector(`.docCollapseArrow.${selector}`)
    let targetContent = document.querySelector(`.docCollapseContent.${selector}`)
    if (targetSectionHeader.classList.contains('open')) {
        targetSectionHeader.classList.remove('open')
        targetSectionArrow.classList.remove('open')
        targetContent.classList.remove('open')
    } else {
        targetSectionHeader.classList.add('open')
        targetSectionArrow.classList.add('open')
        targetContent.classList.add('open')
    }
}

function collapseMiniSection(selector) {
    let targetMiniSection = document.querySelector(`.collapseBoxHeader.${selector}`)
    let targetContent = document.querySelector(`.collapseMiniContent.${selector}`)
    if (targetMiniSection.classList.contains('open')) {
        targetContent.classList.remove('open')
        targetMiniSection.classList.remove('open')
    } else {
        targetContent.classList.add('open')
        targetMiniSection.classList.add('open')
    }
}

//this might never actually work ngl
function pleaseworkFunction(selector) {
    let theTarget = document.querySelector(`.pleaseworkContent.${selector}`)
    let allOfThem = document.querySelectorAll('.pleaseworkContent')

    if (theTarget.classList.contains('open')) {
        theTarget.style.height = `0px`;
        theTarget.classList.remove('open')
    } else {
        theTarget.style.height = `${theTarget.scrollHeight}px`;
        theTarget.classList.add('open')
    }
    allOfThem.forEach((container) => {
        if (container.classList.contains('open')) {
            container.style.height = `${container.scrollHeight}px`;
        }
    })
}