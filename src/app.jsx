import { Fragment } from "react";
import { useHalaman } from "./navigasi.js";
import { dataTujuan2 } from "./data/isi2.js";

// bagian yang dipake dua halaman
import Navbar from "./components/umum/navbar.jsx";
import Destinasi from "./components/umum/destinasi.jsx";
import TimPemandu from "./components/umum/timpemandu.jsx";
import Footer from "./components/umum/footer.jsx";
import Muncul from "./components/umum/muncul.jsx";

// bagian khusus home 1
import HeroSlider from "./components/home1/heroslider.jsx";
import FormBooking from "./components/home1/bookingform.jsx";
import BagianTentang from "./components/home1/aboutsection.jsx";
import BannerSelamat from "./components/home1/bannerselamat.jsx";
import DaftarArmada from "./components/home1/fleetcards.jsx";
import TawaranKami from "./components/home1/tawarankami.jsx";
import AngkaBangga from "./components/home1/angkabangga.jsx";
import FiturSukses from "./components/home1/fitursukses.jsx";
import Testimoni from "./components/home1/testimoni.jsx";
import ArtikelBlog from "./components/home1/artikelblog.jsx";
import AjakanSewa from "./components/home1/ajakansewa.jsx";

// bagian khusus home 2
import Hero2 from "./components/home2/hero2.jsx";
import Tentang2 from "./components/home2/tentang2.jsx";
import AktivitasTiga from "./components/home2/aktivitastiga.jsx";
import Testimoni2 from "./components/home2/testimoni2.jsx";
import Layanan2 from "./components/home2/layanan2.jsx";
import KapalMusim from "./components/home2/kapalmusim.jsx";
import GaleriPameran from "./components/home2/galeripameran.jsx";
import PaketHarga from "./components/home2/paketharga.jsx";
import Blog2 from "./components/home2/blog2.jsx";

function App() {
  const halaman = useHalaman();

  // Home 2 (#/home-two)
  if (halaman === "dua") {
    return (
      <Fragment key="home2">
        <Navbar />
        <Hero2 />
        <Muncul jenis="putar-kiri"><Tentang2 /></Muncul>
        <Muncul jenis="putar-kiri"><AktivitasTiga /></Muncul>
        <Muncul jenis="putar-kiri"><Destinasi data={dataTujuan2} /></Muncul>
        <Testimoni2 />
        <Muncul jenis="putar-bawah"><Layanan2 /></Muncul>
        <Muncul jenis="putar-kiri"><KapalMusim /></Muncul>
        <GaleriPameran />
        <Muncul jenis="zoom-besar"><TimPemandu /></Muncul>
        <Muncul jenis="zoom-besar"><PaketHarga /></Muncul>
        <Muncul jenis="putar-kiri"><Blog2 /></Muncul>
        <Footer />
      </Fragment>
    );
  }

  // Home 1 (halaman awal)
  return (
    <Fragment key="home1">
      <Navbar />
      <HeroSlider />
      <FormBooking />
      <Muncul jenis="geser-kanan"><BagianTentang /></Muncul>
      <Muncul jenis="geser-kanan"><BannerSelamat /></Muncul>
      <Muncul jenis="zoom-besar"><DaftarArmada /></Muncul>
      <TawaranKami />
      <Muncul jenis="zoom-besar"><Destinasi /></Muncul>
      <AngkaBangga />
      <Muncul><FiturSukses /></Muncul>
      <Muncul><Testimoni /></Muncul>
      <Muncul><TimPemandu /></Muncul>
      <Muncul><ArtikelBlog /></Muncul>
      <Muncul jenis="zoom-besar"><AjakanSewa /></Muncul>
      <Footer />
    </Fragment>
  );
}

export default App;
