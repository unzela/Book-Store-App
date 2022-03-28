import React from 'react';
import renderer from 'react-test-renderer';
import BaseHome from './../src/base';

test('BaseHome renders', () => {
  const tree = renderer.create(<BaseHome />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('BaseHome Snapshot',()=>{
  renderer.create(<BaseHome/>);

});