let liTags = document.querySelectorAll('nav.menu > ul > li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}
let aTags = document.querySelectorAll('nav.menu > ul > li > a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        //window.scrollTo(0, top - 80)
        var currentPostion = window.scrollY
        var targetPostion = top - 80;
        // var n = 30 //移动次数
        // var scrollTime = 500 / n  //每次移动的时间
        // var scrollSpace = (targetPostion - currentPostion)/n //每次移动的距离
        // var i = 0
        // var id = setInterval( ()=>{
        //     if(i===n){
        //         window.clearInterval(id)
        //         return
        //     }
        //     i = i + 1
        //     window.scrollTo(0, currentPostion + scrollSpace*i)
        // }, scrollTime)

        //Tween.js
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

        var s = targetPostion - currentPostion
        var t = Math.abs(s / 100) * 300
        if (t > 500) {
            t = 500
        }
        var coords = {
            y: currentPostion
        }; // Start at (0, 0)
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({
                y: targetPostion
            }, t) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })
            .start(); // Start the tween immediately.
    }
}