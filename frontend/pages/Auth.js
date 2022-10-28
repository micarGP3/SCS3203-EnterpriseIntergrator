import React from "react"
import SignUp from "../components/formComponents/SignUp"
import ConfirmSignUp from "../components/formComponents/ConfirmSignUp"
import SignIn from "../components/formComponents/SignIn"

import { fetchInventory } from "../utils/inventoryProvider"

class Login extends React.Component {
  state = { formState: "signUp", isAuthenticated: false }
  toggleFormState = (formState) => {
    this.setState(() => ({ formState }))
  }
  async componentDidMount() {
    // check and update signed in state
  }
  signUp = async (form) => {
    const { username, email, password, confirmpassword } = form
    // sign up
    this.setState({ formState: "confirmSignUp" })
  }
  confirmSignUp = async (form) => {
    const { username, authcode } = form
    // confirm sign up
    this.setState({ formState: "signIn" })
  }
  signIn = async (form) => {
    const { username, password } = form
    // signIn
    this.setState({ formState: "signedIn", isAuthenticated: true })
  }
  signOut = async () => {
    // sign out
    this.setState({ formState: "signUp" })
  }
  render() {
    const { formState, isAuthenticated } = this.state
    const renderForm = (formState, state) => {
      switch (formState) {
        case "signUp":
          return (
            <SignUp
              {...state}
              signUp={this.signUp}
              toggleFormState={this.toggleFormState}
            />
          )
        case "confirmSignUp":
          return <ConfirmSignUp {...state} confirmSignUp={this.confirmSignUp} />
        case "signIn":
          return (
            <SignIn
              {...state}
              signIn={this.signIn}
              toggleFormState={this.toggleFormState}
            />
          )
        case "signedIn":
          return isAuthenticated ? (
            <h3>autheticated</h3>
          ) : (
            // <Home />
            <h3>Not autheticated</h3>
          )
        default:
          return null
      }
    }

    return (
      <div className="flex flex-col">
        <div className="max-w-fw flex flex-col">
          <div className="pt-10">
            <h1 className="text-5xl font-light">User login</h1>
          </div>
          {renderForm(formState)}
        </div>
      </div>
    )
  }
}

export default Login
