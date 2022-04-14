import React from 'react';
import QuitButton from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ QuitButton ]', () => {
  test('[ QuitButton ] renderiza com o texto', () => {
    const text = "Sair";
    
    render(<QuitButton text={text}/>);

    expect(screen.getByText(text)).toBeInTheDocument();

  });
});