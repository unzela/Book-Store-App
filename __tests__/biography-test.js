import 'react-native';
import React from 'react';
import biographyBooks from '../src/data/biography';
import renderer from 'react-test-renderer';

test('Description Snapshot',()=>{
    const snap = renderer.create(
        <biographyBooks/>
    ).toJSON();

    expect(snap).toMatchSnapshot();
});

test('Description Renderer',()=>{
    renderer.create(
        <biographyBooks/>
    );

  
});
