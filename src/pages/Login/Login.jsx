import { useForm } from "react-hook-form";
import "./Login.css";
import { Link } from "react-router-dom";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div className="pt-20 login-card mx-auto">
      <h2 className="text-2xl font-bold mb-8">Login Please</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username or Email</label>
        <input defaultValue="" {...register("email")} />

        <label>Password</label>
        <input {...register("password", { required: true })} />

        <input
          type="submit"
          value="Login"
          className="btn bg-pink-500 hover:bg-pink-600 border-none btn-block rounded-3xl"
        />
        <p>
          <small>
            New to Artistry Academia Please{" "}
            <Link to="/signUp" className="text-pink-600 font-bold">
              Sign Up
            </Link>
          </small>
        </p>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <div className="divider mt-5">OR</div>
      <SocialLogin/>
    </div>
  );
};

export default Login;
