# 📁 Kerangka Web - Project Structure

## Overview
Kerangka Web menggunakan struktur folder yang terorganisir dan mengikuti best practices untuk proyek web modern.

## Directory Structure

```
kerangka-web/
├── 📄 index.html              # Landing page / Home
├── 📄 utama.html              # Main application menu
│
├── 📁 css/                    # Stylesheets
│   ├── global.css            # Global styles & variables
│   └── responsive.css        # Responsive utilities & breakpoints
│
├── 📁 js/                     # JavaScript modules
│   ├── navigation.js         # Navigation utilities & mobile menu
│   └── form-utils.js         # Form validation & helpers
│
├── 📁 pages/                  # Application pages
│   ├── admin.html            # Admin panel
│   ├── editor.html           # Visual CSS editor
│   ├── layout-builder.html   # Drag-and-drop layout builder
│   ├── test-dashboard.html   # Testing dashboard
│   ├── user-form.html        # User queue intake form
│   ├── user-character.html   # Character selection
│   ├── user-options.html     # User options
│   ├── user-success.html     # Success confirmation
│   └── user-tiny.html        # Minimal UI
│
├── 📁 assets/                 # Static assets
│   └── fonts/                # Custom fonts
│
├── 📁 .github/                # GitHub configuration
│   ├── workflows/            # GitHub Actions
│   │   ├── deploy.yml       # Deployment workflow
│   │   └── quality.yml      # Quality checks
│   ├── ISSUE_TEMPLATE/       # Issue templates
│   └── pull_request_template.md
│
└── 📁 docs/                   # Documentation files
    ├── README.md
    ├── EDITOR_GUIDE.md
    ├── CONTRIBUTING.md
    ├── CHANGELOG.md
    └── etc.
```

## Folder Details

### `/css` - Stylesheets
Contains all CSS files organized by purpose:

- **`global.css`** - Base styles, CSS variables, typography, layout utilities, button styles, form elements, responsive breakpoints
- **`responsive.css`** - Responsive utilities, visibility classes, grid system, mobile optimizations, touch optimizations

**Benefits:**
- Centralized styling
- Easy theme customization via CSS variables
- Mobile-first responsive design
- Reusable utility classes

### `/js` - JavaScript Modules
Contains JavaScript functionality organized into modules:

- **`navigation.js`** - Global navigation functions, mobile menu, back/home buttons
- **`form-utils.js`** - Form validation, input formatting, localStorage helpers

**Benefits:**
- Modular and maintainable code
- Reusable across multiple pages
- Easy to test and debug
- No duplication

### `/pages` - Application Pages
All HTML pages except entry points (index.html, utama.html):

**Benefits:**
- Clean root directory
- Easy to navigate and maintain
- Clear separation of concerns
- Scalable structure

### `/assets` - Static Assets
Static files like fonts, images, icons:

**Benefits:**
- Organized asset management
- Easy to update and replace
- Better caching strategy
- CDN-ready structure

## Path References

### From Root (index.html, utama.html)
```html
<!-- CSS -->
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/responsive.css">

<!-- JavaScript -->
<script src="js/navigation.js"></script>
<script src="js/form-utils.js"></script>

<!-- Pages -->
<a href="pages/admin.html">Admin</a>
<a href="pages/editor.html">Editor</a>
```

### From Pages (/pages/*.html)
```html
<!-- CSS -->
<link rel="stylesheet" href="../css/global.css">
<link rel="stylesheet" href="../css/responsive.css">

<!-- JavaScript -->
<script src="../js/navigation.js"></script>
<script src="../js/form-utils.js"></script>

<!-- Other Pages -->
<a href="admin.html">Admin</a>
<a href="editor.html">Editor</a>

<!-- Back to Root -->
<a href="../index.html">Home</a>
<a href="../utama.html">Main Menu</a>
```

## Responsive Design

### Breakpoints
```css
/* Mobile First (default) */
Base styles: < 768px

/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Large Desktop */
@media (min-width: 1440px) { ... }
```

### Utility Classes
```html
<!-- Visibility -->
<div class="hide-mobile">Hidden on mobile</div>
<div class="show-mobile">Visible on mobile only</div>

<!-- Grid -->
<div class="grid grid-2-cols">...</div>
<div class="grid grid-3-cols">...</div>

<!-- Text Alignment -->
<div class="text-mobile-center">Centered on mobile</div>
```

