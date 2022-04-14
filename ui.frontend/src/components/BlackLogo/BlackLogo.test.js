import React from 'react';
import { BlackLogo } from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ BlackLogo ]', () => {
  test('[ BlackLogo ] renderiza a imagem', () => {

    render(<BlackLogo/>);

    expect(screen.getByTestId('black-logo')).toBeInTheDocument();

  });
});