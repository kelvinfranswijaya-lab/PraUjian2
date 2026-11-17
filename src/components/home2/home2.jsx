import Navbar from "../umum/navbar.jsx";
import Hero2 from "./hero2.jsx";
import Tentang2 from "./tentang2.jsx";
import AktivitasTiga from "./aktivitastiga.jsx";
import Destinasi from "../umum/destinasi.jsx";
import Testimoni2 from "./testimoni2.jsx";
import Layanan2 from "./layanan2.jsx";
import KapalMusim from "./kapalmusim.jsx";
import GaleriPameran from "./galeripameran.jsx";
import TimPemandu from "../umum/timpemandu.jsx";
import PaketHarga from "./paketharga.jsx";
import Blog2 from "./blog2.jsx";
import Footer from "../umum/footer.jsx";
import Muncul from "../umum/muncul.jsx";
import { dataTujuan2 } from "../../data/isi2.js";

function Home2() {
  return (
    <>
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
    </>
  );
}

export default Home2;