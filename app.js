let numeroMaximoPosible = 50;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible)+1;
let numeroUsuario;
let intentos = 1;
let palabraVeces = 'intento';


console.log(numeroSecreto); //comentado para no desplegar numero en consola

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número por favor, entre 1 y ${numeroMaximoPosible}:`));

    console.log(numeroUsuario);

    if (numeroUsuario === numeroSecreto) {
        alert(`Acertaste, el número secreto es ${numeroSecreto}. Lo lograste en ${intentos} ${intentos == 1? 'vez' : 'veces' }.`);
    } else {
        if (numeroUsuario < numeroSecreto) {
        alert('El número es muy bajo');
        } else {
        alert('El número es muy alto');
        }
        intentos++; // Incrementa intentos después de cada interacción
        palabraVeces = 'intentos';
        console.log(intentos);
        if (intentos > 5) {
            alert('Lo siento, has perdido. El número secreto era'+ ' ' + numeroSecreto);
            break;
        }
    }
    
    
}
/*
Juego de adivinar el número secreto generado aleatoriamente
*/
