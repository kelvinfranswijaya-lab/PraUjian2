import { useRef } from "react";

function Chat() {
  const tombolBatal = useRef(null);

  function kirimPesan(e) {
    e.preventDefault();
    e.target.reset();
    // tutup modal lewat tombol batal biar bootstrap yang ngurus
    tombolBatal.current.click();
  }

  return (
    <>
      <button
        type="button"
        className="tombol-chat"
        aria-label="Chat"
        data-bs-toggle="modal"
        data-bs-target="#modalChat"
      >
        <i className="bi bi-chat-dots-fill"></i>
      </button>

      <div className="modal fade" id="modalChat" tabIndex="-1" aria-labelledby="judulModalChat" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <form className="modal-content" onSubmit={kirimPesan}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="judulModalChat">Silakan berikan pesan disini!</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="chatNama" className="form-label">Nama</label>
                <input type="text" className="form-control" id="chatNama" placeholder="Masukkan nama Anda" required />
              </div>
              <div className="mb-3">
                <label htmlFor="chatEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="chatEmail" placeholder="nama@example.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="chatPesan" className="form-label">Isi Pesan</label>
                <textarea className="form-control" id="chatPesan" rows="4" placeholder="Tuliskan pesan Anda di sini..." required></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={tombolBatal}>Batal</button>
              <button type="submit" className="btn btn-primary">Kirim pesan</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Chat;