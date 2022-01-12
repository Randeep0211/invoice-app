import React from 'react';
import styles from './table.module.css';

import Body from './Body';

function Table(props) {
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>CLIENT</th>
            <th>DATE</th>
            <th>AMOUNT</th>
            <th>STATUS</th>
          </tr>
        </thead>

        <Body
          client="Harry Richardson"
          date="8/01/2021"
          amount="$60"
          status="unpaid"
        />


        <Body
          client="Jean marrie"
          date="14/01/2021"
          amount="$60"
          status="overdue"
        />

        <Body
          client="Avinash singh"
          date="21/01/2021"
          amount="$60"
          status="paid"
        />

        <Body
          client="Tony stark"
          date="8/01/2021"
          amount="$60"
          status="draft"
        />
      </table>
      <div className={styles.border}></div>
    </div>
  );
}

export default Table;
