import 'react-native';
import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import homeStack from '../src/routes/homeStack';
import renderer from 'react-test-renderer';

test('Home Stack Snapshot',()=>{
    const snap = renderer.create(
        <homeStack/>
    ).toJSON();

    expect(snap).toMatchSnapshot();
});

test('Home Stack Renderer',()=>{
    renderer.create(
        <homeStack/>
    );

  
});
