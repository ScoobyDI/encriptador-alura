const llaves = [        //creo un array que contiene otros arryas para saber q elementos van a cambiar
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
];

function encriptarMsj (mensaje){                    //Función para encriptar
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j < llaves.length; j++){
            if (letra === llaves[j][0]){            //si es igual a una letra del indice 0 del array llaves
                encriptada = llaves[j][1];          //lo va a cambiar por su indice 1 del array
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
};

function desencriptarMsj (mensaje){                 //Función para desencriptar
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++){                                //Va a rrecorrer todos los arryas
        let regex = new RegExp(llaves[i][1],'g');                           //
        mensajeDesencriptado = mensajeDesencriptado.replace(regex,llaves[i][0])
    }
    return mensajeDesencriptado;
};