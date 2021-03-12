
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
