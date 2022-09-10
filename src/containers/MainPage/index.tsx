import styles from './styles.module.scss';
import PetrolSection from './components/PetrolSection';
import RentalRebateSection from './components/RentalRebateSection';
import FoodAndBeverage from './components/FoodAndBeverage';
import TierPlan from './components/TierPlan';

function MainPage() {
  return (
    <div className={styles.main__page}>
      <TierPlan />
      <PetrolSection />
      <RentalRebateSection />
      <FoodAndBeverage />
    </div>
  );
}

export default MainPage;
