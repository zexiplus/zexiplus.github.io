document.addEventListener('DOMContentLoaded', function () {
    var arr = Array.apply(null, document.querySelectorAll('.box'))
    arr.forEach(function (item) {
        item.addEventListener('click', function () {
            window.location.href = item.getAttribute('data-src')
        })
    })
    
})