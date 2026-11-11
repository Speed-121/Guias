// Función separada para validar sin confundir un campo vacío con cero.
function validarDatos(nombre, correo, edadTexto) {
  if (!nombre.trim() || !correo.trim() || !edadTexto.trim()) return 'Todos los campos son obligatorios.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())) return 'Ingresa un correo electrónico válido.';
  const edad = Number(edadTexto);
  if (!Number.isInteger(edad)) return 'Ingresa una edad válida en años enteros.';
  if (edad < 18) return 'Debes tener al menos 18 años para enviar el formulario.';
  return '';
}
document.getElementById('contactoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre');
  const correo = document.getElementById('correo');
  const edad = document.getElementById('edad');
  const estado = document.getElementById('estado');
  const error = validarDatos(nombre.value, correo.value, edad.value);
  for (const campo of [nombre, correo, edad]) campo.removeAttribute('aria-invalid');
  estado.className = 'status ' + (error ? 'error' : 'success');
  estado.textContent = error || 'Formulario validado correctamente. Gracias por participar. Demostración: no se enviaron datos.';
  if (error) {
    const campo = !nombre.value.trim() ? nombre : (!correo.value.trim() || !correo.validity.valid || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) ? correo : edad;
    campo.setAttribute('aria-invalid', 'true'); campo.focus();
  }
});
