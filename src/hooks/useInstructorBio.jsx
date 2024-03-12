import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

//* get instructor bio by instructorId
export const useInstructorById = ({id}) => {
    const [axiosSecure] = useAxiosSecure();
  
    const { data: instructorBio, isLoading: isInstructorBioLoading } = useQuery({
      queryKey: ["instructorBio"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/get-instructor-bio/${id}`);
        return res.data;
      },
    });
  
    return [instructorBio, isInstructorBioLoading];
  };