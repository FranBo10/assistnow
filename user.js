  const user = [{
    id: "1",
    image: "../img/avatars/avatar_5.jpg",
    name: "Frank Vega",
    age: 35,
    femme: false ,
    rating: 4,
    hobbies: ["jeux", "promenade", "cuisine"],
    disponibilite: ""

},

{
    id: "2",
    image: "../img/avatars/avatar_1.jpg",
    name: "Julietta Venegas",
    age: 35,
    femme: true ,
    rating: 4,
    hobbies: ["jeux", "chanter", "sport"],
    disponibilite: ""

},

{
    id: "3",
    image: "../img/avatars/avatar_10.jpg",
    name: "Julien Monet",
    age: 23,
    femme: false ,
    rating: 4,
    hobbies: ["jeux", "chanter", "sport"],
    disponibilite: ""

},

{
    id: "4",
    image: "../img/avatars/avatar_9.jpg",
    name: "Victor Schlekick",
    age: 28,
    femme: false ,
    rating: 4,
    hobbies: ["jeux", "chanter", "sport"],
    disponibilite: ""

},

{
    id: "5",
    image: "../img/avatars/avatar_8.jpg",
    name: "Marianna Lopez",
    age: 25,
    femme: true ,
    rating: 5,
    hobbies: ["jeux", "danse", "sport"],
    disponibilite: ""

},
]

const tbody = document.querySelector('tbody');

user.forEach(obj => {
  const row = document.createElement('tr');
  row.style.textAlign = 'center';

  const idCell = document.createElement('td');  
  idCell.style.display = 'flex';
  idCell.style.marginTop = '10px'
  idCell.textContent = obj.id;

  const imageCell = document.createElement('td');
  const img = document.createElement('img');
  img.src = obj.image;
  img.style.width = '50px'
  imageCell.appendChild(img);

  const nameCell = document.createElement('td');
  nameCell.style.display = 'flex';
  nameCell.style.marginTop = '10px'
  nameCell.textContent = obj.name;

  const ageCell = document.createElement('td');
  ageCell.style.marginTop = '10px'
  ageCell.textContent = obj.age;

  const femmeCell = document.createElement('td');
  femmeCell.style.marginTop = '10px'
  femmeCell.textContent = obj.femme ? 'Femme' : 'Homme';

  const hobbiesCell = document.createElement('td');
  hobbiesCell.style.marginTop = '10px'
  hobbiesCell.textContent = obj.hobbies.join(', ');

  const ratingCell = document.createElement('td');
  idCell.style.marginTop = '10px'
  ratingCell.textContent = obj.rating;

  const disponibiliteCell = document.createElement('td');
  disponibiliteCell.style.marginTop = '10px'
  disponibiliteCell.innerHTML = obj.disponibilite += `<button id="btnVerificar" class="btn-custom" type="button"
  data-bs-toggle="modal"
  data-bs-target="#modalCalendar">Vérifier disponibilité</button>`;

  row.appendChild(idCell);
  row.appendChild(imageCell);
  row.appendChild(nameCell);
  row.appendChild(ageCell);
  row.appendChild(femmeCell);
  row.appendChild(hobbiesCell);
  row.appendChild(ratingCell);
  row.appendChild(disponibiliteCell);

  tbody.appendChild(row);
});

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'));

// obtener el botón
const btnVerificar = document.getElementById("btnVerificar");

// agregar un evento al botón
btnVerificar.addEventListener("click", () => {
  // crear el objeto calendario
  const calendar = $("<div>").fullCalendar({
    defaultView: "month",
    defaultDate: new Date(),
    editable: false,
    eventLimit: true,
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay"
    },
    events: [
      // aquí agregarías los eventos que quieras mostrar en el calendario
      {
        title: "Disponible",
        start: new Date()
      }
    ]
  });

  // mostrar el modal con el calendario
  $("#modalCalendario").modal("show");

  // agregar el calendario al modal
  $("#modalCalendario .modal-body").html(calendar);
});


