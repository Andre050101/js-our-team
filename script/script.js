const initialMembers = [
    {
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];


function loadTeamMembers() {
    // Verifica se ci sono membri nel LocalStorage
    let members = JSON.parse(localStorage.getItem("initialMembers"));

    console.log("Contenuto di `LocalStorage` all'inizio:", members); // Debug

    // Se `LocalStorage` è vuoto, salva i membri iniziali e ricarica
    if (!members || members.length === 0) {
        console.log("LocalStorage è vuoto, inserisco `initialMembers`"); // Debug
        members = initialMembers;
        localStorage.setItem("initialMembers", JSON.stringify(members));
    }

    // Aggiorna il contenitore delle card
    const teamContainer = document.getElementById("card-container");
    teamContainer.innerHTML = '';

    // Genera le card per ogni membro
    members.forEach(member => {
        teamContainer.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card-custom">
                    <div class="width30per">
                        <img src="${member.img}" alt="${member.name}" class="img-fluid rounded">
                    </div>
                    <div class="width70per ps-3">
                        <h2>${member.name}</h2>
                        <p>${member.role}</p>
                        <a href="mailto:${member.email}">${member.email}</a>
                    </div>
                </div>
            </div>
        `;
    });

    console.log("Membri caricati nel DOM:", members); // Debug
}

// Carica i membri al caricamento della pagina
window.onload = loadTeamMembers;