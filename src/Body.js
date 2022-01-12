import React from 'react';
import styles from './table.module.css';
import image from './assets/avatar.svg';

function Body(props) {
  return (
    <tbody>
      <tr className={styles.tr}>
        <td>
          <img className={styles.img} src={image} /> {props.client}
        </td>
        <td>{props.date}</td>
        <td>{props.amount}</td>
        <td>{props.status}</td>
      </tr>
    </tbody>
  );
}

export default Body;
