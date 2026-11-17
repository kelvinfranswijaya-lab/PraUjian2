import Navbar from "../umum/navbar.jsx";
import HeroSlider from "./heroslider.jsx";
import FormBooking from "./bookingform.jsx";
import BagianTentang from "./aboutsection.jsx";
import BannerSelamat from "./bannerselamat.jsx";
import DaftarArmada from "./fleetcards.jsx";
import TawaranKami from "./tawarankami.jsx";
import Destinasi from "../umum/destinasi.jsx";
import AngkaBangga from "./angkabangga.jsx";
import FiturSukses from "./fitursukses.jsx";
import Testimoni from "./testimoni.jsx";
import TimPemandu from "../umum/timpemandu.jsx";
import ArtikelBlog from "./artikelblog.jsx";
import AjakanSewa from "./ajakansewa.jsx";
import Footer from "../umum/footer.jsx";
import Muncul from "../umum/muncul.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Muncul jenis="putar-kiri"><FormBooking /></Muncul>
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
    </>
  );
}

export default Home;
