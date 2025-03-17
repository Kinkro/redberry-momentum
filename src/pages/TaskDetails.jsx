import { useQuery } from "@tanstack/react-query";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import useGetComments from "../custom hooks/useGetComments";
function TaskDetails() {
  const { id } = useParams();
  const fetchTaskDetails = function () {
    return axios.get(`/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    });
  };
  const {
    data: taskDetails,
    isLoading: taskDetailsLoading,
    isError: taskDetailsError,
    error: taskDetailsErrorMessage,
  } = useQuery({
    queryKey: ["task-details", id],
    queryFn: fetchTaskDetails,
  });

  const {
    data: comments,
    isLoading: commentsloading,
    isError: commentsError,
    error: commentsErrorMessage,
  } = useGetComments(id);

  console.log(JSON.stringify(comments));

  if (taskDetailsLoading || commentsloading) {
    return <p>Loading ...</p>;
  }
  if (taskDetailsError) {
    return <p>{taskDetailsErrorMessage.message}</p>;
  }
  if (commentsError) {
    return <p>{commentsErrorMessage.message}</p>;
  }
  return <div>TaskDetails</div>;
}

export default TaskDetails;
