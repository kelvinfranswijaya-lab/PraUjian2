import { useState, useEffect, useRef } from "react";

// biar section muncul pas di scroll
// jenis (opsional): "putar-kiri" / "putar-bawah" -> berputar masuk, "zoom-besar" -> membesar dari kecil,
// "geser-kanan" -> masuk dari kiri ke kanan
function Muncul({ children, jenis = "" }) {
  const boxRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(boxRef.current);
    return () => observer.disconnect();
  }, []);

  const isi = (
    <div ref={boxRef} className={"muncul" + (jenis ? " " + jenis : "") + (visible ? " visible" : "")}>
      {children}
    </div>
  );

  // putaran dipotong biar halaman ga melebar
  return jenis.startsWith("putar") ? <div className="bungkus-putar">{isi}</div> : isi;
}

export default Muncul;
