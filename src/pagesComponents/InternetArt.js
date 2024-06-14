import React from 'react';
import { Link} from 'react-router-dom';
import '../styles/InternetArt.css';

/*This fun hadles the art section, holds in stand in react apps*/
function Art() {
    return (
        <div className='home'>
            <div className='u-photo bkgImage'></div>
            <>
                <h1 className='header'>Internet Art</h1>
                <h2 id='story'> To the Sun, my Mistress' eyes don't Compare </h2>
                <div className='artBorder'>
                    <div className='u-photo helloImage'></div>
                    <span className='firstQuestion'>
                    <Link to='/HerLips'> Her red Lips </Link>
                    <Link to='/HerHair'> Her Hair </Link>
                    <Link to='/HerEyes'> Her Eyes </Link>
                    </span>
                </div>
                <h2 id='artHeading'>Explaining Art</h2>
                <div className='u-photo artHeadingbkg'></div>
                <div className='paraBorder'>
                    <p className='para'>
                        This Net art above, is inspired by Lialina's work of 'My boyfriend came back from the War'. Here we tell a story, a poem inspired by Shakespares sonnet, 'my mistress' eye's are nothing like the sun'. This net piece refrences google links and uses hyperlinks to tell its story. Its is up to the user to shoes how they want the poem to go/end.
                    </p>
                </div>
            </>
        </div>
    );
}

export default Art;

/*image sourse: Photo by Neo: <https://www.pexels.com/photo/lines-of-code-2653362/>.Accessed: 29May 2024.
image sourse: Photo by Raka Miftah: <https://www.pexels.com/photo/old-cassette-tapes-4335772/>.Accessed: 29May 2024.
Photo by Steve Johnson: https://www.pexels.com/photo/assorted-color-painted-textile-1988693/
Photo by Diana ✨: https://www.pexels.com/photo/close-up-photo-of-painting-3753021/
Photo by Diana ✨: https://www.pexels.com/photo/blue-abstract-painting-3705390/
Photo by Merlin Lightpainting: https://www.pexels.com/photo/yellow-and-blue-abstract-painting-11127230/
Photo by Yiğit Efe Şeref: https://www.pexels.com/photo/spiral-modern-staircase-17181917/
Photo by Max Avans: https://www.pexels.com/photo/person-in-black-long-sleeve-shirt-holding-a-camera-from-a-spiral-staircase-5058840/
Photo by James Bond: https://www.pexels.com/photo/spiral-wooden-stairs-with-meta-railing-19975121/
Photo by Zafer Erdoğan: https://www.pexels.com/photo/grayscale-photo-of-a-woman-going-upstairs-8514143/
Photo by Alexey Aksenov: https://www.pexels.com/photo/black-and-white-photo-of-a-woman-raising-her-hands-8604016/
Photo by Polina Tankilevitch: https://www.pexels.com/photo/a-woman-with-a-nose-ring-4829014/
Photo by Vlada Karpovich: https://www.pexels.com/photo/photo-of-woman-putting-her-hands-up-4668541/
Photo by Alexander Krivitskiy: https://www.pexels.com/photo/grayscale-photo-of-a-person-face-3545845/*/