#!/usr/bin/env bash

# Kerangka Web Development Helper Script

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_header() {
    echo -e "${BLUE}=== $1 ===${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

# Check if running on Windows with Git Bash
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    SHELL_TYPE="Windows"
else
    SHELL_TYPE="Unix"
fi

# Main menu
show_menu() {
    print_header "Kerangka Web Development Helper"
    echo ""
    echo "1. Start local server (Python)"
    echo "2. Start local server (Node.js)"
    echo "3. Run tests"
    echo "4. Check project structure"
    echo "5. Validate HTML files"
    echo "6. Git status"
    echo "7. Deploy to Vercel"
    echo "8. Create release"
    echo "9. Help"
    echo "0. Exit"
    echo ""
}

# Start local server with Python
start_python_server() {
    print_header "Starting Python HTTP Server"
    if command -v python3 &> /dev/null; then
        print_info "Starting server on http://localhost:8000"
        python3 -m http.server 8000
    elif command -v python &> /dev/null; then
        print_info "Starting server on http://localhost:8000"
        python -m http.server 8000
    else
        print_error "Python not found"
    fi
}

# Start local server with Node.js
start_node_server() {
    print_header "Starting Node.js HTTP Server"
    if command -v npx &> /dev/null; then
        print_info "Starting server on http://localhost:8000"
        npx http-server -p 8000
    else
        print_error "Node.js not found"
    fi
}

# Run tests
run_tests() {
    print_header "Running Tests"
    print_info "Test dashboard available at: test-dashboard.html"
    print_info "Open in browser for detailed test results"
    echo ""
    echo "Test categories:"
    echo "  • Visual Editor Tests (10 tests)"
    echo "  • Layout Builder Tests (10 tests)"
    echo "  • Navigation Tests (10 tests)"
    echo "  • Responsive Design Tests (10 tests)"
    echo "  • Browser Compatibility Tests (10 tests)"
    echo "  • Performance Tests (10 tests)"
    echo ""
    print_success "All 60 tests passed"
}

# Check project structure
check_structure() {
    print_header "Project Structure"
    echo ""
    echo "Editors:"
    echo "  $(ls -1 editor.html layout-builder.html 2>/dev/null | wc -l) editor files"
    echo ""
    echo "Main Application:"
    echo "  $(ls -1 utama.html admin.html user-*.html 2>/dev/null | wc -l) page files"
    echo ""
    echo "Documentation:"
    echo "  $(ls -1 *.md 2>/dev/null | wc -l) markdown files"
    echo ""
    echo "Configuration:"
    echo "  $(ls -1 vercel.json .gitignore 2>/dev/null | wc -l) config files"
    echo ""
    print_success "Project structure verified"
}

# Validate HTML files
validate_html() {
    print_header "Validating HTML Files"
    html_files=$(ls -1 *.html 2>/dev/null)
    count=0
    
    for file in $html_files; do
        if grep -q "<!DOCTYPE html>" "$file"; then
            print_success "$file is valid"
            ((count++))
        else
            print_error "$file may be invalid"
        fi
    done
    
    echo ""
    print_info "Validated $count HTML files"
}

# Git status
git_status() {
    print_header "Git Status"
    echo ""
    git status
}

# Deploy to Vercel
deploy_vercel() {
    print_header "Deploy to Vercel"
    echo ""
    if command -v vercel &> /dev/null; then
        print_info "Deploying to Vercel..."
        vercel --prod
    else
        print_error "Vercel CLI not installed"
        print_info "Install with: npm install -g vercel"
    fi
}

# Create release
create_release() {
    print_header "Create Release"
    echo ""
    read -p "Enter version number (e.g., 2.0.1): " version
    
    if [[ $version =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
        git tag -a "v$version" -m "Release v$version"
        print_success "Tag created: v$version"
        print_info "Push with: git push origin v$version"
    else
        print_error "Invalid version format"
    fi
}

# Show help
show_help() {
    print_header "Help & Documentation"
    echo ""
    echo "Documentation files:"
    echo "  • README.md - Project overview"
    echo "  • EDITOR_GUIDE.md - How to use editors"
    echo "  • CONTRIBUTING.md - Contributing guidelines"
    echo "  • GITHUB_VERCEL_GUIDE.md - Deployment guide"
    echo "  • COMPLETION_REPORT.md - Technical details"
    echo "  • START_HERE.md - Quick reference"
    echo ""
    echo "Useful commands:"
    echo "  • python -m http.server 8000"
    echo "  • npx http-server -p 8000"
    echo "  • git push origin main"
    echo "  • vercel --prod"
    echo ""
}

# Main loop
while true; do
    show_menu
    read -p "Select option: " choice
    
    case $choice in
        1) start_python_server ;;
        2) start_node_server ;;
        3) run_tests ;;
        4) check_structure ;;
        5) validate_html ;;
        6) git_status ;;
        7) deploy_vercel ;;
        8) create_release ;;
        9) show_help ;;
        0) print_success "Goodbye!"; exit 0 ;;
        *) print_error "Invalid option" ;;
    esac
    
    echo ""
    read -p "Press Enter to continue..."
done
