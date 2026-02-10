# Website Editor & Layout Builder Documentation

## Overview
Aplikasi ini sekarang dilengkapi dengan **dua editor powerful** untuk membuat dan mengkustomisasi website tanpa coding:

### 1. **Visual CSS Editor** (`editor.html`)
Editor untuk mengubah styling dan tata letak keseluruhan website.

### 2. **Layout Builder** (`layout-builder.html`)
Drag-and-drop builder untuk membuat layout halaman secara visual.

---

## 🎨 Visual CSS Editor

### Features:
- **Real-time Preview** - Lihat perubahan secara langsung
- **Page Settings** - Ubah judul dan konfigurasi halaman
- **Background Customization** - Warna solid atau gradient
- **Typography Control** - Font family, size, color
- **Container Settings** - Width, padding, border radius
- **Shadow Effects** - Customize box shadow
- **Element Selection** - Klik elemen untuk edit properties
- **Advanced Styling** - Font weight, alignment, line height
- **Custom CSS** - Tambahkan CSS custom
- **Export** - Download HTML atau CSS

### How to Use:

1. **Buka Editor**
   - Klik tombol "🎨 Website Editor" dari menu utama

2. **Edit Background**
   - Di sidebar kiri, ubah "Color" untuk warna solid
   - Atau gunakan "Gradient" untuk gradient: `135deg, #color1, #color2`

3. **Customize Typography**
   - Ubah "Font Size", "Font Color", "Font Family"
   - Pilih dari preset: Press Start 2P, Roboto, Arial, Georgia, Courier New

4. **Modify Container**
   - Ubah "Max Width" untuk lebar container
   - Ubah "Padding" untuk ruang dalam
   - Ubah "Border Radius" untuk sudut yang melengkung

5. **Select & Edit Elements**
   - Klik pada elemen di preview area
   - Edit properties di panel sebelah kanan
   - Gunakan tab "Element", "Advanced", atau "Code"

6. **Export**
   - Klik "Export CSS" untuk mendapatkan CSS file
   - Klik "Export HTML" untuk mendapatkan HTML lengkap
   - Klik "💾 Save" untuk download langsung

### Keyboard Shortcuts:
- Click element untuk select
- Tab key untuk berpindah ke properties lain

---

## 📐 Layout Builder

### Features:
- **Drag & Drop Components** - Drag dari sidebar, drop ke canvas
- **Component Library**:
  - 📝 Heading - Judul besar
  - 📄 Paragraph - Teks biasa
  - 🔘 Button - Tombol clickable
  - 📦 Box - Container box
  - ⌨️ Input Field - Form input
  - 🖼️ Image - Placeholder gambar
  - ➖ Divider - Garis pemisah

- **Properties Editor** - Edit setiap elemen secara detail
- **Undo/Redo** - Batalkan atau ulangi aksi
- **Live Preview** - Lihat hasil real-time
- **Export** - Download HTML file

### How to Use:

1. **Buka Layout Builder**
   - Klik tombol "📐 Layout Builder" dari menu utama

2. **Add Components**
   - Klik component di sidebar kiri
   - Component akan ditambahkan ke canvas
   - Atau drag-drop langsung ke canvas

3. **Select Element**
   - Klik elemen di canvas untuk select
   - Properties akan muncul di panel kanan

4. **Edit Properties**
   - **Content** - Ubah teks/konten elemen
   - **Colors** - Text color dan background color
   - **Spacing** - Padding, margin, border radius
   - **Font** - Font size dan styling
   - **Size** - Width percentage

5. **Duplicate/Delete**
   - Klik "📋 Copy" untuk duplicate elemen
   - Klik "🗑️ Delete" untuk hapus elemen

6. **Undo/Redo**
   - Klik "↶ Undo" untuk batalkan
   - Klik "↷ Redo" untuk ulangi

7. **Export**
   - Klik "⬇️ Download HTML" untuk download
   - Atau "👁️ View Code" untuk lihat source code

---

## 📊 File Structure

```
kerangka web/
├── index.html              # Entry point
├── utama.html              # Menu utama
├── admin.html              # Admin panel
├── user-form.html          # User form
├── editor.html             # ✨ Visual CSS Editor
├── layout-builder.html     # ✨ Drag & Drop Builder
├── user-character.html
├── user-options.html
├── user-success.html
├── user-tiny.html
├── README.md
├── .gitignore
└── vercel.json
```

---

## 🚀 Deployment to Vercel

### Automatic Deployment:
1. Push ke GitHub repository
2. Vercel akan otomatis deploy
3. Setiap push = auto-deploy

### Manual Deployment:
```bash
npm install -g vercel
vercel login
vercel
```

---

## 💡 Tips & Tricks

### Editor Tips:
- Gunakan gradient untuk background yang lebih menarik
- Test di berbagai ukuran layar dengan responsive preview
- Save CSS terpisah untuk reusability
- Gunakan custom CSS untuk styling yang lebih complex

### Layout Builder Tips:
- Mulai dari struktur dasar (heading, paragraph, buttons)
- Gunakan boxes untuk group related content
- Duplicate elements untuk mempercepat proses
- Preview di berbagai resolusi
- Export sebagai template untuk reuse

### Best Practices:
- Selalu test di mobile, tablet, desktop
- Gunakan warna yang kontras untuk readability
- Keep padding/margin konsisten
- Test semua interactive elements
- Backup exported HTML

---

## 🔧 Technical Details

### Browser Support:
- Chrome/Edge 80+
- Firefox 75+
- Safari 13+
- Mobile browsers (iOS Safari, Chrome Android)

### Performance:
- Editor menggunakan vanilla JavaScript (no framework)
- Real-time preview dengan minimal reflow
- Efficient DOM manipulation
- Optimized for all devices

### Security:
- No external API calls
- All processing local
- No data stored on server
- CORS-friendly

---

## 📝 Troubleshooting

### Editor tidak load?
- Clear browser cache
- Try different browser
- Check browser console for errors

### Preview tidak update?
- Ensure field has focus
- Click Apply/Update button
- Refresh page

### Export tidak work?
- Check browser permissions untuk download
- Try different browser
- Use View Code untuk copy-paste

### Layout Builder components tidak drag?
- Ensure JavaScript enabled
- Try refreshing page
- Use click method instead of drag-drop

---

## 🎯 Next Steps

1. **Customize Your Website**
   - Use Visual Editor untuk styling
   - Use Layout Builder untuk content

2. **Export & Use**
   - Download HTML/CSS
   - Customize further jika diperlukan
   - Deploy ke Vercel

3. **Share**
   - Share Vercel URL dengan orang lain
   - Atau download HTML untuk offline use

---

## 📞 Support

Untuk pertanyaan atau bug reports, silakan:
1. Check documentation
2. Clear cache dan refresh
3. Try different browser
4. Report issue dengan detail

---

**Happy Creating! 🎨✨**
