import Header from '../components/header/Header';
import CarroselMarcas from '../components/contentHome/carroselMarcas';
import Banner from '../components/contentHome/banner';
import Footer from '../components/header/footer/footer';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="content-container">
                <Banner />
                <CarroselMarcas />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
