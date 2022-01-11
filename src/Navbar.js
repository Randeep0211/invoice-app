import React from 'react';
import styles from './navbar.module.css';
import { FaBell, FaList, FaDashcube , FaFileInvoice,FaCircleNotch , FaTools } from 'react-icons/fa';

function Navbar(props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.icon}>
            <FaList />
          </div>
          <h4>{props.flow}</h4>
        </div>

        <div className={styles.contents}>
          <div>
            <div className={styles.icon1}>
              <FaDashcube />
            </div>
            <h4>{props.dashboard}</h4>
          </div>

          <div>
            <div className={styles.icon1}>
              <FaFileInvoice />
            </div>
            <h4>{props.invoices}</h4>
          </div>

          <div>
            <div className={styles.icon1}>
              <FaCircleNotch />
            </div>
            <h4>{props.clients}</h4>
          </div>

          <div>
            <div className={styles.icon1}>
              <FaTools />
            </div>
            <h4>{props.settings}</h4>
          </div>
        </div>
      </div>
      <div>
        <FaBell className={styles.bell} />
      </div>
      <div>
        <img className={styles.img} src={'/profile2.png'} alt="image" />
      </div>
    </>
  );
}

export default Navbar;
