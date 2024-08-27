
const llaves = [        //creo un array que contiene otros arryas para saber q elementos van a cambiar
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
]

const textArea = document.getElementById("texto");
const imgMunieco = document.getElementById("imgNoText");
const titleResult = document.querySelector(".titleMsj");
const textResult = document.querySelector("#textoMsj");
const btnCopiar = document.querySelector("#btnCopiar");

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
}

function desencriptar (mensaje){                 //Función para desencriptar
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++){                                //Va a rrecorrer todos los arryas
        let regex = new RegExp(llaves[i][1],'g');                           //
        mensajeDesencriptado = mensajeDesencriptado.replace(regex,llaves[i][0])
    }
    return mensajeDesencriptado;
};

document.getElementById("texto").addEventListener("input", (e) => {
    console.log(e.target.value);
    imgMunieco.style.display = "none";
    titleResult.textContent = "Capturando mensaje ...";
    textResult.textContent = "";

    titleResult.classList.remove("hidden");         //para otro texto
    btnCopiar.classList.add("hidden");
});

function encriptarTexto(){
    let text = textArea.value.toLowerCase();
    console.log("Valor del textarea antes de encriptar:", text); // Muestra el valor antes de encriptar
    let mensajeEncriptado = encriptar(text);
    textResult.textContent = mensajeEncriptado;
    titleResult.classList.add("hidden");
    btnCopiar.classList.remove("hidden");
}

function desencriptarTexto(){
    let text = textArea.value.toLowerCase();
    console.log("Valor del textarea antes de desencriptar:", text); // Muestra el valor antes de desencriptar
    let mensajeDesencriptado = desencriptar(text);
    textResult.textContent = mensajeDesencriptado;
    titleResult.classList.add("hidden");
    btnCopiar.classList.remove("hidden");
}

function copiarTexto (){
    let textCopy=textResult.textContent;
    navigator.clipboard.writeText(textCopy).then(()=>{
        console.log(`Se copio el texto: ${textCopy}`)
    })
} 




