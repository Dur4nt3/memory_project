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

export default function CharacterGrid() {
    return <div className="character-grid">
        <img src={gutsImg} alt='guts portrait' className="grid-image" id='gutsPortrait' />
        <img src={cascaImg} alt='casca portrait' className="grid-image" id='cascaPortrait' />
        <img src={ericaImg} alt='erica portrait' className="grid-image" id='ericaPortrait' />
        <img src={farneseImg} alt='farnese portrait' className="grid-image" id='farnesePortrait' />
        <img src={isidroImg} alt='isidro portrait' className="grid-image" id='isidroPortrait' />
        <img src={ivaleraImg} alt='ivalera portrait' className="grid-image" id='ivaleraPortrait' />
        <img src={puckImg} alt='puck portrait' className="grid-image" id='puckPortrait' />
        <img src={rickertImg} alt='rickert portrait' className="grid-image" id='rickertPortrait' />
        <img src={schierkeImg} alt='schierke portrait' className="grid-image" id='schierkePortrait' />
        <img src={serpicoImg} alt='serpico portrait' className="grid-image" id='serpicoPortrait' />
    </div>
}