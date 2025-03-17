import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";

const fetchDepartments = function () {
  return axios.get("/departments");
};

function useGetDepartments() {
  return useQuery({
    queryKey: ["all-departments"],
    queryFn: fetchDepartments,
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 60 * 24,
  });
}

export default useGetDepartments;
