import app from '../components/firebase/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';

const auth = getAuth(app);

export const googleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);

    const accesstoken = credential.accessToken;

    const user = result.user;

    const refreshToken = user.refreshToken;

    const token = await user.getIdToken();

    console.log(token);

    const response = await axios.post(`${process.env.REACT_APP_LOCAL}/verify-token`, {
      idToken: token,
    });

    const userData = {
      email: response.data.email,
      name: response.data.name,
      picture: response.data.picture,
    };

    return userData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// export const googleLogin = async () => {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup(auth, provider)
//     .then(async (result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);

//       const accesstoken = credential.accessToken;

//       const user = result.user;

//       const refreshToken = user.refreshToken;

//       const token = await user.getIdToken();

//       axios
//         .post('http://localhost:8080/ecom/verify-token', { idToken: token })
//         .then((response) => {
//           userData.email = response.data.email;
//           userData.name = response.data.name;
//           userData.picture = response.data.picture;
//           // console.log(userData);
//         })
//         .catch((error) => {
//           console.log(error.messages);
//         });

//       return userData;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
