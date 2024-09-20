import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carBrand1 from '../../assets/carBrand1.png';
import carBrand2 from '../../assets/carBrand2.png';
import carBrand3 from '../../assets/carBrand3.png';
import carBrand4 from '../../assets/carBrand4.png';
import carBrand5 from '../../assets/carBrand5.png';
import carBrand6 from '../../assets/carBrand6.png';
import carBrand7 from '../../assets/carBrand7.png';
import carBrand8 from '../../assets/carBrand8.png';
import carBrand9 from '../../assets/carBrand9.png';
import carBrand10 from '../../assets/carBrand10.png';
import carBrand11 from '../../assets/carBrand11.png';
import carBrand12 from '../../assets/carBrand12.png';
import carBrand13 from '../../assets/carBrand13.png';
import carBrand14 from '../../assets/carBrand14.png';
import carBrand15 from '../../assets/carBrand15.png';
import './carroselMarcas.css'


const CardCarousel: React.FC = () => {

    return (<div className='carroseu'>
        <div className='carde'>
            <div className="borda"><img src={carBrand1} className='imagemCarde' /></div>
        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand2} className='imagemCarde' style={{marginTop:"-12px"}}/></div>
  
        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand3} className='imagemCarde' /></div>
        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand4} className='imagemCarde' /></div>
        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand5} className='imagemCarde' style={{marginTop:"-12px"}} /></div>
        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand6} className='imagemCarde' /></div>
        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand7} className='imagemCarde' /></div>
        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand8} className='imagemCarde' style={{marginTop:"-12px"}} /></div>
        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand9} className='imagemCarde' /></div>
        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand10} className='imagemCarde' /></div>

        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand11} className='imagemCarde' style={{marginTop:"-12px"}} /></div>

        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand12} className='imagemCarde' /></div>

        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand13} className='imagemCarde' /></div>

        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand14} className='imagemCarde' /></div>

        </div>
        <div className='carde'>
            <div className="borda"><img src={carBrand15} className='imagemCarde' /></div>

        </div>
    </div>
    
    );
};

export default CardCarousel;
