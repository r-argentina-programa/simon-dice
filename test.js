document.body.innerHTML = `
      <div id="estado"></div>
      <div id="ronda"></div>
      <div class="cuadro" id="cuadro-1">1</div>
      <div class="cuadro" id="cuadro-2">2</div>
      <div class="cuadro" id="cuadro-3">3</div>
      <div class="cuadro" id="cuadro-4">4</div>
      <button type="button">
    `;

import {inicializar, ronda, secuenciaMaquina, secuenciaUsuario} from './logica';

jest.useFakeTimers();

describe('Simón dice', () => {
  test('El estado inicial es correcto', () => {
    inicializar();
    expect(document.querySelector('#estado').textContent).
        toEqual('Tocá "Empezar" para jugar!');
    expect(document.querySelector('#ronda').textContent).toEqual('-');
  });

  test('Comenzar a jugar', () => {
    expect(ronda).toStrictEqual(0);

    document.querySelector('button[type=button]').onclick();

    expect(document.querySelector('#estado').textContent).
        toEqual('Turno de la máquina');
    jest.runAllTimers();

    expect(document.querySelector('#estado').textContent).
        toEqual('Turno del jugador');

    expect(secuenciaMaquina).toHaveLength(1);
    expect(secuenciaUsuario).toHaveLength(0);

    expect(ronda).toStrictEqual(1);
  });

  test('Secuencia correcta del usuario', () => {
    expect(secuenciaUsuario).toHaveLength(0);
    expect(secuenciaMaquina).toHaveLength(1);
    const $primerCuadroSecuencia = secuenciaMaquina[0];
    $primerCuadroSecuencia.onclick({target:  $primerCuadroSecuencia});
    expect(secuenciaUsuario).toHaveLength(1);
    jest.runAllTimers();
    expect(secuenciaMaquina).toHaveLength(2);
  });
});
