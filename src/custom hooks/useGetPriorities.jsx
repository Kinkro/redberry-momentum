import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";

const fetchPriorities = function () {
  return axios.get("/priorities");
};

function useGetPriorities() {
  return useQuery({
    queryKey: ["all-priorities"],
    queryFn: fetchPriorities,
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 60 * 24,
  });
}

export default useGetPriorities;
