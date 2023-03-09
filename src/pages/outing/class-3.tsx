import { type NextPage } from "next";

const Class3: NextPage = () => {
    return (
        <>
            <header className="Hero">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="Hero__video"
                    poster="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas3_outing_maerakaca2023_intro.jpg"
                >
                    <source src="https://firebasestorage.googleapis.com/v0/b/sdngisa-18335.appspot.com/o/outing%2Fkelas3_outing_maerakaca2023_hero.mp4?alt=media&token=af5aa766-4694-4fbc-86c9-2bb891d05203" />
                </video>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/sdngisa-18335.appspot.com/o/logo_gisa.png?alt=media&token=28bfbafd-f25a-424f-add6-d65630965531"
                    className="Hero__logo"
                    title="Logo GISA"
                    alt="Logo GISA"
                />

                <div className="Hero__heading">
                    <h1>
                        Class <span className="Hero__heading--purple">3</span> Goes
                        to <span className="Hero__heading--green">Maerakaca!</span>
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
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas3_outing_maerakaca2023_intro.jpg"
                />
                <p>
                    Kegembiraan minggu ini diawali dengan outing class kelas 3 menuju
                    Grand Maerakaca!
                </p>
            </section>

            <section className="section--right">
                <p>
                    Para murid kelas 3 berdatangan mengenakan pakaian olahraga mereka
                    semenjak pagi hari. Seselesainya upacara, para murid bergegas
                    menaiki angkot dan menuju ke Grand Maerakaca didampingi oleh
                    guru-guru SDN GISA
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas3_outing_maerakaca2023_berangkat.jpg"
                />
            </section>

            <section className="section--left">
                <p>
                    Sesampainya disana, para murid menunggu dengan antusias untuk
                    menjelajahi Maerakaca. Mereka dipandu oleh pemandu wisata sejak
                    awal sampai selesai.
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas3_outing_maerakaca2023_sampai.jpg"
                />
            </section>

            <section className="gallery">
                <p className="gallery__text">
                    Berbagai kegiatan yang dilakukan oleh murid kelas 3 di Maerakaca:
                    mereka berkenalan dengan daerah-daerah mini, bereksperimen dalam
                    Anjungan, menjelajahi danau Maerakaca menggunakan kapal, melalui
                    jembatan layang, berkelana di pesisir pohon Mangrove, dan masih
                    banyak lagi
                </p>

                <section className="gallery__display">
                    <img
                        alt="Photo Warga GISA"
                        title="Photo Warga GISA"
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas3_outing_maerakaca2023_anjungan.jpg"
                    />
                    <img
                        alt="Photo Warga GISA"
                        title="Photo Warga GISA"
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas3_outing_maerakaca2023_kapal.jpg"
                    />
                    <img
                        alt="Photo Warga GISA"
                        title="Photo Warga GISA"
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas3_outing_maerakaca2023_flyover.jpg"
                    />
                    <img
                        alt="Photo Warga GISA"
                        title="Photo Warga GISA"
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas3_outing_maerakaca2023_jalan2.png"
                    />
                    <img
                        alt="Photo Warga GISA"
                        title="Photo Warga GISA"
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas3_outing_maerakaca2023_explore.jpg"
                    />
                </section>
            </section>

            <section className="section">
                <p>
                    Jika Anda ingin mengetahui keseruan outing class 3 dengan
                    lengkap, yuk pantau video YouTube kami dibawah ini!
                </p>
                <a href="https://youtu.be/L2LD7gONJic" target="_blank">
                    <video
                        autoPlay
                        className="img"
                        loop
                        muted
                        playsInline
                        poster="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas3_outing_maerakaca2023_teaser_poster.png"
                    >
                        <source src="https://firebasestorage.googleapis.com/v0/b/sdngisa-18335.appspot.com/o/outing%2Fkelas3_outing_maerakaca2023_teaser.mp4?alt=media&token=7be091f1-e4dc-4b6a-86bc-20eeb85d856c" />
                    </video>
                </a>
            </section>
        </>
    );
};

export default Class3;
