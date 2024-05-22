import './styles.css'
import logo from '../.././assets/logo.png'
export default function Header() {
    return(
        <div className="Header">
            <img className="logo" src={logo} />
        </div>
    );
}