const inputNom = document.getElementById('nom-get');
const formulaire = document.getElementById('mon-formulaire');
const inputLettre = document.getElementById('get-lettre');
const formulaireLettre = document.getElementById('formulaire-lettre');
let mot_pendu = "test";
mot_pendu = mot_pendu.toUpperCase();
let tab_pendu = mot_pendu.split('');
let mot_trouver = [];
let erreur = 0;
let pendu = [
    `
    _|_
    |   |______
    |          |
    |__________|
    `,
    `
    |
    |
    |
    |
    |
    _|_
    |   |______
    |          |
    |__________|
    `,
    `
    ____
    |
    |
    |
    |
    |
    _|_
    |   |______
    |          |
    |__________|
    `,
    `
    ____
    |    |
    |
    |
    |
    |
    _|_
    |   |______
    |          |
    |__________|
    `,
    `
    ____
    |    |
    |    o
    |
    |
    |
    _|_
    |   |______
    |          |
    |__________|
    `,
    `
    ____
    |    |
    |    o
    |   /|\\
    |
    |
    _|_
    |   |______
    |          |
    |__________|
    `,
    `
    ____
    |    |
    |    o
    |   /|\\
    |    |
    |
    _|_
    |   |______
    |          |
    |__________|
    `,
    `
    ____
    |    |
    |    o
    |   /|\\
    |    |
    |   / \\
    _|_
    |   |______
    |          |
    |__________|
    `
];
let lettre_essayer = [];


inputNom.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const nom = inputNom.value;
        console.log('Nom:', nom);
        formulaire.style.display = 'none';
        document.getElementById('afficher-nom').innerHTML = '<h1>Bonjour : </h1>' + nom;
    }
});

formulaire.addEventListener('submit', function(event) {
    event.preventDefault();
});

for (let i = 0; i < mot_pendu.length; i++) {
    mot_trouver[i] = "_";
}

function afficherMotsTrouves() {
    document.getElementById('mot-trouver').textContent = mot_trouver.join(' ');
}

inputLettre.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const lettre = inputLettre.value.toUpperCase();
        console.log('Lettre:', lettre);
        inputLettre.value = '';
        verifierLettre(lettre)
    }
})

formulaire.addEventListener('submit', function(event) {
    event.preventDefault();
})

function afficherLettresEssayees() {
    document.getElementById('lettre-essayées').textContent =
        'Lettres essayées : ' + lettre_essayer.join(', ');
}

function verifierLettre(lettre) {
    if (/^[a-zA-Z]$/.test(lettre)) {
        document.getElementById('erreur-sign').innerHTML = "";
        let lettreTrouvee = false;
        for (let i = 0; i < mot_pendu.length; i++) {
            if (lettre === mot_pendu[i]) {
                mot_trouver[i] = lettre;
                lettreTrouvee = true;
            }
        }
        if (!lettreTrouvee) {
            erreur++;
            lettre_essayer.push(lettre);
            afficherLettresEssayees()
            document.getElementById('pendu').innerHTML = pendu[erreur];
        }
        afficherMotsTrouves();
        if (mot_trouver.join('') === mot_pendu || erreur >= 8) {
            finDuJeu();
        }
    } else {
        document.getElementById('erreur-sign').innerHTML = "merci de renseigner une seuls lettre";
    }
}

function finDuJeu() {
    let message;
    if (mot_trouver.join('') === mot_pendu) {
        message = 'Félicitations, vous avez trouvé le mot !';
    } else {
        message = 'Désolé, vous avez atteint le nombre maximum d\'erreurs, le mot était : ' + mot_pendu;
    }

    localStorage.setItem('penduResult', message);

    setTimeout(function () {
        window.location.href = 'rejouer.html';
    }, 1000);
}


afficherMotsTrouves()