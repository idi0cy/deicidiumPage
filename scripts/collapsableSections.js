function foldSection_type2(selector) {
    let foldingContent = document.querySelector(`.foldingContent.${selector}`)
    let contentFoldWrapper = document.querySelector(`.foldingContent.${selector} > .contentFoldWrapper`)
    let foldingArrow = document.querySelector(`.foldingArrowContainer.${selector}`)

    if (foldingContent.classList.contains('open')) {
        foldingContent.classList.remove('open')
        contentFoldWrapper.classList.remove('open')
        foldingArrow.classList.remove('open')
    } else {
        foldingContent.classList.add('open')
        contentFoldWrapper.classList.add('open')
        foldingArrow.classList.add('open')
    }
}