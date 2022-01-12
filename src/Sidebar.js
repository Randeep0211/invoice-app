import React from 'react';
import styles from './sidebar.module.css';

function Sidebar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
          <div className={styles.card_container}>
            <div className={styles.h3}><h3>Create New</h3></div>
            <div><button  className={styles.btn}>Get Started</button></div>
          </div>

      </div>
    </div>
  );
}

export default Sidebar;
