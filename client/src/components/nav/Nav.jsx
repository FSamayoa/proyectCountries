import Button from "../Button/Button";
import Searchbar from "../searchbar/Searchbar";

function Nav()  {
    return (
        <div>
            <Button Link='/home' text='🏠 Home' />
            <Button Link='/activities' text='🕺💃 Activities' />
            <Button Link='/activities' text='📋 Form' />
            <Searchbar></Searchbar>
        </div>
    )
}

export default Nav;