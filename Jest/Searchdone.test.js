import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import Searchdone from './Searchdone';

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
  FontAwesome: 'FontAwesome',
}));

// Mock useNavigation hook
jest.mock('@react-navigation/bottom-tabs', () => ({
    BottomTabBar: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
  }));


describe('Searchdone component', () => {
  it('renders correctly', () => {
    // Mock useNavigation behavior
    useNavigation.mockReturnValue({ navigate: jest.fn() });

    // Render the Login component
    const tree = renderer.create(<Searchdone />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});