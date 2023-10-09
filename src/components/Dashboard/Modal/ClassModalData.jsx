import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const ClassModalData = ({ classData }) => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="my-3 add-class mx-auto">
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <label>Class Name</label>
        <input
          type="text"
          defaultValue={classData?.className}
          placeholder="Enter your class"
          {...register("className", { required: true })}
          required
        />
        {errors.className && (
          <p className="text-sky-500 text-xs -mt-5">
            <small>Class Name field is required</small>
          </p>
        )}

        <label>Class Image</label>
        <input
          type="file"
          className="file-input file-input-ghost w-full"
          {...register("classImg", { required: true })}
          required
        />
        {errors.classImg && (
          <p className="text-sky-500 text-xs -mt-5">
            <small>Class Name field is required</small>
          </p>
        )}

        <label>Instructor Name</label>
        <input
          value={user?.displayName}
          {...register("instructorName", { required: true })}
          required
        />
        {errors.instructorName && (
          <p className="text-sky-500 text-xs -mt-5">
            <small>Class Name field is required</small>
          </p>
        )}

        <label>Instructor Email</label>
        <input
          value={user?.email}
          {...register("email", { required: true })}
          required
        />
        {errors.email && (
          <p className="text-sky-500 text-xs -mt-5">
            <small>Class Name field is required</small>
          </p>
        )}

        <div className="flex items-center justify-between">
          <div>
            <label>Available seats</label>
            <input
              defaultValue={classData.seats}
              {...register("seats", { required: true })}
              required
            />
            {errors.seats && (
              <p className="text-sky-500 text-xs -mt-5">
                <small>Available seats field is required</small>
              </p>
            )}
          </div>
          <div>
            <label>Course Free</label>
            <input
              type="text"
              defaultValue={classData?.price}
              placeholder="Course free"
              {...register("price", { required: true })}
              required
            />
            {errors.price && (
              <p className="text-sky-500 text-xs -mt-5">
                <small>Course Free field is required</small>
              </p>
            )}
          </div>
        </div>

        <input
          type="submit"
          value="Add A Class"
          className="btn btn-color btn-block rounded-3xl"
        />
      </form>
    </div>
  );
};

export default ClassModalData;
