import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TrackerIcon } from './trackerIcon';
import { parseTrackerIconMap, resolveTrackerIconKind } from './trackerIconUtils';

describe('trackerIcon', () => {
    it('parses tracker icon map JSON strings', () => {
        expect(parseTrackerIconMap('{"7":"defect","8":"ticket","9":"todo","10":"unknown"}')).toEqual({
            7: 'defect',
            8: 'ticket',
            9: 'todo'
        });
    });

    it('prefers trackerId mappings over tracker name fallback', () => {
        expect(resolveTrackerIconKind(7, '機能', { 7: 'bug' as any })).toBe('defect');
    });

    it('falls back to tracker name keywords and then ticket', () => {
        expect(resolveTrackerIconKind(undefined, '不具合')).toBe('defect');
        expect(resolveTrackerIconKind(undefined, 'タスク')).toBe('todo');
        expect(resolveTrackerIconKind(undefined, 'custom tracker')).toBe('ticket');
    });

    it('renders the requested icon kind', () => {
        render(<TrackerIcon kind="ticket" />);
        expect(screen.getByTestId('tracker-icon-ticket')).toBeInTheDocument();
    });
});
