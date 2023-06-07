import { useForm } from "react-hook-form";
import "./SignUp.css";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { saveUser } from "../../api/users";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    //console.log(data);
    setError("");
    const password = data.password;
    const confirmPassword = data.confirmPass;
    if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    }else{
      createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            //save user to db
            saveUser(loggedUser);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User sign up successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            setError(err.message);
          });
      })
      .catch((error) => {
        console.log(error)
        setError(error.message);
      });
    }
  };

  return (
    <div className="my-4 signUp-card mx-auto">
      <h2 className="text-2xl font-bold mb-8">Sign Up Please</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="text-red-500 -mt-5">
            <small>Name field is required</small>
          </p>
        )}

        <label>Username or Email</label>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-red-500 -mt-5">
            <small>Email field is required</small>
          </p>
        )}

        <label>Password</label>
        <input
          type="password"
          name="password"
          defaultValue=""
          {...register("password", {
            required: true,
            minLength: 6,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
          })}
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500 -mt-5">
            <small>Password is required</small>
          </p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500 -mt-5">
            <small>Password must be 6 character</small>
          </p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-500 -mt-5 ">
            <small>
              Password must have one Uppercase one lower case, one number and
              one special character
            </small>
          </p>
        )}

        <label>Confirm Password</label>
        <input
          type="password"
          name="password"
          defaultValue=""
          {...register("confirmPass", {
            required: true,
            minLength: 6,
            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
          })}
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500 -mt-5">
            <small>Password is required</small>
          </p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500 -mt-5 ">
            <small>Password must be 6 character</small>
          </p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-red-500 -mt-5">
            <small>
              Password must have one Uppercase one lower case, one number and
              one special character
            </small>
          </p>
        )}

        <label>Photo Url</label>
        <input
          type="url"
          defaultValue=""
          {...register("photoURL", { required: true })}
        />

        {errors.photoURL && (
          <p className="text-red-500 -mt-5">
            <small>PhotoURL field is required</small>
          </p>
        )}
        <input
          type="submit"
          value="sign up"
          className="btn bg-pink-500 hover:bg-pink-600 border-none btn-block rounded-3xl"
        />
        {error && (
          <p className="text-red-500 font-bold -mt-3">
            <small>{error}</small>
          </p>
        )}
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
