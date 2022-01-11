import React from 'react';
import styles from './sidebar.module.css';

function Sidebar(props) {
  return (
    <div className={styles.container}>
      <div className={styles.card}></div>
    </div>
  );
}

export default Sidebar;
