import { useForm } from "react-hook-form";
import "./AddClass.css";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { imageUpload } from "../../api/utils";
import { addClass } from "../../api/classes";
import { toast } from "react-hot-toast";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
     data.status = 'pending'
     //upload image
     const image = data?.classImg[0];
     imageUpload(image)
     .then(imgData => {
      const classData = {
        className: data?.className,
        image: imgData?.data.display_url,
        instructorName: data?.instructorName,
        instructorEmail: data?.instructorEmail,
        seats: data?.seats,
        price: data?.price,
        status: data?.status
      }

      //post class data in database
      addClass(classData)
      .then(data => {
        toast.success('Class added successfully')
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
      
    })
     .catch(err => console.log(err))
    };

  return (
    <div className="my-3 add-class mx-auto ">
      <h2 className="text-2xl font-bold mb-8">Add A Class</h2>
      <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <label>Class Name</label>
        <input placeholder="Enter your class" {...register("className", { required: true })} />

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
          {...register("instructorEmail", { required: true })}
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
            <input placeholder="Course free" {...register("price", { required: true })} />
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
