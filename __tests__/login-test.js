import 'react-native';
import React from 'react';
import Login from '../src/login';
import renderer from 'react-test-renderer';

test('Login renders',()=>{
   renderer.create(<Login/>);

});

test('Login Snapshot', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});


