import { Link } from "react-router-dom";
import './header.css';

function Header(){
     return(
        <div>
            <div className="header">
                    <div>
                        <img className='icon' src='icon.png' alt='logo'/>
                    </div>
                    <div className='pesq'>

                    </div>

            </div>
                    <div className="catalogo">
                        <Link className="link-home"   to="/">Negócios</Link>
                        <Link className="link-home"   to="/">Política</Link>
                        <Link className="link-home"   to="/">Esporte</Link>
                        <Link className="link-home"   to="/">Tecnologia</Link>
                        <Link className="link-home"   to="/">Comida</Link>
                        <Link className="link-home"   to="/">Entretenimento</Link>
                        <Link className="link-home"   to="/">Ciência</Link>
                        <Link className="link-home"   to="/">Ambiente</Link>
                    </div>
         </div>   
     );
 }

 export default Header;