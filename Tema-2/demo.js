// Demostración local: no se realiza una solicitud POST a un servidor.
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre');
  const estado = document.getElementById('estado');
  if (!nombre.value.trim()) { estado.textContent = 'Escribe tu nombre, sin dejar solo espacios.'; nombre.focus(); return; }
  estado.textContent = 'Datos validados, ' + nombre.value.trim() + '. Demostración completada; no se enviaron datos.';
});