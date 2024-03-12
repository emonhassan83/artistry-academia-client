import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
// import { addClass } from "../../api/classes";
import { Helmet } from "react-helmet-async";
import { useTheme } from "../../providers/ThemeProvider";
import ReusableForm from "../../components/Form/ReusableForm";
import ReusableInput from "../../components/Form/ReusableInput";
import ReusableTextArea from "../../components/Form/ReusableTextArea";
import ReusableSelect from "../../components/Form/ReusableSelect";
import ReusableMultiSelect from "../../components/Form/ReusableMultiSelect";
import {
  courseDurationOptions,
  courseLevelOptions,
  courseMaterialsOptions,
  courseRequirementsOptions,
  courseTimeOptions,
} from "../../components/Form/FormSelectData";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useTheme();

  const onSubmit = (data) => {
    const courseData = {
      ...data,
      requirements: data.requirements.map(item => item.value),
      materials: data.materials.map(item => item.value),
      status: 'pending'
    }
    console.log(courseData);

    //* save class data in database
    // addClass(classData)
  };

  return (
    <div
      className={`w-[90%] sm:w-[95%] lg:w-[90%] mx-auto my-6 py-10 md:px-14 px-8 border-[1px]  ${
        theme.mode === "dark"
          ? "text-gray-100 border-[#ababab]"
          : "text-gray-800"
      }`}
    >
      <Helmet>
        <title>Artistry Academia | Add A Class</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-8 text-center">
        Add A Course Details
      </h2>
      <ReusableForm onSubmit={onSubmit}>
        <div className="sm:block md:flex items-center justify-between gap-4">
          <div className="w-full">
            <ReusableInput
              type="text"
              name="class_name"
              label="Class Name"
              placeholder="Enter class name ..."
            />
            <ReusableInput
              type="text"
              name="class_image"
              label="Class Image"
              placeholder="Enter class image..."
            />
          </div>
          <div className="w-full">
            <ReusableTextArea
              type="text"
              name="course_details"
              label="Course Details"
              placeholder="Provide course details..."
            />
          </div>
        </div>

        <div className="sm:block md:flex flex-row-reverse items-center justify-between gap-4">
          <div className="w-full">
            <ReusableInput
              type="text"
              name="course_free"
              label="Course Free"
              placeholder="Course Free.."
            />
            <ReusableInput
              type="text"
              name="seats"
              label="Available seats"
              placeholder="Available seats..."
            />
          </div>
          <div className="w-full">
            <ReusableTextArea
              type="text"
              name="certifications"
              label="Certifications"
              placeholder="Enter course certifications..."
            />
          </div>
        </div>
        <div className="sm:block md:flex items-center justify-center gap-2">
          <div className="w-full">
            <ReusableSelect
              name="level"
              label="Course level"
              options={courseLevelOptions}
            />
          </div>
          <div className="w-full">
            <ReusableSelect
              name="duration"
              label="Course duration"
              options={courseDurationOptions}
            />
          </div>
        </div>
        <ReusableSelect
          name="tile"
          label="Course time"
          options={courseTimeOptions}
        />
        <ReusableMultiSelect
          name="requirements"
          label="Requirements"
          options={courseRequirementsOptions}
        />
        <ReusableMultiSelect
          name="materials"
          label="Course materials"
          options={courseMaterialsOptions}
        />
        <input
          type="submit"
          value="Add Course"
          className="btn btn-color btn-md text-xs w-[120px] border-none rounded-lg"
        />
      </ReusableForm>
    </div>
  );
};

export default AddClass;
