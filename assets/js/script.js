function size () {
    document.getElementById("size2").style.visibility = 'visible'
}
function switches () {
    window.location.href = 'https://t.me/RandomSnop'
}
$('a[href^="#up"]').click(function(){
    let anchor = $(this).attr('href'); // #2
    $('html, body').animate({ // #3
    scrollTop: $(anchor).offset().top // #4
    }, 600); // #5
    });
    const check = document.querySelector('.main');
    check.addEventListener('click', event => {
    menu__toggle.checked = false;
    });
    $(window).on('scroll', (e) => {
        if (window.scrollY > 50) {
            document.getElementsByClassName("header")[0].classList.add("change");
        } else {
            document.getElementsByClassName("header")[0].classList.remove("change");
        }
    })
function right () { 
    document.getElementById("extra").style.display = "block"
    document.getElementById("base").style.display = "none"
}
function left () { 
    document.getElementById("extra").style.display = "none"
    document.getElementById("base").style.display = "block"
}
AOS.init()