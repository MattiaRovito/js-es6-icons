//! Milestone 1 Partendo dalla seguente struttura dati, mostriamo in pagina tutte le icone disponibili come da layout.



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



//! Richiamiamo la funzione 
// print(icons);




//! Milestone 2 Coloriamo le icone per tipo.


//TODO abbiamo mappato l'array di prima in un altro array dove poter dare il colore

const coloredArray = icons.map((element) =>{
    // mettiamo un colore di default
    let color = "purple";
    if(element.type == "animal"){
        color = "blue";
    } else if (element.type == "vegetable"){
        color = "orange"
    }


    //? deve restituire tutti gli elementi di prima + il colore.
    //* con il return vogliamo un array con tutti gli oggetti
    return {
        ...element,
        color : color 
        // oppure solo 
        // color
    }
});
console.log(coloredArray);


// ora richiamiamo il coloredArray, commentando il primo print();

printIcons(coloredArray);







//! Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone.

const types = [];

coloredArray.forEach((element) =>{
    if(!types.includes(element.type)){
    types.push(element.type);
    document.getElementById('type').innerHTML += 
    `
    <option value="All">${element.type}</option>
    `
    }
});
console.log(types);

const select = document.getElementById('type');


select.addEventListener("change", function(){

    const valoreSelect = select.value;
    console.log(valoreSelect);
    const filteredIcons = coloredArray.filter((element)=>{
        return element.type == valoreSelect;
    });

    printIcons(filteredIcons);
    if(valoreSelect =="All"){
        printIcons(coloredArray);
    }
});









// FUNZIONI


function printIcons(array){

    document.getElementById('icone').innerHTML ="";

    array.forEach((element) => {
        

        const {color, name, prefix, family} = element;
    
    
        const elementHTML = 
        `
        <div class="col-2 icone text-center " >
            <i class="${family} ${prefix}${name}" style="color:${color}"><i>
            <div class="title">${name.toUpperCase()}</div>
        </div>
        `;
        
        document.getElementById('icone').innerHTML += elementHTML;
    });
}


