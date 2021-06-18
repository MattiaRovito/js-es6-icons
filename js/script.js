//! Milestone 1 Partendo dalla seguente struttura dati, mostriamo in pagina tutte le icone disponibili come da layout.

//! Milestone 2 Coloriamo le icone per tipo.

//! Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone.


const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];



// icons.forEach((element) => {

//     document.getElementById('icone').innerHTML +=
//     `
//     <div class="box"><i class="${element.family} ${element.prefix}${element.name}"><i><br>
//     ${element.name}</div>
//     `
    
//     // console.log(
//     //     `
//     //     <i class="${element.family} ${element.prefix}${element.name}"><i>
//     //     `
//     // );
// });

// icons.forEach((element) => {

//     const {name, prefix, family} = element;


//     const elementHTML = 
//     `
//     <div>
//         <i class="${family} ${prefix}${name}"><i>
//         <div class="title">${name.toUpperCase()}</div>
//     </div>
//     `;
    
//     document.getElementById('icone').innerHTML += elementHTML;


// });

//! Richiamiamo la funzione 
print(icons);


//! Possiamo mettere tutto in una funzione

function print(array){

    array.forEach((element) => {

        const {name, prefix, family} = element;
    
    
        const elementHTML = 
        `
        <div>
            <i class="${family} ${prefix}${name}"><i>
            <div class="title">${name.toUpperCase()}</div>
        </div>
        `;
        
        document.getElementById('icone').innerHTML += elementHTML;
    });
}