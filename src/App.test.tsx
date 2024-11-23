import { render, screen } from '@testing-library/react';
import App from './App';
import {describe, it, expect} from 'vitest';
describe('App', () => {
	it('renders heading element', () => {
		render(<App />);
		const headingElement = screen.getByText(/Shadcn UI Integration/i);
		expect(headingElement).toBeInTheDocument();
	});
});