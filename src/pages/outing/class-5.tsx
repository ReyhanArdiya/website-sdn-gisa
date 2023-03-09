import { type NextPage } from "next";

const Class5: NextPage = () => {
    return (
        <>
            <header className="Hero">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="Hero__video"
                    poster="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas5_outing_kendri2023_intro.jpg"
                >
                    <source src="https://firebasestorage.googleapis.com/v0/b/sdngisa-18335.appspot.com/o/outing%2Fkelas5_outing_kendri2023_hero_video.mp4?alt=media&token=6d3624d2-43b8-45af-ad70-d68760be7b86" />
                </video>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/sdngisa-18335.appspot.com/o/logo_gisa.png?alt=media&token=28bfbafd-f25a-424f-add6-d65630965531"
                    className="Hero__logo"
                    title="Logo GISA"
                    alt="Logo GISA"
                />

                <div className="Hero__heading">
                    <h1>
                        Class <span className="Hero__heading--purple">5</span> Goes
                        to <span className="Hero__heading--green">Kandri!</span>
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
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas5_outing_kendri2023_intro.jpg"
                />
                <p>
                    Selain kelas 1 & 2, di hari yang sama kelas 5 berkelana ke Desa
                    Wisata Kandri!
                </p>
            </section>

            <section className="section--right">
                <p>
                    Dengan bantuan pihak Desa Wisata Kandri, para murid diajak untuk
                    mengeksplorasi alam dan mempelajari berbagai ilmu outdoor.
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas5_outing_kendri2023_outdoor.jpg"
                />
            </section>

            <section className="section--left">
                <p>
                    Untuk mengisi tenaga, kegiatan diawali dengan perkenalan dan
                    makan bersama.
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas5_outing_kendri2023_makbar.jpg"
                />
            </section>

            <section className="section--right">
                <p>
                    Para murid diajari cara bercocok tanam, mulai dari penanaman,
                    merawat, dan memanen
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas5_outing_kendri2023_manen.jpg"
                />
            </section>

            <section className="section--left">
                <p>
                    Mereka juga ditunjukkan cara berternak dengan memberikan makan
                    kepada sapi
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas5_outing_kendri2023_sapi.jpg"
                />
            </section>

            <section className="section--right">
                <p>
                    Untuk meningkatkan rasa kebersamaan, para murid diajak bermain
                    bersama
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas5_outing_kendri2023_bonding.jpg"
                />
            </section>

            <section className="section--left">
                <p>
                    Selain bermain bersama, mereka diberi kesempatan untuk menangkap
                    ikan. Walaupun kotor, para murid bahagia dapat bermain dalam
                    lumpur
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/kelas5_outing_kendri2023_ikan.png"
                />
            </section>

            <section className="section">
                <p>
                    Klik YouTube kami dibawah ini untuk menyaksikan keseruan outing
                    class 5 sepenuhnya!
                </p>
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

export default Class5;
