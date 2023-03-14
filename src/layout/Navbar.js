import styles from './Navbar.module.css'

function Navbar(){
    return(
        <ul className={styles.list}>
        <li className={styles.item}>
          <a href="/">Home</a>
        </li>
        <li className={styles.item}>
          <a href="/empresa">Empresa</a>
        </li>
        <li className={styles.item}>
          <a href="/contato">Contato</a>
        </li>
      </ul>

    )
}

export default Navbar