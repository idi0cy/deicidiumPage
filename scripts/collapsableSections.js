
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
