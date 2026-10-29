
const boutonCommencer = document.getElementById("commencer");

boutonCommencer.addEventListener("click", function () {
    const carte = document.querySelector(".carte");

    carte.innerHTML = `
        <div class="symbole">♡</div>

        <p class="sous-titre">NOTRE PETIT MONDE</p>

        <h1>Que souhaites-tu faire ?</h1>

        <p class="description">
            Choisissez votre façon de partager un moment à deux.
        </p>

        <button id="modeSecret">🤫 Réponses secrètes</button>
        <br><br>

        <button id="modeDiscussion">💬 Discussion</button>
        <br><br>

        <button id="modeDefi">✨ Défis en couple</button>

        <p class="signature">Juste toi et moi ✨</p>
    `;

    document.getElementById("modeSecret").addEventListener("click", function () {
        alert("Le mode Réponses secrètes arrive bientôt ! 💜");
    });

    document.getElementById("modeDiscussion").addEventListener("click", function () {
        alert("Le mode Discussion arrive bientôt ! 💜");
    });

    document.getElementById("modeDefi").addEventListener("click", function () {
        alert("Le mode Défis en couple arrive bientôt ! 💜");
    });
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("./sw.js")
            .then(function () {
                console.log("Service worker enregistré !");
            })
            .catch(function (erreur) {
                console.error("Erreur du service worker :", erreur);
            });
    });
}

