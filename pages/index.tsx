import Navagation from '@/componetnts/Navagation'
import styles from '../styles/Assignment1.module.css'

export default function Home() {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p className={styles['welcomeText']}>Welcome to Hunters assignmet 1 project</p>
      </div>
      <Navagation></Navagation>
    </>
  );
}
