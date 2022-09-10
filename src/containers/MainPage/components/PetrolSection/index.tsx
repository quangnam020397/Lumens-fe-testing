import Slider from '../../../../components/Slider';

import styles from '../styles.module.scss';
import { petrolData } from './data';

function PetrolSection() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>Petrol</h3>
      </div>
      <Slider data={petrolData} />
    </section>
  );
}

export default PetrolSection;
