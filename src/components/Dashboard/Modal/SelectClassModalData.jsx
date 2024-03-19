import ReusableForm from "../../Form/ReusableForm";
import ReusableInput from "../../Form/ReusableInput";
import ReusableTextArea from "../../Form/ReusableTextArea";
import ReusableSelect from "../../Form/ReusableSelect";
import {
  availabilityOptions,
  educationLevelOptions,
  genderOptions,
  occupationOptions,
} from "../../Form/FormSelectData";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import { fetchUserByEmail } from "../../../api/users/users.api";

const SelectClassModalData = ({ classData, closeModal }) => {
  const { user } = useAuth();

  const defaultValues = {
    name: user?.displayName,
    email: user?.email,
  }

  const onSubmit = async (data) => {
    const userData = await fetchUserByEmail(user.email);
    
    try {
      const enrolledClassData = {
        user: userData?.data?._id,
        studentInfo: data,
        classInfo: classData,
        isPayed: false,
        createdAt: new Date().toISOString(),
      }
      console.log(enrolledClassData);
      //* call update related functionality
      //   const res = await updateAClass(updatedData, classData._id);
      //   res.modifiedCount && toast.success("Course update successfully !")

      closeModal(true);
    } catch (error) {
      toast.error(error.message);
      closeModal(true);
    }
  };

  return (
    <div className="my-3 add-class mx-auto">
      <ReusableForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <div className="sm:block md:flex items-center justify-between gap-4">
          <div className="w-full">
            <ReusableInput
              type="text"
              name="name"
              label="Full Name"
              placeholder="Enter full name ..."
            />
            <ReusableInput
              type="email"
              name="email"
              label="Email Address"
              placeholder="Enter email address..."
            />
          </div>
          <div className="w-full">
            <ReusableTextArea
              type="text"
              name="address"
              label="Address"
              placeholder="Provide address details..."
            />
          </div>
        </div>

        <div className="sm:block md:flex items-center justify-between gap-4">
          <div className="w-full">
            <ReusableInput
              type="date"
              name="dob"
              label="Date of Birth"
              placeholder="Date of Birth ..."
            />
          </div>
          <div className="w-full">
            <ReusableInput
              type="text"
              name="phone_number"
              label="Phone Number"
              placeholder="Enter your phone number..."
            />
          </div>
        </div>
        <div className="sm:block md:flex items-center justify-center gap-2">
          <div className="w-full">
            <ReusableSelect
              name="gender"
              label="Gender"
              options={genderOptions}
            />
          </div>
          <div className="w-full">
            <ReusableSelect
              name="education"
              label="Education Level"
              options={educationLevelOptions}
            />
          </div>
        </div>
        <div className="sm:block md:flex items-center justify-center gap-2">
          <div className="w-full">
            <ReusableSelect
              name="occupation"
              label="Occupation"
              options={occupationOptions}
            />
          </div>
          <div className="w-full">
            <ReusableSelect
              name="availability"
              label="Availability"
              options={availabilityOptions}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Confirm"
          className="btn btn-color btn-md text-xs w-[100px] border-none rounded-lg mt-4"
        />
      </ReusableForm>
    </div>
  );
};

export default SelectClassModalData;
