import Phone from './img/Phone.png';
import Mail from './img/Mail.png'


const MaxMenu = () => {
  return (
    <div className='maxmenu'>
    <ul>
        <li><a  href="#">Home</a></li>
        <li><a  href="#">Professional</a></li>
        <li><a  href="#">Academic</a></li>
        <li><a  href="#">Personal</a></li>
    </ul>
    <ul className="maxcontact">
        <li><p>Contact</p></li>
        <li><a href="tel: 00447923111382" className="icon"><img src={Phone}/></a></li>
        <li><a href="mailto: jp.barker@live.co.uk" className="icon"><img src={Mail}/></a></li>
    </ul>
    </div>
  )
}

export default MaxMenu
