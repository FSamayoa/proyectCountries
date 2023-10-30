import Button from "../Button/Button"

function Landing (){
    return(
        <div>
            <img src='https://cdn.pixabay.com/animation/2022/12/24/01/36/01-36-27-376_512.gif' alt="countries" />
            <h3>En este sitio podras encontrar toda la informacion de paises y actividades para disfrutar en cada uno de ellos</h3>
            <Button link='/home' text='Entrar' />
            <br />
            <br />
            <Button link='/home' text='Iniciar sesion' />
            <br />
            <br />
            <Button link='/home' text='Registrarse' />
        </div>

    )
}

export default Landing