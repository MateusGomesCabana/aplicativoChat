import firebase from 'firebase'

const AuthModule = {
    actions:{
        singUp({commit},payload){
            console.log(payload)
            firebase.auth().createUserWithEmailAndPassword(payload.email,payload.password)
            .then(data=>{
                firebase.database().ref('users').child(data.user.uid).set({
                    uid:data.user.uid,
                    name: payload.name,
                    email: payload.email,
                    emailverified: false
                });
                let newuser = data.user;
                newuser.updateProfile({
                    displayName:payload.name,
                    photoUrl:payload.photoUrl
                })
                .then(()=>{
                    console.log('update profile')
                }).catch(err=>{
                    console.log(err.message)
                })
            }).catch(err=>{
                console.log(err.message)
            })
        }
    }
}
export default AuthModule