import React from 'react';
import styles from './table.module.css'

function Table(props) {
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default Table;