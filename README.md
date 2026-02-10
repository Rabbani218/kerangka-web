# Kerangka Web - Queue Management System

Sistem manajemen antrian berbasis web dengan interface retro 8-bit yang menarik.

## Fitur

- **User Interface**: Ambil antrian dengan form yang user-friendly
- **Admin Panel**: Manajemen slot dan antrian real-time
- **Responsive Design**: Kompatibel dengan berbagai ukuran layar
- **Retro Theme**: Design 8-bit yang unik dan eye-catching

## File-file Utama

- `utama.html` - Halaman utama/home
- `user-form.html` - Form pengambilan antrian user
- `user-options.html` - Opsi-opsi user
- `user-character.html` - Tampilan karakter user
- `user-success.html` - Konfirmasi sukses
- `user-tiny.html` - Versi minimal user interface
- `admin.html` - Panel administrasi

## Deployment di Vercel

### Setup Pertama Kali

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd kerangka-web
   ```

2. **Login ke Vercel** (optional)
   ```bash
   npm install -g vercel
   vercel login
   ```

3. **Deploy ke Vercel**
   ```bash
   vercel
   ```

### Automatic Deployment

Repository ini sudah dikonfigurasi untuk automatic deployment di Vercel. Setiap push ke branch `main` akan secara otomatis ter-deploy.

#### Setup GitHub Integration:
1. Buka https://vercel.com
2. Klik "New Project"
3. Pilih repository ini dari GitHub
4. Vercel akan otomatis mendeteksi konfigurasi
5. Klik "Deploy"

## Teknologi

- HTML5
- CSS3 (Modern styling dengan gradient dan shadow)
- Vanilla JavaScript
- Font: Press Start 2P (Google Fonts)

## License

MIT
