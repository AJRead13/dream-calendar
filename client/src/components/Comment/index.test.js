import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommentForm from './CommentForm';

// Mock the fetch function
jest.mock('node-fetch');

describe('CommentForm Component', () => {
  it('renders the CommentForm component', () => {
    render(<CommentForm />);
    expect(screen.getByPlaceholderText('Add a comment...')).toBeInTheDocument();
  });

  it('updates the comment text as the user types', () => {
    render(<CommentForm />);
    const textarea = screen.getByPlaceholderText('Add a comment...');
    fireEvent.change(textarea, { target: { value: 'This is a test comment.' } });
    expect(textarea.value).toBe('This is a test comment.');
  });

  it('submits a comment when the form is submitted', async () => {
    // Mock the response from the API
    const mockComment = { id: 1, username: 'user1', text: 'Test comment' };
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: async () => mockComment,
    });

    render(<CommentForm dreamId={1} />);
    const textarea = screen.getByPlaceholderText('Add a comment...');
    fireEvent.change(textarea, { target: { value: 'Test comment' } });

    fireEvent.submit(screen.getByRole('form'));

    // Wait for the comment to be submitted
    await screen.findByText('Test comment');

    expect(global.fetch).toHaveBeenCalledWith('yourApiEndpoint/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        dreamId: 1,
        text: 'Test comment',
      }),
    });
  });

    it('does not submit a comment when the form is submitted with an empty comment', async () => {
        render(<CommentForm dreamId={1} />);
        fireEvent.submit(screen.getByRole('form'));
        expect(global.fetch).not.toHaveBeenCalled();
    });

  
});
