document.getElementById("addMemberForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Prendi i dati dal form
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const email = document.getElementById("email").value;
    const img = document.getElementById("image").value;

    // Crea un nuovo oggetto membro
    const newMember = { name, role, email, img };

    // Recupera i membri esistenti da LocalStorage
    let members = JSON.parse(localStorage.getItem("initialMembers")) || [];

    console.log("Membri presenti prima dell'aggiunta:", members); // Debug

    // Aggiungi il nuovo membro e salva in LocalStorage
    members.push(newMember);
    localStorage.setItem("initialMembers", JSON.stringify(members));

    console.log("Membri presenti dopo l'aggiunta:", members); // Debug

    // Reindirizza alla pagina principale
    window.location.href = "index.html";
});