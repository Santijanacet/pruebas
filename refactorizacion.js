const Estadisticas = {
  validar(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
      throw new Error('Se necesita un array con números');
    }
    if (!numeros.every(n => typeof n === 'number' && !isNaN(n))) {
      throw new Error('Todos los elementos deben ser números válidos');
    }
  },

  media(numeros) {
    this.validar(numeros);
    return numeros.reduce((suma, n) => suma + n, 0) / numeros.length;
  },

  mediana(numeros) {
    this.validar(numeros);
    const ordenados = [...numeros].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
    
    if (ordenados.length % 2 === 0) {
      return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    }
    return ordenados[mitad];
  },

  moda(numeros) {
    this.validar(numeros);
    const frecuencias = {};
    numeros.forEach(n => frecuencias[n] = (frecuencias[n] || 0) + 1);
    
    const maxFrecuencia = Math.max(...Object.values(frecuencias));
    return Object.keys(frecuencias)
      .filter(key => frecuencias[key] === maxFrecuencia)
      .map(Number);
  },

  varianza(numeros) {
    this.validar(numeros);
    const prom = this.media(numeros);
    const diferencias = numeros.map(n => Math.pow(n - prom, 2));
    return diferencias.reduce((suma, d) => suma + d, 0) / numeros.length;
  },

  desviacion(numeros) {
    return Math.sqrt(this.varianza(numeros));
  },

  rango(numeros) {
    this.validar(numeros);
    return Math.max(...numeros) - Math.min(...numeros);
  },

  todas(numeros) {
    this.validar(numeros);
    return {
      cantidad: numeros.length,
      media: Number(this.media(numeros).toFixed(2)),
      mediana: this.mediana(numeros),
      moda: this.moda(numeros),
      varianza: Number(this.varianza(numeros).toFixed(2)),
      desviacion: Number(this.desviacion(numeros).toFixed(2)),
      rango: this.rango(numeros),
      minimo: Math.min(...numeros),
      maximo: Math.max(...numeros)
    };
  },

  mostrar(stats) {
    console.log('\n--- ESTADÍSTICAS ---');
    console.log(`Datos: ${stats.cantidad} números`);
    console.log(`Media: ${stats.media}`);
    console.log(`Mediana: ${stats.mediana}`);
    console.log(`Moda: ${stats.moda.join(', ')}`);
    console.log(`Desviación: ${stats.desviacion}`);
    console.log(`Rango: ${stats.rango} (${stats.minimo} - ${stats.maximo})`);
    console.log('-------------------\n');
  }
};

function calcular(numeros) {
  try {
    const resultado = Estadisticas.todas(numeros);
    Estadisticas.mostrar(resultado);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// Ejemplos de uso
const datos1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const datos2 = [2, 4, 4, 4, 5, 5, 7, 9];
const datos3 = [15, 23, 37, 41, 59, 62, 78, 84, 91];

console.log('Conjunto 1:', datos1);
calcular(datos1);

console.log('Conjunto 2:', datos2);
calcular(datos2);

console.log('Conjunto 3:', datos3);
calcular(datos3);

// Uso individual
console.log('--- USO INDIVIDUAL ---');
console.log('Media de [1,2,3,4,5]:', Estadisticas.media([1,2,3,4,5]));
console.log('Mediana de [1,2,3,4,5]:', Estadisticas.mediana([1,2,3,4,5]));
console.log('Desviación de [1,2,3,4,5]:', Estadisticas.desviacion([1,2,3,4,5]).toFixed(2));

module.exports = Estadisticas;