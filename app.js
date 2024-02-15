//Los valores debem hacer match la posicion 1 de las vocales se cambiara por 
// la posicion 1 de vocalEncripta, y asi sucesivamente 
let v_vocales = ['e','i','a','o','u'];
let v_vocalEncripta = ["enter","imes","ai","ober","ufat"];

//Funcion encargada de de obtener el mensaje del usuario 
function getMensajeUsuario(){
  return document.getElementById('mensajeUsuario').value;
}

//Validando que no sea una cadena vacia 
function mensajeValido(p_mensajeUsuario){
  v_hayMensaje = document.getElementById('hayMensaje');
  v_noHayMensaje = document.getElementById('noHayMensaje');

  if(p_mensajeUsuario == ''){
    v_noHayMensaje.style.display = 'inline';
    v_hayMensaje.style.display = 'none';
    return 0;
  }
  else{
    v_noHayMensaje.style.display = 'none';
    v_hayMensaje.style.display = 'inline';
    return 1;
  }
}

//Funcion encargada de encriptar el mensaje
function encriptaMensaje(){
  let v_mensaDesencrip = getMensajeUsuario();
  let v_esValido = mensajeValido(v_mensaDesencrip);

  if(v_esValido == 1){
    //Recorriendo el arreglo para sustiuir las palabras 
    for (let i = 0; i < v_vocales.length; i++) {
      v_mensaDesencrip = v_mensaDesencrip.replace(new RegExp(v_vocales[i],'g'),
        v_vocalEncripta[i]);
    }
    //Mandamos el mensaje para que el usuario lo vea en pantalla
    imprimeMensaje(v_mensaDesencrip);
  }
}

//Funcion encargada de desencriptar el mensaje 
function desencriptaMensaje(){
  let v_mensaEncrip = getMensajeUsuario();
  let v_esValido = mensajeValido(v_mensaEncrip);

  if( v_esValido == 1){
    for (let i = 0; i < v_vocales.length; i++) {
      v_mensaEncrip = v_mensaEncrip.replace(new RegExp(v_vocalEncripta[i],'g'),
        v_vocales[i]);
    }
    //Mandamos el mensaje para que el usuario lo vea en pantalla
    imprimeMensaje(v_mensaEncrip);
  }
}

//Funcion encargada de mostrar el mensaje encriptado o desencriptado 
function imprimeMensaje(p_mensajeFinal){
  document.querySelector('#mensajeUsuario').value='';
  document.querySelector('#mensajeEncriptado').value=p_mensajeFinal;
}

//Funcion encargada de copiar el mensaje encriptado o desencriptado al portapapeles
function copiarMensaje(){
  let v_copiarTexto = document.querySelector('#mensajeEncriptado');
  v_copiarTexto.select();
  document.execCommand("copy");
}