// ===== script.js =====
// JavaScript utama RS Cipta Hospital Galaksi
// ------------------------------------------------
// 1) Toggle burger‑menu (navbar responsif)
// 2) Ambil data artikel (ringkasan) via get_articles.php
// 3) Saat "Baca Selengkapnya" diklik →
//    • fetch konten lengkap via get_article.php?id=…  (AJAX)
//    • tampilkan dalam modal overlay + tombol unduh PDF (FPDF)
// 4) Smooth‑scroll untuk navigasi

(() => {
  /* ---------- SELECTOR RINGKAS ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- NAVBAR / BURGER ---------- */
  const burger = $("#burger");
  const navbar = $("#navbar");
  burger?.addEventListener("click", () => navbar?.classList.toggle("show"));

  $$("nav a[href^='#']").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      $(link.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
      navbar?.classList.remove("show");
    });
  });

  /* ---------- MODAL UTILITY ---------- */
  function createModal(html) {
    const overlay = document.createElement("div");
    overlay.id = "modal-overlay";
    overlay.style.cssText = `
      position:fixed;inset:0;display:flex;align-items:center;justify-content:center;
      background:#000a;z-index:9999;padding:1rem;overflow:auto;`;
    overlay.innerHTML = `
      <div id="modal-box" style="max-width:800px;width:100%;background:#1a1a3d;color:#fff;padding:1.5rem;border-radius:10px;position:relative;">
        <button id="modal-close" style="position:absolute;top:10px;right:15px;background:none;border:none;font-size:1.4rem;color:#fff;cursor:pointer">×</button>
        ${html}
      </div>`;
    document.body.appendChild(overlay);
    $("#modal-close", overlay).onclick = () => overlay.remove();
  }

  /* ---------- MUAT LIST ARTIKEL RINGKAS ---------- */
  const gridBox = $("#artikel .grid");
  async function loadArticles() {
    try {
      const res = await fetch("get_articles.php");
      const list = await res.json();
      gridBox.innerHTML = "";
      list.forEach(renderCard);
      attachHandlers();
    } catch (e) { console.error(e); }
  }

  function renderCard(a) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      ${a.image_url ? `<img src="${a.image_url}" alt="${a.title}">` : ""}
      <h3>${a.title}</h3>
      <p>${a.content.substring(0,120)}...</p>
      <button class="artikel-read" data-id="${a.id}">Baca Selengkapnya</button>`;
    gridBox.appendChild(card);
  }

  /* ---------- KLIK "Baca Selengkapnya" ---------- */
  function attachHandlers() {
    $$(".artikel-read").forEach(btn => {
      btn.onclick = async () => {
        const id = btn.dataset.id;
        try {
          const res = await fetch(`get_article.php?id=${id}`);
          const art = await res.json();
          const html = `
            <h2 style="color:#00ffff">${art.title}</h2>
            ${art.image_url ? `<img src='${art.image_url}' style='width:100%;border-radius:10px;margin:1rem 0'>` : ""}
            <p style="white-space:pre-line">${art.content}</p>
            <a href="fpdf/artikel_pdf.php?id=${id}" target="_blank" style="display:inline-block;margin-top:1rem;padding:.5rem 1rem;background:#00ffff;color:#000;border-radius:6px;text-decoration:none">🧾 Unduh PDF</a>`;
          createModal(html);
        } catch(err) { alert("Gagal memuat artikel."); }
      };
    });
  }

  document.addEventListener("DOMContentLoaded", loadArticles);
})();