## CSS Variables

### Colors
```css
--primary-color: #343538
--secondary-color: #949AA4
--accent-color: #4db8ff
--text-primary: #343538
--text-white: #ffffff
```

### Spacing
```css
--spacing-xs: 5px
--spacing-sm: 10px
--spacing-md: 15px
--spacing-lg: 20px
--spacing-xl: 30px
--spacing-xxl: 50px
```

### Usage
```css
.my-element {
    color: var(--primary-color);
    padding: var(--spacing-lg);
    border-radius: var(--radius-md);
}
```

## Navigation System

### Global Functions
```javascript
// Available on all pages
goToHome()        // Go to index.html
goToMain()        // Go to utama.html
goToAdmin()       // Go to pages/admin.html
goToUser()        // Go to pages/user-form.html
goToEditor()      // Go to pages/editor.html
goToBuilder()     // Go to pages/layout-builder.html
goBack()          // Browser back button
```

### Mobile Menu
Automatically created on all pages (except index.html):
- Hamburger icon (☰) on mobile devices
- Slide-in menu with all navigation options
- Overlay background
- Touch-friendly buttons

## Form Utilities

### Validation
```javascript
// Validate email
FormUtils.validateEmail(email)

// Validate phone
FormUtils.validatePhone(phone)

// Validate field with error display
FormUtils.validateField(inputElement, 'email')

// Validate entire form
FormUtils.validateForm(formElement, {
    name: [
        { type: 'required' },
        { type: 'minLength', options: { minLength: 3 } }
    ],
    email: [
        { type: 'required' },
        { type: 'email' }
    ]
})
```

### Input Formatting
```javascript
// Auto-format phone number
FormUtils.formatPhoneInput(phoneInput)

// Allow only numbers
FormUtils.allowOnlyNumbers(numberInput)

// Capitalize first letter
FormUtils.capitalizeInput(nameInput)
```

### localStorage Helpers
```javascript
// Save form data
FormUtils.saveFormData('userForm', formData)

// Load form data
const data = FormUtils.loadFormData('userForm')

// Clear form data
FormUtils.clearFormData('userForm')
```

## Best Practices

### HTML
- Use semantic HTML5 tags
- Include proper meta tags (viewport, description, theme-color)
- Link global CSS and JS files
- Use relative paths correctly

### CSS
- Use CSS variables for theming
- Follow mobile-first approach
- Use utility classes when appropriate
- Keep specificity low

### JavaScript
- Use global navigation functions
- Validate forms before submission
- Store temporary data in localStorage
- Use ES6+ features

### Performance
- Minimize HTTP requests
- Use CDN for fonts
- Optimize images
- Lazy load when necessary

## Migration Guide

### Updating Old Files
If you have old HTML files to migrate to new structure:

1. **Move file to `/pages`** (if not entry point)
2. **Update CSS links:**
   ```html
   <link rel="stylesheet" href="../css/global.css">
   <link rel="stylesheet" href="../css/responsive.css">
   ```
3. **Update JS links:**
   ```html
   <script src="../js/navigation.js"></script>
   ```
4. **Update navigation links:**
   ```html
   <!-- Old -->
   <a href="admin.html">Admin</a>
   
   <!-- New (from pages/) -->
   <a href="admin.html">Admin</a>
   
   <!-- New (from root) -->
   <a href="pages/admin.html">Admin</a>
   ```
5. **Add responsive meta tag:**
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
   ```

## Testing

### Local Testing
```bash
# Windows
.\dev.bat

# Unix/Linux/Mac
./dev.sh
```

### Responsive Testing
Test on multiple devices:
- 📱 Mobile (320px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)

Use browser DevTools device emulation.

## Deployment

### Vercel
Project is configured for Vercel with `vercel.json`:
- Static file serving
- Route handling
- SPA fallback

See [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) for details.

## Support

For questions or issues:
- Check [README.md](README.md)
- Read [EDITOR_GUIDE.md](EDITOR_GUIDE.md)
- See [CONTRIBUTING.md](CONTRIBUTING.md)
- Open an issue on GitHub

---

**Last Updated:** 2024
**Version:** 2.0
