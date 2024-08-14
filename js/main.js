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
const list=document.querySelector('.js-list');

//OBJETO GATO 1 CON SU CLAVE:VALOR
const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio'.toUpperCase(),
  desc: ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};
//OBJETO GATO 2 CON SU CLAVE:VALOR
const kittenData_2 = {
  image: 'https://dev.adalab.es/sphynx-gato.webp',
  name: 'Fiona'.toUpperCase(),
  desc: "Produce fascinación y curiosidad. Exótico, raro, bello, extraño... hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de devicePixelRatio",
  race:"Sphynx"
};
//OBJETO GATO 3 CON SU CLAVE:VALOR
const kittenData_3 = {
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  name: 'Cielo'.toUpperCase(),
  desc: " Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  race:"Maine Coon"
};

//METEMOS LOS TRES GATOS DENTRO DE UNA FUNCIÓN ARRAY [OBJ1, OBJ2, OBJ3]
const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];


//kittenData es un objeto con toda la información del gato
function renderKitten(kittenData){
  return `
  <li class="card">
      <img
        class="card_img"
        src="${kittenData.image}"
        alt="sphynx-cat"
      />
      <h3 class="card_title">${kittenData.name}</h3>
      <h4 class="card_race">${kittenData.race}</h4>
      <p class="card_description">${kittenData.desc} </p>
  </li>`;
}
function renderKittenList(renderKittenList){
  for (const kitten of kittenDataList){
    list.innerHTML+=renderKitten (kitten);
  }
  
}
renderKittenList(kittenDataList);

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
})

cancelBtn.addEventListener ('click', (event) =>{
  event.preventDefault();
  formAdd.classList.add ('collapsed');
})
const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  list.innerHTML = '';
  for(const kittenItem of kittenDataList){
    if(kittenItem.desc.includes (descrSearchText)){
      list.innerHTML+=renderKitten (kittenItem);
    }
      
  }
  /*if (kittenDataList[0].desc.includes(descrSearchText)) {
  list.innerHTML += renderKitten(kittenDataList[0]);
  }
  if (kittenDataList[1].desc.includes(descrSearchText)) {
    list.innerHTML += renderKitten(kittenDataList[1]);
  }
  if (kittenDataList[2].desc.includes(descrSearchText)) {
    list.innerHTML += renderKitten(kittenDataList[2]);
  }*/
};

searchButton.addEventListener("click", filterKitten);

function addNewKitten (event) {
  event.preventDefault ();
  const photoValue =photoInput.value;
  const nameValue =nameInput.value;
  const raceValue =raceInput.value;
  const dscValue =dscInput.value;
  const kittenData = {
    image:photoInput.value,
    name:nameInput.value,
    desc:dscInput.value,
    race:raceInput.value
  };
  list.innerHTML += renderKitten(kittenData);
   }
btnCatAdd.addEventListener ('click', addNewKitten);

