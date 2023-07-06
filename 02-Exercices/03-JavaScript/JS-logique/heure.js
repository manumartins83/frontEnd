function lireHeure() {
    const heure = parseInt(prompt("Entrez l'heure (0-23) :"));
    const minutes = parseInt(prompt("Entrez les minutes (0-59) :"));
    const secondes = parseInt(prompt("Entrez les secondes (0-59) :"))
    return { heure, minutes, secondes };
}

function ajouterUneMinute(heure, minutes, secondes) {
    secondes++;

    if (secondes >= 60) {
        secondes = 0;
        minutes++;
    }

    if (minutes >= 60) {
        minutes = 0;
        heure++;
    }

    if (heure >= 24) {
        heure = 0;
    }

    return { heure, minutes, secondes };
}

function afficherHeureFutur(heure, minutes, secondes) {
    console.log(`Dans une minute, il sera ${heure} heure(s) ${minutes} minute(s) et ${secondes} seconde(s) `);
}

let { heure, minutes, secondes } = lireHeure();
let { heure: heureFutur, minutes: minutesFutur, secondes: secondesFutur } = ajouterUneMinute(heure, minutes, secondes);
afficherHeureFutur(heureFutur, minutesFutur, secondesFutur); 