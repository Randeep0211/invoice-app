import React from 'react';
import styles from './sidebar.module.css';
import image from './assets/avatar.svg';


function Sidebar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
          <div className={styles.card_container1}>
            <div className={styles.h3}><h3>Create New</h3></div>
            <div><button  className={styles.btn}>Get Started</button></div>
          </div>

          <div className={styles.card_container2}>
            <h5 className={styles.h5}>Jan 20 2021</h5>
            <h3 className={styles.h3_two}>Client of the month</h3>
            <div className={styles.client_box}>
            <img className={styles.img} src={image} />
            <h4>Harry richard</h4>

            </div>
            <div>

            </div>
          </div>

      </div>
    </div>
  );
}

export default Sidebar;
