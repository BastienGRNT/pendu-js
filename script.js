const inputNom = document.getElementById('nom-get');
const formulaire = document.getElementById('mon-formulaire');

inputNom.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const nom = inputNom.value;
        console.log('Nom:', nom);
        formulaire.style.display = 'none';
        document.getElementById('afficher-nom').textContent = 'Bonjour : ' + nom;
    }
});

formulaire.addEventListener('submit', function(event) {
    event.preventDefault();
});