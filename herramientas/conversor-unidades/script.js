const conversiones = {
    longitud: {
        unidades: ['Metros', 'Kilómetros', 'Centímetros', 'Milímetros', 'Millas', 'Pies', 'Pulgadas'],
        factores: {
            'Metros': 1,
            'Kilómetros': 0.001,
            'Centímetros': 100,
            'Milímetros': 1000,
            'Millas': 0.000621371,
            'Pies': 3.28084,
            'Pulgadas': 39.3701
        }
    },
    peso: {
        unidades: ['Gramos', 'Kilogramos', 'Miligramos', 'Toneladas', 'Libras', 'Onzas'],
        factores: {
            'Gramos': 1,
            'Kilogramos': 0.001,
            'Miligramos': 1000,
            'Toneladas': 0.000001,
            'Libras': 0.00220462,
            'Onzas': 0.035274
        }
    },
    temperatura: {
        unidades: ['Celsius', 'Fahrenheit', 'Kelvin'],
        especial: true
    },
    volumen: {
        unidades: ['Litros', 'Mililitros', 'Galones', 'Pintas', 'Tazas'],
        factores: {
            'Litros': 1,
            'Mililitros': 1000,
            'Galones': 0.264172,
            'Pintas': 1.75975,
            'Tazas': 4.22675
        }
    }
};

function cambiarCategoria() {
    const categoria = document.getElementById('categoria').value;
    const unidades = conversiones[categoria].unidades;

    const selectOrigen = document.getElementById('unidad-origen');
    const selectDestino = document.getElementById('unidad-destino');

    selectOrigen.innerHTML = '';
    selectDestino.innerHTML = '';

    unidades.forEach(u => {
        selectOrigen.innerHTML += `<option value="${u}">${u}</option>`;
        selectDestino.innerHTML += `<option value="${u}" ${u === unidades[1] ? 'selected' : ''}>${u}</option>`;
    });

    convertir();
}

function convertir() {
    const categoria = document.getElementById('categoria').value;
    const valor = parseFloat(document.getElementById('valor').value) || 0;
    const unidadOrigen = document.getElementById('unidad-origen').value;
    const unidadDestino = document.getElementById('unidad-destino').value;

    let resultado = 0;

    if (categoria === 'temperatura') {
        resultado = convertirTemperatura(valor, unidadOrigen, unidadDestino);
    } else {
        const factorOrigen = conversiones[categoria].factores[unidadOrigen];
        const factorDestino = conversiones[categoria].factores[unidadDestino];
        resultado = (valor / factorOrigen) * factorDestino;
    }

    document.getElementById('resultado').textContent = resultado.toFixed(4);
    document.getElementById('resultado-label').textContent = `${valor} ${unidadOrigen} = ${resultado.toFixed(4)} ${unidadDestino}`;
}

function convertirTemperatura(valor, origen, destino) {
    let celsius = valor;

    if (origen === 'Fahrenheit') {
        celsius = (valor - 32) * 5/9;
    } else if (origen === 'Kelvin') {
        celsius = valor - 273.15;
    }

    if (destino === 'Fahrenheit') {
        return (celsius * 9/5) + 32;
    } else if (destino === 'Kelvin') {
        return celsius + 273.15;
    }

    return celsius;
}

// Inicializar
cambiarCategoria();
