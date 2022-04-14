import React from 'react';
import Climate from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ Climate ]', () => {
  test('[ Climate ] renderiza com o Componente', () => {

    render(<Climate/>);

    expect(screen.getByText('Aguarde...')).toBeInTheDocument();

  });
});