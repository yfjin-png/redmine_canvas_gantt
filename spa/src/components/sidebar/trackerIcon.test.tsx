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

    it('translates legacy map values to modern terminology', () => {
        expect(parseTrackerIconMap('{"7":"bug","8":"feature","9":"task"}')).toEqual({
            7: 'defect',
            8: 'ticket',
            9: 'todo'
        });
    });

    it('prefers trackerId mappings over tracker name fallback', () => {
        expect(resolveTrackerIconKind(7, '機能', { 7: 'defect' })).toBe('defect');
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
