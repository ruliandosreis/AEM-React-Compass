import React from 'react';
import CustomMargin from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ CustomMargin ]', () => {
  test('[ CustomMargin ] renderiza a div CustomMarginContainer no documento', () => {

    render(<CustomMargin/>);

    expect(screen.getByTestId('custom-margin')).toBeInTheDocument();

  });
});