import { Formik, Form, Field } from 'formik';
import { mySchema } from '../schemas/index';
import styles from './form-green.module.css';


export const GreenForm = () => {
    return (
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Зв'язатися з нами</h2>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phoneNumber: '',
                    message: '',
                    spamAgree: [],
                }}
                validationSchema={mySchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                    {({ errors, touched }) => (
                <Form className={styles.form} >

                    <div className={styles.row}>
                        <div className={styles.rowItem}>
                            <Field
                                className={styles.inputStyle}
                                name='name'
                                type='text' placeholder={`Ім'я`}
                            />
                            {errors.name && touched.name ? (
                                <div className={styles.error}>{errors.name}</div>
                            ) : null}
                        </div>

                        <div className={styles.rowItem}>
                            <Field
                                className={styles.inputStyle}
                                name="email"
                                type="email"
                                placeholder='Email'

                            />
                            {errors.email && touched.email ?
                                <div className={styles.error}>{errors.email}</div>
                                : null}
                        </div>
                    </div>

                    <div className={styles.rowItem}>
                        <Field
                            className={styles.inputStyle}
                            name="phoneNumber"
                            type="tel"
                            placeholder={`Телефон (у форматі +380)`}
                        />
                        {errors.phoneNumber && touched.phoneNumber ?
                            <div className={styles.error}>{errors.phoneNumber}</div>
                            : null}
                    </div>

                    <div className={styles.row}>
                        <Field
                            className={styles.inputStyleMessage}
                            name="message"
                            type='text'
                            placeholder='Повідомлення'
                        />
                        {errors.message && touched.message ?
                            <div className={styles.error}>{errors.message}</div>
                            : null}
                    </div>

                    <div className={styles.row}>
                        <label>
                            <Field t
                                className={styles.checkbox}
                                type="checkbox"
                                name="spamAgree"
                                value="true"
                            />
                            Надсилати мені оновлення про академію
                        </label>
                    </div>

                    <button type="submit"
                        className={styles.submitBtn}
                    >Submit</button>
                </Form>
             )}
            </Formik>
        </div >
    )
}