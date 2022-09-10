import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from 'react-bootstrap/ProgressBar';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';
import { ReactComponent as BackIcon } from '../../../../assets/imgs/icons/go_back.svg';

function TierPlan() {
  return (
    <section className={styles.container}>
      <div className={styles.tier__plan}>
        <div>
          <button className={styles.back__icon}>
            <BackIcon />
          </button>
        </div>
        <div className={styles.content}>
          <h2>Silver Tier</h2>
          <p>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</p>
        </div>
        <div className={styles.card}>
          <label>Available Coin balance</label>

          <h4>340</h4>

          <ProgressBar className={styles.process__bar} now={60} />

          <p>You have paid rental fee for $1,200. &#10;&#13; Pay more $800 to achieve Gold Tier.</p>

          <a href="/">
            View tier benefits
            <FontAwesomeIcon className="px-2" icon={faAngleRight} />
          </a>

          <div>
            <button>My Coupons</button>
          </div>

          <p className={styles.time__updated}>Updated : 02/11/2021</p>
        </div>
      </div>
    </section>
  );
}

export default TierPlan;
