const spriteStyle = {
    position: 'absolute',
    width: 0,
    height: 0,
    overflow: 'hidden',
    pointerEvents: 'none'
} as const;

export const SvgSpriteDefs = () => (
    <svg aria-hidden="true" focusable="false" style={spriteStyle}>
        <defs>
            <symbol id="rcg-icon-notification-unscheduled" viewBox="0 0 24 24">
                <circle cx="12" cy="12" fill="none" r="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M12 8v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <circle cx="12" cy="16" fill="currentColor" r="1.5" />
            </symbol>
            <symbol id="rcg-icon-notification-warning" viewBox="0 0 24 24">
                <path d="M12 4 20 19H4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M12 9v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <circle cx="12" cy="16" fill="currentColor" r="1.4" />
            </symbol>
            <symbol id="rcg-icon-notification-critical" viewBox="0 0 24 24">
                <path d="M10 13a4 4 0 0 0 5.66 0l2.12-2.12a4 4 0 0 0-5.66-5.66L10.5 6.84" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M14 11a4 4 0 0 0-5.66 0l-2.12 2.12a4 4 0 0 0 5.66 5.66l1.62-1.62" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M12 8.5 10.8 12h2.05L11.7 15.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </symbol>
            <symbol id="rcg-icon-todo" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="6" fill="currentColor" />
                <rect x="3" y="3" width="18" height="18" rx="6" fill="none" stroke="white" strokeWidth="1.5" />
                <path d="M 8.5 12 L 11 14.5 L 16 9.5" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>
            <symbol id="rcg-icon-defect" viewBox="0 0 24 24">
                <path
                    d="M12 1.5 L14.9 5.5 L19.4 4.6 L18.5 9.1 L22.5 12 L18.5 14.9 L19.4 19.4 L14.9 18.5 L12 22.5 L9.1 18.5 L4.6 19.4 L5.5 14.9 L1.5 12 L5.5 9.1 L4.6 4.6 L9.1 5.5 Z"
                    fill="currentColor"
                />
                <path
                    d="M12 1.5 L14.9 5.5 L19.4 4.6 L18.5 9.1 L22.5 12 L18.5 14.9 L19.4 19.4 L14.9 18.5 L12 22.5 L9.1 18.5 L4.6 19.4 L5.5 14.9 L1.5 12 L5.5 9.1 L4.6 4.6 L9.1 5.5 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="1.5" fill="white" />
            </symbol>
            <symbol id="rcg-icon-document" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor" />
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="white" strokeWidth="1.5" />
                <path d="M14 2v6h6M8 13h8M8 17h5" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </symbol>
            <symbol id="rcg-icon-milestone" viewBox="0 0 24 24">
                <path d="M12 4L20 12L12 20L4 12Z" fill="currentColor" />
                <path d="M12 4L20 12L12 20L4 12Z" fill="none" stroke="white" strokeWidth="1.5" />
            </symbol>
            <symbol id="rcg-icon-ticket" viewBox="0 0 24 24">
                <rect x="3" y="5" width="18" height="14" rx="3.5" fill="currentColor" />
                <rect x="3" y="5" width="18" height="14" rx="3.5" fill="none" stroke="white" strokeWidth="1.5" />
                <path d="M 3 10 A 2 2 0 0 1 3 14" fill="none" stroke="white" strokeWidth="1.5" />
                <path d="M 8 10 H 17" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </symbol>
            <symbol id="rcg-icon-info" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8.5" fill="currentColor" />
                <circle cx="12" cy="12" r="8.5" fill="none" stroke="white" strokeWidth="1.5" />
                <path d="M 12 8 L 12 12.5" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="16" r="1.2" fill="white" />
            </symbol>
            <symbol id="rcg-icon-warning" viewBox="0 0 24 24">
                <path d="M12 3.5L21 19.5H3L12 3.5Z" fill="currentColor" />
                <path d="M12 3.5L21 19.5H3L12 3.5Z" fill="none" stroke="white" strokeWidth="1.5" />
                <path d="M 12 10 L 12 14" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="17" r="1.2" fill="white" />
            </symbol>
            <symbol id="rcg-icon-link" viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71z" fill="currentColor" />
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71z" fill="none" stroke="white" strokeWidth="1.5" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71z" fill="currentColor" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71z" fill="none" stroke="white" strokeWidth="1.5" />
            </symbol>
        </defs>
    </svg>
);
