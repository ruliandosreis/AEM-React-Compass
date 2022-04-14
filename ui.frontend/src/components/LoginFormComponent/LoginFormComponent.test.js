import React from 'react';
import LoginFormComponent from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ LoginFormComponent ]', () => {
  test('[ LoginFormComponent ] renderiza com o placeholder de Usuário', () => {

    const text = "Usuário";
    render(<LoginFormComponent/>);

    expect(screen.getByPlaceholderText(text)).toBeInTheDocument();

  });

  test('[ LoginFormComponent ] renderiza com o placeholder de Senha', () => {
    
    const text = "Senha";
    render(<LoginFormComponent/>);

    expect(screen.getByPlaceholderText(text)).toBeInTheDocument();

  });
  
});