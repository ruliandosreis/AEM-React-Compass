import React from 'react';
import { WhiteLogo } from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ WhiteLogo ]', () => {
  test('[ WhiteLogo ] renderiza a imagem', () => {

    render(<WhiteLogo/>);

    expect(screen.getByTestId('white-logo')).toBeInTheDocument();

  });
});