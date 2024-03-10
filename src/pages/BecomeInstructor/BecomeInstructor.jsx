/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useTheme } from "../../providers/ThemeProvider";
import { addInstructorBio } from "../../api/instructorBio";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ReusableForm from "../../components/Form/ReusableForm";
import ReusableInput from "../../components/Form/ReusableInput";
import ReusableTextArea from "../../components/Form/ReusableTextArea";

const BecomeInstructor = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { theme } = useTheme();
  const [biography, setBiography] = useState("");
  const [achievement, setAchievement] = useState("");
  console.log(user?.displayName);

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const currentUser = users.find((userData) => userData?.email === user?.email);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const bioData = {
        ...data,
        user: currentUser._id,
        createdAt: new Date().toISOString(),
      };

      //* saveInstructor bio in db
      // const res = await addInstructorBio(bioData);
      // res.insertedId &&
      //   toast.sucffcess("user become a instructor successfully created!");
      console.log(bioData);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className={`w-[85%] md:w-[80%] lg:w-[70%] mx-auto my-6 py-10 md:px-14 px-8 border-[1px] ${
        theme.mode === "dark"
          ? "text-gray-100 border-[#ababab]"
          : "text-gray-800"
      }`}
    >
      <Helmet>
        <title>Artistry Academia | Add A Class</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-8 text-center">
        Add Profession Info
      </h2>
      {/* <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:block md:flex items-center justify-between gap-2">
          <div className="w-full">
            <>
              <label>Instructor Name</label>
              <input
                type="text"
                defaultValue={user?.displayName}
                className="text-gray-800"
                {...register("name", { required: true })}
                required
              />
            </>

            <>
              <label>Email Address</label>
              <input
                type="text"
                defaultValue={user?.email}
                className="text-gray-800"
                {...register("email", { required: true })}
                required
              />
            </>
          </div>

          <div className="w-full">
            <label>Biography</label>
            <textarea
              className="h-32"
              onChange={(e) => setBiography(e.target.value)}
              placeholder="Enter your biography.."
            ></textarea>
          </div>
        </div>

        <div className="sm:block md:flex flex-row-reverse items-center justify-between gap-2">
          <div className="w-full">
            <>
              <label>Education</label>
              <input
                type="text"
                className="text-gray-800"
                {...register("education", { required: true })}
                required
              />
            </>

            <>
              <label>Experience</label>
              <input
                type="text"
                className="text-gray-800"
                {...register("experience", { required: true })}
                required
              />
            </>
          </div>

          <div className="w-full">
            <label>Achievements</label>
            <textarea
              className="h-32"
              onChange={(e) => setAchievement(e.target.value)}
              placeholder="Enter your achievements.."
            ></textarea>
          </div>
        </div>

        <div className="sm:block md:flex items-center justify-center gap-2">
          <div className="w-full">
            <label>Specialization</label>
            <input
              className="text-gray-800"
              {...register("specialization", { required: true })}
              required
            />
          </div>

          <div className="w-full">
            <label>Teaching Philosophy</label>
            <input
              type="text"
              className="text-gray-800"
              placeholder=""
              {...register("teachingPhilosophy", { required: true })}
              required
            />
          </div>
        </div>

        <input
          type="submit"
          value="Become a Instructor"
          className="btn btn-color text-xs w-[160px] border-none rounded-lg"
        />
      </form> */}
      <ReusableForm onSubmit={onSubmit} /* defaultValues={defaultValues} */>
        <div className="sm:block md:flex items-center justify-between gap-4">
          <div className="w-full">
            <ReusableInput
              type="text"
              name="name"
              label="Instructor Name"
              defaultValue={user?.displayName}
            />
            <ReusableInput
              type="text"
              name="email"
              label="Email Address"
              defaultValue={user?.email}
            />
          </div>
          <div className="w-full">
            <ReusableTextArea
              type="text"
              name="biography"
              label="Biography"
              placeholder="Enter your biography.."
            />
          </div>
        </div>

        <div className="sm:block md:flex items-center justify-between gap-4">
          <div className="w-full">
            <ReusableInput type="text" name="education" label="Education" />
            <ReusableInput type="text" name="experience" label="Experience" />
          </div>
          <div className="w-full">
            <ReusableTextArea
              type="text"
              name="achievements"
              label="Achievements"
              placeholder="Enter your achievements.."
            />
          </div>
        </div>
        <div className="sm:block md:flex items-center justify-center gap-2">
        <div className="w-full">
        <ReusableInput
          type="text"
          name="specialization"
          label="Specialization"
        />
        </div>
        <div className="w-full">
        <ReusableInput
          type="text"
          name="teachingPhilosophy"
          label="Teaching Philosophy"
        />
        </div>
        </div>
        <input
          type="submit"
          value="Become a Instructor"
          className="btn btn-color text-xs w-[160px] border-none rounded-lg"
        />
      </ReusableForm>
    </div>
  );
};

export default BecomeInstructor;
