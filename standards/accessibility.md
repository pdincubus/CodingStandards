# Accessibility standard

Principles
- Keyboard first. Everything works with a keyboard.
- Screen reader support for core flows.
- Clear, visible focus.

WCAG 2.2 alignment
- Map success criteria to ticket templates.
- Include manual checks for forms, focus, and semantics.

Targets
| Use case | Target |
| --- | --- |
| Body text 14–24px regular | ≥ 75 |
| Large text 24px regular or 18.66px bold | ≥ 60 |
| UI controls and icons | ≥ 75 |
| Non-text UI boundaries | ≥ 60 |

Assistive tech smoke tests
- Windows, NVDA with Firefox.
- Windows, JAWS with Chrome or Edge.
- macOS, VoiceOver with Safari.
- iOS, VoiceOver with Safari.
- Android, TalkBack with Chrome.

Forms
- Labels, help, and errors linked.
- Clear error messaging and summaries.
- Input hints with `inputmode` and `autocomplete`.

Focus management
- Skip links and landmarks.
- Return focus after closing overlays.

Media
- Captions for video. Transcripts for audio.
