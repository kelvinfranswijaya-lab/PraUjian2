import { useState, useEffect, useLayoutEffect } from "react";
import { flushSync } from "react-dom";

// ga pake react-router, halaman ditentukan dari hash di url:
//   #/home-two                  -> Home 2
//   kosong / #beranda           -> Home 1
//   hash lain (#yacht, #blog)   -> cuma anchor di dalam halaman, halaman ga ganti
function halamanDariHash(hash) {
  if (hash === "#/home-two") return "dua";
  if (hash === "" || hash === "#" || hash === "#beranda") return "satu";
  return null;
}

// lompat ke paling atas tanpa animasi
export function keAtas() {
  const html = document.documentElement;
  const lama = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  html.style.scrollBehavior = lama;
}

// hook buat app.jsx: ngasih tau lagi di halaman "satu" atau "dua"
export function useHalaman() {
  const [halaman, setHalaman] = useState(
    halamanDariHash(window.location.hash) === "dua" ? "dua" : "satu"
  );

  useEffect(() => {
    // browser jangan balikin posisi scroll yang lama
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // render halaman barunya dulu, baru loncat ke atas (jadi ga ada scroll dari bawah)
    function pindah(tujuan) {
      flushSync(() => setHalaman(tujuan));
      keAtas();
    }

    // klik link Home / Home Two (navbar, logo, footer).
    // dicegat sendiri supaya tetap ke atas walau hash-nya sama dengan yang sekarang
    function klikTautan(e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const a = e.target.closest("a[href]");
      if (!a) return;
      const href = a.getAttribute("href");

      // link kosong (sosmed, Destinations Details) jangan bikin loncat/pindah halaman
      if (href === "#") {
        e.preventDefault();
        return;
      }

      const tujuan = href === "#beranda" ? "satu" : href === "#/home-two" ? "dua" : null;
      if (!tujuan) return;

      e.preventDefault();
      if (window.location.hash !== href) {
        window.history.pushState(null, "", href);
      }
      pindah(tujuan);
    }

    // tombol back / forward browser
    function cekAlamat() {
      const tujuan = halamanDariHash(window.location.hash);
      if (tujuan) pindah(tujuan);
    }

    document.addEventListener("click", klikTautan);
    window.addEventListener("hashchange", cekAlamat);
    return () => {
      document.removeEventListener("click", klikTautan);
      window.removeEventListener("hashchange", cekAlamat);
    };
  }, []);

  // tiap ganti halaman, ke atas dulu sebelum browser menggambar halaman barunya
  useLayoutEffect(() => {
    keAtas();
  }, [halaman]);

  return halaman;
}
