import { Formik, Field, Form } from 'formik';
import { DatePicker } from 'antd';
import './form-purple.css';


export const PurpleForm = () => {
    return (
        <div className='form-container'>
            <h2>Registration Form</h2>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    birthday: '',
                    picked: '',
                    email: '',
                    phone: '',
                    forThe: '',
                }}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({ errors, touched, values, }) => (
                    <Form>
                        <div className='row'>
                            <div className='row-item'>
                                <label htmlFor="firstName">First Name</label>
                                <Field
                                    className="firstName input-style"
                                    name="firstName" placeholder="Name"
                                />
                                {errors.username && touched.username && <div>{errors.username}</div>}
                            </div>
                            <div className='row-item'>
                                <label htmlFor="lastName">Last Name</label>
                                <Field
                                    className="lastName input-style"
                                    name="lastName" placeholder="surname"
                                />
                                {errors.username && touched.username && <div>{errors.username}</div>}
                            </div>
                        </div>

                        <div className='row'>
                            <div className='row-item'>
                                <label htmlFor="firstName">Birthday</label>
                                <DatePicker 
                                className='input-style'
                                value={values.birthday}
                                placeholder='How long ago was it?' />
                            </div>
                            <div className='row-item'>
                                <label htmlFor="radio">Gender</label>
                                <div className='radio-container'>
                                    <label>
                                        <Field type="radio" name="picked" value="Male" className='radio-btn' />
                                        Male
                                    </label>

                                    <label>
                                        <Field type="radio" name="picked" value="Female" className='radio-btn' />
                                        Female
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='row-item'>
                                <label htmlFor="email">Email</label>
                                <Field
                                    className="email input-style"
                                    name="email"
                                    placeholder="Your email"
                                    type="email"
                                />
                            </div>
                            <div className='row-item'>
                                <label htmlFor="lastName">Phone Number</label>
                                <Field className="lastName input-style" name="phone" placeholder="Your phone number" />
                            </div>
                        </div>

                        <div className='row'>

                            <Field as="select" name="forThe" className="input-style">
                                <option selected value="default" disabled >choose your side</option>
                                <option value="horde">Horde!!!</option>
                                <option value="alliance">Alliance!</option>
                                <option value="murloc">Murloc</option>
                            </Field>
                        </div>

                        <button type="submit" className='submit-btn'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
