import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

//test if it works, otherwise remove beforeeach and add custom wrapper

let wrapper, startLogout
beforeEach(() => {
    startLogout = jest.fn();
    wrapper = shallow(<Header startLogout={startLogout} />);
});

test('should render header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
})