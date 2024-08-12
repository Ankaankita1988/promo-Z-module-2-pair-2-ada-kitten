"use strict";
const formAdd = document.querySelector('.js-new-form');
const cancelBtn = document.querySelector ('.js-cancel');
const btnAdd = document.querySelector ('.js-btn-add');
const btnCatAdd = document.querySelector ('.js_btnCat');
const searchButton = document.querySelector ('.js_button-search');
const input_search_desc = document.querySelector ('.js_in_search_desc');
const photoInput =document.querySelector('.js-photo');
const nameInput =document.querySelector('.js-name');
const raceInput =document.querySelector('.js-race');
const dscInput =document.querySelector('.js-description');

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio'.toUpperCase(),
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona'.toUpperCase(),
  desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño... hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de devicePixelRatio",
  race:"Sphynx"
};
const kittenData_3 = {
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  name: 'Cielo'.toUpperCase(),
  desc: " Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  race:"Maine Coon"
};

const list=document.querySelector('.js-list');
/* Agregar el código del li desde HTMl 
Repetir este para cada gatito*/
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenData_1.image}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenData_1.name}</h3>
  <h4 class="card_race">${kittenData_1.race}</h4>
  <p class="card_description">${kittenData_1.desc}</p>
</article>
</li>`;
const kittenTwo = `<li class="card">
            <img
              class="card_img"
              src="${kittenData_2.image}"
              alt="sphynx-cat"
            />
            <h3 class="card_title">${kittenData_2.name}</h3>
            <h4 class="card_race">${kittenData_2.race}</h4>
            <p class="card_description">${kittenData_2.desc} </p>
           </li>`;
const kittenThree= `<li class="card">
            <img
              class="card_img"
              src="${kittenData_3.image}"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${kittenData_3.name}</h3>
            <h4 class="card_race">${kittenData_3.race}</h4>
            <p class="card_description">${kittenData_3.desc} 
             </p>                   
             </li>`;
list.innerHTML= kittenOne + kittenTwo + kittenThree;

function showNewCatForm() {
  formAdd.classList.remove('collapsed');
}
function hideNewCatForm() {
  formAdd.classList.add('collapsed');
}

btnAdd.addEventListener ('click', (event) => {
  if (formAdd.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
 console.log (formAdd.classList.contains('collapsed'));
  // formAdd.classList.toggle("collapsed");
})

cancelBtn.addEventListener ('click', (event) =>{
  // console.log ('hola esto es cancelar');
  event.preventDefault();
  formAdd.classList.add ('collapsed');
})

const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  console.log (descrSearchText);
  list.innerHTML = '';
    if (kittenOne.includes(descrSearchText)) {
    list.innerHTML += kittenOne;
  }
  if (kittenTwo.includes(descrSearchText)) {
    list.innerHTML += kittenTwo;
  }
  if (kittenThree.includes(descrSearchText)) {
    list.innerHTML += kittenThree;
  }
};


searchButton.addEventListener("click", filterKitten);

function addNewKitten (event) {
  event.preventDefault ();
  const photoValue =photoInput.value;
  const nameValue =nameInput.value;
  const raceValue =raceInput.value;
  const dscValue =dscInput.value;
  console.log(photoValue);
  console.log(nameValue);
  console.log(raceValue);
  console.log(dscValue);
   if(addNewKitten){
      const newCat=`<li class="card">
            <img
              class="card_img"
              src="${photoValue}"
              alt="sphynx-cat"
            />
            <h3 class="card_title">${nameValue}</h3>
            <h4 class="card_race">${raceValue}</h4>
            <p class="card_description">${dscValue} </p>
           </li>`;
       list.innerHTML+=newCat;
   }
}
btnCatAdd.addEventListener ('click', addNewKitten);

