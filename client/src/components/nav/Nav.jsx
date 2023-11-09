import Button from "../Button/Button";
import styles from "../nav/Nav.module.css"

function Nav() {

    return (
        <div className={styles.divNav}>
            <Button link='/' text='🚀 Landing' />
            <Button link='/home' text='🌍 Countries' />
            <Button link='/form' text='📋 Form' />
            {/* <Button link='/activities' text='🕺💃 Activities' /> */}
        </div>
    )
}

export default Nav;