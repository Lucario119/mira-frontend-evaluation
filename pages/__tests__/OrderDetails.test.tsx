import { render, screen } from '@testing-library/react';
import OrderDetails from '../components/OrderDetails';

describe('OrderDetails Component', () => {
  it('renders order details correctly', () => {
    render(<OrderDetails />);

    expect(screen.getByText('Order Details')).toBeInTheDocument();
    expect(screen.getByText('Status:')).toBeInTheDocument();
    expect(screen.getByText('Reviewing')).toBeInTheDocument();
    expect(screen.getByText('Member:')).toBeInTheDocument();
    expect(screen.getByText('ryan.bruns')).toBeInTheDocument();
    expect(screen.getByText('Date of Birth:')).toBeInTheDocument();
    expect(screen.getByText('01/01/1980')).toBeInTheDocument();
    expect(screen.getByText('Request Address:')).toBeInTheDocument();
    expect(screen.getByText('98 St Marks Pl, New York, NY')).toBeInTheDocument();
    expect(screen.getByText('Received:')).toBeInTheDocument();
    expect(screen.getByText('01/11/2022')).toBeInTheDocument();
    expect(screen.getByText('Intended Date:')).toBeInTheDocument();
    expect(screen.getByText('01/12/2022')).toBeInTheDocument();
    expect(screen.getByText('Requested Time of Day:')).toBeInTheDocument();
    expect(screen.getByText('Morning')).toBeInTheDocument();
    expect(screen.getByText('Assigned Agent:')).toBeInTheDocument();
    expect(screen.getByText('Ryan Bruns')).toBeInTheDocument();
    expect(screen.getByText('Time Zone:')).toBeInTheDocument();
    expect(screen.getByText('EDT')).toBeInTheDocument();
  });
});
