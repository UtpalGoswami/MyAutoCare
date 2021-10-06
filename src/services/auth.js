import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const createUserInDb = (uid, firstName, lastName, email) => {
    return firestore().collection('users').doc(uid).set(
        {
            uid,
            firstName, 
            lastName,
            email
        }
    )
}

const getUserDetails = async(uid) => {
    const userRef = firestore().collection('users').doc(uid);
    const doc = await userRef.get();
    if (!doc.exists) {
        console.log('No such document!');
    } else {
        console.log('Document data:', doc.data());
    }
    return doc.data();
}

// signup handling
const signUp = (firstName, lastName, email, password) => {
    if (!firstName || !lastName || !email || !password) {
        Alert.alert('Error', 'Please add valid details');
        return null;
    }
    const fullName = firstName + '' + lastName;
    return auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            const { uid } = cred.user;
            auth().currentUser.updateProfile({
                displayName: firstName + '' + lastName,
                firstName : firstName,
                lastName: lastName
            })
            auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
                // Send token to your backend via HTTPS
                console.log('SignUp Auth Token : ' + idToken);
                console.log('SignUp Status : ' + this.props.status);
                console.log('SignUp Token : ' + this.props.token);
                return idToken;
            }).catch(function (error) {
                // Handle error
            })
            return uid
        })
        .then(uid => createUserInDb(uid, firstName, lastName, email))
        .catch((err) => {
            console.log('err.code, err.message :: ' + err.code, err.message)
            Alert.alert(err.code, err.message)
        }
        )
}

const signIn = (email, password) => {
    if (!email || !password) {
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().signInWithEmailAndPassword(email, password)
        .then((resp) => {
            auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
                // Send token to your backend via HTTPS
                console.log('Auth Token : ' + idToken);
                console.log('Status : ' + this.props.status);
                console.log('Login Token : ' + this.props.token);
            }).catch(function (error) {
                // Handle error
            });
        })
        .catch(
            err => Alert.alert(err.code, err.message)
        )
}

const forgetPassword = (email, navigation) => {
    if (!email) {
        Alert.alert('Error', 'Please enter valid email')
    }

    return auth().sendPasswordResetEmail(email)
        .then(function (user) {
            Alert.alert('Success', 'Please check your email for password reset instructions.', [
                { text: "OK", onPress: () => navigation.navigate('Login') }
            ])
        }).catch(function (e) {
            Alert.alert('Error', 'Please add valid email.')
        })
}

const signOut = () => {
    return auth().signOut()
}

const inviteUser = (email) => {
    if (!email) {
        Alert.alert('Error', 'Please enter email')
    }

    var actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://rnfirebaseexp.page.link/eNh4',
        // This must be true.s
        handleCodeInApp: true,
        // iOS: {
        //   bundleId: 'com.example.ios'
        // },
        android: {
            packageName: 'com.tattlebox',
            installApp: true,
        },
    };

    return auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(
            Alert.alert('Email sent', 'Inform the user')
        )
        .catch(
            err => Alert.alert(err.code, err.message)
        )
}

const sendOtp = (number) => {
    if (!number) {
        Alert.alert('Error', 'Please Enter valid number')
    }

    return auth().signInWithPhoneNumber(number)
}

const confirmCode = (state, code) => {
    return state.confirm(code)
        .then(() => { })
        .catch(err => Alert.alert(err.code, err.message))
}

const Auth = {
    signUp,
    signIn,
    forgetPassword,
    signOut,
    inviteUser,
    sendOtp,
    confirmCode,
}

export default Auth;