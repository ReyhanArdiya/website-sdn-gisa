import { type NextPage } from "next";

const HomePage: NextPage = () => {
    return (
        <main className="home-stack">
            <section className="home-hero">
                <header className="home-hero__content">
                    <h3 className="text__h3">Selamat datang!</h3>
                    <h1 className="text__h1">
                        Halo Warga <span className="text__green">GISA</span>.
                    </h1>
                    <p className="text__body">
                        Mari berkenalan dengan keluarga{" "}
                        <span className="text__orange">SDN Gisikdrono 01</span> yang
                        penuh dengan antusias dan kehangatan.
                    </p>
                    <img
                        className="decor__waved-cactus"
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__waved-cactus.png"
                        alt="dekorasi"
                    />
                </header>
            </section>

            <section className="home-banner">
                <div className="home-banner__content">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/sdngisa-18335.appspot.com/o/logo_gisa.png?alt=media&token=28bfbafd-f25a-424f-add6-d65630965531"
                        className="home-banner__logo"
                        title="Logo GISA"
                        alt="Logo GISA"
                    />

                    <img
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/sd%20gisikdrono%2001.jpg"
                        className="home-banner__photo"
                        alt="GISA"
                    />
                </div>
            </section>

            <section className="home-section home-principal-greeting">
                <header>
                    <h3 className="text__h3">Sambutan Kepala Sekolah</h3>
                    <h2 className="text__h2">
                        Perkenalkan <span className="highlight">Kepsek</span> Kami.
                    </h2>
                </header>

                <div className="principal-photo">
                    <img
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/sd%20gisikdrono%2001.jpg"
                        alt="GISA"
                    />

                    <p>Sumarni, S. Pd.</p>
                </div>

                <p className="text__body">
                    Assalamualaikum wr.wb. <br />
                    Om swastyastu namo buddhaya.
                    <br />
                    <br />
                    Salam sejahtera bagi kita semua,
                    <br />
                    <br />
                    Bapak/Ibu/ Saudara/i, serta Anak-anak generasi penerus yang saya
                    banggakan. Puji dan syukur kita panjatkan kehadirat Tuhan YME
                    yang telah melimpahkan berkatNya bagi kita tanpa batas.
                    <br />
                    <br />
                    Saya sampaikan terima kasih kepada Kepala Dinas Pendidikan Kota
                    Semarang, Bapak Gunawan Saptogiri, S.H., M.M. beserta jajaran
                    yang telah memfasilitasi SDN Gisikdrono 01 untuk dapat memiliki
                    website sekolah.
                    <br />
                    <br />
                    Sungguh ada harapan besar bagi keluarga besar SDN Gisikdrono 01
                    Semarang, di masa mendatang untuk semakin terpacu dalam
                    meningkatkan pelayanan kepada masyarakat di bidang pendidikan,
                    khususnya bagi peserta didik SDN Gisikdrono 01. Dengan
                    dimilikinya website sekolah, saya juga berharap akan semakin
                    menjalin komunikasi yang harmonis dengan masyarakat, mempermudah
                    stakeholder dalam mengakses segala informasi yang ada di sekolah,
                    serta memupuk kompetensi warga sekolah dalam mewujudkan visi-misi
                    sekolah.
                    <br />
                    <br />
                    Semoga kita semua senantiasa dalam lindungan dan bimbingan Tuhan.
                    <br />
                    <br />
                    Wassalamualaikum wr.wb.
                </p>

                <img
                    className="decor__hello"
                    src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__hello.png"
                    alt="dekorasi"
                />
            </section>
        </main>
    );
};

export default HomePage;
