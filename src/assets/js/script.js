$(function(){

    $('.secaoSobreGuarapel__carrosselServicos').owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        nav: false,
        dots: true,
        center: true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                mouseDrag: true,
                touchDrag: true,
            },
            600:{
                items:2,
               
                mouseDrag: true,
                touchDrag: true,
            },
            950:{
                center: false,
                items:4,
                loop: true,
                mouseDrag: true,
                touchDrag: true,
            },
            1200:{
                center: false,
                loop: true,
                items:4,
                margin: 70,
                mouseDrag: true,
                touchDrag: true,
            },
        },
    });

    $('.secaoCertificacoes_carrossel').owlCarousel({
        items: 1,
        loop: false,
        margin: 0,
        nav: false,
        dots: false,
        center: false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                mouseDrag: true,
                touchDrag: true,
            },
            600:{
                items:2,
               
                mouseDrag: true,
                touchDrag: true,
            },
            950:{
                items:3,
               
                mouseDrag: true,
                touchDrag: true,
            },
            1200:{
                items:4,
                margin: 0,
                mouseDrag: true,
                touchDrag: true,
            },
        },
    });

    $('.secaoGaleria__carrossel').owlCarousel({
        items: 2,
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        center: true,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:false,
        responsive: {
            0:{
                items: 2,
            },
            768:{
                items: 4,
            },
        },
    });

    if(window.innerWidth > 720){
        $('.carrosselProdutos').addClass("owl-carousel owl-theme")
        $('.carrosselProdutos').owlCarousel({
            items: 3,
            loop: false,
            margin: 10,
            nav: false,
            dots: true,
            center: false,
            mouseDrag: true,
            touchDrag: true,
            autoplay:true,
            autoplayHoverPause:true,
            smartSpeed:2500,
            autoplaySpeed:true,
            slideTransition: 'linear',
            responsive: {
                0:{
                    items:1
                },
                445:{
                    items:1
                },
                768:{
                    items:3
                },
            },
        });
    }

   
});



const btnMenu = document.getElementById("btnMenu")
const menu = document.querySelector("header ul")
const body = document.querySelector("body")
btnMenu.addEventListener("click", ()=>{
    btnMenu.classList.toggle("btnMenuOpen")
    menu.classList.toggle("menuOpen")
    body.classList.toggle("scrollStop")
})

const liServicos        = document.querySelectorAll(".secaoServicos ul li")
const tituloCaixa       = document.querySelector(".sombra h2")
const descricaoCaixa    = document.querySelector(".sombra p")
const imgCaixa          = document.querySelector(".sombra img")
const backgroundCaixa   = document.querySelector(".sombra")

liServicos.forEach((li) => li.addEventListener("click",function(){
    const title     = this.getAttribute("data-title")
    const decricao  = this.getAttribute("data-descricao")
    const img       = this.getAttribute("data-img")

    tituloCaixa.innerText = title
    descricaoCaixa.innerText = decricao
    imgCaixa.src = img
    backgroundCaixa.style.backgroundImg = `url(${img})`
 
}))