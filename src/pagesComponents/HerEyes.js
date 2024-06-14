import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/HerEyes.css';

function HerEyes() {
    return (
        <div>
            <div id='computerBoarder'>
            <div className='u-photo fourthImage'></div>
            <p className='secondStatement'>My goodness! I feel like, like I need to say something, She's...</p>
                <span className='firstQuestion'>
                    <Link to='/HerLips'> So gorgeous and her eyes</Link>
                    <Link to='/HerHair'> Someone who is one with </Link>
                    <Link to='https://www.google.com/search?q=Me+over+the+edge+in+turkish&oq=Me+over+the+edge+in+turkish&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAdIBCjI0NjAzajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8'> Someone who drives the </Link>
                </span>
            </div>
            <h3 id='fourthSen'>Oh but you must see the Top!</h3>
        </div>
    );
}

export default HerEyes;