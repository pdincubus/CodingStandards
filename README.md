# Plusnet Standards

## Our standards

* [CSS standard](CSS-standard.md)
* [Javascript standard](Javascript-standard.md)
    - [Common ES6 Features](Javascript-Common-ES6-Features.md)
    - [Switching From jQuery to Vanilla Javascript](Javascript-Switching-From-jQuery-to-Vanilla-Javascript.md)
* [React/JSX standard](React-JSX-standard.md)
* [HTML standard](HTML-standard.md)
* [Technology whitelist and blacklist](technology.md)

## Sublime Text niceties

If you're using Sublime as your editor-of-choice, you can add a few settings to help you out. You can quickly set your ruler guides to help you keep your line lengths within limits:

```
"rulers":
[
    0,
    12,
    80
],
```

This will add a ruler at 3 soft tabs (for avoiding deep nesting in CSS), 80 characters (for JS, CSS line lengths). Other useful recommended settings:

```
"default_encoding": "UTF-8",
"default_line_ending": "unix",
"detect_indentation": false,
"dictionary": "Packages/Language - English/en_GB.dic",
"drag_text": false,
"draw_white_space": "all",
"ensure_newline_at_eof_on_save": true,
"fallback_encoding": "UTF-8",
"file_exclude_patterns":
[
    "*.pyc",
    "*.pyo",
    "*.exe",
    "*.dll",
    "*.obj",
    "*.o",
    "*.a",
    "*.lib",
    "*.so",
    "*.dylib",
    "*.ncb",
    "*.sdf",
    "*.suo",
    "*.pdb",
    "*.idb",
    ".DS_Store",
    "*.class",
    "*.psd",
    "*.db",
    "*.sublime-workspace",
    "yarn.lock"
],
"folder_exclude_patterns":
[
    ".svn",
    ".git",
    ".hg",
    "CVS",
    "node_modules"
],
"gutter": true,
"highlight_line": true,
"highlight_modified_tabs": true,
"indent_guide_options":
[
    "draw_normal",
    "draw_active"
],
"indent_subsequent_lines": true,
"line_numbers": true,
"line_padding_bottom": 4,
"line_padding_top": 3,
"margin": 4,
"match_brackets": true,
"match_brackets_braces": true,
"match_brackets_content": true,
"match_brackets_square": true,
"match_bracktets_angle": true,
"match_tags": true,
"scroll_past_end": false,
"shift_tab_unindent": true,
"show_line_endings": true,
"smart_indent": true,
"tab_size": 4,
"trailing_spaces_file_max_size": 1000,
"trailing_spaces_highlight_color": "invalid",
"translate_tabs_to_spaces": true,
"trim_trailing_white_space_on_save": true,
"use_tab_stops": true,
"word_separators": "./\\()\"'-:,.;<>~!@#$Â£â‚¬#Â¢âˆžÂ§Â¶â€¢ÂªÂºâ€“â‰ Â§Â±%^&*|+=[]{}`~?_",
"word_wrap": false
```

## Editor config

An [`.editorconfig`](https://editorconfig.org/) file should be present in any repository you work on. This will attempt to set your editor-of-choice to use the following defaults:

```
# editorconfig.org
root = true

[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.{yml, yaml}]
indent_size = 2
```

## Contributing

These standards are meant to be a 'living' set of documents that will evolve over time. If you have any suggestions, corrections or updates please create a JIRA task on the [FRONT](https://jira.int.plus.net/secure/RapidBoard.jspa?rapidView=770&projectKey=FRONT&view=planning.nodetail&selectedIssue=FRONT-15&epics=visible) board under the [Linting and standards](https://jira.int.plus.net/browse/FRONT-5) epic to promote discussion.

To submit changes to the documents, please create a feature branch from `develop` in the standard Plusnet format `feature-FRONT-[task ID]-[your initials]-[PascalCase descriptive name]` and reference it in your JIRA task so it can be reviewed.
