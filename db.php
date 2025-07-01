<?php
// Koneksi ke database galaksi_rs di localhost XAMPP
$host = 'localhost';
$user = 'root';
$pass = '';  // password default XAMPP kosong
$dbname = 'galaksi_rs';

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
  die("❌ Gagal konek: " . $conn->connect_error);
}
?>
