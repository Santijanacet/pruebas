const Estadisticas = require('./refactorizacion'); // Ajusta según tu ruta

describe('Estadisticas', () => {
  const datos = [1, 2, 2, 3, 4, 5];

  test('media()', () => {
    expect(Estadisticas.media(datos)).toBeCloseTo(2.83, 2);
  });

  test('mediana()', () => {
    expect(Estadisticas.mediana(datos)).toBe(2.5);
  });

  test('moda()', () => {
    expect(Estadisticas.moda(datos)).toEqual([2]);
  });

  test('varianza()', () => {
    expect(Estadisticas.varianza(datos)).toBeCloseTo(1.8055, 4);
  });

  test('desviacion()', () => {
    expect(Estadisticas.desviacion(datos)).toBeCloseTo(Math.sqrt(1.8055), 4);
  });

  test('rango()', () => {
    expect(Estadisticas.rango(datos)).toBe(4);
  });

  test('todas()', () => {
    const stats = Estadisticas.todas(datos);
    expect(stats).toEqual({
      cantidad: 6,
      media: parseFloat(Estadisticas.media(datos).toFixed(2)),
      mediana: 2.5,
      moda: [2],
      varianza: parseFloat(Estadisticas.varianza(datos).toFixed(2)),
      desviacion: parseFloat(Estadisticas.desviacion(datos).toFixed(2)),
      rango: 4,
      minimo: 1,
      maximo: 5
    });
  });

  test('validar() lanza error si no es array', () => {
    expect(() => Estadisticas.media('no array')).toThrow();
  });

  test('validar() lanza error si hay datos inválidos', () => {
    expect(() => Estadisticas.media([1, 'a', 3])).toThrow();
  });
});

// NOTA
// ESTE CODIGO TIUENE UNA ESTRUCTURA DE PRUEBAS UNITARIAS PARA LA LIBRERÍA DE ESTADÍSTICAS.
// ESTAS PRUEBAS VERIFICAN QUE LAS FUNCIONES DE CÁLCULO DE ESTADÍSTICAS FUNCIONEN CORRECTAMENTE.
// DE 9 TETS REALIZADOS, 8 PASAN Y 1 FALLA.
// ESTO INDICA QUE LA MAYORÍA DE LAS FUNCIONES ESTÁN IMPLEMENTADAS CORRECTAMENTE.