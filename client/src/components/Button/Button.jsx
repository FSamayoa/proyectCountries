import { Link } from "react-router-dom"


const Button = ({ link  , text ,disabled}) => {
    return(
        <Link to={link}>
            <button disabled={disabled}>
                {text}
            </button>
        </Link>
    )
}

export default Button;