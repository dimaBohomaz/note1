let square = document.createElement('div');
square.classList.add('red');
document.body.appendChild(square);
let note = document.createElement('p');
note.textContent = 'hi from note1';
note.onclick = function() { this.classList.toggle('note') };
document.body.insertBefore(note, square);