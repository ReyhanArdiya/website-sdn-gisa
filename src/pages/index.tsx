import { type NextPage } from "next";

const HomePage: NextPage = () => {
    return (
        <main className="home-stack">
            <section id="home-hero" className="home-hero">
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

            <section id="home-banner" className="home-banner">
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

            <section
                id="home-principal-greeting"
                className="home-section home-principal-greeting"
            >
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

            <section id="home-school-history" className="home-school-history">
                <section className="home-section">
                    <header>
                        <h3 className="text__h3">Profil GISA</h3>
                        <h2 className="text__h2">
                            Mari{" "}
                            <span className="highlight--orange">Berkenalan</span>{" "}
                            Dengan Kami.
                        </h2>
                    </header>
                    <div className="home-school-history__content">
                        <div className="school-photos">
                            <img
                                src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/sd%20gisikdrono%2001.jpg"
                                alt="GISA"
                                className="school-photos__image"
                            />
                            <img
                                src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/sd%20gisikdrono%2001.jpg"
                                alt="GISA"
                                className="school-photos__image"
                            />
                            <img
                                src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/sd%20gisikdrono%2001.jpg"
                                alt="GISA"
                                className="school-photos__image"
                            />
                            <img
                                src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__book.png"
                                alt="GISA"
                                className="decor__book"
                            />
                        </div>
                        <p className="text__body">
                            SD Gisikdrono 01 dibangun sejak tahun 1964 dan resmi
                            dinegerikan pada 1 Oktober 1985. SD kami terletak di
                            tengah perkampungan yang nyaman, cocok untuk menjauh dari
                            hiruk-pikuk kehidupan kota.
                            <br />
                            <br />
                            Sekolah kami terlihat sederhana, namun para murid dan
                            guru membuatnya spesial. Setiap hari murid kami
                            bersemangat memeriahkan pembelajaran di sekolah. Kami
                            mendukung mereka untuk meraih KKM dengan bantuan
                            guru-guru dan tenaga kependidikan yang berkompetensi.
                            Karena ini, kami pernah meraih juara 1 rata-rata Ujian
                            Nasional tingkat kecamatan dari tahun 2016-2018.
                            <br />
                            <br />
                            Selain secara akademik, kami memfasilitasi murid kami
                            untuk berprestasi secara non-akademik. Dengan berbagai
                            ekstrakurikuler yang diadakan secara rutin dan
                            latihan-latihan intensif yang kami berikan kepada
                            murid-murid kami untuk berlomba, kami telah mencetak
                            berbagai prestasi mulai dari juara harapan pesta siaga
                            hingga medali emas pencak silat tingkat nasional.
                            <br />
                            <br />
                            Selama berkegiatan, kami selalu menghargai tujuan, visi,
                            dan misi kami. Kami bekerja sama dengan berbagai pihak
                            seperti orang tua murid, Puskesmas Lebdosari, dkk. untuk
                            merealisasikan acara-acara yang menanam nilai-nilai
                            positif kepada murid kami.
                        </p>
                    </div>
                </section>
            </section>

            <section id="gisa-values" className="home-section">
                <div className="value-cards">
                    <div className="value-card">
                        <p className="value-card__label highlight--orange">SANTUN</p>
                    </div>
                    <div className="value-card">
                        <p className="value-card__label highlight--orange">
                            MANDIRI
                        </p>
                    </div>
                    <div className="value-card">
                        <p className="value-card__label highlight--orange">AKTIF</p>
                    </div>
                    <div className="value-card">
                        <p className="value-card__label highlight--orange">RAMAH</p>
                    </div>
                    <div className="value-card">
                        <p className="value-card__label highlight--orange">
                            TERAMPIL
                        </p>
                    </div>
                </div>

                <p className="text__body">
                    5 nilai tersebut kami pegang selalu selama kami menjadi warga
                    GISA. Nilai-nilai tersebut telah memandu kami sampai sekarang dan
                    mereka akan memandu kami kedepannya untuk merealisasikan target
                    besar kami untuk menjadi peka dengan pemanfaatan teknologi.
                </p>
            </section>

            <section id="school-facilities" className="home-section">
                <div className="school-facilities__photo">
                    <img
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/sd%20gisikdrono%2001.jpg"
                        alt="GISA"
                    />
                    <img
                        className="decor__lokasi"
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__lokasi.png"
                        alt="dekorasi"
                    />
                </div>

                <p className="text__body school-facilities__intro">
                    Secara administrasi Sekolah Dasar (SD) Negeri Gisikdrono 01
                    beralamat di Jalan Puspogiwang IV No.8, Kelurahan Gisikdrono,
                    Kecamatan Semarang Barat, Kota Semarang, Provinsi Jawa Tengah.
                </p>

                <div className="school-facilities__facilities">
                    <ul className="school-facilities__list">
                        <li className="feature-highlight">
                            <svg
                                width="31"
                                height="25"
                                viewBox="0 0 31 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.8673 3.43406L26.9838 1.0144C26.8893 0.934748 26.78 0.874547 26.6621 0.837254C26.5443 0.799961 26.4202 0.786309 26.2971 0.797082C26.1739 0.807856 26.0541 0.842842 25.9445 0.900034C25.835 0.957225 25.7378 1.0355 25.6585 1.13035L13.3541 16.6285L4.90341 9.53403C4.70972 9.37155 4.45942 9.29265 4.20757 9.31469C3.95571 9.33672 3.72292 9.45788 3.56038 9.65153L1.10937 12.575C0.946893 12.7687 0.867997 13.019 0.890032 13.2709C0.912066 13.5227 1.03323 13.7555 1.22687 13.9181L13.2678 24.2597C13.3786 24.3508 13.5091 24.4148 13.649 24.4467C13.7888 24.4786 13.9342 24.4774 14.0735 24.4433C14.2212 24.4559 14.3697 24.4332 14.5068 24.377C14.6439 24.3208 14.7657 24.2328 14.8621 24.1202L29.9833 4.7602C30.1438 4.56892 30.2217 4.32174 30.1999 4.07302C30.1782 3.8243 30.0585 3.59457 29.8673 3.43406Z"
                                    fill="#286FF9"
                                />
                            </svg>
                            <p>Jarak tempuh ± 5 menit dari kota Propinsi</p>
                        </li>
                        <li className="feature-highlight">
                            <svg
                                width="31"
                                height="25"
                                viewBox="0 0 31 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.8673 3.43406L26.9838 1.0144C26.8893 0.934748 26.78 0.874547 26.6621 0.837254C26.5443 0.799961 26.4202 0.786309 26.2971 0.797082C26.1739 0.807856 26.0541 0.842842 25.9445 0.900034C25.835 0.957225 25.7378 1.0355 25.6585 1.13035L13.3541 16.6285L4.90341 9.53403C4.70972 9.37155 4.45942 9.29265 4.20757 9.31469C3.95571 9.33672 3.72292 9.45788 3.56038 9.65153L1.10937 12.575C0.946893 12.7687 0.867997 13.019 0.890032 13.2709C0.912066 13.5227 1.03323 13.7555 1.22687 13.9181L13.2678 24.2597C13.3786 24.3508 13.5091 24.4148 13.649 24.4467C13.7888 24.4786 13.9342 24.4774 14.0735 24.4433C14.2212 24.4559 14.3697 24.4332 14.5068 24.377C14.6439 24.3208 14.7657 24.2328 14.8621 24.1202L29.9833 4.7602C30.1438 4.56892 30.2217 4.32174 30.1999 4.07302C30.1782 3.8243 30.0585 3.59457 29.8673 3.43406Z"
                                    fill="#286FF9"
                                />
                            </svg>
                            <p>1 bangunan utama dengan luas lahan 2.850 M²</p>
                        </li>
                        <li className="feature-highlight">
                            <svg
                                width="31"
                                height="25"
                                viewBox="0 0 31 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.8673 3.43406L26.9838 1.0144C26.8893 0.934748 26.78 0.874547 26.6621 0.837254C26.5443 0.799961 26.4202 0.786309 26.2971 0.797082C26.1739 0.807856 26.0541 0.842842 25.9445 0.900034C25.835 0.957225 25.7378 1.0355 25.6585 1.13035L13.3541 16.6285L4.90341 9.53403C4.70972 9.37155 4.45942 9.29265 4.20757 9.31469C3.95571 9.33672 3.72292 9.45788 3.56038 9.65153L1.10937 12.575C0.946893 12.7687 0.867997 13.019 0.890032 13.2709C0.912066 13.5227 1.03323 13.7555 1.22687 13.9181L13.2678 24.2597C13.3786 24.3508 13.5091 24.4148 13.649 24.4467C13.7888 24.4786 13.9342 24.4774 14.0735 24.4433C14.2212 24.4559 14.3697 24.4332 14.5068 24.377C14.6439 24.3208 14.7657 24.2328 14.8621 24.1202L29.9833 4.7602C30.1438 4.56892 30.2217 4.32174 30.1999 4.07302C30.1782 3.8243 30.0585 3.59457 29.8673 3.43406Z"
                                    fill="#286FF9"
                                />
                            </svg>
                            <p>
                                Dekat Masjid An-Nur, permukiman, dan berbagai warung
                            </p>
                        </li>
                        <li className="feature-highlight">
                            <svg
                                width="31"
                                height="25"
                                viewBox="0 0 31 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.8673 3.43406L26.9838 1.0144C26.8893 0.934748 26.78 0.874547 26.6621 0.837254C26.5443 0.799961 26.4202 0.786309 26.2971 0.797082C26.1739 0.807856 26.0541 0.842842 25.9445 0.900034C25.835 0.957225 25.7378 1.0355 25.6585 1.13035L13.3541 16.6285L4.90341 9.53403C4.70972 9.37155 4.45942 9.29265 4.20757 9.31469C3.95571 9.33672 3.72292 9.45788 3.56038 9.65153L1.10937 12.575C0.946893 12.7687 0.867997 13.019 0.890032 13.2709C0.912066 13.5227 1.03323 13.7555 1.22687 13.9181L13.2678 24.2597C13.3786 24.3508 13.5091 24.4148 13.649 24.4467C13.7888 24.4786 13.9342 24.4774 14.0735 24.4433C14.2212 24.4559 14.3697 24.4332 14.5068 24.377C14.6439 24.3208 14.7657 24.2328 14.8621 24.1202L29.9833 4.7602C30.1438 4.56892 30.2217 4.32174 30.1999 4.07302C30.1782 3.8243 30.0585 3.59457 29.8673 3.43406Z"
                                    fill="#286FF9"
                                />
                            </svg>
                            <p>6 ruang kelas</p>
                        </li>
                        <li className="feature-highlight">
                            <svg
                                width="31"
                                height="25"
                                viewBox="0 0 31 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.8673 3.43406L26.9838 1.0144C26.8893 0.934748 26.78 0.874547 26.6621 0.837254C26.5443 0.799961 26.4202 0.786309 26.2971 0.797082C26.1739 0.807856 26.0541 0.842842 25.9445 0.900034C25.835 0.957225 25.7378 1.0355 25.6585 1.13035L13.3541 16.6285L4.90341 9.53403C4.70972 9.37155 4.45942 9.29265 4.20757 9.31469C3.95571 9.33672 3.72292 9.45788 3.56038 9.65153L1.10937 12.575C0.946893 12.7687 0.867997 13.019 0.890032 13.2709C0.912066 13.5227 1.03323 13.7555 1.22687 13.9181L13.2678 24.2597C13.3786 24.3508 13.5091 24.4148 13.649 24.4467C13.7888 24.4786 13.9342 24.4774 14.0735 24.4433C14.2212 24.4559 14.3697 24.4332 14.5068 24.377C14.6439 24.3208 14.7657 24.2328 14.8621 24.1202L29.9833 4.7602C30.1438 4.56892 30.2217 4.32174 30.1999 4.07302C30.1782 3.8243 30.0585 3.59457 29.8673 3.43406Z"
                                    fill="#286FF9"
                                />
                            </svg>
                            <p>1 ruang guru</p>
                        </li>
                        <li className="feature-highlight">
                            <svg
                                width="31"
                                height="25"
                                viewBox="0 0 31 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.8673 3.43406L26.9838 1.0144C26.8893 0.934748 26.78 0.874547 26.6621 0.837254C26.5443 0.799961 26.4202 0.786309 26.2971 0.797082C26.1739 0.807856 26.0541 0.842842 25.9445 0.900034C25.835 0.957225 25.7378 1.0355 25.6585 1.13035L13.3541 16.6285L4.90341 9.53403C4.70972 9.37155 4.45942 9.29265 4.20757 9.31469C3.95571 9.33672 3.72292 9.45788 3.56038 9.65153L1.10937 12.575C0.946893 12.7687 0.867997 13.019 0.890032 13.2709C0.912066 13.5227 1.03323 13.7555 1.22687 13.9181L13.2678 24.2597C13.3786 24.3508 13.5091 24.4148 13.649 24.4467C13.7888 24.4786 13.9342 24.4774 14.0735 24.4433C14.2212 24.4559 14.3697 24.4332 14.5068 24.377C14.6439 24.3208 14.7657 24.2328 14.8621 24.1202L29.9833 4.7602C30.1438 4.56892 30.2217 4.32174 30.1999 4.07302C30.1782 3.8243 30.0585 3.59457 29.8673 3.43406Z"
                                    fill="#286FF9"
                                />
                            </svg>
                            <p>1 ruang kepala sekolah</p>
                        </li>
                        <li className="feature-highlight">
                            <svg
                                width="31"
                                height="25"
                                viewBox="0 0 31 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.8673 3.43406L26.9838 1.0144C26.8893 0.934748 26.78 0.874547 26.6621 0.837254C26.5443 0.799961 26.4202 0.786309 26.2971 0.797082C26.1739 0.807856 26.0541 0.842842 25.9445 0.900034C25.835 0.957225 25.7378 1.0355 25.6585 1.13035L13.3541 16.6285L4.90341 9.53403C4.70972 9.37155 4.45942 9.29265 4.20757 9.31469C3.95571 9.33672 3.72292 9.45788 3.56038 9.65153L1.10937 12.575C0.946893 12.7687 0.867997 13.019 0.890032 13.2709C0.912066 13.5227 1.03323 13.7555 1.22687 13.9181L13.2678 24.2597C13.3786 24.3508 13.5091 24.4148 13.649 24.4467C13.7888 24.4786 13.9342 24.4774 14.0735 24.4433C14.2212 24.4559 14.3697 24.4332 14.5068 24.377C14.6439 24.3208 14.7657 24.2328 14.8621 24.1202L29.9833 4.7602C30.1438 4.56892 30.2217 4.32174 30.1999 4.07302C30.1782 3.8243 30.0585 3.59457 29.8673 3.43406Z"
                                    fill="#286FF9"
                                />
                            </svg>
                            <p>1 perpustakaan</p>
                        </li>
                        <li className="feature-highlight">
                            <svg
                                width="31"
                                height="25"
                                viewBox="0 0 31 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.8673 3.43406L26.9838 1.0144C26.8893 0.934748 26.78 0.874547 26.6621 0.837254C26.5443 0.799961 26.4202 0.786309 26.2971 0.797082C26.1739 0.807856 26.0541 0.842842 25.9445 0.900034C25.835 0.957225 25.7378 1.0355 25.6585 1.13035L13.3541 16.6285L4.90341 9.53403C4.70972 9.37155 4.45942 9.29265 4.20757 9.31469C3.95571 9.33672 3.72292 9.45788 3.56038 9.65153L1.10937 12.575C0.946893 12.7687 0.867997 13.019 0.890032 13.2709C0.912066 13.5227 1.03323 13.7555 1.22687 13.9181L13.2678 24.2597C13.3786 24.3508 13.5091 24.4148 13.649 24.4467C13.7888 24.4786 13.9342 24.4774 14.0735 24.4433C14.2212 24.4559 14.3697 24.4332 14.5068 24.377C14.6439 24.3208 14.7657 24.2328 14.8621 24.1202L29.9833 4.7602C30.1438 4.56892 30.2217 4.32174 30.1999 4.07302C30.1782 3.8243 30.0585 3.59457 29.8673 3.43406Z"
                                    fill="#286FF9"
                                />
                            </svg>
                            <p>1 UKS</p>
                        </li>
                        <li className="feature-highlight">
                            <svg
                                width="31"
                                height="25"
                                viewBox="0 0 31 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.8673 3.43406L26.9838 1.0144C26.8893 0.934748 26.78 0.874547 26.6621 0.837254C26.5443 0.799961 26.4202 0.786309 26.2971 0.797082C26.1739 0.807856 26.0541 0.842842 25.9445 0.900034C25.835 0.957225 25.7378 1.0355 25.6585 1.13035L13.3541 16.6285L4.90341 9.53403C4.70972 9.37155 4.45942 9.29265 4.20757 9.31469C3.95571 9.33672 3.72292 9.45788 3.56038 9.65153L1.10937 12.575C0.946893 12.7687 0.867997 13.019 0.890032 13.2709C0.912066 13.5227 1.03323 13.7555 1.22687 13.9181L13.2678 24.2597C13.3786 24.3508 13.5091 24.4148 13.649 24.4467C13.7888 24.4786 13.9342 24.4774 14.0735 24.4433C14.2212 24.4559 14.3697 24.4332 14.5068 24.377C14.6439 24.3208 14.7657 24.2328 14.8621 24.1202L29.9833 4.7602C30.1438 4.56892 30.2217 4.32174 30.1999 4.07302C30.1782 3.8243 30.0585 3.59457 29.8673 3.43406Z"
                                    fill="#286FF9"
                                />
                            </svg>
                            <p>1 ruang agama</p>
                        </li>
                        <li className="feature-highlight">
                            <svg
                                width="31"
                                height="25"
                                viewBox="0 0 31 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.8673 3.43406L26.9838 1.0144C26.8893 0.934748 26.78 0.874547 26.6621 0.837254C26.5443 0.799961 26.4202 0.786309 26.2971 0.797082C26.1739 0.807856 26.0541 0.842842 25.9445 0.900034C25.835 0.957225 25.7378 1.0355 25.6585 1.13035L13.3541 16.6285L4.90341 9.53403C4.70972 9.37155 4.45942 9.29265 4.20757 9.31469C3.95571 9.33672 3.72292 9.45788 3.56038 9.65153L1.10937 12.575C0.946893 12.7687 0.867997 13.019 0.890032 13.2709C0.912066 13.5227 1.03323 13.7555 1.22687 13.9181L13.2678 24.2597C13.3786 24.3508 13.5091 24.4148 13.649 24.4467C13.7888 24.4786 13.9342 24.4774 14.0735 24.4433C14.2212 24.4559 14.3697 24.4332 14.5068 24.377C14.6439 24.3208 14.7657 24.2328 14.8621 24.1202L29.9833 4.7602C30.1438 4.56892 30.2217 4.32174 30.1999 4.07302C30.1782 3.8243 30.0585 3.59457 29.8673 3.43406Z"
                                    fill="#286FF9"
                                />
                            </svg>
                            <p>1 lab komputer</p>
                        </li>
                    </ul>

                    <div className="school-facilities__photos">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/sd%20gisikdrono%2001.jpg"
                            alt="GISA"
                        />
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/sd%20gisikdrono%2001.jpg"
                            alt="GISA"
                        />

                        <img
                            className="decor__s"
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__s.png"
                            alt="dekorasi"
                        />
                        <img
                            className="decor__daun"
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__daun.png"
                            alt="dekorasi"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
