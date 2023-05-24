$('document').ready(function(){
    $('#btn1').click(function(){
        $('#bg1').addClass('animate__fadeOut');
		var audio = $('.song')[0];
        audio.play(); 
        $('.happy').addClass('ov1');
        $('.meg1').addClass('ov1');
        $('.meg2').addClass('ov1');
        $('.meg3').addClass('ov1');
        $('.meg4').addClass('ov1');
        $('.meg5').addClass('ov1');
        $('.meg6').addClass('ov1');
        $('.meg7').addClass('ov1');
        $('.meg8').addClass('ov1');
        $('.meg9').addClass('ov1');
        $('.meg10').addClass('ov1');
        $('.meg11').addClass('ov1');
        $('.meg12').addClass('ov1');
        $('.text1').addClass('ov1');
        $('.text2').addClass('ov1');
        $('.img-1').addClass('ov1');
        $('.img-2').addClass('ov1');

        setTimeout(function () {
            $('#bg1').addClass('hide');
        }, 1200);
        
        //DINO 
        setTimeout(function () {
            $('.img-1').addClass('animate__fadeInLeft');
            $('.img-1').removeClass('ov1');
        }, 800);
        setTimeout(function () {
            $('.img-2').addClass('animate__fadeInRight');
            $('.img-2').removeClass('ov1');
        }, 800);
        
        //icon terbang
        setTimeout(function () {
            $('.meg5').addClass('animate__fadeInTopLeft');
            $('.meg5').removeClass('ov1');
        }, 4500);

        setTimeout(function () {
            $('.meg6').addClass('animate__fadeInTopRight');
            $('.meg6').removeClass('ov1');
        }, 4800);

        // text happy
        setTimeout(function () {
            $('.happy').addClass('animate__fadeInDown');
            $('.happy').removeClass('ov1');
        }, 1000);

        // KUE
        setTimeout(function () {
            $('.meg1').addClass('animate__fadeIn');
            $('.meg1').removeClass('ov1');
        }, 2500);

        // icon kue
        setTimeout(function () {
            $('.meg2').addClass('animate__fadeIn');
            $('.meg2').removeClass('ov1');
        }, 3500);

        setTimeout(function () {
            $('.meg3').addClass('animate__fadeIn');
            $('.meg3').removeClass('ov1');
        }, 3000);

        setTimeout(function () {
            $('.meg4').addClass('animate__fadeIn');
            $('.meg4').removeClass('ov1');
        }, 4000);

        //icon bawah
        
        setTimeout(function () {
            $('.meg7').addClass('animate__fadeIn');
            $('.meg7').removeClass('ov1');
            $('.meg7').addClass('bounce-3');
        }, 5000);

        setTimeout(function () {
            $('.meg8').addClass('animate__fadeIn');
            $('.meg8').removeClass('ov1');
            $('.meg8').addClass('bounce-3');
        }, 5400);

        setTimeout(function () {
            $('.meg9').addClass('animate__fadeIn');
            $('.meg9').removeClass('ov1');
            $('.meg9').addClass('bounce-3');
        }, 5800);

        setTimeout(function () {
            $('.meg10').addClass('animate__fadeIn');
            $('.meg10').removeClass('ov1');
            $('.meg10').addClass('bounce-3');
        }, 6200);

        setTimeout(function () {
            $('.meg11').addClass('animate__fadeIn');
            $('.meg11').removeClass('ov1');
            $('.meg11').addClass('bounce-3');
        }, 6600);

        setTimeout(function () {
            $('.meg12').addClass('animate__fadeIn');
            $('.meg12').removeClass('ov1');
            $('.meg12').addClass('bounce-3');
        }, 6900);

        //CARD
        
        setTimeout(function () {
            $('.text1').addClass('animate__fadeInUp');
            $('.text1').removeClass('ov1');
        }, 8200);
        setTimeout(function () {
            $('.text2').removeClass('ov1');
        }, 8600);

    });

});
var particles = document.getElementById("particles");
var border = ["50%","0%"];
var colors = ["#FF6B6B","#FFE66D","#4472CA"];

function createParticle(event){
    var x = event.clientX;
    var y = event.clientY;
    var color = Math.floor(Math.random() * 3);

    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.marginLeft = x+"px";
    div.style.marginTop = y+"px";
    div.style.width = "10px";
    div.style.borderTop = "5px solid transparent";
    div.style.borderRight = "5px solid transparent";
    div.style.borderLeft = "5px solid transparent";
    div.style.borderBottom = "10px solid "+colors[color];
    div.style.animation = "move 5s ease-in infinite";
    particles.appendChild(div);
    setTimeout(
        function(){
            div.remove();
        }
    , 5000);
}

function getParticles(){
    var np = document.documentElement.clientWidth / 40;
    particles.innerHTML = "";
    for (var i = 0; i < np; i++) {
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        var rndw = Math.floor(Math.random() * w ) + 1;
        var rndh = Math.floor(Math.random() * h ) + 1;
        var widthpt = Math.floor(Math.random() * 8) + 5;
        var opty = Math.floor(Math.random() * 4) + 1;
        var anima = Math.floor(Math.random() * 12) + 8;
        var bdr = Math.floor(Math.random() * 2);
        var color = Math.floor(Math.random() * 3);

        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.marginLeft = rndw+"px";
        div.style.marginTop = rndh+"px";
        div.style.width = widthpt+"px";
        div.style.height = widthpt+"px";
        div.style.opacity = opty;
        div.style.backgroundColor = colors[color];
        div.style.borderRadius = border[bdr];
        div.style.animation = "move "+anima+"s ease-in infinite";
        particles.appendChild(div);
    }
}

function main(event){
    getParticles();
    particles.addEventListener("click", createParticle);
}

window.addEventListener("resize", main);
window.addEventListener("load", main);
