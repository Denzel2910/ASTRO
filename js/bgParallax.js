(function(){

//Objeto con propiedades de Parallax

var propParallax = {

    section: document.querySelector('.parallax'),
    recorrido: null,
    limite:null

}




//Objeto con Métodos de Parallax

var metParallax = {

    inicio: function () {
        window.addEventListener('scroll', metParallax.scroollParallax)
    },

    scroollParallax: function () {
        propParallax.recorrido = window.pageYOffset;
        propParallax.limite = propParallax.section.offsetTop + propParallax.section.offsetHeight;
      
        if ( propParallax.recorrido >  propParallax.section.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite ) {

            propParallax.section.style.backgroundPositionY = (propParallax.recorrido - propParallax.section.offsetTop) / 1.5 + 'px';
        }
        else{
            propParallax.section.style.backgroundPositionY = 0
        }
    }
    
}

metParallax.inicio();


}())

