import * as SayHello from './sayHello';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

it('header renders with correct text', () => {
  jest.spyOn(SayHello, 'sayHello').mockImplementation(() => "Whattup");  
  render(<Hello />);
  screen.getByText('Whattup');
});
