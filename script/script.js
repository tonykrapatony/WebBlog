// burger button and show/hide menu
let burger = document.querySelector('.burger'),
    burgItem1 = document.querySelector('.burger div');
burger.addEventListener('click', function(){
    let elDisp = window.getComputedStyle(document.querySelector('.nav__menu')).display;
    if (!burger.classList.contains('burger-anim1') && !burger.classList.contains('burger-anim2')){
        burger.classList.add('burger-anim1');
        burgItem1.style.display = 'none';
    } else if (burger.classList.contains('burger-anim1') && !burger.classList.contains('burger-anim2')){
        burger.classList.remove('burger-anim1');
        burger.classList.add('burger-anim2');
        let foo = () => burgItem1.style.display = 'block';
        setTimeout(foo, 2500);
    } else {
        burgItem1.style.display = 'none';
        burger.classList.add('burger-anim1');
        burger.classList.remove('burger-anim2');
    }
    if (elDisp === 'none') {
        document.querySelector('.nav').style.animation = 'bgToBig 2s ease-in-out forwards';
        document.querySelector('.nav__menu').style.display = 'flex';
        document.querySelector('.nav__menu').style.animation = 'showMenu 6s ease-in-out forwards';
    } else {
        document.querySelector('.nav').style.animation = 'bgToSmall 2s ease-in-out forwards';
        document.querySelector('.nav__menu').style.animation = 'hideMenu 2s ease-in-out forwards';
        function hideMenu(){
            document.querySelector('.nav__menu').style.display = 'none';
        }
        setTimeout(hideMenu, 2000);
    }
});
// slider
$(document).ready(function(){
    // slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
            breakpoint: 426,
            settings: {
                dots: false
            }
            }
        ]
    });
});

function getRandomArbitrary(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
} 
// show starwars characters
let result;
function showChar() {
    let ep = document.getElementById('ep');
    let ep_num = ep.value;
    const url = `https://swapi.dev/api/people/?page=${ep_num}`;  
    $.getJSON( url, function( data ) {
        for(let key in data.results){
            let name = data.results[key].name;
            let height = data.results[key].height;
            let mass = data.results[key].mass;
            let gender = data.results[key].gender;
            let char = `<div class="sw-item"><h2>${name}</h2><p>Height: ${height}</p><p>Mass: ${mass}</p><p>Gender: ${gender}</p></div>`;
            result += char;
            $('.sw').html(result);
        }
    });
};
document.querySelector('.show-char').addEventListener('click', function(){
    if (result != "") {
        result = "";
        console.log(result);
        showChar();
    } else {
        showChar();
    }
});

// 
let firstName, secondName, phone, email, text, newWin, url;
function closeWin(a){
    a.close();
}
function sendMessage(){
    url = "https://api.telegram.org/bot1529048680:AAGrVc1FwHn5itl5N3MS472eth_ibfrfG1w/sendMessage?chat_id=-648756262&text="+firstName+"        "+secondName+"        "+phone+"        "+email+"        "+text;
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.send(); 
}

function validation(){
    firstName = document.querySelector('.form-firstname').value,
    secondName = document.querySelector('.form-secondname').value,
    phone = document.querySelector('.form-phone').value,
    email = document.querySelector('.form-email').value,
    text = document.querySelector('.form-text').value;
    let namePattern = /[A-z]|[a-z]|[А-Я]|[а-я]/;
        phonePattern = /[^\d]/;
        emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (firstName === ""){
        alert("Enter your first name");
    } else if (!firstName.match(namePattern)){
        alert("Enter your first name without numbers");
    } else if (secondName === ""){
        alert("Enter your second name");
    } else if (!secondName.match(namePattern)){
        alert("Enter your second name without numbers");
    } else if (phone === ""){
        alert("Enter your phone number");
    } else if (phone.match(phonePattern)){
        alert("Enter your phone with numbes only");
    } else if (email === ""){
        alert("Enter your email");
    } else if (!email.match(emailPattern)){
        alert("Enter your email@email.com");
    } else {
        sendMessage();
    }
}
document.querySelector('.form-button').addEventListener('click', function(){
    validation();
});

