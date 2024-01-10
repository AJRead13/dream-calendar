import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calendar from './Calendar';

describe('Calendar Component', () => {
  it('renders without crashing', () => {
    render(<Calendar />);
    expect(screen.getByText('Dream 1')).toBeInTheDocument();
   
  });

  it('displays modal on button click', () => {
    render(<Calendar />);
    fireEvent.click(screen.getByText('Dream 1'));
    expect(screen.getByText('2024-01-06')).toBeInTheDocument();
    
  });

  it('closes modal when "Close" button is clicked', () => {
    render(<Calendar />);
    fireEvent.click(screen.getByText('Dream 1')); 
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByText('2024-01-06')).not.toBeInTheDocument();
    
  });

  // Add more test cases as needed based on your component functionality

});
