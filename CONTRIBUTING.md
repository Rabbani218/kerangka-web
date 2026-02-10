# Contributing to Kerangka Web

Thank you for your interest in contributing to Kerangka Web! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions. We are committed to providing a welcoming and inclusive environment.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/device information
- Screenshots if applicable

### Suggesting Features

Feature suggestions are welcome! Please include:
- Clear description of the feature
- Use cases and benefits
- Possible implementation approach
- Examples if applicable

### Submitting Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/kerangka-web.git
   cd kerangka-web
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow code style guidelines (see below)
   - Keep commits atomic and descriptive
   - Test thoroughly before submitting

4. **Commit with clear messages**
   ```bash
   git commit -m "Add feature: clear description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide clear description
   - Link related issues
   - Describe testing performed
   - Screenshots for UI changes

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- Proper indentation (4 spaces)
- Descriptive class and id names
- Include comments for complex sections

### CSS
- Follow BEM methodology for class names
- Use meaningful color variables
- Keep stylesheets organized
- Mobile-first approach
- Add comments for complex styles

### JavaScript
- Use vanilla JavaScript (no frameworks required)
- Clear, descriptive variable/function names
- Add comments for complex logic
- Use const/let instead of var
- Keep functions focused and small
- Handle errors gracefully

### Example Code Style

```html
<!-- Good: Semantic HTML with descriptive names -->
<div class="editor-container">
    <aside class="editor-sidebar">
        <h2>Components</h2>
    </aside>
    <main class="editor-canvas">
        <!-- Content -->
    </main>
</div>
```

```css
/* Good: Organized and commented CSS */
.editor-container {
    display: flex;
    height: 100vh;
    gap: 0;
    /* Main editor layout - flex row */
}

.editor-sidebar {
    width: 300px;
    background: #242424;
    /* Sidebar styling */
}
```

```javascript
// Good: Clear, descriptive JavaScript
function addComponentToCanvas(componentType) {
    // Create element from type
    const element = createElementFromType(componentType);
    
    // Add to canvas
    canvas.appendChild(element);
    
    // Save to history for undo/redo
    saveHistory();
    
    // Select the new element
    selectElement(element);
}
```

## Testing

Before submitting a PR:

1. **Test in multiple browsers**
   - Chrome 80+
   - Firefox 75+
   - Safari 13+
   - Edge 80+

2. **Test on different devices**
   - Desktop (1920x1080)
   - Laptop (1366x768)
   - Tablet (768x1024)
   - Mobile (375x667)

3. **Check console for errors**
   - Open DevTools
   - Check console tab
   - Ensure no errors/warnings

4. **Test functionality**
   - All editors work
   - Export functions work
   - Navigation works
   - No broken links

## Documentation

When adding features:

1. Update relevant documentation files
2. Add comments to code
3. Update CHANGELOG.md
4. Include usage examples
5. Update this file if needed

## Development Setup

### Local Testing
```bash
# Clone repository
git clone https://github.com/Rabbani218/kerangka-web.git
cd kerangka-web

# Start local server (Python)
python -m http.server 8000

# Or use Node.js
npx http-server

# Open browser
# http://localhost:8000
```

### File Structure
```
kerangka-web/
├── *.html              # Page files
├── font/               # Font assets
├── README.md           # Overview
├── EDITOR_GUIDE.md     # Editor documentation
├── vercel.json         # Vercel config
└── .gitignore          # Git ignore rules
```

## Commit Message Guidelines

Format: `<type>(<scope>): <subject>`

Types:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style (no logic change)
- `refactor:` Code refactoring
- `perf:` Performance improvement
- `test:` Adding tests
- `chore:` Maintenance

Examples:
```
feat(editor): add custom CSS support
fix(builder): fix drag-drop on mobile
docs(guide): update editor guide with new features
perf(preview): optimize real-time update speed
```

## Pull Request Checklist

Before submitting:

- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] No console errors/warnings
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices
- [ ] Commit messages are clear
- [ ] No unnecessary files added
- [ ] Changes are focused and atomic

## Review Process

1. **Automated checks** - Tests and linting run automatically
2. **Manual review** - Code reviewed for quality and style
3. **Feedback** - Comments and suggestions provided
4. **Revisions** - Make requested changes
5. **Approval** - PR approved and merged

## Getting Help

- 📖 Check documentation
- 🔍 Search existing issues
- 💬 Create a discussion
- 📧 Contact maintainers

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

## Recognition

Contributors are recognized in:
- README.md acknowledgments section
- GitHub contributors page
- Release notes

Thank you for contributing to make Kerangka Web better! 🎉
