//BOM
let about = document.getElementById('about')
console.log(about.offsetTop);
window.addEventListener('scroll', function () {

    if (window.pageYOffset > about.offsetTop) {
        demo.style.position = 'fixed'
        demo.style.backgroundColor = '#09c'

    }
    else {
        demo.style.position = 'static'
        demo.style.backgroundColor = 'transparent'
    }
})