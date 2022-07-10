import './Components.css';
import './img/snaredrums-banner.jpg';

function Home () {
    return (
        <div className='home'>
            <img className='banner-image' src={require('./img/snaredrums-banner.jpg')}></img>
        </div>
    )
}

export default Home;