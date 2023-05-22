import { Formik, Field, Form } from 'formik';
import style from './form-blue.module.css'

export const BlueForm = () => {
    return (
        <div className={style.formCard}>
            <div className={style.formTitle}>
                <h2>EVENT REGISTRATION FORM</h2>
            </div>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    company: '',
                    email: '',
                    areaCode: '',
                    phone: '',
                    forThe: '',
                    picked: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched, values, }) => (
                    <Form>
                        <div className={style.formBody}>
                            <div className={style.formRow}>
                                <div className={style.formRowName}>
                                    <h3>Name</h3>
                                </div>

                                <div className={style.formRowAction}>

                                    <div>
                                        <Field
                                            className={style.inputStyle}
                                            name="firstName"
                                            type="text"
                                        />
                                        <label>First Name</label>
                                    </div>

                                    <div>
                                        <Field
                                            className={style.inputStyle}
                                            name="last_name"
                                            type="text"
                                        />
                                        <label>Last Name</label>
                                    </div>
                                </div>
                            </div>

                            <div className={style.formRow}>
                                <div className={style.formRowName}>
                                    <h3>Company</h3>
                                </div>

                                <div className={style.formRowAction}>
                                    <Field
                                        className={style.inputStyleAlt}
                                        name="company"
                                        type="text"
                                        autocomplete="off"
                                    />
                                </div>
                            </div >

                            <div className={style.formRow}>
                                <div className={style.formRowName}>
                                    <h3>Email</h3>
                                </div>

                                <div className={style.formRowAction}>
                                    <Field
                                        className={style.inputStyleAlt}
                                        name="email"
                                        type="email"
                                    />
                                </div>
                            </div>

                            <div className={style.formRow}>
                                <div className={style.formRowName}>
                                    <h3>Phone</h3>
                                </div>

                                <div className={style.formRowAction}>

                                    <div className={style.phoneCode}>
                                        <Field
                                            className={style.inputStyle}
                                            name="areaCode"
                                            type="tel"
                                        />
                                        <label>Area Code</label>
                                    </div>

                                    <div className={style.phone}>
                                        <Field
                                            className={style.inputStyle}
                                            name="phone"
                                            type="tel"
                                        />
                                        <label>Phone Number</label>
                                    </div>

                                </div>
                            </div>

                            <div className={style.formRow}>
                                <div className={style.formRowName}>
                                    <h3>Subject</h3>
                                </div>

                                <div className={style.formRowAction}>
                                    <Field as="select" name="forThe" className={style.inputStyleAlt}>
                                        <option selected="true" disabled="disabled" >choose your side</option>
                                        <option value="horde">Horde!!!</option>
                                        <option value="green">Alliance!</option>
                                        <option value="murloc">Murloc</option>
                                    </Field>
                                </div>
                            </div>

                            <div className={style.formRowRadio}>
                                <h3>Are you an existing customer?</h3>

                                <label>
                                    <Field type="radio" name="picked" value="true" className={style.radioBtn} />
                                    Yes
                                </label>

                                <label>
                                    <Field type="radio" name="picked" value="false" className={style.radioBtn} />
                                    No
                                </label>
                            </div>

                            <button type='submit' className={style.submitBtn}>REGISTER</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}