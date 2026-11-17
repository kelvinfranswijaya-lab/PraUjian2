// logo tripzap, versi terang dipake di footer (background gelap)
const base = import.meta.env.BASE_URL;

function Logo({ terang }) {
  const gambar = terang ? "images/logo-tripzap-terang.png" : "images/logo-tripzap.png";
  return (
    <a className="logo-brand" href="#beranda">
      <img src={base + gambar} alt="TripZap" width="120" height="52" />
    </a>
  );
}

export default Logo;
