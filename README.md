# 🌌 RS CIPTA HOSPITAL GALAKSI

Selamat datang di proyek luar angkasa kami! 🪐  
Ini adalah website resmi futuristik untuk **PT Cipta Hospital Indonesia** — rumah sakit pertama yang melayani **manusia dan alien**! 👽🧑‍⚕️

---

## 🚀 Fitur Galaksi

✨ **Desain Futuristik**  
🎥 Background video planet Saturnus + animasi alien  
📡 Form "Kontak & Teleportasi" untuk kirim pesan  
📚 Artikel kesehatan bisa diunduh dalam format PDF  
🤖 Layanan canggih: AI Diagnosis, Rekam Medis Cloud, Robotika Bedah

---

## 🗃️ Struktur Proyek

```

📁 rs-cipta-galaksi/
├── index.html              # Halaman utama galaksi
├── style.css               # Desain tema luar angkasa
├── script.js               # Interaksi & fetch artikel
├── kirim\_kontak.php        # (opsional) Simpan pesan ke database
├── pdf/                    # Artikel PDF yang bisa diunduh
├── img/                    # Logo, dokter AI, alien lucu, dll
├── media/saturn.mp4        # Video background
└── galaksi\_rs.sql          # Struktur database XAMPP

````

---

## 🛠️ Cara Instalasi Lokal (Offline Mode)

1. 📦 **Clone repo** ini ke folder XAMPP:
   ```bash
   git clone https://github.com/username/rs-cipta-galaksi.git
````

2. 🚀 Pindahkan ke htdocs:

   ```
   C:/xampp/htdocs/rs-cipta-galaksi/
   ```

3. 🧠 Buka phpMyAdmin lalu:

   Buat database `galaksi_rs`
   Import file `galaksi_rs.sql`

4. 💡 Jalankan Apache & MySQL melalui XAMPP

5. 🌐 Buka di browser:

   ```
   http://localhost/rs-cipta-galaksi/
   ```

🧾 Struktur Tabel `kontak`

| Field | Tipe                  | Keterangan         |
| ----- | --------------------- | ------------------ |
| id    | INT (AUTO\_INCREMENT) | Primary Key        |
| nama  | VARCHAR(100)          | Nama pengirim      |
| email | VARCHAR(100)          | Email pengirim     |
| pesan | TEXT                  | Isi pesan pengguna |

📫 Hubungi Kami

📍 Alamat: Jl. Orbit 7, Galaxy City, Bimasakti Raya
📱 Telepon: +62 812‑SPACE‑RS
✉️ Email: [rsciptaglxy@gmail.com](mailto:rsciptaglxy@gmail.com)

💡 Catatan Penting

  🛸 Tidak butuh internet untuk menjalankan (cukup XAMPP)
  📤 Kirim pesan melalui form "Teleportasi"
  📁 Semua artikel PDF bisa ditemukan di folder `pdf/`
  🧪 Form kontak dapat disesuaikan untuk menyimpan ke DB atau sekadar kirim lokal

👽 Tentang Proyek Ini

Website ini adalah simulasi desain estetik + interaktif
Untuk eksplorasi UI/UX bertema galaksi di dunia medis modern.

> 💬 "Dirancang oleh manusia, dikelola bersama alien." 👾
> – Tim RS Cipta Galaksi 2025

⭐ Give a Star!

Jika kamu suka proyek ini, beri bintang ya ⭐
Atau fork dan kembangkan untuk dunia planetmu sendiri 🌍🌑🌕🌍
