import React from 'react';
import LoginSubmitButton from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ LoginSubmitButton ]', () => {
  test('[ LoginSubmitButton ] renderiza com o texto', () => {
    const text = "Continuar";
    
    render(<LoginSubmitButton text={text}/>);

    expect(screen.getByText(text)).toBeInTheDocument();

  });
});