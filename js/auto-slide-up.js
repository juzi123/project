let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
findCloseAndRemoveOffset()
//窗口滚动
window.addEventListener('scroll', function () {
    findCloseAndRemoveOffset()
})

function findCloseAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    //let changeTag = 0
    for (let i = 0; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothers = li.parentNode.children
    for (let i = 0; i < brothers.length; i++) {
        brothers[i].classList.remove('highLight')
    }
    li.classList.add('highLight')
    specialTags[minIndex].classList.remove('offset')
}