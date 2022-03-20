$(document).ready(function(){
    // slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    });

    // news
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=69ccb163c2624d7ab8698ab9f1e1b8a6';

    $.getJSON( url, function( data ) {
        console.log(data);
        for(let key in data.articles){
            let title = data.articles[key].title;
            let description = ""
            if (data.articles[key].description != null) {
                description = data.articles[key].description;
            } else {
                description = "";
            }
            let img = "";
            if (data.articles[key].urlToImage != null) {
                img = data.articles[key].urlToImage;
            } else {
                img = `./img/tech${getRandomArbitrary(1, 3)}.jpg`;
            }
            let result = `<div class="news-item"><h2>${title}</h2><p>${description}</p><img src="${img}" alt="News image"><a href="${data.articles[key].url}">More</a></div>`;
            console.log(result);
            $('.news').append(result);
        }
      });
});

function getRandomArbitrary(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

let show_btn = document.querySelectorAll('.slide-btn');
for(let i=0; i<=show_btn.length; i++){
    show_btn[i].addEventListener('click', function(){
        document.querySelector('.article-wrap').style.display = 'block';
    })
    document.querySelector('.close-btn').addEventListener('click', function(){
        document.querySelector('.article-wrap').style.display = 'none';
    })
}

