import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation, useRoute } from '@react-navigation/native';
import NextScreen from '../recipespage/NextScreen';

// Mock @expo/vector-icons
jest.mock('@expo/vector-icons', () => ({
  FontAwesome: 'FontAwesome',
}));

// Mock useNavigation and useRoute hooks
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

describe('NextScreen component', () => {
  it('renders correctly', () => {
    // Mock useNavigation behavior
    const mockNavigate = jest.fn();
    useNavigation.mockReturnValue({ goBack: jest.fn(), navigate: mockNavigate });

    // Mock useRoute behavior
    const mockFilteredData = [
      // mock your filtered data here if needed
    ];
    useRoute.mockReturnValue({ params: { filteredData: mockFilteredData } });

    // Render the NextScreen component
    const tree = renderer.create(<NextScreen />).toJSON();

    // Expectations
    expect(tree).toMatchSnapshot(); // Snapshot test
    expect(useNavigation).toHaveBeenCalled(); // Check if useNavigation was called
    expect(useRoute).toHaveBeenCalled(); // Check if useRoute was called
    // Add more specific expectations as needed
  });
});
