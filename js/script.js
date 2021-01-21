// definizione array di oggetti "icone"
const icons = [
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
  // creiamo elementi HTML
  $('#container').append('<div></div>'); // primo box
  $('#container>div').eq(i).html('<i></i> <div></div>'); // interno box
  let thisIcon = $('#container>.box>i').eq(i); // recuperiamo icona attuale
  let thisTitle = $('#container>.box>div').eq(i);// recuperiamo titolo attuale

  // destrutturiamo valori oggetto attuale
  let {name, prefix, type, family} = element;

  thisIcon.addClass(`${family} ${prefix}${name}`); // agiamo sulla clase icona
  thisTitle.text(`${name}`); // agiamo sul titolo
});
