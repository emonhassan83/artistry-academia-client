import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../providers/AuthProvider";

//get all class by email
export const useSelectClass = () => {
  const { user } = useContext(AuthContext);

  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      if (user) {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/selectedClass?email=${user?.email}`
        );
        const data = await response.json();
        return data || [];
      }
    },
  });
  return [classes, refetch];
};
