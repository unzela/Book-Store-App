import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from '../src/gallery';
import { render } from "@testing-library/react";
import Category from '../src/categories';

const mockChildComponent = jest.fn();
jest.mock("../src/categories", () => (props) => {
  mockChildComponent(props);
  return <mock-childComponent />;
});

test("If ParentComponent is passed open and has data, ChildComponent is called with prop open and data", () => {
  render(<Gallery genre="Love" />);
  expect(mockChildComponent).toHaveBeenCalledWith(
    expect.objectContaining({
      genre:'Love',
    })
  );
});

