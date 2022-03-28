import 'react-native';
import React from 'react';
import Register from '../src/register';
import renderer from 'react-test-renderer';

test('Register Snapshot',()=>{
    const snap = renderer.create(
        <Register/>
    ).toJSON();

    expect(snap).toMatchSnapshot();
});

test('Register Renderer',()=>{
    renderer.create(
        <Register/>
    );

  
});
