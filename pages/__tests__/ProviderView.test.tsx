import { fireEvent, render, screen } from '@testing-library/react';
import ProviderView from '../components/ProviderView';
import { mockData } from './mockData';

const collapsedSections = new Set<string>();

describe('ProviderView Component', () => {
  test('renders the chief complaint', () => {
    render(<ProviderView data={mockData} collapsedSections={collapsedSections} toggleCollapse={jest.fn()} />);
    
    expect(screen.getByText('Chief Complaint')).toBeInTheDocument();
    const chiefComplaintParagraphs = screen.queryAllByText(mockData.miraOSsummary.chiefComplaint);
    expect(chiefComplaintParagraphs.length).toBeGreaterThan(0);
  });

  test('renders the Mira AI section with diagnosis details', () => {
    render(<ProviderView data={mockData} collapsedSections={collapsedSections} toggleCollapse={jest.fn()} />);
    
    expect(screen.getByText('Mira AI')).toBeInTheDocument();
    expect(screen.getByText('Diagnosis:')).toBeInTheDocument();
    expect(screen.getByText(mockData.miraOSsummary.dx[0].diagnosis)).toBeInTheDocument();
    expect(screen.getByText('Probability:')).toBeInTheDocument();
    expect(screen.getByText(mockData.miraOSsummary.dx[0].probability)).toBeInTheDocument();
    expect(screen.getByText('ICD10CM Code:')).toBeInTheDocument();
    expect(screen.getByText(mockData.miraOSsummary.dx[0].ICD10CMCode)).toBeInTheDocument();
  });

  test('renders the Treatment Plan section', () => {
    render(<ProviderView data={mockData} collapsedSections={collapsedSections} toggleCollapse={jest.fn()} />);
    
    expect(screen.getByText('Treatment Plan')).toBeInTheDocument();
    expect(screen.getByText('Provider Name:')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type Visit Summary')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add Treatment Plan')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add Patient Message')).toBeInTheDocument();
  });

  test('collapsible sections work correctly', () => {
    render(<ProviderView data={mockData} collapsedSections={collapsedSections} toggleCollapse={jest.fn()} />);
    
    const intakeSection = screen.getByText('Intake');
    const patientHistorySection = screen.getByText('Patient History');
    
    expect(intakeSection).toBeInTheDocument();
    expect(patientHistorySection).toBeInTheDocument();
    
    fireEvent.click(intakeSection);
    expect(screen.getByText(/Symptoms:/)).toBeInTheDocument();
  });
});
