// Lista de herramientas
const herramientas = [
    {
        id: 1,
        nombre: "Contador de Palabras",
        emoji: "📝",
        descripcion: "Cuenta palabras, caracteres y párrafos",
        url: "/herramientas/contador-palabras/",
        categoria: "Texto",
        tags: ["texto", "contador", "caracteres"]
    },
    {
        id: 2,
        nombre: "Generador QR",
        emoji: "📱",
        descripcion: "Genera códigos QR desde cualquier texto",
        url: "/herramientas/generador-qr/",
        categoria: "Diseño",
        tags: ["qr", "codigo", "generador"]
    },
    {
        id: 3,
        nombre: "Convertidor Unidades",
        emoji: "⚖️",
        descripcion: "Convierte unidades de medida",
        url: "/herramientas/convertidor-unidades/",
        categoria: "Conversión",
        tags: ["conversor", "unidades", "medidas"]
    },
    {
        id: 4,
        nombre: "Generador Contraseñas",
        emoji: "🔐",
        descripcion: "Crea contraseñas seguras",
        url: "/herramientas/generador-contrasenas/",
        categoria: "Seguridad",
        tags: ["contraseña", "seguridad", "generador"]
    },
    {
        id: 5,
        nombre: "Minificador JSON",
        emoji: "📦",
        descripcion: "Comprime y formatea JSON",
        url: "/herramientas/minificador-json/",
        categoria: "Desarrollo",
        tags: ["json", "desarrollador", "codigo"]
    },
    {
        id: 6,
        nombre: "Base64 Encoder",
        emoji: "🔤",
        descripcion: "Codifica/decodifica Base64",
        url: "/herramientas/base64-encoder/",
        categoria: "Desarrollo",
        tags: ["base64", "codificacion", "desarrollador"]
    },
];

// Renderizar herramientas
function renderHerramientas(lista = herramientas) {
    const grid = document.getElementById('grid-herramientas');
    grid.innerHTML = '';

    lista.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <div class="emoji">${tool.emoji}</div>
            <h3>${tool.nombre}</h3>
            <p>${tool.descripcion}</p>
            <small style="color: #999;">📂 ${tool.categoria}</small>
        `;
        card.addEventListener('click', () => {
            window.location.href = tool.url;
        });
        grid.appendChild(card);
    });
}

// Buscador
document.getElementById('buscador').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtradas = herramientas.filter(tool => 
        tool.nombre.toLowerCase().includes(query) ||
        tool.descripcion.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.includes(query))
    );
    renderHerramientas(filtradas);
});

// Renderizar al cargar
renderHerramientas();
