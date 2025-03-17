import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";

const TOKEN = import.meta.env.VITE_API_TOKEN;

const fetchEmployees = function () {
  return axios.get("/employees", {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};

function useGetEmployees() {
  return useQuery({
    queryKey: ["all-employees"],
    queryFn: fetchEmployees,
    staleTime: 1000 * 60,
  });
}

export default useGetEmployees;
