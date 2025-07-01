<?php
header('Content-Type: application/json; charset=utf-8');
require_once 'db.php';

$sql = "SELECT id, title, content, image_url
        FROM artikel
        ORDER BY published_at DESC
        LIMIT 10";
$res = $conn->query($sql);

$out = [];
while ($row = $res->fetch_assoc()) {
  // kirim ringkasan 120 karakter ke frontend
  $row['content'] = mb_substr(strip_tags($row['content']), 0, 120);
  $out[] = $row;
}
echo json_encode($out);
?>
