import React from 'react';
import ResetTimer from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ ResetTimer ]', () => {
  test('[ ResetTimer ] renderiza no Botão o texto selecionado', () => {
    const text = 'Continuar Navegando';
    
    render(<ResetTimer text={text}/>);

    expect(screen.getByText(text)).toBeInTheDocument();

  });
});