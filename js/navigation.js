/* ============================================
   KERANGKA WEB - NAVIGATION UTILITIES
   Version: 2.0
   Global Navigation Functions
   ============================================ */

// Navigation functions for main pages
const Navigation = {
    // Go to main menu
    toMain: function() {
        window.location.href = '/utama.html';
    },
    
    // Go to admin panel
    toAdmin: function() {
        window.location.href = '/pages/admin.html';
    },
    
    // Go to user form
    toUserForm: function() {
        window.location.href = '/pages/user-form.html';
    },
    
    // Go to editor
    toEditor: function() {
        window.location.href = '/pages/editor.html';
    },
    
    // Go to layout builder
    toLayoutBuilder: function() {
        window.location.href = '/pages/layout-builder.html';
    },
    
    // Go back
    goBack: function() {
        window.history.back();
    },
    
    // Go to home/landing page
    toHome: function() {
        window.location.href = '/index.html';
    }
};

// Make functions available globally
window.goToMain = Navigation.toMain;
window.goToAdmin = Navigation.toAdmin;
window.goToUser = Navigation.toUserForm;
window.goToEditor = Navigation.toEditor;
window.goToBuilder = Navigation.toLayoutBuilder;
window.goBack = Navigation.goBack;
window.goToHome = Navigation.toHome;

/* ============================================
   BACK BUTTON COMPONENT
   ============================================ */
function createBackButton(text = '← Kembali', targetUrl = null) {
    const button = document.createElement('button');
    button.className = 'btn btn-secondary';
    button.textContent = text;
    button.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1000;
    `;
    
    button.onclick = function() {
        if (targetUrl) {
            window.location.href = targetUrl;
        } else {
            Navigation.goBack();
        }
    };
    
    document.body.appendChild(button);
    return button;
}

/* ============================================
   HOME BUTTON COMPONENT
   ============================================ */
function createHomeButton() {
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerHTML = '🏠';
    button.title = 'Ke Beranda';
    button.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        padding: 12px 16px;
        min-width: auto;
    `;
    
    button.onclick = Navigation.toHome;
    
    document.body.appendChild(button);
    return button;
}

/* ============================================
   RESPONSIVE MENU TOGGLE
   ============================================ */
function createMobileMenu() {
    // Create menu toggle button
    const toggle = document.createElement('button');
    toggle.className = 'btn btn-primary mobile-menu-toggle';
    toggle.innerHTML = '☰';
    toggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1001;
        display: none;
        padding: 12px 16px;
        min-width: auto;
    `;
    
    // Show on mobile only
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleMediaQuery = (e) => {
        toggle.style.display = e.matches ? 'block' : 'none';
    };
    mediaQuery.addListener(handleMediaQuery);
    handleMediaQuery(mediaQuery);
    
    // Create menu
    const menu = document.createElement('div');
    menu.className = 'mobile-menu';
    menu.innerHTML = `
        <div style="padding: 20px;">
            <h3 style="margin-bottom: 20px;">Menu</h3>
            <button class="btn btn-full mb-md" onclick="goToHome()">🏠 Beranda</button>
            <button class="btn btn-full mb-md" onclick="goToMain()">📋 Menu Utama</button>
            <button class="btn btn-full mb-md" onclick="goToUser()">🎫 Ambil Antrian</button>
            <button class="btn btn-full mb-md" onclick="goToEditor()">🎨 Editor</button>
            <button class="btn btn-full mb-md" onclick="goToBuilder()">📐 Layout Builder</button>
            <button class="btn btn-full mb-md" onclick="goToAdmin()">⚙️ Admin</button>
        </div>
    `;
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-overlay';
    
    // Toggle functionality
    toggle.onclick = function() {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    };
    
    overlay.onclick = function() {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    };
    
    document.body.appendChild(toggle);
    document.body.appendChild(menu);
    document.body.appendChild(overlay);
    
    return { toggle, menu, overlay };
}

/* ============================================
   AUTO-INIT ON LOAD
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    // Auto-create mobile menu on all pages
    if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
        createMobileMenu();
    }
});

/* ============================================
   SMOOTH SCROLL
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

/* ============================================
   EXPORT
   ============================================ */
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Navigation;
}
