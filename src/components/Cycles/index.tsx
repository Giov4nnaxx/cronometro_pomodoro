import styles from './styles.module.css';
import {Circle} from 'lucide-react'

export function Cycles(){
    return(
        <>
        <div className={styles.Cycles}>
            <span>Ciclos:</span>
        </div>
        <div className={styles.cycleDots}>
            <span className={`${styles.cycleDots}$
            {styles.workTime}`}></span>
            <span className={`${styles.cycleDots}$
            {styles.workTime}`}></span>
            <span className={`${styles.cycleDots}$
            {styles.workTime}`}></span>
            <span className={`${styles.cycleDots}$
            {styles.workTime}`}></span>
            <span className={`${styles.cycleDots}$
            {styles.workTime}`}></span>
            <span className={`${styles.cycleDots}$
            {styles.workTime}`}></span>
        </div>
        </>
    )
}