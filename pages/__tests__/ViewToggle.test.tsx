import { fireEvent, render, screen } from '@testing-library/react';
import ViewToggle from '../components/ViewToggle';

describe('ViewToggle Component', () => {
  test('renders Care Navigator View and Provider View correctly', () => {
    const mockToggleView = jest.fn();

    const { rerender } = render(<ViewToggle view="careNavigator" toggleView={mockToggleView} />);
    
    expect(screen.getByText('Care Navigator View')).toBeInTheDocument();
    expect(screen.getByText('Switch to Provider View')).toBeInTheDocument();
    
    rerender(<ViewToggle view="provider" toggleView={mockToggleView} />);
    
    expect(screen.getByText('Provider View')).toBeInTheDocument();
    expect(screen.getByText('Switch to Care Navigator View')).toBeInTheDocument();
  });

  test('calls toggleView function when header is clicked', () => {
    const mockToggleView = jest.fn();

    render(<ViewToggle view="careNavigator" toggleView={mockToggleView} />);
    
    const headerElement = screen.getByText('Care Navigator View');
    fireEvent.click(headerElement);
    
    expect(mockToggleView).toHaveBeenCalled();
  });

  test('calls toggleView function when button is clicked', () => {
    const mockToggleView = jest.fn();

    render(<ViewToggle view="careNavigator" toggleView={mockToggleView} />);
    
    const buttonElement = screen.getByText('Switch to Provider View');
    fireEvent.click(buttonElement);
    
    expect(mockToggleView).toHaveBeenCalled();
  });
});

