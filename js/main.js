
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

