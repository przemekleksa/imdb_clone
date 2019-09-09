import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import './register.scss';
import { registerUser } from '../../actions/users';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
  .min(3, "Wpisz więcej niż 2 znaki")
  .max(32, "Twoje imię i nazwisko jest za długie")
  .required("podaj imię i nazwisko"),
  email: Yup.string()
  .required("Podaj adres email")
  .email("podany adres email jest nieprawidlowyy"),
  password: Yup.string().required("podaj hasło")
  .min(5, "hasło musi być dłuższe niż 4 znaki"),
  repeatPassword: Yup.string()
  .required("powtórz hasło")
  .oneOf(
    [Yup.ref('password'), null],
    "podane hasla są różne"
  )
})


class RegisterPage extends Component {
  getErrorMessages = (errors, key) => 
  { 
    return errors[key] &&
    errors[key].length > 0  &&
    errors[key].map((serverError, index) => <p key={index} className="error-message">{serverError}</p>)
    }

  getClientErrorMessages = (errors, touched, key) => {
    
    return  (errors[key] && touched[key]) &&
      <p className='error-message'>
        {errors[key]}
      </p>
  }

  isSubmitButtonDisabled = (errors, touched) => {
    const hasNoErrors = Object.keys(errors).length === 0;
    const touchedValues = Object.values(touched);
    const allWasTouched = touchedValues.length === 4 && touchedValues.every((value) => value)

    console.log(hasNoErrors, allWasTouched);
    return !hasNoErrors || !allWasTouched;
  }
  //jak zrobic to zeby bez ostatniego toucha button przechodzil na true
  
  render() {

    const { statusCode, isLoading, message} = this.props;
    //const statusCode = this.props.statusCode;

    const registrationSuccessful = this.props.statusCode === 200 && !this.props.isLoading && this.props.message.length > 0;
    const registrationFailed = statusCode === 422 && !isLoading;
    const registrationError = statusCode > 400 && statusCode !== 422;

    // zatrzymuje wykonywanie kodu (jezeli mamy wlaczona konsole)
    // debugger;
    // debugger;
    let serverErrors = [];
    
    if (registrationFailed) {
      for (let error in message) {
        
        serverErrors = serverErrors.concat(message[error]);
      }
    }
    // console.log(message);
    // console.log(serverErrors);
    return (
      <div className="container">
     

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            repeatPassword: ''
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values) => {
            console.log(values);
            const action = registerUser(values);

            this.props.dispatch(action);
          }}
        >
          {
            ({ errors, touched }) => (
              <Form className="registration-form">
               {
                  registrationError &&
                  <div>Rejestracja nie powiodła się z powodu błędu serwera</div>
                }
                  {
                    registrationSuccessful && <div> { this.props.message }</div>
                  }
                  {
                    (registrationFailed && serverErrors.length > 0) &&
                    <div>
                      {this.props.statusCode === 422 &&
                <div>
                  {/* {
                    serverErrors.map((serverError, index) => <p key={index} className="error-message">{serverError}</p>)
                    } */}

                </div>
            }
          </div>
        }
                <div>
                  <h2>Zarejestruj się!</h2>
                  <div>
                    <label>Imię i nazwisko:</label>
                    <Field name="name" type="text" />
                     {this.getClientErrorMessages(errors, touched, 'name')}

                      {this.getErrorMessages(message, 'name')}
                  </div>

                  <div>
                    <label>E-mail:</label>
                    <Field name="email" type="text" placeholder="Np. jan@kowalski.pl" />
                    {this.getClientErrorMessages(errors, touched, 'email')}
                    {this.getErrorMessages(message, 'email')}
                  </div>

                  <div>
                    <label>Hasło:</label>
                    <Field name="password" type="password" />
                    {this.getClientErrorMessages(errors, touched, 'password')}
                    {this.getErrorMessages(message, 'password')}
                  </div>

                  <div>
                    <label>Powtórz hasło:</label>
                    <Field name="repeatPassword" type="password" />
                    {this.getClientErrorMessages(errors, touched, 'repeatPassword')}
                  </div>

                  <button type="submit" disabled={this.isSubmitButtonDisabled(errors, touched)}>Zarejestruj się</button>

                </div>
              </Form>

            )
          }

        </Formik>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoading,
    statusCode: state.users.statusCode,
    message: state.users.message,
  }
};

export default connect(mapStateToProps, null)(RegisterPage); 