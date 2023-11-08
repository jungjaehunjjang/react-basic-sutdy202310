import React, { useContext } from 'react';

import Card from '../../UI/Card';
import styles from './Home.module.css';
import AuthContext from '../../../store/auth-context';
import Button from '../../UI/Button/Button';

const Home = () => {
  const { onLogout } = useContext(AuthContext);
  // console.log('authCtx: ', authCtx);

  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
