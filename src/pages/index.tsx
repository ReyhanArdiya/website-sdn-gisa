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
        </main>
    );
};

export default HomePage;
