const input = document.getElementById('tareaInput');
const boton = document.getElementById('agregarBtn');
const lista = document.getElementById('listaTareas');
const estado = document.getElementById('estado');
function actualizarContador() {
  const total = lista.children.length;
  document.getElementById('contador').textContent = total + (total === 1 ? ' tarea' : ' tareas');
}
document.getElementById('tareaForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const textoTarea = input.value.trim();
  if (!textoTarea) { estado.textContent = 'Escribe una tarea antes de agregarla.'; input.focus(); return; }
  const nuevaTarea = document.createElement('li');
  const texto = document.createElement('span');
  texto.textContent = textoTarea; // Se trata como texto, nunca como HTML ejecutable.
  const btnEliminar = document.createElement('button');
  btnEliminar.type = 'button';
  btnEliminar.textContent = 'Eliminar';
  btnEliminar.setAttribute('aria-label', 'Eliminar tarea: ' + textoTarea);
  nuevaTarea.appendChild(texto);
  nuevaTarea.appendChild(btnEliminar);
  lista.appendChild(nuevaTarea);
  input.value = '';
  estado.textContent = 'Tarea agregada: ' + textoTarea;
  actualizarContador(); input.focus();
  btnEliminar.addEventListener('click', function() {
    lista.removeChild(nuevaTarea);
    estado.textContent = 'Tarea eliminada: ' + textoTarea;
    actualizarContador(); input.focus();
  });
});
