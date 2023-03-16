import React from 'react';
import { useDispatch } from 'react-redux';
import { render, create } from 'react-test-renderer';
import Rockets from '../Rocket/Rockets';
import { bookRocket, leaveRocket } from '../../redux/rockets/rocketSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Rockets component', () => {
  let props;
  let dispatch;
  let component;

  beforeEach(() => {
    props = {
      id: '1',
      name: 'Falcon 1',
      description:
        'The Falcon 1 was a small rocket designed for small payloads and low Earth orbits.',
      image: 'https://spacex.com/falcon-1.png',
      reserved: false,
    };
    dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    component = create(<Rockets {...props} />);
  });

  it('should render correctly', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should call bookRocket action when the "Book Rocket" button is clicked', () => {
    const button = component.root.findByType('button');
    button.props.onClick();
    expect(dispatch).toHaveBeenCalledWith(bookRocket(props.id));
  });

  it('should call leaveRocket action when the "Unbook Rocket" button is clicked', () => {
    props.reserved = true;
    component = create(<Rockets {...props} />);
    const button = component.root.findByType('button');
    button.props.onClick();
    expect(dispatch).toHaveBeenCalledWith(leaveRocket(props.id));
  });
});
