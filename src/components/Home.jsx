import './Components.css';
import banner from './img/snaredrums-banner.jpg';

function Home () {
    return (
        <div className='home'>
            <img className='banner-image' src={banner}></img>
        </div>
    )
}

export default Home;