import Button from "../Button/Button";
import Searchbar from "../searchbar/Searchbar";
import { useNavigate } from "react-router-dom";

function Nav()  {
    const navigate = useNavigate()
    return (
        <div>
            <Button link='/home' text='🏠 Home' />
            <Button link='/activities' text='🕺💃 Activities' />
            <Button link='/form' text='📋 Form' />
            {/* <Searchbar/> */}
        </div>
    )
}

export default Nav;