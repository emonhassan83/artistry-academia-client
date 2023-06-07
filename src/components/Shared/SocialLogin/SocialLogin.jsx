import { useContext } from "react";
import googleLogo from "../../../assets/logo/google.png";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { saveUser } from "../../../api/users";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    //setError('')
    googleSignIn()
    .then(result => {
      const logUser = result.user;
      console.log(logUser);
      //save user in db
      saveUser(logUser);

      toast.success('user logged in successfully')
      //navigate(from, { replace: true });
    })
    .catch(error => {
      //setError(error.message);
        console.log(error);
    })
}
    return (
        <div onClick={handleGoogleSignIn} className="flex items-center social-login my-4">
        <img className="w-8 h-8 ml-6" src={googleLogo} alt="" />
        <p className="mx-auto">Continue with Google</p>
      </div>
    );
};

export default SocialLogin;