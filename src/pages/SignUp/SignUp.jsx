import Lottie from "react-lottie";
import animation from "../../assets/animation_login.json";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import SocialLogin from "../../components/Shared/SocialLogin/SocialLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { saveUser } from "../../api/users";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_KEY
  }`;

  const onSubmit = (data) => {
    setError("");
    const password = data.password;
    const confirmPassword = data.confirmPass;
    if (password !== confirmPassword) {
      setError("Your password did not match");
      return;
    } else {
      //Image upload
      const formData = new FormData();
      formData.append("image", data.photoUrl[0]);

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imageData) => {
          const imageUrl = imageData.data.display_url;
          createUser(data.email, data.password)
            .then((result) => {
              const loggedUser = result.user;
              console.log(loggedUser);
              updateUserProfile(data.name, imageUrl)
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
                  navigate(from, { replace: true });
                })
                .catch((err) => {
                  console.log(err);
                  setError(err.message);
                });
            })
            .catch((error) => {
              console.log(error);
              setError(error.message);
            });
        });
    }
    console.log(data);
  };

  return (
    <div className="md:flex justify-center items-center md:h-[100vh] bg-[#caf0f8]">
      <Helmet>
        <title>Artistry Academia | SignUp</title>
      </Helmet>
      <div className="mb-12 bg-gray-50 signUp-card mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2">Sign Up Please</h2>
        <p className="text-sm text-gray-400 mb-4 text-center">
          Welcome to Toy Town
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-xs sm:text-sm">Full Name</label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            required
          />
          {errors.name && (
            <p className="text-red-500 -mt-5">
              <small>Name field is required</small>
            </p>
          )}

          <label className="text-xs sm:text-sm">Username or Email</label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            required
          />
          {errors.email && (
            <p className="text-red-500 -mt-5">
              <small>Email field is required</small>
            </p>
          )}

          <label className="text-xs sm:text-sm">Password</label>
          <input
            type="password"
            name="password"
            defaultValue=""
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            required
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

          <label className="text-xs sm:text-sm">Confirm Password</label>
          <input
            type="password"
            name="password"
            defaultValue=""
            {...register("confirmPass", {
              required: true,
              minLength: 6,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            required
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

          <label className="text-xs sm:text-sm">Photo Url</label>
          <input
            required
            type="file"
            accept="image/*"
            {...register("photoUrl")}
          />

          {errors.photoUrl && (
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
        </form>
        <p className="text-red-600">{""}</p>
        <p className="px-3 text-sm text-gray-600 text-center mt-3">
          SignUp with social accounts
        </p>
        <div>
          <SocialLogin />
        </div>
        <p className="text-center mt-3 text-gray-600">
          <small className="text-xs sm:text-sm">
            Already have an Account Please{" "}
            <Link to="/login" className="text-pink-600 font-bold">
              Login
            </Link>
          </small>
        </p>
      </div>
      <div className="md:w-1/2">
        <Lottie options={defaultOptions} height={475} width={370} />
      </div>
    </div>
  );
};

export default SignUp;
