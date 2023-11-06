import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";
import styles from "../nav/Nav.module.css"

function Nav()  {
    
    const navigate = useNavigate()
    return (
        <div className={styles.divNav}>
            <Button link='/' text='🚀 Landing' />
            <Button link='/home' text='🌍 Countries' />
            {/* <Button link='/activities' text='🕺💃 Activities' /> */}
            <Button link='/form' text='📋 Form' />
          
        </div>
    )
}

export default Nav;