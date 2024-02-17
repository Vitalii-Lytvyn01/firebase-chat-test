import {auth, googleProvider} from '../assets/firebase-config';
import {signInWithPopup} from 'firebase/auth';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Auth = (props) => {

  const {setIsAuth} = props;

  async function  signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result);
      cookies.set('auth-token', result.user.refreshToken);
      setIsAuth(true);
    } catch (e) {
      console.log(e);
    }

  }

  return <div className="auth">
      <p>Sign in with Google</p>
      <button
        onClick={signInWithGoogle}
      >Sign in
      </button>
    </div>
}