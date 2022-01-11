import React from 'react';
import styles from './main.module.css';
import Table from './Table';
import {
  MdDashboardCustomize,
  MdOutlinePending,
  MdList,
  MdDrafts,
  MdPrint,
  MdDownload
} from 'react-icons/md';

function Main(props) {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.h1}>{props.dashboard}</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Search anything here"
        />
        <div className={styles.box}>
          <div>
            <MdDashboardCustomize className={styles.icon1} />
            <div className={styles.content}>
              <h5>{props.paid}</h5>
              <h5>{props.price}</h5>
            </div>
          </div>
          <div>
            <MdOutlinePending className={styles.icon2} />

            <div className={styles.content}> 
              <h5>{props.unpaid}</h5>
              <h5>{props.Npaid}</h5>
            </div>
          </div>
          <div>
            <MdList className={styles.icon3} />

            <div className={styles.content}>
              <h5>{props.due}</h5>
              <h5>{props.overdue}</h5>
            </div>
          </div>
          <div>
            <MdDrafts className={styles.icon4} />

            <div className={styles.content}>
              <h5>{props.draft}</h5>
              <h5>{props.Draft}</h5>
            </div>
          </div>
        </div>
      <div className={styles.invoice_container}>
        <div className={styles.invoice}><h6>{props.invoice}</h6></div>
        <div className={styles.icons}><MdPrint /> <MdDownload /></div>
        <div><Table /></div>
      </div>
      </div>

    </div>
  );
}

export default Main;