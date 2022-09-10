import Slider from '../../../../components/Slider';
import styles from '../styles.module.scss';
import { FoodAndBeverageData } from './data';

function FoodAndBeverage() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h3>Food and Beverage</h3>
      </div>
      <Slider data={FoodAndBeverageData} />
    </section>
  );
}

export default FoodAndBeverage;
