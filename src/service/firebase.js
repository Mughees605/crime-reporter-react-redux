import * as firebase from "firebase"
export class firebaseService {
    static signUp = (credentials) =>{
        return new Promise((res,rej)=>{
            firebase.auth().createUserWithEmailAndPassword(credentials.email,credentials.password).then((user)=>{
                console.log("signUp succecful from service");
                res(user)
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
}
