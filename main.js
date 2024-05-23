function tocasom (seletoraudio) {
   const elemento = document.querySelector(seletoraudio);
   
        if (elemento && elemento.localName === 'audio'){
            elemento.play();
        }
        else{
            console.log('Tecla invalida');
        }
}
const listadeteclas = document.querySelectorAll('.tecla');

for (let contador=0;  contador < listadeteclas.length; contador++) {

    const tecla =listadeteclas[contador];
    const instrumento =tecla.classList[1];
        console.log(instrumento);
    const idaudio =`#som_${instrumento}`;
        console.log(idaudio);

        tecla.onclick = function() {
        tocasom(idaudio);
    }
        tecla.onkeydown = function(evento){
            if (evento.code === 'Space' || evento.code === 'Enter'){
                tecla.classList.add('ativa');
            }
           
        }

        tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
        }
}