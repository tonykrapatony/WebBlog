document.querySelector('.burger').addEventListener('click', function(){
    let elDisp = window.getComputedStyle(document.querySelector('.nav__menu')).display;
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


$(document).ready(function(){
    // slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        speed: 300,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                infinite: true,
                dots: true
            }
            },
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

let firstName, secondName, phone, email, text, newWin;

function closeWin(a){
    a.close();
}
function sendMessage(){
    newWin = window.open("https://api.telegram.org/bot1529048680:AAGrVc1FwHn5itl5N3MS472eth_ibfrfG1w/sendMessage?chat_id=-648756262&text="+firstName+"          "+secondName+"          "+phone+"          "+email+"          "+text, "_blank");
    setTimeout(closeWin, 100, newWin);
}

function validation(){
    firstName = document.querySelector('.form-firstname').value,
    secondName = document.querySelector('.form-secondname').value,
    phone = document.querySelector('.form-phone').value,
    email = document.querySelector('.form-email').value,
    text = document.querySelector('.form-text').value;
    let namePattern = /[A-z]|[a-z]/;
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


let show_btn = document.querySelectorAll('.slide-btn');
for(let i=0; i<=show_btn.length; i++){
    show_btn[i].addEventListener('click', function(){
        document.querySelector('.article-wrap').style.display = 'block';
    })
    document.querySelector('.close-btn').addEventListener('click', function(){
        document.querySelector('.article-wrap').style.display = 'none';
    })
}


