import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';
import { StateProvider } from './store';

jest.mock('axios', () => jest.fn());

afterEach(() => {
  window.history.replaceState({}, '', '/');
});

test('opens the real pre-checkin flow without contacting the booking API', () => {
  window.history.replaceState({}, '', '/home/lv');
  const { getByText, getByPlaceholderText } = render(
    <StateProvider><App /></StateProvider>
  );
  fireEvent.click(getByText(/tap here to start pre-checkin/i));
  expect(window.location.pathname).toBe('/login/lv');
  expect(getByText('Enter booking ID')).toBeInTheDocument();
  expect(getByPlaceholderText("Enter customer's first name")).toBeInTheDocument();
});

test('redirects an invalid location to the default pre-checkin screen', () => {
  window.history.replaceState({}, '', '/home/invalid');
  const { getByText } = render(<StateProvider><App /></StateProvider>);
  expect(window.location.pathname).toBe('/home/lv');
  expect(getByText(/tap here to start pre-checkin/i)).toBeInTheDocument();
});
