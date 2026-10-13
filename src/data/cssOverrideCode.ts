/**
 * Blok kod CSS Override tersuai untuk disalin & ditampal ke dalam fail HTML jemputan.me
 * Tepat mengikut 4 keperluan yang dinyatakan oleh pengguna:
 * 1. Background: Pure white (#ffffff !important) & buang static background images.
 * 2. Typography: Heading, nama pengantin, nama ibu bapa, tajuk seksyen ke Maroon Red (#8B0000 !important).
 * 3. Buttons & Selectors: Latar belakang & sempadan butang ke Maroon Red (#8B0000 !important) dengan teks putih.
 * 4. Header Floral Image: Pseudo-elemen body::before memaparkan './kad putih_files/bunga-merah.png' di bahagian atas tengah.
 */

export const JEMPUTAN_ME_CSS_OVERRIDE = `<!-- ======================================================== -->
<!-- KOD CSS OVERRIDE UNTUK JEMPUTAN.ME (TEMA PUTIH & MERAH MAROON) -->
<!-- Tampal blok <style> ini betul-betul sebelum tag </head> -->
<!-- ======================================================== -->
<style id="custom-white-maroon-theme">
  /* -----------------------------------------------------------------
     1. LATAR BELAKANG: Paksa Pure White (#ffffff) & Buang Background Image
     ----------------------------------------------------------------- */
  body,
  html,
  #app,
  #content,
  #page-invite,
  .page,
  .page.full.kad,
  .page.opening,
  .container,
  .container-fluid,
  .bg_image,
  .gate,
  .envelope-shell,
  .letter,
  .inner,
  #preview-section-programme.iti,
  .programme-timeline-overlay,
  .programme-timeline-section {
    background-color: #ffffff !important;
    background: #ffffff !important;
    background-image: none !important;
  }

  /* Buang sebarang static background overlay */
  .bg_image,
  .bg_image::before,
  .bg_image::after,
  .programme-timeline-overlay {
    display: none !important;
    background-image: none !important;
  }

  /* -----------------------------------------------------------------
     2. WARNA TIPOGRAFI: Ubah Semua Tajuk, Nama Pengantin & Ibu Bapa ke Maroon Red (#8B0000)
     ----------------------------------------------------------------- */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .name1,
  .name2,
  .name3,
  .name4,
  .cover-name,
  .and,
  .and2,
  .and3,
  .couple-join,
  .parent_name,
  .bride_name,
  .bride_name p,
  .sectionTitle,
  .invtype,
  .cover-date,
  .cover-venue,
  .programme-timeline-title,
  .programme-timeline-time,
  .programme-timeline-activities,
  .venue-label,
  .gift-section-title,
  .rf-label,
  #address,
  #address p,
  #address span {
    color: #8B0000 !important;
    -webkit-text-fill-color: #8B0000 !important;
  }

  /* Teks biasa & ayat jemputan berwarna gelap elegan */
  p,
  span,
  td,
  .ql-phrase,
  .ql-address,
  .programme-timeline-activity,
  .gift-note,
  .rf-hint {
    color: #333333 !important;
  }

  /* Penegas tajuk seksyen dengan sedikit jarak & garisan lembut maroon */
  .sectionTitle {
    letter-spacing: 0.08em !important;
    font-weight: 700 !important;
  }

  /* -----------------------------------------------------------------
     3. BUTANG & SELECTOR: Latar Belakang Maroon Red (#8B0000) Teks Putih
     ----------------------------------------------------------------- */
  .btn,
  .btn-primary,
  .btn-body,
  .btn-card,
  .btn-light,
  .btn-footer,
  .btn-open,
  .wish-cta-row button,
  .rf-actions button,
  button[type="submit"],
  .contact-action,
  .copy-row__btn {
    background-color: #8B0000 !important;
    background: #8B0000 !important;
    border-color: #8B0000 !important;
    color: #ffffff !important;
    -webkit-text-fill-color: #ffffff !important;
    box-shadow: 0 4px 12px rgba(139, 0, 0, 0.25) !important;
    transition: all 0.3s ease !important;
  }

  .btn:hover,
  .btn-primary:hover,
  .wish-cta-row button:hover,
  button[type="submit"]:hover {
    background-color: #6d0000 !important;
    border-color: #6d0000 !important;
    color: #ffffff !important;
    transform: translateY(-2px) !important;
    box-shadow: 0 6px 16px rgba(139, 0, 0, 0.35) !important;
  }

  /* Ikon di dalam butang bertukar warna putih */
  .btn .icon,
  .btn-card .icon,
  .btn-primary .icon {
    background-color: #ffffff !important;
    filter: invert(1) brightness(2) !important;
  }

  /* Input borang & dropdown dengan fokus warna maroon */
  input.form-control,
  textarea.form-control,
  select.custom-select {
    border: 1px solid #d4af37 !important;
    border-radius: 8px !important;
    color: #222222 !important;
    background-color: #ffffff !important;
  }

  input.form-control:focus,
  textarea.form-control:focus,
  select.custom-select:focus {
    border-color: #8B0000 !important;
    box-shadow: 0 0 0 0.2rem rgba(139, 0, 0, 0.2) !important;
    outline: none !important;
  }

  /* Kotak lilin lakri / Wax seal */
  #seal,
  .seal-shape,
  .seal-shape path {
    fill: #8B0000 !important;
  }

  /* -----------------------------------------------------------------
     4. HEADER FLORAL IMAGE: Hiasan Bunga Merah Atas Halaman (body::before)
     ----------------------------------------------------------------- */
  body::before {
    content: "" !important;
    display: block !important;
    position: fixed !important;
    top: 0 !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: 100% !important;
    max-width: 460px !important;
    height: 140px !important;
    background-image: url('./kad putih_files/bunga-merah.png') !important;
    background-size: contain !important;
    background-repeat: no-repeat !important;
    background-position: top center !important;
    pointer-events: none !important;
    z-index: 9999 !important;
  }

  /* Fallback sokongan jika fail bunga diletakkan dalam folder aset */
  @media (min-width: 768px) {
    body::before {
      max-width: 500px !important;
      height: 160px !important;
    }
  }

  /* -----------------------------------------------------------------
     5. PENYESUAIAN TAMBAHAN (Footer Bar, Garisan Timeline, Dll)
     ----------------------------------------------------------------- */
  /* Footer bar navigasi bawah */
  #footer {
    background: rgba(255, 255, 255, 0.95) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-top: 1px solid rgba(139, 0, 0, 0.15) !important;
    box-shadow: 0 -4px 20px rgba(139, 0, 0, 0.08) !important;
  }

  #footer .btn-footer .icon {
    background-color: #8B0000 !important;
  }

  #footer .btn-footer.active,
  #footer .btn-footer:hover {
    color: #8B0000 !important;
  }

  /* Timeline rail & marker Atur Cara */
  .programme-timeline-rail:before,
  .programme-timeline-marker {
    background: #8B0000 !important;
  }

  /* Kad Ucapan & Senarai Hadiah */
  .wish,
  .money-card {
    background: #ffffff !important;
    border: 1px solid rgba(139, 0, 0, 0.15) !important;
    border-radius: 12px !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04) !important;
  }
</style>
<!-- ======================================================== -->`;
