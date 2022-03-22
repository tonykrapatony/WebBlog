$(document).ready(function(){
    // slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
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

let firstName = document.querySelector('.form-firstname').value,
    secondName = document.querySelector('.form-secondname').value,
    phone = document.querySelector('.form-phone').value,
    email = document.querySelector('.form-email').value,
    text = document.querySelector('.form-text').value;

document.querySelector('.form-button').addEventListener('click', function(){
    formVal();
    let newWin = window.open("https://api.telegram.org/bot1529048680:AAGrVc1FwHn5itl5N3MS472eth_ibfrfG1w/sendMessage?chat_id=-648756262&text="+firstName+"          "+secondName+"          "+phone+"          "+email+"          "+text, "_blank");
    function closeWin(){
        newWin.close();
    }
    setTimeout(closeWin, 100);
})

// form validation

// function formVal(){
//     if (firstName === "") {
//         alert("Enter your name");
//     } else if (Number.isInteger(firstName)){
//         alert("It can not be a number");
//     } else {
//         return firstName
//     }
// }


let show_btn = document.querySelectorAll('.slide-btn');
for(let i=0; i<=show_btn.length; i++){
    show_btn[i].addEventListener('click', function(){
        document.querySelector('.article-wrap').style.display = 'block';
    })
    document.querySelector('.close-btn').addEventListener('click', function(){
        document.querySelector('.article-wrap').style.display = 'none';
    })
}


