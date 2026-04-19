export type TrackerIconKind = 'todo' | 'defect' | 'ticket' | 'document' | 'milestone' | 'link';

export type TrackerIconMap = Partial<Record<number, TrackerIconKind>>;

const DEFAULT_TRACKER_ICON_KIND: TrackerIconKind = 'ticket';

const TRACKER_ICON_KIND_SET = new Set<TrackerIconKind>(['todo', 'defect', 'ticket', 'document', 'milestone', 'link']);

const TRACKER_NAME_KEYWORDS: Record<'defect' | 'todo', string[]> = {
    defect: ['bug', 'defect', '不具合', '障害', '欠陥'],
    todo: ['task', 'todo', 'タスク', '作業', 'ToDo']
};

export const normalizeTrackerIconKind = (value: unknown): TrackerIconKind | null => {
    if (typeof value !== 'string') return null;
    let normalized = value.trim().toLowerCase();
    
    // Map legacy aliases to new vocabulary
    if (normalized === 'bug') normalized = 'defect';
    if (normalized === 'task') normalized = 'todo';
    if (normalized === 'feature' || normalized === 'support') normalized = 'ticket';
    
    return TRACKER_ICON_KIND_SET.has(normalized as TrackerIconKind) ? (normalized as TrackerIconKind) : null;
};

const parseTrackerIconMapObject = (raw: unknown): TrackerIconMap => {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};

    return Object.entries(raw as Record<string, unknown>).reduce<TrackerIconMap>((acc, [key, kindValue]) => {
        const trackerId = Number(key);
        const kind = normalizeTrackerIconKind(kindValue);
        if (Number.isInteger(trackerId) && trackerId > 0 && kind) {
            acc[trackerId] = kind;
        }
        return acc;
    }, {});
};

export const parseTrackerIconMap = (value: unknown): TrackerIconMap => {
    if (!value) return {};

    if (typeof value === 'string') {
        try {
            return parseTrackerIconMapObject(JSON.parse(value) as unknown);
        } catch {
            return {};
        }
    }

    return parseTrackerIconMapObject(value);
};

const matchesTrackerName = (trackerName: string | undefined, kind: keyof typeof TRACKER_NAME_KEYWORDS) => {
    const lowerName = trackerName?.trim().toLowerCase() ?? '';
    return TRACKER_NAME_KEYWORDS[kind].some((keyword) => lowerName.includes(keyword.toLowerCase()));
};

export const resolveTrackerIconKind = (
    trackerId: number | undefined,
    trackerName: string | undefined,
    trackerIconMap: TrackerIconMap = {}
): TrackerIconKind => {
    if (typeof trackerId === 'number' && Number.isFinite(trackerId)) {
        const mapped = trackerIconMap[trackerId];
        if (mapped) {
            return mapped;
        }
    }

    if (matchesTrackerName(trackerName, 'defect')) return 'defect';
    if (matchesTrackerName(trackerName, 'todo')) return 'todo';

    return DEFAULT_TRACKER_ICON_KIND;
};
