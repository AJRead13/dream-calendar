import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DreamFeed from './DreamFeed';

// Mock the fetch function
jest.mock('node-fetch');

describe('DreamFeed Component', () => {
  it('renders the DreamFeed component', () => {
    render(<DreamFeed />);
    expect(screen.getByText('Dream Feed')).toBeInTheDocument();
  });

  it('fetches and renders dreams from the API', async () => {
    // Mock the response from the API
    const mockDreams = [
      { id: 1, username: 'user1', content: 'Dream 1', comments: [] },
      { id: 2, username: 'user2', content: 'Dream 2', comments: [] },
    ];
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockDreams,
    });

    render(<DreamFeed />);

    // Wait for the dreams to be rendered
    await waitFor(() => {
      expect(screen.getByText('Dream 1')).toBeInTheDocument();
      expect(screen.getByText('Dream 2')).toBeInTheDocument();
    });
  });

    it('submits a dream when the form is submitted', async () => {
        // Mock the response from the API
        const mockDream = { id: 3, username: 'user3', content: 'Test dream', comments: [] };
        jest.spyOn(global, 'fetch').mockResolvedValueOnce({
        json: async () => mockDream,
        });
    
        render(<DreamFeed />);
        const textarea = screen.getByPlaceholderText('Share your dream...');
        fireEvent.change(textarea, { target: { value: 'Test dream' } });
    
        fireEvent.submit(screen.getByRole('form'));
    
        // Wait for the dream to be submitted
        await screen.findByText('Test dream');
    
        expect(global.fetch).toHaveBeenCalledWith('yourApiEndpoint/dreams', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: 'Test dream',
        }),
        });
    });
});
