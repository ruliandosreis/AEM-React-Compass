import React from 'react';
import SearchButton from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ SearchButton ]', () => {
  test('[ SearchButton ] renderiza com o texto', () => {
    const text = "Buscar";
    
    render(<SearchButton text={text}/>);

    expect(screen.getByText(text)).toBeInTheDocument();

  });
});