import React from 'react';
import { LogoutTimer } from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ LogoutTimer ]', () => {
  test('[ LogoutTimer ] renderiza a quantidade correta de segundos na tela', () => {
    const segundos = '160';
    
    render(<LogoutTimer seconds={segundos}/>);

    expect(screen.getByText(segundos)).toBeInTheDocument();

  });
  test('[ LogoutTimer ] renderiza no botão Continuar Navegando o texto selecionado', () => {
    const text = 'Continuar Navegando';
    
    render(<LogoutTimer text={text}/>);

    expect(screen.getByText(text)).toBeInTheDocument();

  });
});