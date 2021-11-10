/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import firebaseInitialize from '../Secure/Firebase/firebase.init';

firebaseInitialize();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    // const googleProvider = new GoogleAuthProvider();

    // user register filed
    const registerUser = (name, email, Password, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, Password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to database connect
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false));
    };

    // user login filed
    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setLoading(false));
    };

    // observer user state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unSubscribe;
    }, []);
    return {
        user,
        loading,
        registerUser,
        loginUser,
        error
    };
};

export default useFirebase;