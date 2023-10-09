import { useForm } from "react-hook-form";
import "./AddClass.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { imageUpload } from "../../api/utils";
import { addClass } from "../../api/classes";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    data.status = "pending";
    //upload image
    const image = data?.classImg[0];
    imageUpload(image)
      .then((imgData) => {
        const classData = {
          className: data?.className,
          image: imgData?.data.display_url,
          instructorName: data?.instructorName,
          email: data?.email,
          seats: data?.seats,
          price: data?.price,
          status: data?.status,
          totalEnrolled: 0
        };

        //post class data in database
        addClass(classData)
          .then((data) => {
            Swal.fire({
              icon: 'success',
              title: 'Yep...',
              text: 'Instructor class added Successfully!',
            })
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-3 add-class mx-auto ">
      <Helmet>
        <title>Artistry Academia | Add A Class</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-8">Add A Class</h2>
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <label>Class Name</label>
        <input
          type="text"
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
              defaultValue="10"
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

export default AddClass;
