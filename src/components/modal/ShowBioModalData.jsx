import { useInstructorById } from "../../hooks/useInstructorBio";
import { useGetAUser } from "../../hooks/useUser";
import Loader from "../Loader/Loader";

const ShowBioModalData = ({ instructorId }) => {
  const [instructorBio, isInstructorBioLoading] = useInstructorById({
    id: instructorId,
  });
  const [user] = useGetAUser({ id: instructorId });

  if (isInstructorBioLoading) {
    return <Loader />;
  }

  return (
    <div>
      {!isInstructorBioLoading && user && instructorBio && (
        <>
          <h4 className="text-xl font-semibold mb-4">{user?.name}</h4>
          <div className="space-y-1 text-sm">
          <p className="text-sm">{instructorBio?.education}</p>
          <p>{instructorBio?.specialization}</p>
          <p>{instructorBio?.biography}</p>
          <p>{instructorBio?.achievements}</p>
          <p>{instructorBio?.experience}</p>
          <p>{instructorBio?.teachingPhilosophy}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ShowBioModalData;
