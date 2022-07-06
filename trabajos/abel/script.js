$(()=>{

    comenzar();

    $('#cargarImagen').on('change',function(event){
        $('header').css('background-image','url('+URL.createObjectURL(event.target.files[0]))+')';
    })

    function comenzar(){
        const objetoTraido = JSON.parse(localStorage.getItem("miObjeto"));
        if(objetoTraido!=null){
            $('h1').text(objetoTraido.nombre);
            $('#mensaje').text(objetoTraido.mensaje);
        }else{
            $('#cargarImagen').hide();
        }
    }


})