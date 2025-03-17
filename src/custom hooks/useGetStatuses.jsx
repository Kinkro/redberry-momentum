import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";

const fetchStatuses = function () {
  return axios.get("/statuses");
};
function useGetStatuses() {
  return useQuery({
    queryKey: ["all-statuses"],
    queryFn: fetchStatuses,
    staleTime: Infinity,
    cacheTime: 1000 * 60 * 60 * 24,
  });
}

export default useGetStatuses;
