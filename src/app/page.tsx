import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link"
import { transactionTypes } from "./lib/data";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Budgeting App
        </p>
        <button className={styles.button}> Add new transaction </button>
        <div className={styles.card}>
          <legend className={styles.label}>Transaction Type</legend>
          <select id="transaction-type" defaultValue="" className={styles.input}>
            <option>
              Select a transaction type
            </option>
            {transactionTypes.map((transactionType) => (
                <option key={transactionType}>
                  {transactionType}
                </option>
              ))}
          </select>
          <legend className={styles.label}> Amount </legend>
          <input className={styles.input} type="number" name="amount" step="0.01" placeholder="Enter Amount"/>
          <legend className={styles.label}> Transaction Date</legend>
          <input className={styles.input} type="date" />
          <div className={styles.buttons}>
            <button className={styles.button}>Cancel</button>
            <button className={styles.button} type="submit">Add</button>
          </div>
        </div>
        <table>

        </table>
      </div>

    </main>
  );
}
