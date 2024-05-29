import { fireEvent, render, screen } from '@testing-library/react';
import CareNavigatorView from '../components/CareNavigatorView';
import { mockData } from './mockData';

const collapsedSections = new Set<string>();

describe('CareNavigatorView Component', () => {
  test('renders the chief complaint', () => {
    render(<CareNavigatorView data={mockData} collapsedSections={collapsedSections} toggleCollapse={jest.fn()} />);
    
    expect(screen.getByText('Chief Complaint')).toBeInTheDocument();
    const chiefComplaintParagraphs = screen.queryAllByText(mockData.miraOSsummary.chiefComplaint);
    expect(chiefComplaintParagraphs.length).toBeGreaterThan(0);
  });

  test('renders the Condition Category, Triage Level, and Mira Care Options', () => {
    render(<CareNavigatorView data={mockData} collapsedSections={collapsedSections} toggleCollapse={jest.fn()} />);
    
    expect(screen.getByText('Condition Category')).toBeInTheDocument();
    expect(screen.getByText(mockData.miraOSsummary.conditionCategory)).toBeInTheDocument();
    expect(screen.getByText('Triage Level')).toBeInTheDocument();
    expect(screen.getByText(mockData.miraOSsummary.triageLevel.join(', '))).toBeInTheDocument();
    expect(screen.getByText('Mira Care Options')).toBeInTheDocument();
    expect(screen.getByText('Virtual Primary Care: A virtual consultation can help confirm the diagnosis and provide additional care instructions.')).toBeInTheDocument();
  });

  test('renders the collapsible sections', () => {
    render(<CareNavigatorView data={mockData} collapsedSections={collapsedSections} toggleCollapse={jest.fn()} />);
    
    expect(screen.getByText('Diagnostic')).toBeInTheDocument();
    expect(screen.getByText('Self-Care Tips')).toBeInTheDocument();
    expect(screen.getByText('Intake')).toBeInTheDocument();
    expect(screen.getByText('Patient History')).toBeInTheDocument();
  });

  test('toggles collapsible sections', () => {
    render(<CareNavigatorView data={mockData} collapsedSections={collapsedSections} toggleCollapse={jest.fn()} />);
    
    const diagnosticSection = screen.getByTestId('diagnostic-content');
    fireEvent.click(diagnosticSection);
    expect(diagnosticSection).toHaveTextContent('Rapid strep test');
    expect(diagnosticSection).toHaveTextContent('Throat culture');
  
    const selfCareTipsSection = screen.getByTestId('self-care-tips-content');
    fireEvent.click(selfCareTipsSection);
    expect(selfCareTipsSection).toHaveTextContent(mockData.selfCareTips);
    expect(selfCareTipsSection).toHaveTextContent('Ibuprofen');
    expect(selfCareTipsSection).toHaveTextContent('Acetaminophen');
  });

  test('renders buttons and handles click events', () => {
    render(<CareNavigatorView data={mockData} collapsedSections={collapsedSections} toggleCollapse={jest.fn()} />);
    
    const sendCareOptionsButton = screen.getByText('Send Care Options');
    const cancelOrderButton = screen.getByText('Cancel Order');
    
    expect(sendCareOptionsButton).toBeInTheDocument();
    expect(cancelOrderButton).toBeInTheDocument();
    
    fireEvent.click(sendCareOptionsButton);
    fireEvent.click(cancelOrderButton);
  });
});