import app from '../components/firebase/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';

const auth = getAuth(app);

export const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accesstoken = credential.accessToken;

      const user = result.user;

      const refreshToken = user.refreshToken;

      console.log('Day la refresh token' + refreshToken);

      const token = await user.getIdToken();

      console.log('Day la token ' + token);

      axios
        .post('http://localhost:8080/ecom/verify-token', { idToken: token })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.messages);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
