import { type NextPage } from "next";

const Class4: NextPage = () => {
    return (
        <>
            <header className="Hero">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="Hero__video"
                    poster="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas4_outing_bakery2023_intro.jpeg"
                >
                    <source src="https://firebasestorage.googleapis.com/v0/b/sdngisa-18335.appspot.com/o/outing%2Fkelas4_outing_bakery2023_pcahyo_masak_1.mp4?alt=media&token=3e1555b6-fba8-479e-8c42-73f3ff4f81bb" />
                </video>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/sdngisa-18335.appspot.com/o/logo_gisa.png?alt=media&token=28bfbafd-f25a-424f-add6-d65630965531"
                    className="Hero__logo"
                    title="Logo GISA"
                    alt="Logo GISA"
                />

                <div className="Hero__heading">
                    <h1>
                        Class <span className="Hero__heading--purple">4</span> Goes
                        to{" "}
                        <span className="Hero__heading--green">Diryana Bakery!</span>
                    </h1>
                    <h2>SDN Gisikdrono 01</h2>
                    <a className="btn" href="#opening">
                        Baca Lebih Lanjut
                    </a>
                </div>
            </header>

            <section className="section" id="opening">
                <p>Halo warga GISA!</p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas4_outing_bakery2023_intro.jpeg"
                />
                <p>
                    Tanggal 10 Maret 2023 merupakan hari yang spesial bagi siswa
                    kelas 4 karena mereka outing class ke Diryana Bakery
                </p>
            </section>

            <section className="section--right">
                <p>
                    Anda bisa melihat loreng-loreng pastel warna-warni berjalan
                    serentak menuju Diryana Bakery di pagi hari Jumat yang cerah.
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas4_outing_bakery2023_depan.jpeg"
                />
            </section>

            <section className="section--left">
                <p>
                    Sesampainya disana, para murid mempersiapkan diri mengenakan
                    celemek dan topi oranye. Mereka mengawali kegiatan mereka dengan
                    senam bersama untuk merenggangkan diri.
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas4_outing_bakery2023_intro.jpeg"
                />
            </section>

            <section className="section--right">
                <p>
                    Kegiatan utama outing class ini adalah membuat pastries. Di
                    setiap meja disediakan bahan dan adonan untuk diolah oleh para
                    siswa hingga menjadi pastry yang manis
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas4_outing_bakery2023_bahan.jpg"
                />
            </section>

            <section className="section--left">
                <p>
                    Tak hanya siswa, para guru pun turut mencoba membuat pastry.
                    Barangkali setelah outing class ini, para siswa kelas 4 dan guru
                    bisa menjadi baker di masa depannya!
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas4_outing_bakery2023_pcahyo_cook.jpg"
                />
            </section>

            <section className="section">
                <p>Lihatlah proses sepenuhnya dalam video bawah ini!</p>
                {/* TODO add video */}
                <a href="https://youtu.be/ehYz8T-CHMA" target="_blank">
                    <video
                        autoPlay
                        className="img"
                        loop
                        muted
                        playsInline
                        poster="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas5_outing_kendri2023_intro.jpg"
                    >
                        {/* <source src="https://firebasestorage.googleapis.com/v0/b/sdngisa-18335.appspot.com/o/outing%2Fkelas3_outing_maerakaca2023_teaser.mp4?alt=media&token=7be091f1-e4dc-4b6a-86bc-20eeb85d856c" /> */}
                    </video>
                </a>
            </section>
        </>
    );
};

export default Class4;
