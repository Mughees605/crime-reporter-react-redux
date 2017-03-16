import { firebaseService } from "../service/firebase"
export var Login = (uid) => {
  return {
    type: "LOGIN",
    uid
  }
}
export var Logout = () => {
  return {
    type: "LOGOUT"
  }
}
export var firebaseSignUp = (credentials) => {
  return (dispatch) => {
    firebaseService.signUp(credentials).then((user) => {

      dispatch(Login(user.uid));

    })

  }

}
