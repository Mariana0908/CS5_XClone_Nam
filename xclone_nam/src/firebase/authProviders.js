import { FireBaseAuth } from "./config";

export const registerUser = async ({ email, password, displayName }) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FireBaseAuth,
      email,
      password
    );
    const { uid, photoURL } = result.user;
    // captures the name of the current user
    await updateProfile(FireBaseAuth.currentUser, { displayName });
    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const authUser = async ({ email, password }) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FireBaseAuth,
      email,
      password
    );
    const { uid, photoURL } = result.user;
    return {
      ok: true,
      uid,
      photoURL,
      email,
      password,
      displayName,
    };
  } catch (error) {
    console.error(error);
    return {
        ok: false,
        errorMessage: error.message,
      };
  }
};
