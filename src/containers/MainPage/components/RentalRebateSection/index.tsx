import React from 'react';
import Slider from '../../../../components/Slider';
import styles from '../styles.module.scss';
import { RentalRebateData } from './data';

function RentalRebateSection() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>Rental Rebate</h3>
      </div>
      <Slider data={RentalRebateData} />
    </section>
  );
}

export default RentalRebateSection;
