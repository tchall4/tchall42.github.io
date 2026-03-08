const textarea = document.getElementById('texto');

textarea.addEventListener('input', actualizar);

function actualizar() {
    const texto = textarea.value;

    // Contar palabras
    const palabras = texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;

    // Contar caracteres sin espacios
    const caracteres = texto.replace(/\s/g, '').length;

    // Contar caracteres con espacios
    const caracteresConEspacios = texto.length;

    // Contar párrafos
    const parrafos = texto.trim() === '' ? 0 : texto.trim().split(/\n\n+/).length;

    // Actualizar en la pantalla
    document.getElementById('palabras').textContent = palabras;
    document.getElementById('caracteres').textContent = caracteres;
    document.getElementById('caracteres-espacios').textContent = caracteresConEspacios;
    document.getElementById('parrafos').textContent = parrafos;
}

function limpiar() {
    textarea.value = '';
    actualizar();
}
