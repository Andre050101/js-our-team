const teamMembers = [
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

/*CARD HTML:

    

*/

/*Contenitore card:*/
const container = document.getElementById("card-container");

/*Iterazione sull'array per creare card per ciascun elemento:*/
teamMembers.forEach(member => {
    //Creazione elemento card
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');

    //Contenuto card:
    card.innerHTML = `
    <div class="card-custom">
        <div class="width30per">
            <img src="${member.img}" alt="${member.name}">
        </div>
        <div class="width70per ps-3">
            <h2>${member.name}</h2>
            <p>${member.role}</p>
            <a href="mailto:${member.email}">${member.email}</a>
        </div>
    </div>
    `;

    //Aggiungo card a container:
    container.appendChild(card);
});


