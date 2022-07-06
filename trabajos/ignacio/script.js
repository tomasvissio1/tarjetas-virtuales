
$(()=>{
    let contador=0;
    const objeto={url:'',url2:'',url3:'',url4:'',url5:'',nombre:'',mensaje:''};

    cartel();

    function cartel(){
        $('#cartelOculto1').fadeIn(2000);
        $('.modal').fadeIn(2000);    
    };
    $('#editar').on('click',function(){
        $('#cartelOculto1').hide();
        $('#cartelOculto2').show();
    });
    $('.salirCartel').on('click',function(){
        $('#cartelOculto1').hide();
        $('#cartelOculto2').hide();
    }); 
    //labels para los botones de cargar imagenes
    $('#labelImagen1').on('click',function(){
        $("#cargarImagen1").trigger('click');
    }) 
     $('#labelImagen2').on('click',function(){
        $("#cargarImagen2").trigger('click');
    })
    $('#labelImagen3').on('click',function(){
        $("#cargarImagen3").trigger('click');
    }) 
     $('#labelImagen4').on('click',function(){
        $("#cargarImagen4").trigger('click');
    })
    $('#labelImagen5').on('click',function(){
        $("#cargarImagen5").trigger('click');
    })
    //cargar imagenes, una funcion para cada boton
    $('#cargarImagen1').on('change',function(event){
        contador++;
        objeto.url=URL.createObjectURL(event.target.files[0]);
        $('#labelImagen1').css({'background':'green','color':'white'}).text('listo!');
        // $('header').css('background-image','url('+URL.createObjectURL(event.target.files[0]))+')';
    })
     $('#cargarImagen2').on('change',function(event2){
        contador++;
        objeto.url2=URL.createObjectURL(event2.target.files[0]);
        $('#labelImagen2').css({'background':'green','color':'white'}).text('listo!');
        // $('header').css('background-image','url('+URL.createObjectURL(event.target.files[0]))+')';
    })  
    $('#cargarImagen3').on('change',function(event3){
        contador++;
        objeto.url3=URL.createObjectURL(event3.target.files[0]);
        $('#labelImagen3').css({'background':'green','color':'white'}).text('listo!');
        // $('header').css('background-image','url('+URL.createObjectURL(event.target.files[0]))+')';
    })
     $('#cargarImagen4').on('change',function(event4){
        contador++;
        objeto.url4=URL.createObjectURL(event4.target.files[0]);
        $('#labelImagen4').css({'background':'green','color':'white'}).text('listo!');
        // $('header').css('background-image','url('+URL.createObjectURL(event.target.files[0]))+')';
    })  
    $('#cargarImagen5').on('change',function(event5){
        contador++;
        objeto.url5=URL.createObjectURL(event5.target.files[0]);
        $('#labelImagen5').css({'background':'green','color':'white'}).text('listo!');
        // $('header').css('background-image','url('+URL.createObjectURL(event.target.files[0]))+')';
    })
    $('#confirmar').on('click',function(){
        if(contador>=5){
            $('header').css('background-image','url('+objeto.url+')');
        $('#img1').attr('src',objeto.url2);
        $('#img2').attr('src',objeto.url3);
        $('#img3').attr('src',objeto.url4);
        $('#img4').attr('src',objeto.url5);
        objeto.nombre = document.getElementById('nombre').value;
        objeto.mensaje = document.getElementById('mensaje').value;
        $('#nombreCambiar').text(objeto.nombre);
        $('#mensajeCambiar').text(objeto.mensaje);
        $('#cartelOculto2').hide();
        }else{
            alert('falta completar algun campo');
        }

        
    });



})