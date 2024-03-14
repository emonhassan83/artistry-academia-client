import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

//* get instructors own class by email
export const useClassByEmail = () => {
  const { user } = useContext(AuthContext);

  const { data: classes = [], refetch, isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/my-class?email=${user?.email}`
      );
      return response.json();
    },
  });

  return [classes, isLoading, refetch];
};

//get all class by email
export const useEnrollClass = () => {
  const { user } = useContext(AuthContext);

  const { data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/enrollClass?email=${user?.email}`
      );
      return response.json();
    },
  });
  return [classes];
};
