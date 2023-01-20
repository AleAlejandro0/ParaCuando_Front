import Link from 'next/link';
import Components from './Components';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello Mundo</h1>
      <Components />

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}
