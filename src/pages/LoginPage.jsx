import { useNavigate } from "react-router";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/tilmeldinger");
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <section className={styles.info}>
        <p className="eyebrow dark">For arrangører</p>
        <h1>Log ind</h1>
        <p className={styles.intro}>
          Log ind for at se tilmeldinger og få overblik over dine events.
        </p>
        </section>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email">Mail</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="password">Adgangskode</label>
          <input id="password" name="password" type="password" required />

          <button type="submit">Log ind</button>
        </form>
      </section>
    </main>
  );
}
