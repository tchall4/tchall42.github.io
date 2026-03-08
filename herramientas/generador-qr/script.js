function generarQR() {
    const input = document.getElementById('qr-input').value;
    const size = parseInt(document.querySelector('input[name="size"]:checked').value);
    const container = document.getElementById('qr-code');

    if (!input.trim()) {
        alert('Por favor ingresa un texto o URL');
        return;
    }

    container.innerHTML = '';

    new QRCode(container, {
        text: input,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    document.getElementById('qr-output').classList.add('show');
}

function descargarQR() {
    const canvas = document.querySelector('#qr-code canvas');
    if (!canvas) {
        alert('Primero genera un QR');
        return;
    }

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'qr-code.png';
    link.click();
}

// Generar QR al presionar Ctrl + Enter
document.getElementById('qr-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        generarQR();
    }
});
