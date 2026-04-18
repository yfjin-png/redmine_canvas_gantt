import { describe, expect, it, vi } from 'vitest';
import { convertStrftimeToDateFns, getYearMonthFormat } from './dateUtils';

describe('dateUtils', () => {
    describe('convertStrftimeToDateFns', () => {
        it('converts common Redmine strftime tokens to date-fns tokens', () => {
            expect(convertStrftimeToDateFns('%Y-%m-%d')).toBe('yyyy-MM-dd');
            expect(convertStrftimeToDateFns('%d/%m/%Y')).toBe('dd/MM/yyyy');
            expect(convertStrftimeToDateFns('%Y年%m月%d日')).toBe('yyyy年MM月dd日');
        });
    });

    describe('getYearMonthFormat', () => {
        it('derives month-year format from full date format', () => {
            // Mock global window object
            vi.stubGlobal('RedmineCanvasGantt', {
                dateFormat: '%Y-%m-%d'
            });
            expect(getYearMonthFormat()).toBe('yyyy-MM');

            vi.stubGlobal('RedmineCanvasGantt', {
                dateFormat: '%d/%m/%Y'
            });
            expect(getYearMonthFormat()).toBe('MM/yyyy');

            vi.stubGlobal('RedmineCanvasGantt', {
                dateFormat: '%m-%d-%Y'
            });
            expect(getYearMonthFormat()).toBe('MM-yyyy');
            
            vi.unstubAllGlobals();
        });
    });
});
