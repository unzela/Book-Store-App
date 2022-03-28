import 'react-native';
import React from 'react';
import mysteryBooks from '../src/data/mystery';
import renderer from 'react-test-renderer';

test('Mystery Snapshot',()=>{
    const snap = renderer.create(
        <mysteryBooks/>
    ).toJSON();

    expect(snap).toMatchSnapshot();
});

test('Mystery Renderer',()=>{
    renderer.create(
        <mysteryBooks/>
    );

  
});
