<?php
require_once 'fpdf.php';             // library FPDF 1.8 di folder yang sama
require_once '../db.php';            // naik satu level ke db.php

$id = intval($_GET['id'] ?? 0);
$cek = $conn->query("SELECT * FROM artikel WHERE id = $id");
$data = $cek->fetch_assoc();
if (!$data) { die("Artikel tidak ditemukan"); }

$pdf = new FPDF();
$pdf->AddPage();
$pdf->SetFont('Arial', 'B', 14);
$pdf->MultiCell(0, 10, utf8_decode($data['title']), 0, 'C');
$pdf->Ln(4);

$pdf->SetFont('Arial', '', 12);
$pdf->MultiCell(0, 7, utf8_decode($data['content']));
$pdf->Output('I', 'artikel-'.$id.'.pdf');
?>
