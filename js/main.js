
// Mostra opciones de filtro
const btnFilter = document.getElementById('header__filter');
let filterBar = document.getElementById('filter');
let filterOpen = false;

btnFilter.addEventListener('click', mostrar, false);

function mostrar()
{
    if(filterOpen == false)
    {
        filterOpen = true;
        filterBar.classList.add('active');
    }
    else
    {
        filterOpen = false;
        filterBar.classList.remove('active');
    }
}

// Crear nueva nota
const btnPlus = document.getElementById('newNote');
let typeNote = document.getElementById('typeNote');
let noteOn = false;

btnPlus.addEventListener('click', mostrarNote, false);

function mostrarNote()
{
    if(noteOn == false)
    {
        noteOn = true;
        typeNote.classList.add('active');
    }
    else
    {
        noteOn = false;
        typeNote.classList.remove('active');
    }
}
// New Note
const noteInput = document.getElementById('nota');
noteInput.addEventListener('click', newNote, false);

function newNote()
{

	let noteTitle = prompt('ingrese el titulo de la nota:');
	let noteContent = prompt('Ingrese el contenido de la nota:');
	let row_1 = document.getElementById('box_content');

	// Box model
	let boxArticle = document.createElement('article');
	boxArticle.className = 'box';

	const box__top = document.createElement('div');
	box__top.className = 'box__top';

	const box__bottom = document.createElement('div');
	box__bottom.className = 'box__bottom';

	const icon = document.createElement('span');
	const ico = document.createElement('i');
	const box_subtitle = document.createElement('h4');
	box_subtitle.textContent = `${noteContent}`;
	box_subtitle.className = 'box-subtitle';
	icon.className = 'icon';
	ico.className = 'far fa-star';

	/// Anidando elementos de Box__top
	icon.appendChild(ico);
	box__top.appendChild(icon);
	box__top.appendChild(box_subtitle);


	const boxTitle = document.createElement('h3');
	boxTitle.className = 'box__title';
	boxTitle.textContent = `${noteTitle}`;

	noteOn = false;
    typeNote.classList.remove('active');
	
	boxArticle.appendChild(box__top);
	boxArticle.appendChild(boxTitle);
	boxArticle.appendChild(box__bottom);
	row_1.appendChild(boxArticle);
	console.log(boxArticle);
}
