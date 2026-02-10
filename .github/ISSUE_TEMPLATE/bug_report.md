name: Bug Report
description: Report a bug to help improve Kerangka Web
title: "[BUG] "
labels: ["bug"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out a bug report!

  - type: textarea
    id: description
    attributes:
      label: Describe the bug
      description: A clear and concise description of what the bug is
      placeholder: When I do X, Y happens instead of Z
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to reproduce
      description: Steps to reproduce the behavior
      placeholder: |
        1. Go to '...'
        2. Click on '...'
        3. See the error
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected behavior
      description: A clear description of what you expected to happen
      placeholder: The page should display correctly
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: Actual behavior
      description: What actually happened
      placeholder: The page displays incorrectly
    validations:
      required: true

  - type: dropdown
    id: browser
    attributes:
      label: Browser
      options:
        - Chrome
        - Firefox
        - Safari
        - Edge
        - Opera
        - Other
    validations:
      required: true

  - type: input
    id: browser_version
    attributes:
      label: Browser Version
      placeholder: "e.g., 90.0.1234"
    validations:
      required: false

  - type: dropdown
    id: device
    attributes:
      label: Device/Screen Size
      options:
        - Desktop (1920x1080+)
        - Laptop (1366x768)
        - Tablet (768x1024)
        - Mobile (375x667)
        - Other
    validations:
      required: true

  - type: textarea
    id: screenshots
    attributes:
      label: Screenshots
      description: If applicable, add screenshots to help explain the problem
      placeholder: You can drag and drop images here
    validations:
      required: false

  - type: textarea
    id: console_errors
    attributes:
      label: Console errors
      description: Any errors from browser console (F12 → Console tab)
      placeholder: |
        Error message here
      render: javascript
    validations:
      required: false

  - type: textarea
    id: additional
    attributes:
      label: Additional context
      description: Add any other context about the problem
      placeholder: Any additional information that might help
    validations:
      required: false
