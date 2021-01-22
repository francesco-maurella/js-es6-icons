// funzione inserisci elementi in HTML
const innerElementIconHTML = ((item, index) => {
  $('#icons-list').append('<div></div>'); // primo box
  $('#icons-list>div').eq(index).html('<i></i> <div></div>').addClass('box');
  let thisIcon = $('#icons-list>.box>i').eq(index); // recuperiamo icona attuale
  let thisTitle = $('#icons-list>.box>div').eq(index);// recuperiamo titolo attuale

  // destrutturiamo valori oggetto attuale
  let {name, prefix, type, family} = item;

  thisIcon.addClass(`${family} ${prefix}${name}`); // agiamo sulla clase icona
  thisTitle.text(`${name}`); // agiamo sul titolo
})



// definizione array di oggetti "icone"
let icons = [
  {
    name : 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name : 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name : 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name : 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name : 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name : 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name : 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name : 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas'
  },
  {
    name : 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name : 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name : 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name : 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas'
  },
  {
    name : 'user-astronaut',
    prefix: 'fa-',
    type: 'profession',
    family: 'fas'
  },
  {
    name : 'user-graduate',
    prefix: 'fa-',
    type: 'profession',
    family: 'fas'
  },
  {
    name : 'user-ninja',
    prefix: 'fa-',
    type: 'profession',
    family: 'fas'
  },
  {
    name : 'user-secret',
    prefix: 'fa-',
    type: 'profession',
    family: 'fas'
  },
];


/* MILESTONE 1
Utilizzando la funzione forEach e il template literal,
visualizzare in pagina tutte le icone di Icons con il proprio nome.
*/

icons.forEach((element, i) => {
  innerElementIconHTML(element, i)
});


/* MILESTONE 2
Associare un diverso di colore ad ogni "tipo" di icona,
attingendo da un array di colori.
*/

const colors = ['#F3280D', '#0DB70D', '#1642B0']; // definiamo array colors

const iconsTypes = []; // dichiariamo array iconsType

// copiamo le diverse proprietà "type" di icons in iconsType
icons.forEach((element, i) => {
  let {type} = element; // recuperiamo valore type
  if (!iconsTypes.includes(type)) { // se l'array non include quel type
    iconsTypes.push(type) // copiamo lo stesso all'interno
  }
});

// ad ogni type assegnamo un valore colore diverso
icons.forEach((element, i) => {
  // recuperiamo la posizione del type equivalente al nostro, presente in iconsType
  let eqvTypeIndex = iconsTypes.indexOf(element.type);
  // recuperiamo l'elemento in colors alla posizione equivalente a eqvTypeIndex
  let colorInSameIndex = colors[eqvTypeIndex]
  // creaimo proprietà color valorizzandola con colorInSameIndex
  element.color = colorInSameIndex

  /* OPERAZIONE RIASSUNTIVA EQUIVALENTE
  element.color = colors[iconsTypes.indexOf(element.type)];*/
});

// aggiungiamo questa caratteristica in pagina HTML
icons.forEach((element, i) => {
  let {color} = element;
  $('.box').eq(i).css('color', `${color}`);
});


/* MILESTONE 3:
Filtriamo le icone in base al tipo, tramite un Select
popolato dinamicamente*/

// recuperiamo elemento Select
iconsTypes.forEach((element, i) => {
  $('.type-select').append(`<option></option>`);
  let thisOption = $('.type-select>option').eq(i+1);
  thisOption.val(`${element}`).text(`${element}`);
});

// scriviamo nuova lista in base all'opzione scelta
$('.type-select').change(function(){
  let thisValue = $(this).val(); // opzione selezionata

  iconsTypes.forEach((element, i) => {

    if (thisValue === element) {
      // filtriamo le icone in base al type
      let selectedIcons = icons.filter((element) => {
        let {type} = element
        return type === thisValue;
      });

      // cancelliamo lista attuale
      $('#icons-list').text('');

      //inseriamo lista in HTML
      selectedIcons.forEach((element, i) => {
        innerElementIconHTML(element, i);
        let {color} = element;
        $('.box').eq(i).css('color', `${color}`);
      });
    } else if (!thisValue) {
      icons.forEach((element, i) => {
        innerElementIconHTML(element, i);
        let {color} = element;
        $('.box').eq(i).css('color', `${color}`);
      });
    }
  });
});
