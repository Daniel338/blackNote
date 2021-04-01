
// Compenzar el script cuando carge el DOM
document.addEventListener('DOMContentLoaded', development, false);

// Variables

// Scripts
function development ()
{
	console.log('Page load complete');
	
	// Variables
	const btnPlus = document.getElementById('btnPlus');
	const typeNote = document.getElementById('typeNote');
	const btnNote = document.getElementById('btnNote');
	const noteRight = document.getElementById('note__right');
	const inputTitle = document.getElementById('noteTitle');
	const inputContent = document.getElementById('noteContent');

	function inputNotes()
	{
		noteRight.classList.add('active');
	}

	btnPlus.onclick = function()
	{
		typeNote.classList.toggle('active');
		btnNote.addEventListener('click', inputNotes,false);
	};
}