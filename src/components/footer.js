import Phonemini from './img/Phonemini.png';
import Mailmini from './img/Mailmini.png';

const Footer = () => {
  return (
    <div className="contact">
        <p>Contact: </p>
        <a href="tel: 00447923111382" className="icon"><img src={Phonemini}/></a>
        <a href="mailto: jp.barker@live.co.uk" className="icon"><img src={Mailmini}/></a>
    </div>
  )
}

export default Footer
