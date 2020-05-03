let left = 0;
let polosa = document.getElementById('alltours');
document.getElementById('slider-left').onclick = sliderLeft;

function sliderLeft() {
    left = left - 370
    if (left < -1110) {
        document.getElementById('slider-left').style.cursor = 'default';

        left = -1110;
    } else {
        document.getElementById('slider-left').style.cursor = 'pointer';
    }
    polosa.style.left = left + 'px';

}
document.getElementById('slider-right').onclick = sliderRight;

function sliderRight() {
    left = left + 370;
    if (left > 0) {
        document.getElementById('slider-right').style.cursor = 'default';

        left = 0;
    } else {
        document.getElementById('slider-right').style.cursor = 'pointer';
    }
    polosa.style.left = left + 'px';
}
let img = document.getElementById('img');
let title = document.getElementById('title');
let date = document.getElementById('date');
document.getElementById('clickme2').onclick = news2;

function news2() {

    title.innerHTML = 'Фестиваль Alpika Freeski Аlpindustria Fest Красная Поляна 13-16 февраля';
    img.innerHTML = '<img  src="fest.jpg" alt="">';
    date.innerHTML = '10 января, 2020';
    document.getElementById('clickme2').style.background = '#061B28';
    document.getElementById('clickme1').style.background = 'transparent';
    document.getElementById('clickme3').style.background = 'transparent';
    document.getElementById('clickme4').style.background = 'transparent';
    document.getElementById('clickme5').style.background = 'transparent';
    document.getElementById('txt2').style.color = '#FCFCFC';
    document.getElementById('txt1').style.color = '#061B28';
    document.getElementById('txt3').style.color = '#061B28';
    document.getElementById('txt4').style.color = '#061B28';
    document.getElementById('txt5').style.color = '#061B28';
}
document.getElementById('clickme1').onclick = news1;
 document.getElementById('clickme1').style.background = '#061B28';
document.getElementById('txt1').style.color = '#FCFCFC';
function news1() {
    title.innerHTML = 'Как подготовиться к первому восхождению на вершину';
    img.innerHTML = '<img  src="news.jpg" alt="">';
    date.innerHTML = '15 января, 2020';
    document.getElementById('clickme1').style.background = '#061B28';
    document.getElementById('clickme2').style.background = 'transparent';
    document.getElementById('clickme5').style.background = 'transparent';
    document.getElementById('clickme3').style.background = 'transparent';
    document.getElementById('clickme4').style.background = 'transparent';
    document.getElementById('txt1').style.color = '#FCFCFC';
    document.getElementById('txt2').style.color = '#061B28';
    document.getElementById('txt3').style.color = '#061B28';
    document.getElementById('txt4').style.color = '#061B28';
    document.getElementById('txt5').style.color = '#061B28';
}
document.getElementById('clickme3').onclick = news3;

function news3() {
    title.innerHTML = 'Особенности альпинизма на Камчатке. Все о Ключевой Сопке';
    img.innerHTML = '<img  src="sopka.jpg" alt="">';
    date.innerHTML = '20 декабря, 2019';
    document.getElementById('clickme3').style.background = '#061B28';
    document.getElementById('clickme1').style.background = 'transparent';
    document.getElementById('clickme2').style.background = 'transparent';
    document.getElementById('clickme5').style.background = 'transparent';
    document.getElementById('clickme4').style.background = 'transparent';
    document.getElementById('txt3').style.color = '#FCFCFC';
    document.getElementById('txt1').style.color = '#061B28';
    document.getElementById('txt2').style.color = '#061B28';
    document.getElementById('txt4').style.color = '#061B28';
    document.getElementById('txt5').style.color = '#061B28';
}
document.getElementById('clickme4').onclick = news4;

function news4() {
    title.innerHTML = 'Что происходит с человеком на высоте более 3000 метров?';
    img.innerHTML = '<img  src="3000m.jpg" alt="">';
    date.innerHTML = '15 декабря, 2019';
    document.getElementById('clickme4').style.background = '#061B28';
    document.getElementById('clickme1').style.background = 'transparent';
    document.getElementById('clickme2').style.background = 'transparent';
    document.getElementById('clickme3').style.background = 'transparent';
    document.getElementById('clickme5').style.background = 'transparent';
    document.getElementById('txt4').style.color = '#FCFCFC';
    document.getElementById('txt1').style.color = '#061B28';
    document.getElementById('txt3').style.color = '#061B28';
    document.getElementById('txt2').style.color = '#061B28';
    document.getElementById('txt5').style.color = '#061B28';
}
document.getElementById('clickme5').onclick = news5;

function news5() {
    title.innerHTML = 'Что происходит с человеком на высоте более 3000 метров?';
    img.innerHTML = '<img  src="3000m.jpg" alt="">';
    date.innerHTML = '15 декабря, 2019';
    document.getElementById('clickme5').style.background = '#061B28';
    document.getElementById('clickme1').style.background = 'transparent';
    document.getElementById('clickme2').style.background = 'transparent';
    document.getElementById('clickme3').style.background = 'transparent';
    document.getElementById('clickme4').style.background = 'transparent';
    document.getElementById('txt5').style.color = '#FCFCFC';
    document.getElementById('txt1').style.color = '#061B28';
    document.getElementById('txt3').style.color = '#061B28';
    document.getElementById('txt4').style.color = '#061B28';
    document.getElementById('txt2').style.color = '#061B28';
}
