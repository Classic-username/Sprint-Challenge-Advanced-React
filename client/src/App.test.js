import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const simDom = rtl.render(<App />);

test('has an element with the text "advanced react"', () => {
  
  const h2 = simDom.findByText(/advanced reac/i)
  expect(h2).toBeTruthy()
})

test('document has a button', () => {
  const button = simDom.findByText(/inconspicuous/i)
  expect(button).toBeTruthy()
})

