import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './banner.css'; // Certifique-se de que o caminho está correto
import bannerImage from '../../assets/contentBanner.png';

const Banner = () => {
    return (
        <div className='banner-container'>
            <img src={bannerImage} className='banner-image' alt="Banner" />
        </div>
    );
};

export default Banner;
