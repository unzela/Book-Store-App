import 'react-native';
import React from 'react';
import Description from '../src/description';
import homeStack from '../src/routes/homeStack';
import renderer from 'react-test-renderer';

test('Description Snapshot',()=>{
    const snap = renderer.create(
        <Description />
    ).toJSON();

    expect(snap).toMatchSnapshot();
});

test('Description Renderer',()=>{
    renderer.create(
        <Description/>
    );

  
});
