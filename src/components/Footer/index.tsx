import styles from './styles.module.css';
import { Copyright } from 'lucide-react';

export function Footer(){
  return (
    <>
      <footer className={styles.footer}>
        <a href="">Entenda como funciona a técnica
          pomodoro</a>
          <a href=""> Cronômetro Pomodoro <Copyright/>{new
          Date().getFullYear()}- Feito como 💚</a>
      </footer>
   </>
  );
}