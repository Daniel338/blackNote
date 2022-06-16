
// Comenzar el script cuando carge el DOM
document.addEventListener('DOMContentLoaded', development, false);

// Variables globales

// Scripts
function development ()
{
	console.log('Page load complete');
	
	// Variables locales
	const btnPlus = document.getElementById('btnPlus');
	const typeNote = document.getElementById('typeNote');
	const btnNote = document.getElementById('btnNote');
	const noteRight = document.getElementById('note__right');
	const inputTitle = document.getElementById('noteTitle');
	const inputContent = document.getElementById('noteContent');
    const boxContent = document.querySelector('#box__content');
    const inputSave = document.querySelector('#inputSave');
    const inputBack = document.querySelector(".ico_back");
    const notes = {};

    // Ventana de notas
	function inputNotes()
	{
		typeNote.classList.toggle('active');
		noteRight.classList.add('active');
        inputTitle.focus();
        inputSave.addEventListener('click', saveNote, false);
        inputBack.addEventListener('click', go_back, false);
	};

    function saveNote()
    {
        let title = inputTitle.value;
        let content = inputContent.value;

        console.log(`El titulo es: \n${title}`);
        console.log(`El contenido es: \n${content}`);
        
        // Restablecer valores
        inputTitle.value = "";
        inputContent.value = "";
	    noteRight.classList.remove('active');

        // Mostrar cantidad de notas

    };

    function go_back(){

        // Restablecer valores y salir
        inputTitle.value = "";
        inputContent.value = "";
	    noteRight.classList.remove('active');
    };

	btnPlus.onclick = function()
	{
		typeNote.classList.toggle('active');
		btnNote.addEventListener('click', inputNotes,false);
	};
};
