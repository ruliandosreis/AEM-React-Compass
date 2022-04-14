import React from 'react';
import InputSearch from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ InputSearch ]', () => {
  test('[ InputSearch ] renderiza com o placeholder de Buscar usuários', () => {

    const text = "Buscar usuários";
    render(<InputSearch/>);

    expect(screen.getByPlaceholderText(text)).toBeInTheDocument();

  });
});