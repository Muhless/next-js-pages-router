import Link from "next/link";
import styles from "./Register.module.scss";

const RegisterViews = () => {
    return (
        <div className={styles.register}>
            <h1 className={styles.register__title}>Register</h1>
            <div className={styles.register__form}>
                <form action="">
                    <div className={styles.register__form__item}>
                        <label
                            htmlFor="email"
                            className={styles.register__form__item__label}>Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                            className={styles.register__form__item__input} />
                    </div>
                    <div className={styles.register__form__item}>
                        <label
                            htmlFor="fullname"
                            className={styles.register__form__item__label}>Fullname
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="fullname"
                            className={styles.register__form__item__input} />
                    </div>
                    <div className={styles.register__form__item}>
                        <label
                            htmlFor="password"
                            className={styles.register__form__item__label}>Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            className={styles.register__form__item__input} />
                    </div>
                    <button type="submit" className={styles.register__form__item__button}>Register</button>
                </form>
            </div>
            <p>Already have an account ? Sign in <Link href='/auth/login' className={styles.register__link}>here</Link></p>
        </div>
    )
}

export default RegisterViews