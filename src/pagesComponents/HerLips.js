import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/HerLips.css';

function HerLips() {
    return (
        <div>
            <div id='computerBoarder'>
            <div className='u-photo secondImage'></div>
            <p className='firstStatement'>Are none like I've ever seen. But then, When I see her, She's...</p>
                <span className='firstQuestion'>
                    <Link to='/HerEyes'> Something Else </Link>
                    <Link to='/HerHair'> Someone Else </Link>
                    <Link to='https://www.google.com/search?q=I+see+that+she+is+now+waiting+for+me%2C+Somewhere+here%2C+in+this+country+translate+in+turkish&oq=I+see+that+she+is+now+waiting+for+me%2C+Somewhere+here%2C+in+this+country+translate+in+turkish&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCjU4Mjg5ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8'> SomeWhere Around the World </Link>
                </span>
            </div>
            <h3 id='secondSen'>Ohh But Scroll Up Please!</h3>
        </div>
    );
}

export default HerLips;
