
const llaves = [        //creo un array que contiene otros arryas para saber q elementos van a cambiar
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
];

function encriptar (mensaje){                    //Función para encriptar
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

function desencriptar (mensaje){                 //Función para desencriptar
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++){                                //Va a rrecorrer todos los arryas
        let regex = new RegExp(llaves[i][1],'g');                           //
        mensajeDesencriptado = mensajeDesencriptado.replace(regex,llaves[i][0])
    }
    return mensajeDesencriptado;
};

function encriptarTexto() {
    const textArea = document.getElementById("texto").value;
    console.log("Valor del textarea antes de encriptar:", textArea); // Muestra el valor antes de encriptar
    const mensajeEncriptado = encriptar(textArea);
    console.log("Mensaje encriptado:", mensajeEncriptado);
}

function desencriptarTexto() {
    const textArea = document.getElementById("texto").value;
    console.log("Valor del textarea antes de desencriptar:", textArea); // Muestra el valor antes de desencriptar
    const mensajeDesencriptado = desencriptar(textArea);
    console.log("Mensaje desencriptado:", mensajeDesencriptado);
}