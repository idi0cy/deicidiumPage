const pageDocument = document.querySelector('.mainBody')
const allFootnotes = document.querySelectorAll('.footerListPoint')

function scrollToFootnote(footnote) {
    let targetFootnote = document.querySelector(`.${footnote}`)
    targetFootnote.scrollIntoView({
        inline:'center',
        block:'center'
    })

    allFootnotes.forEach((note) => {
        note.classList.remove("selectedFootnote")
    })
    targetFootnote.classList.add('selectedFootnote')
}

function focusFootnote (footnote) {
    allFootnotes.forEach((note) => {
        if (note != footnote.parentNode) {
            note.classList.remove("selectedFootnote")
        }
    })
    if (!footnote.parentNode.classList.contains('selectedFootnote')) {
        footnote.parentNode.classList.add('selectedFootnote')
    } else {
        footnote.parentNode.classList.remove('selectedFootnote')
    }
}