let checkbox = document.querySelector('.toggle-button'),
body = document.querySelector('body'),
    nav = document.querySelector('.nav'),
    navLogo = document.querySelector('.nav_logo img'),
    navLogoSpan = document.querySelector('.nav_logo span'),
    navMenu = document.querySelectorAll('.nav__menu-item'),
    toggleLight = document.querySelector('.toggleLight'),
    toggleDark = document.querySelector('.toggleDark'),
    swContainer = document.querySelector('.sw-container'),
    swSelect = document.querySelector('.episode select'),
    showCharT = document.querySelector('.show-char'),
    fbForm = document.querySelector('.fb-form'),
    gitLogo = document.querySelector('.git img'),
    linkedinLogo = document.querySelector('.linkedin img'),
    instLogo = document.querySelector('.inst img'),
    fbLogo = document.querySelector('.fb img'),
    burgerStick = document.querySelectorAll('.burger div');
function lightTheme() {
    body.classList.remove('bg-dark');
    body.classList.add('bg-light');
    body.classList.add('bg-light');
    nav.classList.remove('bg-dark');
    nav.classList.add('bg-light');
    navLogo.setAttribute('src', './img/logo2.png');
    navLogoSpan.classList.add('bg-light');
    navLogoSpan.classList.remove('bg-dark');
    navMenu.forEach(element => {
        element.classList.remove('bg-dark');
        element.classList.add('bg-light');
    });
    toggleLight.classList.add('disp-none');
    toggleDark.classList.remove('disp-none');
    swContainer.classList.remove('bg-dark');
    swContainer.classList.add('bg-light');
    swSelect.classList.remove('border-dark');
    swSelect.classList.add('border-light');
    showCharT.classList.remove('bg-dark');
    showCharT.classList.remove('border-dark');
    showCharT.classList.add('bg-light');
    showCharT.classList.add('border-light');
    fbForm.classList.remove('fb-form-dark');
    fbForm.classList.add('fb-form-light');
    gitLogo.setAttribute('src', './img/github_1.png');
    linkedinLogo.setAttribute('src', './img/linkedin_1.png');
    instLogo.setAttribute('src', './img/instagram_1.png');
    fbLogo.setAttribute('src', './img/facebook_1.png');
    burgerStick.forEach(el => {
        el.style.backgroundColor = 'rgb(12, 12, 12)';
    });
}

function darkTheme() {
    body.classList.remove('bg-light');
    body.classList.add('bg-dark');
    nav.classList.remove('bg-light');
    nav.classList.add('bg-dark');
    navLogo.setAttribute('src', './img/logo1.png');
    navLogoSpan.classList.add('bg-dark');
    navLogoSpan.classList.remove('bg-light');
    navMenu.forEach(element => {
        element.classList.add('bg-dark');
        element.classList.remove('bg-light');
    });
    toggleLight.classList.remove('disp-none');
    toggleDark.classList.add('disp-none');
    swContainer.classList.remove('bg-light');
    swContainer.classList.add('bg-dark');
    swSelect.classList.remove('border-light');
    swSelect.classList.add('border-dark');
    showCharT.classList.remove('bg-light');
    showCharT.classList.remove('border-light');
    showCharT.classList.add('bg-dark');
    showCharT.classList.add('border-dark');
    fbForm.classList.remove('fb-form-light');
    fbForm.classList.add('fb-form-dark');
    gitLogo.setAttribute('src', './img/github.png');
    linkedinLogo.setAttribute('src', './img/linkedin.png');
    instLogo.setAttribute('src', './img/instagram.png');
    fbLogo.setAttribute('src', './img/facebook.png');
    burgerStick.forEach(el => {
        el.style.backgroundColor = 'rgb(184, 205, 219)';
    });
}

checkbox.addEventListener('change', function() {
    if (this.checked) {
        lightTheme();
    } else {
        darkTheme();
    }
})
let show_btn = document.querySelectorAll('.slide-btn');
show_btn.forEach(element => {
    element.addEventListener('click', function(){
        document.querySelector('.article-wrap').style.display = 'block';
        document.body.style.overflow = 'hidden'
    })
    document.querySelector('.close-btn').addEventListener('click', function(){
        document.querySelector('.article-wrap').style.display = 'none';
        document.body.style.overflow = 'auto'
    })
});


