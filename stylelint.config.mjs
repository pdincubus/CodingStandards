export default {
    "extends": [
        "stylelint-config-standard",
        "stylelint-config-idiomatic-order"
    ],
    "plugins": [
        "stylelint-no-browser-hacks",
        "stylelint-media-use-custom-media",
        "stylelint-high-performance-animation",
        "stylelint-plugin-logical-css",
        "stylelint-plugin-use-baseline"
    ],
    "rules": {
        "plugin/no-browser-hacks": [true],
        "csstools/media-use-custom-media": [
            "always-known",
            {
                "importFrom": [
                    "src/site/css/settings/media.css"
                ]
            }
        ],
        "plugin/no-low-performance-animation-properties": [
            true,
            {
                "ignoreProperties": [
                    "block-size",
                    "background-color",
                    "border-color",
                    "outline-color",
                    "color"
                ]
            }
        ],
        "plugin/use-logical-properties-and-values": [
            true,
            {
                "severity": "warning"
            }
        ],
        "plugin/use-logical-units": [
            true,
            {
                "severity": "warning"
            }
        ],
        "plugin/use-baseline": [
            true,
            {
                "available": 2024
            }
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: [
                    'extend',          // your legacy exception
                    'container',
                    'layer',
                    'starting-style',
                    'when',
                    'else'
                ]
            }
        ],
        'media-feature-range-notation': 'range',
        'color-function-notation': 'modern',
        'unit-allowed-list': [
            '%',
            'px',
            's',
            'ms',
            'fr',
            'deg',
            'rem',
            'dvh',
            'dvw',
            'svh',
            'svw',
            'lvh',
            'lvw'
        ],
        "selector-class-pattern": [null],
        "custom-property-empty-line-before": [
            "always",
            {
                "except": [
                    "after-comment",
                    "first-nested",
                    "after-custom-property"
                ]
            }
        ],
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "extend"
                ]
            }
        ],
        "at-rule-empty-line-before": [
            "always",
            {
                "ignore": [
                    "after-comment",
                    "blockless-after-blockless",
                    "inside-block"
                ]
            }
        ],
        "no-empty-source": [
            true,
            {
                "severity": "warning"
            }
        ],
        "no-descending-specificity": [null]
    }
};