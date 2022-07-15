import {createContext, useState} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
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

  return (
    <UserContext.Provider
      value={{loginWithEmail, login, dataUser, loading, error}}>
      {children}
    </UserContext.Provider>
  );
};

UserStorage.propTypes = {
  children: element.isRequired,
};
