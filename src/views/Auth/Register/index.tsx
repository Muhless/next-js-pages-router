import Link from "next/link";
import styles from "./Register.module.scss";

const Register = () => {
    return (
        <div className={styles.register}>
            <h1 className={styles.register__title}>Register</h1>
            <div className={styles.register__form__item}>
                <form action="">
                    <label htmlFor="email" className={styles.register__form__item__label}></label>
                    <input type="email" id="email" name="email" placeholder="email" className={styles.register__form__item__input} />
                </form>
            </div>
        </div>
    )
}

export default Register