import React from 'react';
import Clock from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ Clock ]', () => {
  test('[ Clock ] renderiza o componente na tela', () => {
  
    render(<Clock/>);

    expect(screen.getByTestId('clock')).toBeInTheDocument();

  });
});