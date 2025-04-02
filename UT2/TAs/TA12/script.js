function generatePassword(tamaño){
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const alfabetoMayus = alfabeto.toUpperCase();
    const numeros = '0123456789';
    const especiales = '!@#$%^&*()_+[]{}|;:,.<>?';
    const todos = alfabeto+alfabetoMayus+numeros+especiales;
    let contrasena = "";
    if(tamaño < 8){
        console.log("El tamaño debe ser mayor a 8")
        return;
    }
    else{
        contrasena += alfabetoMayus.charAt(Math.floor(Math.random() * alfabetoMayus.length));
        contrasena += alfabetoMayus.charAt(Math.floor(Math.random() * alfabetoMayus.length));
        contrasena += alfabetoMayus.charAt(Math.floor(Math.random() * alfabetoMayus.length));

        contrasena += alfabeto.charAt(Math.floor(Math.random() * alfabeto.length));
        
        contrasena += numeros.charAt(Math.floor(Math.random() * numeros.length));

        contrasena += especiales.charAt(Math.floor(Math.random() * especiales.length));

        //hasta aca metimos en la contra 3mayus, un min, un num y un especial. totalmente al azar entre los parametros dados.

        for(let i=contrasena.length; i< tamaño; i++){
            contrasena += todos.charAt(Math.floor(Math.random() * todos.length));
        }
        //aca rellenamos con cualquier caracter hasta el tamaño pedido

        
    }
    
    contrasena = contrasena.split('').sort(() => Math.random() - 0.5).join('');
    // desordenamos al azar cada caracter de la contraseña para que no repita el patron en orden de que fueron agregados
    console.log(contrasena);
    return contrasena;
}

// generatePassword(8);
// generatePassword(12);