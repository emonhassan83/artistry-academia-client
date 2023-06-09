import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

//get all class by email
export const useSelectClass = () => {
  const { user } = useContext(AuthContext);
  //const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    /*     queryFn: async () => {
      if (user) {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/selectedClass?email=${user?.email}`,
          {headers: {
              authorization: `bearer ${token}`
            },
          }
        );
        const data = await response.json();
        return data || [];
      }
    }, */
    queryFn: async () => {
      if (user) {
        const res = await axiosSecure(`/selectedClass?email=${user?.email}`);
        return res.data;
      }
    },
  });
  return [classes, refetch];
};
