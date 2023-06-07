import { useForm } from "react-hook-form";
import "./AddClass.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="my-3 add-class mx-auto ">
      <h2 className="text-2xl font-bold mb-8">Add A Class</h2>
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <label>Class Name</label>
        <input {...register("className", { required: true })} />

        <label>Class Image</label>
        <input
          type="file"
          className="file-input file-input-ghost w-full"
          {...register("classImg", { required: true })}
        />

        <label>Instructor Name</label>
        <input
          value={user?.displayName}
          {...register("instructorName", { required: true })}
        />

        <label>Instructor Email</label>
        <input
          value={user?.email}
          {...register("instructor Email", { required: true })}
        />

        <div className="flex items-center justify-between">
          <div>
            <label>Available seats</label>
            <input
              defaultValue="10"
              {...register("seats", { required: true })}
            />
          </div>
          <div>
            <label>Course Free</label>
            <input {...register("price", { required: true })} />
          </div>
        </div>

        <input
          type="submit"
          value="Add A Class"
          className="btn text-white bg-pink-500 hover:bg-pink-600 border-none btn-block rounded-3xl"
        />
      </form>
    </div>
  );
};

export default AddClass;
