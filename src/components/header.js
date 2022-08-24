import Dude from './img/Dude.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={Dude} className="pic" alt='filler'/>
            <h1 className='title'>Jon-Paul <span> Barker</span></h1>
        </div>
    )
}

export default Header;