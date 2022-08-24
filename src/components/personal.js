import Shogi from './img/Shogi.png'
import Improv from './img/Improv.png'
import Coding from './img/Coding.png'

const Personal = () => {
    return (
        <div className='personal'>
            <h3>Personal</h3>            
            <img src={Shogi}/>    
            <h4>Shogi</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, amet nesciunt. Consequatur quis laboriosam soluta dolorem. Eaque enim perspiciatis quibusdam dolore. Blanditiis commodi quis modi perspiciatis impedit rem dolore neque.</p>
            <img src={Improv}/>
            <h4>Improv</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum esse accusamus, veniam error magni eveniet, reiciendis rerum labore, nobis maxime a laudantium blanditiis in dolor. Sapiente earum nihil sunt. Temporibus!</p>
            <img src={Coding}/>
            <h4>Coding</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum esse accusamus, veniam error magni eveniet, reiciendis rerum labore, nobis maxime a laudantium blanditiis in dolor. Sapiente earum nihil sunt. Temporibus!</p>
        
        </div>
    )
}

export default Personal