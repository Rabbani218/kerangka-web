name: Feature Request
description: Suggest a new feature for Kerangka Web
title: "[FEATURE] "
labels: ["enhancement"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        Thanks for suggesting a feature! Let's make Kerangka Web even better.

  - type: textarea
    id: description
    attributes:
      label: Describe the feature
      description: A clear and concise description of the feature you'd like
      placeholder: I would like to...
    validations:
      required: true

  - type: textarea
    id: motivation
    attributes:
      label: Motivation
      description: Why is this feature needed? What problem does it solve?
      placeholder: This feature would be useful for...
    validations:
      required: true

  - type: textarea
    id: use_case
    attributes:
      label: Use cases
      description: Real-world use cases for this feature
      placeholder: |
        - Use case 1
        - Use case 2
    validations:
      required: true

  - type: textarea
    id: implementation
    attributes:
      label: Possible implementation
      description: How might this feature be implemented?
      placeholder: This could be done by...
    validations:
      required: false

  - type: textarea
    id: examples
    attributes:
      label: Examples
      description: Examples or mockups if applicable
      placeholder: You can add screenshots, wireframes, or code examples here
    validations:
      required: false

  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives
      description: Are there alternative solutions or features to consider?
      placeholder: Other approaches could include...
    validations:
      required: false
