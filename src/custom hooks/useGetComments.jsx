import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";

const fetchComments = function ({ queryKey }) {
  console.log(queryKey[1]);
  return axios.get(`/tasks/${queryKey[1]}/comments`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  });
};

function useGetComments(taskId) {
  return useQuery({ queryKey: ["comments", taskId], queryFn: fetchComments });
}

export default useGetComments;
