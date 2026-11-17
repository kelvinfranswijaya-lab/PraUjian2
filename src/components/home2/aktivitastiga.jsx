import KartuAktivitas from "./kartuaktivitas.jsx";

function AktivitasTiga() {
  return (
    <section className="aktivitas-tiga">
      <div className="container">
        <div className="row g-4">
          {[1, 2, 3].map((n) => (
            <div className="col-md-4" key={n}>
              <KartuAktivitas id={"ukuran-" + n} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AktivitasTiga;