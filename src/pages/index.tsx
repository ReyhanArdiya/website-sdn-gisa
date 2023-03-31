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
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/IMG-20210522-WA0018_11zon.jpeg"
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
                                src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/20230331_084414.jpg"
                                alt="GISA"
                                className="school-photos__image"
                            />
                            <img
                                src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/20230331_084328.jpg"
                                alt="GISA"
                                className="school-photos__image"
                            />
                            <img
                                src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/20230331_084439.jpg"
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
                <div className="value-cards ">
                    <div className="value-card santun">
                        <p className="value-card__label highlight--orange">SANTUN</p>
                    </div>
                    <div className="value-card mandiri">
                        <p className="value-card__label highlight--orange">
                            MANDIRI
                        </p>
                    </div>
                    <div className="value-card aktif">
                        <p className="value-card__label highlight--orange">AKTIF</p>
                    </div>
                    <div className="value-card ramah">
                        <p className="value-card__label highlight--orange">RAMAH</p>
                    </div>
                    <div className="value-card terampil">
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
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/20230331_084345.jpg"
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
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/20230331_084355.jpg"
                            alt="GISA"
                        />
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/20230331_084328.jpg"
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

            <section id="school-events">
                <section className="home-section">
                    <header>
                        <h3 className="text__h3">Kegiatan GISA</h3>
                        <h2 className="text__h2">
                            <span className="highlight--orange">Mengoptimalkan</span>
                            Waktu Luang.
                        </h2>
                    </header>

                    <ul className="school-events__carousel">
                        <a
                            href="http://sdngisikdrono01.dikdas.semarangkota.go.id/read/class-4-goes-to-diryana-bakery"
                            target="_blank"
                        >
                            <li className="event-card C4D2023">
                                <div className="event-card__content">
                                    <h3>Class 4 Goes to Diryana Bakery!</h3>
                                    <p>
                                        Tanggal 10 Maret 2023 merupakan hari yang
                                        spesial bagi siswa kelas 4 karena mereka
                                        outing class ke Diryana Bakery
                                    </p>
                                </div>
                            </li>
                        </a>

                        <a
                            href="http://sdngisikdrono01.dikdas.semarangkota.go.id/read/class-5-goes-to-kandri"
                            target="_blank"
                        >
                            <li className="event-card C5K2023">
                                <div className="event-card__content">
                                    <h3>Class 5 Goes to Kandri</h3>
                                    <p>
                                        Selain kelas 1 & 2, di hari yang sama kelas 5
                                        berkelana ke Desa Wisata Kandri!
                                    </p>
                                </div>
                            </li>
                        </a>

                        <a
                            href="http://sdngisikdrono01.dikdas.semarangkota.go.id/read/class-1-2-goes-to-maerakaca"
                            target="_blank"
                        >
                            <li className="event-card C1MCK2023">
                                <div className="event-card__content">
                                    <h3>Class 1 & 2 Goes to Maerakaca!</h3>
                                    <p>
                                        Pagi hari Selasa 7 Maret 2023, terlihat
                                        gejala-gejala bahwa hari ini merupakan hari
                                        yang berbeda. Para murid kelas 1 & 2 bergegas
                                        memasuki sekolah mengenakan pakaian olahraga
                                        merah muda merona dan kumpulan orang tua
                                        menunggu di depan sekolah dengan membawa
                                        bekal-bekal yang lezat. Ketidaksabaran pekat
                                        terngiang dalam atmosfir apel karena para
                                        siswa dan orang tua tahu bahwa hari ini hari
                                        yang spesial: outing class ke Grand
                                        Maerakaca.
                                    </p>
                                </div>
                            </li>
                        </a>

                        <a
                            href="http://sdngisikdrono01.dikdas.semarangkota.go.id/read/class-3-goes-to-maerakaca"
                            target="_blank"
                        >
                            <li className="event-card C3MCK2023">
                                <div className="event-card__content">
                                    <h3>Class 3 Goes to Maerakaca!</h3>
                                    <p>
                                        Kegembiraan minggu ini diawali dengan outing
                                        class kelas 3 menuju Grand Maerakaca!
                                    </p>
                                </div>
                            </li>
                        </a>

                        <a
                            href="http://sdngisikdrono01.dikdas.semarangkota.go.id/read/lomba-urban-farming-2023"
                            target="_blank"
                        >
                            <li className="event-card UBF2023">
                                <div className="event-card__content">
                                    <h3>Lomba Urban Farming 2023</h3>
                                    <p>
                                        Menurutmu, apakah sayur mayur hanya dapat
                                        tumbuh hijau dan sehat di lahan pertanian
                                        saja? Tidak selalu! Kali ini, kami warga SDN
                                        Gisikdrono 01 membuktikan mampu mendorong
                                        ketahanan pangan dalam lingkungan kami dengan
                                        mengikuti lomba urban farming!
                                    </p>
                                </div>
                            </li>
                        </a>

                        <a
                            href="http://sdngisikdrono01.dikdas.semarangkota.go.id/read/kegiatan-isra-miraj"
                            target="_blank"
                        >
                            <li className="event-card ISM2023">
                                <div className="event-card__content">
                                    <h3>Kegiatan Isra mi&apos;raj</h3>
                                    <p>
                                        Dalam memperingati Isra Mi&apos;raj yang
                                        jatuh pada hari Sabtu 18 Februai 2023, maka
                                        pada hari Senin 20 Februari 2023 SDN
                                        Gisikdrono 01 melaksanakan kegiatan
                                        memperingati Isra Mi&apos;raj yang dilakukan
                                        di halaman sekolah untuk salah satu bentuk
                                        melaksanakan P5 dalam kegiatan mencerminkan
                                        Profil Pelajar Pancasila (PPP).
                                    </p>
                                </div>
                            </li>
                        </a>
                    </ul>
                </section>
            </section>

            <img
                className="decor__clock"
                src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__jam.png"
                alt="dekorasi"
            />

            <section id="extra-achievements">
                <ul id="extra-carousel" className="extra-achievements__carousel">
                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/pesta_siaga(3).jpeg"
                            alt="extra"
                        />
                        <h3>Ekstra Pramuka</h3>
                        <p className="text__h3">Setiap hari Kamis</p>
                    </li>
                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piagam.png"
                            alt="extra"
                        />
                        <h3>Ekstra Komputer</h3>
                        <p className="text__h3">Setiap hari Senin & Rabu</p>
                    </li>
                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piagam.png"
                            alt="extra"
                        />
                        <h3>Ekstra Bahasa Inggris</h3>
                        <p className="text__h3">Setiap hari Rabu</p>
                    </li>
                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piagam.png"
                            alt="extra"
                        />
                        <h3>Ekstra Musik</h3>
                        <p className="text__h3">Setiap hari Jumat</p>
                    </li>
                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piagam.png"
                            alt="extra"
                        />
                        <h3>Ekstra Paskibra</h3>
                        <p className="text__h3">Setiap hari Senin</p>
                    </li>
                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/Screenshot%202023-03-31%20221005.png"
                            alt="extra"
                        />
                        <h3>Ekstra Pencak Silat</h3>
                        <p className="text__h3">Setiap hari Kamis</p>
                    </li>
                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piagam.png"
                            alt="extra"
                        />
                        <h3>Ekstra Voli</h3>
                        <p className="text__h3">Setiap hari Selasa</p>
                    </li>
                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piagam.png"
                            alt="extra"
                        />
                        <h3>Ekstra BTQ</h3>
                        <p className="text__h3">Setiap hari Selasa</p>
                    </li>
                </ul>

                <header>
                    <img
                        className="decor__badge"
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piagam.png"
                        alt="dekorasi"
                    />
                    <h2 className="text__h2">
                        Menanam Bibit-Bibit{" "}
                        <span className="text__green">Berprestasi</span>.
                    </h2>
                    <img
                        className="decor__trophy"
                        src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piala.png"
                        alt="dekorasi"
                    />
                </header>

                <ul
                    id="achievements-carousel"
                    className="extra-achievements__carousel"
                >
                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piala.png"
                            alt="extra"
                        />
                        <h3>Rafellino Daiva Arsyad</h3>
                        <p className="text__h3">
                            JUARA 1 KYORUGI PRACADET C PUTRA PEMULA (PIALA WALIKOTA
                            SOLO 2022)
                        </p>
                    </li>

                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piala.png"
                            alt="extra"
                        />
                        <h3>Serafina Desiree Ernanda</h3>
                        <p className="text__h3">
                            JUARA II TARI ANGSA (G FES TAR JATENG (GREGET FESTIVAL
                            TARI JAWA TENGAH KE 30))
                        </p>
                    </li>

                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piala.png"
                            alt="extra"
                        />
                        <h3>Vega Nayshella Putri</h3>
                        <p className="text__h3">
                            TURNAMEN PENCAK SILAT GROBOGAN OPEN I TAHUN 2023 (JUARA I
                            TANDING KELAS A PUTRI TINGKAT SD/MI SEDERAJAT)
                        </p>
                    </li>

                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piala.png"
                            alt="extra"
                        />
                        <h3>Vega Nayshella Putri</h3>
                        <p className="text__h3">
                            TURNAMEN PENCAK SILAT GROBOGAN OPEN I TAHUN 2023 (JUARA I
                            TANDING KELAS B PUTRI TINGKAT USIA DINI)
                        </p>
                    </li>

                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piala.png"
                            alt="extra"
                        />
                        <h3>Rafel Alviano Setiyoko</h3>
                        <p className="text__h3">
                            TURNAMEN PENCAK SILAT GROBOGAN OPEN I TAHUN 2023 (JUARA
                            II TANDING KELAS BAWAH PUTRA TINGKAT SD/MI SEDERAJAT)
                        </p>
                    </li>

                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piala.png"
                            alt="extra"
                        />
                        <h3>Aleisya Aura Shafira</h3>
                        <p className="text__h3">
                            TURNAMEN PENCAK SILAT GROBOGAN OPEN I TAHUN 2023 (JUARA
                            II TANDING KELAS BEBAS BAWAH PUTRI TINGKAT SD/MI
                            SEDERAJAT)
                        </p>
                    </li>

                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piala.png"
                            alt="extra"
                        />
                        <h3>Reino Pandu Richard Wijaya</h3>
                        <p className="text__h3">
                            TURNAMEN PENCAK SILAT GROBOGAN OPEN I TAHUN 2023 (JUARA
                            II TANDING KELAS BEBAS ATAS PUTRA TINGKAT SD/MI
                            SEDERAJAT)
                        </p>
                    </li>

                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piala.png"
                            alt="extra"
                        />
                        <h3>Bellandita Olivia Samsudin</h3>
                        <p className="text__h3">
                            TURNAMEN PENCAK SILAT GROBOGAN OPEN I TAHUN 2023 (JUARA I
                            TANDING KELAS BEBAS BAWAH PUTRI TINGKAT SD/MI SEDERAJAT)
                        </p>
                    </li>

                    <li className="extra-achievements__carousel-item">
                        <img
                            src="http://sdngisikdrono01.dikdas.semarangkota.go.id/uploads/gallery/media/dekorasi__piala.png"
                            alt="extra"
                        />
                        <h3>Krizia Svana Nafilah Haryadi</h3>
                        <p className="text__h3">
                            TURNAMEN PENCAK SILAT GROBOGAN OPEN I TAHUN 2023 (JUARA
                            III TANDING KELAS E PUTRI TINGKAT SD/MI SEDERAJAT)
                        </p>
                    </li>
                </ul>
            </section>
        </main>
    );
};

export default HomePage;
