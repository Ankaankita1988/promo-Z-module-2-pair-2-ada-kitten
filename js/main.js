"use strict";
const kitten1Image="https://dev.adalab.es/gato-siames.webp";
const kitten1Name="Anastacio";
const kitten1Race="Siamés";
const kitten1Desc="Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kitten2Image="https://dev.adalab.es/sphynx-gato.webp";
const kitten2Name="Fiona";
const kitten2Race="Sphynx";
const kitten2Desc="Produce fascinación y curiosidad. Exótico, raro, bello, extraño... hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de devicePixelRatio";
const kitten3Image="https://dev.adalab.es/maine-coon-cat.webp";
const kitten3Name="Cielo";
const kitten3Race="Maine Coon";
const kitten3Desc=" Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const list=document.querySelector('.js-list');
/* Agregar el código del li desde HTMl 
Repetir este para cada gatito*/
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kitten1Image}"
    alt="siames-cat"
  />
  <h3 class="card_title">${kitten1Name}</h3>
  <h4 class="card_race">${kitten1Race}</h4>
  <p class="card_description">${kitten1Desc}</p>
</article>
</li>`;
const kittenTwo = `<li class="card">
            <img
              class="card_img"
              src="${kitten2Image}"
              alt="sphynx-cat"
            />
            <h3 class="card_title">${kitten2Name}</h3>
            <h4 class="card_race">${kitten2Race}</h4>
            <p class="card_description">${kitten2Desc} </p>
            /li>`;
const kittenThree= `<li class="card">
            <img
              class="card_img"
              src="${kitten3Image}"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${kitten3Name}</h3>
            <h4 class="card_race">${kitten3Race}</h4>
            <p class="card_description">${kitten3Desc} 
             </p>                   
             </li>`;
list.innerHTML= kittenOne + kittenTwo + kittenThree;

const formAdd = document.querySelector('.js-new-form');
formAdd.classList.remove('collapsed');
const btnAdd = document.querySelector ('.js-btn-add');
btnAdd.addEventListener ('click', (event)=> {
  // console.log ('holi');
  formAdd.classList.toggle("collapsed");
})

const cancelBtn = document.querySelector ('.js-cancel');
cancelBtn.addEventListener ('click', (event) =>{
  // console.log ('hola esto es cancelar');
  event.preventDefault();
  formAdd.classList.add ('collapsed');
})

const searchButton = document.querySelector ('.js_button-search');
const input_search_desc = document.querySelector ('.js_in_search_desc');
searchButton.addEventListener ('click', (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  // console.log (descrSearchText);
  list.innerHTML = '';

  if (kittenOne.includes(descrSearchText)) {
    list.innerHTML = kittenOne;
  }
  
  if (kittenTwo.includes(descrSearchText)) {
    list.innerHTML += kittenTwo;
  }
  
  if (kittenThree.includes(descrSearchText)) {
    list.innerHTML += kittenThree;
  }
})
