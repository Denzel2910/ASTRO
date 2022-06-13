(function(){

    var propScroll ={

        posicion: window.pageYOffset,
        scroll_suave: document.getElementsByClassName('scroll-suave'),
        volver_arriba: document.getElementsByClassName('volver-arriba'),
        destino: null,
        seccion_distancia: null,
        intervalo: null
        
        }
        
        
        
        
        var metScrol = {
        
            inicio: function () {
        
                for (var i =0; i < propScroll.scroll_suave.length; i++) {
                    propScroll.scroll_suave[i].addEventListener('click', metScrol.moverse);
                }
        
                for(var i = 0; i < propScroll.volver_arriba.length; i++) {
                    propScroll.volver_arriba[i].addEventListener('click', metScrol.subir);
                }
            },
        
            moverse: function (e) {
                e.preventDefault ();
                propScroll.destino = this.getAttribute('href');
                propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop;
        
                propScroll.posicion = window.pageYOffset;
                propScroll.intervalo = setInterval(function() {
                    if (propScroll.posicion < propScroll.seccion_distancia) {
        
                    propScroll.posicion += 30;
                        if(propScroll.posicion >= propScroll.seccion_distancia){
                            clearInterval(propScroll.intervalo);
                        }
                    } else {
                        propScroll.posicion -= 30;
                    }
                    
                    window.scrollTo(0, propScroll.posicion);
                },15);
        
        
            }
        }
        
        metScrol.inicio();

}())

