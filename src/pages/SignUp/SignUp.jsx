import { useForm } from "react-hook-form";
import "./SignUp.css";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="my-4 signUp-card mx-auto">
      <h2 className="text-2xl font-bold mb-8">Sign Up Please</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
        <input defaultValue="" {...register("userName")} />

        <label>Username or Email</label>
        <input {...register("email", { required: true })} />

        <label>Password</label>
        <input type="password" defaultValue="" {...register("password")} />

        <label>Confirm Password</label>
        <input type="password" defaultValue="" {...register("ConfirmPass")} />

        <label>Photo Url</label>
        <input type="url" defaultValue="" {...register("photoUrl")} />

        {errors.exampleRequired && <span>This field is required</span>}
        <input
          type="submit"
          value="sign up"
          className="btn bg-pink-500 hover:bg-pink-600 border-none btn-block rounded-3xl"
        />
        <p>
          <small>
            Already have an Account Please{" "}
            <Link to="/login" className="text-pink-600 font-bold">
              Login
            </Link>
          </small>
        </p>
      </form>
      <p className="text-red-600">{""}</p>
      <div className="divider mt-6">OR</div>
      <div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default SignUp;
