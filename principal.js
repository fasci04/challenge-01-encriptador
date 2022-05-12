const origen = document.querySelector("#ingreso");
const salida = document.querySelector("#resultado");


function btencriptar(){
    
    if (origen.value != "" && validar(origen.value)){
         const textoconvertido= encriptar(origen.value);
        salida.textContent=textoconvertido;
        recuadro2();
        document.querySelector('#ingreso').value = "";
    } else{
        recuadro1();
    }
}

var matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function encriptar(abc){
    for (let i = 0; i < matrizCodigo.length; i++){
        if ( abc.includes(matrizCodigo[i][0])){
            abc = abc.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return abc;
}

function btdesencriptar(){
    if (origen.value != "" && validar(origen.value)){
        const textoconvertido= desencriptar(origen.value);
        salida.textContent=textoconvertido;
        recuadro2();
        document.querySelector('#ingreso').value = "";
    } else{
        recuadro1();
    }
}

function desencriptar(abc){
    abc = abc.replaceAll('ai','a') .replaceAll('enter','e') .replaceAll('imes','i') .replaceAll('ober','o') .replaceAll('ufat','u');
    return abc;
}

function recuadro2(){
    document.querySelector('#visible').style.display = 'none';
    document.querySelector('#oculto').style.display = 'block';
}

function recuadro1(){
    document.querySelector('#visible').style.display = 'block';
    document.querySelector('#oculto').style.display = 'none';
}

function copiar(){
   origen.value = salida.innerHTML;
   salida.innerHTML="";
}

function validar(origen){
   
    for (let i=0; i < origen.length; i++){
        if (((origen[i].charCodeAt(0)<97) || (origen[i].charCodeAt(0)>122)) && origen[i].charCodeAt(0)!=32) {
            alert("Ingreso caracteres no validos, recuerde que tiene que ir en minuscula y sin acentos");
            return false;
        }   
    } 
    return true;
}