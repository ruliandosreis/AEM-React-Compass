import React from 'react';
import LogoutButton from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ LogoutButton ]', () => {
  test('[ LogoutButton ] renderiza com o texto', () => {
    const text = "Logout";
    
    render(<LogoutButton text={text}/>);

    expect(screen.getByText(text)).toBeInTheDocument();

  });
});