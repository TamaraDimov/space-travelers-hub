import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

test('myProfile Page renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <myProfile />
    </MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
