import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navigation';

test('Navbar renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
