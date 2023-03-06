import { type NextPage } from "next";

const UrbanFarming2023: NextPage = () => {
    return (
        <>
            <header className="UFHero">
                <video autoPlay muted loop playsInline className="UFHero__video">
                    <source src="https://firebasestorage.googleapis.com/v0/b/sdngisa-18335.appspot.com/o/lomba_urban_farming_2023%2Fkids.mp4?alt=media&token=b9d4590e-c0d0-4f4c-9360-508714e23d8d" />
                </video>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/sdngisa-18335.appspot.com/o/logo_gisa.png?alt=media&token=28bfbafd-f25a-424f-add6-d65630965531"
                    className="UFHero__logo"
                    title="Logo GISA"
                    alt="Logo GISA"
                />

                <div className="UFHero__heading">
                    <h1>
                        Lomba <span className="UFHero__heading--purple">Urban</span>{" "}
                        <span className="UFHero__heading--green">Farming</span> 2023
                    </h1>
                    <h2>SDN Gisikdrono 01</h2>
                    <a className="btn">Baca Lebih Lanjut</a>
                </div>

                <p className="UFHero__footer">- scroll bawah -</p>
            </header>

            <section className="section">
                <p>Halo warga GISA!</p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                />
                <p>
                    Menurutmu, apakah sayur mayur hanya dapat tumbuh hijau dan sehat
                    di lahan pertanian saja? Tidak selalu! Kali ini, kami warga SDN
                    Gisikdrono 01 membuktikan mampu mendorong ketahanan pangan dalam
                    lingkungan kami dengan mengikuti lomba urban farming!
                </p>
            </section>

            <section className="section--right">
                <p>
                    Dengan usaha dan gotong royong dari seluruh warga SDN Gisikdrono
                    01, kami memaksimalkan lahan yang terbatas untuk bercocok tanam.
                    Setiap komponen SDN GISA berkontribusi sesuai keterampilannya
                    masing-masing dan pada akhirnya kami mampu merealisasikan urban
                    farm di lingkungan SD kami.
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                />
            </section>

            <section className="section--left">
                <p>
                    Para siswa melontarkan kreativitas mereka dengan mengkreasikan
                    pot tanaman lucu-lucu dari barang daur ulang. Setiap pot tanaman
                    kami dipenuhi dengan tanah serta pupuk yang subur untuk
                    memastikan pertumbuhan tanaman kami.
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                />
            </section>

            <section className="section--right">
                <p>
                    Guru, karyawan, orang tua, dan siswa membantu mengumpulkan
                    tanaman-tanaman. Kami mengkategorikan setiap tanaman berdasarkan
                    jenis dan umurnya untuk mempermudah perawatan. Kami merancang
                    tata letak tanaman dan setiap orang membantu menata tanaman
                    sesuai rancangannya. Hasilnya, pot tanaman yang tertata dengan
                    rapi di sekitar sekolah menyejukkan pikiran para pengunjung yang
                    datang.
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                />
            </section>

            <section className="section--left">
                <p>
                    Untuk sekarang, kami telah menanam beberapa jenis tanaman yang
                    mudah dipanen dan diproses oleh siswa kami. Terong, cabe rawit,
                    tomat, dan sawi; para siswa dan warga GISA bekerja sama secara
                    rutin untuk menanam, merawat, serta memanen tanaman-tanaman di
                    lingkungan sekolah kami.
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                />
            </section>

            <section className="section--right">
                <p>
                    Kami memanfaatkan hasil panen kami dengan menjual sayur dan buah
                    yang dihasilkan serta menginovasikan produk makanan baru. Salah
                    satu inovasi kami adalah keripik terong yang dibuat dengan
                    potongan terong produksi kami yang dibalut dengan tepung gurih
                    dan dilumuri oleh saus pedas manis. Untuk sekarang, produk kami
                    telah laris dijual dalam lingkungan sekolah SDN Gisikdrono 01;
                    dengan usaha dan gotong royong yang tak terhentikan dari segenap
                    warga GISA, kami bertujuan untuk mengembangkan urban farm kami
                    dan mendorong produk kami ke jangkauan yang lebih luas.
                </p>
                <img
                    className="img"
                    alt="Photo Warga GISA"
                    title="Photo Warga GISA"
                />
            </section>
        </>
    );
};

export default UrbanFarming2023;
