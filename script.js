$(()=>{
    let objeto = {nombre:'',mensaje:'',estilo:'',imagen:false};
    let estilo;

    /* $('#cargarImagen').on('change',function(event){
        $('header').css('background-image','url('+URL.createObjectURL(event.target.files[0]))+')';
    }); */
    
    localStorage.clear();

    $('#enviar').on('click',function(e){
        e.preventDefault();
        //nombre
        objeto.nombre = document.getElementById('nombre').value;

        //radio buttons
        const radioButtons = document.querySelectorAll('input[name="estilo"]');
        
        for (const radioButton of radioButtons) {
             if (radioButton.checked) {
                  estilo = radioButton.value;
                  break;
             }
        }
        //mensaje
        objeto.mensaje = document.getElementById('mensaje').value;

        //imagen
        objeto.imagen=true;

        guardar();
        redireccion();
        
    });

    function guardar(){
        const objetoJson = JSON.stringify(objeto);
        localStorage.setItem("miObjeto",objetoJson);    
    }
    function redireccion(){
        if(estilo=="1"){
            location.href ="trabajos/abel/abel.html";
        }else if(estilo=="2"){
            location.href ="trabajos/ana/ana.html";
        }else {
            location.href ="trabajos/ignacio/ignacio.html";
        }
    }


    //radio buttons
       
        

})