/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import firebaseInitialize from '../Secure/Firebase/firebase.init';

firebaseInitialize();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // user register filed
    const registerUser = (name, email, Password, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, Password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to database connect
                saveUserToDb(email, name, 'POST');
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

    // user google sign in filed
    const signInWithGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // save user to google Sign in database connect
                saveUserToDb(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    };

    // user logout filed
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(() => setLoading(false));

    };

    // save user to DB from register and google sign in
    const saveUserToDb = (email, displayName, method) => {
        const user = { email, displayName };
        fetch("https://thawing-beach-22228.herokuapp.com/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    };

    // DB in admin check
    useEffect(() => {
        fetch(`https://thawing-beach-22228.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user?.email])

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
        admin,
        loading,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
        error
    };
};

export default useFirebase;