import Button from "../Button/Button"
import styles from "../landing/Landing.module.css"

function Landing (){
    return(
        <div className={styles.landing}>
            <Button link='/home' text='ENTRAR' />
            <h3>En este sitio podras encontrar informacion relevante de paises<br>
            </br> y actividades para disfrutar en cada uno de ellos</h3>
            <img src='https://cdn.pixabay.com/animation/2022/12/24/01/36/01-36-27-376_512.gif' alt="countries" />
            <br />
            <br />
           
        </div>

    )
}

export default Landing