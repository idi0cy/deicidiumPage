
function collapseSection(selector) {
    let targetSectionHeader = document.querySelector(`.docCollapseTrigger.${selector}`)
    let targetSectionArrow = document.querySelector(`.docCollapseArrow.${selector}`)

    if (targetSectionHeader.classList.contains('open')) {
        targetSectionHeader.classList.remove('open')
        targetSectionArrow.classList.remove('open')
    } else {
        targetSectionHeader.classList.add('open')
        targetSectionArrow.classList.add('open')
    }
}
