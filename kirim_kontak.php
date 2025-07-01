<?php
require_once 'db.php';

$nama  = $_POST['nama'] ?? '';
$email = $_POST['email'] ?? '';
$pesan = $_POST['pesan'] ?? '';

if ($nama && $email && $pesan) {
  $stmt = $conn->prepare("INSERT INTO kontak (nama, email, pesan) VALUES (?, ?, ?)");
  $stmt->bind_param("sss", $nama, $email, $pesan);
  $stmt->execute();
  echo "<script>alert('✅ Pesan berhasil dikirim!'); window.location.href='index.html';</script>";
} else {
  echo "<script>alert('❌ Data tidak lengkap.'); window.history.back();</script>";
}
?>
