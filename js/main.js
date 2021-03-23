
// Compenzar el script cuando carge el DOM
document.addEventListener('DOMContentLoaded', developmeent, false);

// Scripts
function developmeent ()
{
	console.log('Page load complete');

	// Btn objetcs
	const header__filter = document.getElementById('header__filter');
	const btnPlus = document.getElementById('btnPlus');

	// Mostrar filter
	header__filter.addEventListener('click', modalFilter, false);
	let filterOpen = false;

	function modalFilter()
	{
		const box__filter = document.getElementById('filter');
		if(filterOpen == false)
		{
			filterOpen = true;
			box__filter.classList.add('active');
		}
		else
		{
			filterOpen = false;
			box__filter.classList.remove('active');
		}
	}

	// Mostrar opciones de nota
	btnPlus.addEventListener('click', optionNote, false);
	let typeNoteOpen = false;
	function optionNote()
	{
		const typeNote = document.getElementById('typeNote');
		const btnNote = document.getElementById('btnNote');
		const noteRight = document.getElementById('note__right');
		if(typeNoteOpen == false)
		{
			typeNoteOpen = true;
			typeNote.classList.add('active');
		}
		else
		{
			typeNoteOpen = false;
			typeNote.classList.remove('active');
		}

		btnNote.addEventListener('click', function ()
		{
			typeNoteOpen = false;
			typeNote.classList.remove('active');
			noteRight.classList.add('active');
			
			const saveNote = document.getElementById('inputSave');
			saveNote.addEventListener('click', function ()
			{
				let noteTitle = document.getElementById('noteTitle').value;
				let noteContent = document.getElementById('noteContent').value;
				const box__content = document.getElementById('box__content');

				// Box model
				const article = document.createElement('article');
				const box__top = document.createElement('div');
				const box__title = document.createElement('h3');
				const box__bottom = document.createElement('div');

				// box__top elements
				const span = document.createElement('span');
				const i = document.createElement('i');

				// add classList
				article.classList.add('box');
				box__top.classList.add('box__top');
				box__title.classList.add('box__title');
				box__bottom.classList.add('box__bottom');
				span.classList.add('icon');
				i.classList.add('far');
				i.classList.add('fa-star');
				
				// nesting content
				box__title.textContent = `${noteTitle}`;

				// addChild box__top
				span.appendChild(i);
				box__top.appendChild(span);
				
				// nesting elements
				article.appendChild(box__top);
				article.appendChild(box__title);
				article.appendChild(box__bottom);

				// Mostrar en la pagina y cerrar ventana
				console.log(article);
				box__content.appendChild(article);
				noteRight.classList.remove('active');
			});

		}, false);
	}
}
