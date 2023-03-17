import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ProfileMissions from '../Mission/ProfileMissions';
import Mission from '../../page/Missions';

test('myProfile Page renders correctly', () => {
  const component = renderer.create(
    <MemoryRouter>
      <Mission />
    </MemoryRouter>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
