import GlobalNavbar from '../../components/GlobalNavbar';
import MainPage from '../../containers/MainPage';
import styles from './styles.module.scss';


function UserLayout() {
  return (
    <div className={styles.user__layout}>
      <GlobalNavbar>
        <MainPage></MainPage>
      </GlobalNavbar>
    </div>
  );
}

export default UserLayout;
