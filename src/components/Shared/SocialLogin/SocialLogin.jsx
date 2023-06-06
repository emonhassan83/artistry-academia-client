import googleLogo from "../../../assets/logo/google.png";

const SocialLogin = () => {
    return (
        <div className="flex items-center social-login my-4">
        <img className="w-8 h-8 ml-6" src={googleLogo} alt="" />
        <p className="mx-auto">Continue with Google</p>
      </div>
    );
};

export default SocialLogin;