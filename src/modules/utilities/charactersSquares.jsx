import gutsImg from '../../assets/media/images/guts.jpg';
import cascaImg from '../../assets/media/images/casca.webp';
import ericaImg from '../../assets/media/images/erica.jpg';
import farneseImg from '../../assets/media/images/farnese.jpg';
import isidroImg from '../../assets/media/images/isidro.jpg';
import ivaleraImg from '../../assets/media/images/ivalera.jpg';
import puckImg from '../../assets/media/images/puck.jpg';
import rickertImg from '../../assets/media/images/rickert.jpg';
import schierkeImg from '../../assets/media/images/schierke.jpg';
import serpicoImg from '../../assets/media/images/serpico.jpg';

const charactersSquares = {
    guts: (
        <div className='portrait-wrapper'>
            <img
                src={gutsImg}
                alt='guts portrait'
                className='grid-image'
                id='guts-portrait'
            />
        </div>
    ),
    casca: (
        <div className='portrait-wrapper'>
            <img
                src={cascaImg}
                alt='casca portrait'
                className='grid-image'
                id='casca-portrait'
            />
        </div>
    ),
    erica: (
        <div className='portrait-wrapper'>
            <img
                src={ericaImg}
                alt='erica portrait'
                className='grid-image'
                id='erica-portrait'
            />
        </div>
    ),
    farnese: (
        <div className='portrait-wrapper'>
            <img
                src={farneseImg}
                alt='farnese portrait'
                className='grid-image'
                id='farnese-portrait'
            />
        </div>
    ),
    isidro: (
        <div className='portrait-wrapper'>
            <img
                src={isidroImg}
                alt='isidro portrait'
                className='grid-image'
                id='isidro-portrait'
            />
        </div>
    ),
    ivalera: (
        <div className='portrait-wrapper'>
            <img
                src={ivaleraImg}
                alt='ivalera portrait'
                className='grid-image'
                id='ivalera-portrait'
            />
        </div>
    ),
    puck: (
        <div className='portrait-wrapper'>
            <img
                src={puckImg}
                alt='puck portrait'
                className='grid-image'
                id='puck-portrait'
            />
        </div>
    ),
    rickert: (
        <div className='portrait-wrapper'>
            <img
                src={rickertImg}
                alt='rickert portrait'
                className='grid-image'
                id='rickert-portrait'
            />
        </div>
    ),
    schierke: (
        <div className='portrait-wrapper'>
            <img
                src={schierkeImg}
                alt='schierke portrait'
                className='grid-image'
                id='schierke-portrait'
            />
        </div>
    ),
    serpico: (
        <div className='portrait-wrapper'>
            <img
                src={serpicoImg}
                alt='serpico portrait'
                className='grid-image'
                id='serpico-portrait'
            />
        </div>
    ),
};

export { charactersSquares }; 