/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useAClasses } from "../../hooks/useClass";
import Container from "../../components/Container/Container";
import { useState } from "react";
import SelectClassModal from "../../components/Dashboard/Modal/SelectClassModel";
import useAuth from "../../hooks/useAuth";

const ClassDetails = () => {
  const { role } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { id } = useParams();

  const [classes] = useAClasses(id);
  const classData = classes.data;

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <div className="my-10">
        <div className="md:flex items-center justify-center gap-10">
          <div className="w-full">
            <img
              className="rounded-sm"
              src={classData?.classImage}
              alt="Class Image"
            />
          </div>
          <div className="w-full">
            <h4 className="text-3xl font-semibold mb-4 mt-6 md:mt-0">
              {classData?.className}
            </h4>
            <h6 className="text-xl font-semibold">${classData?.courseFree}</h6>
            <p className="text-sm my-4">{classData?.courseDetails}</p>

            <button
              onClick={() => setIsOpen(true)}
              className="mb-2 btn-color btn btn-sm"
              disabled={role === "admin" || role === "instructor" || disabled}
            >
              Select Class
            </button>

            <SelectClassModal
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              closeModal={closeModal}
              classData={classData}
            />

            <div className="space-y-1 text-sm">
              <p>
                <span className="font-medium">Course duration:</span>{" "}
                {classData?.duration}
              </p>
              <p>
                <span className="font-medium">Class time:</span>{" "}
                {classData?.time}
              </p>
              <p>
                <span className="font-medium">Available seats:</span>{" "}
                {classData?.seats}
              </p>
              <p>
                <span className="font-medium">Total Enrolled:</span>{" "}
                {classData?.enrolledCourse}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <h4 className="text-2xl font-semibold text-center mb-8">
            Additional Information
          </h4>
          <div className="border-2 rounded-2xl border-gray-100 w-full p-8 md:flex items-center justify-center gap-6">
            <div>
              <h6 className="text-md font-bold uppercase mb-4">
                Course Details
              </h6>
              <div className="text-sm space-y-1">
                <p>{classData?.courseDetails}</p>
                <p>
                  <span className="font-medium">Requirements:</span>
                  <ul>
                    {classData?.requirements?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </p>
                <p>
                  <span className="font-medium">Materials:</span>
                  <ul>
                    {classData?.materials?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </p>
                <p>
                  <span className="font-medium">Certifications:</span>{" "}
                  {classData?.certifications}
                </p>
                <p>
                  <span className="font-medium">Course level:</span>{" "}
                  {classData?.level}
                </p>
                <p>
                  <span className="font-medium">Published Date:</span>{" "}
                  {classData?.createdAt}
                </p>
              </div>
            </div>
            <div>
              <h6 className="text-md font-bold uppercase mb-4 mt-6 md:mt-0">
                Instructor Details
              </h6>
              <div className="space-y-1.5 text-sm">
                <p className="font-semibold">{classData?.instructor?.name}</p>
                <p>{classData?.instructorBio?.education}</p>
                <p>{classData?.instructorBio?.achievements}</p>
                <p>{classData?.instructorBio?.biography}</p>
                <p>{classData?.instructorBio?.teachingPhilosophy}</p>
                <p>{classData?.instructorBio?.specialization}</p>
                <p>{classData?.instructorBio?.experience}</p>
                <p>
                  <span className="font-medium">Contract Info:</span>{" "}
                  {classData?.instructor?.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClassDetails;
