import { type NextPage } from "next";

const UrbanFarming2023: NextPage = () => {
    return (
        <>
            <header className="UFHero">
                <video autoPlay muted loop playsInline className="UFHero__video">
                    <source src="https://firebasestorage.googleapis.com/v0/b/sdngisa-18335.appspot.com/o/lomba_urban_farming_2023%2Fkids.mp4?alt=media&token=b9d4590e-c0d0-4f4c-9360-508714e23d8d" />
                </video>
                <img
                    src="logo_gisa.png"
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
        </>
    );
};

export default UrbanFarming2023;
