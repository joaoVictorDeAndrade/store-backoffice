import {createContext, useState} from "react";
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {element} from "prop-types";

export const UserContext = createContext();

export const UserStorage = ({children}) => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [error, setError] = useState(null);

  const auth = getAuth();

  const loginWithEmail = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLogin(true);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setLogin(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{loginWithEmail, login, dataUser, loading, error, logout}}>
      {children}
    </UserContext.Provider>
  );
};

UserStorage.propTypes = {
  children: element.isRequired,
};
