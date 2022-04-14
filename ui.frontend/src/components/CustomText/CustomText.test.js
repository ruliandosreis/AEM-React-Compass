import React from 'react';
import { CustomText } from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('[ CustomText ]', () => {
  test('[ CustomText ] renderiza o texto', () => {
    const text = "Texto exemplo que deve ser renderizado";
    
    render(<CustomText text={text}/>);

    expect(screen.getByText(text)).toBeInTheDocument();

  });
});