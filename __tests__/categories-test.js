import 'react-native';
import React from 'react';
import Category from '../src/categories';
import renderer from 'react-test-renderer';

test('Category Snapshot',()=>{
    const snap = renderer.create(
        <Category/>
    ).toJSON();

    expect(snap).toMatchSnapshot();
});

test('Category Renderer',()=>{
    renderer.create(
        <Category/>
    );

  
});
