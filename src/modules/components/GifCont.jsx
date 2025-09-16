import '../../assets/stylesheets/GifCont.css';

export default function GifCont({ ref }) {
    return <div className="gif-cont">
        <img src={null} alt="Berserk Gif" className="gif-img" ref={ref} />
    </div>
}