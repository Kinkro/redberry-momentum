import { Link } from "react-router-dom";
import axios from "../api/axios";
import useGetStatuses from "../custom hooks/useGetStatuses";
import { useQuery } from "@tanstack/react-query";

const fetchAllTasks = function () {
  return axios.get("/tasks", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
    },
  });
};

function HomePage() {
  const {
    data: tasksData,
    isLoading: tasksLoading,
    isError: tasksError,
    error: tasksErrorMessage,
  } = useQuery({
    queryKey: ["all-tasks"],
    queryFn: fetchAllTasks,
  });

  const {
    data: statusesData,
    isLoading: statusesLoading,
    isError: statusesError,
    error: statusesErrorMessage,
  } = useGetStatuses();

  if (tasksLoading || statusesLoading) {
    return <p>Loading ...</p>;
  }

  if (tasksError) {
    return (
      <p>error fetching data with message: {tasksErrorMessage.message} </p>
    );
  }
  if (statusesError) {
    return (
      <p>error fetching data with message: {statusesErrorMessage.message}</p>
    );
  }
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {statusesData.data.map((st) => (
        <div key={st.id}>
          <h2>{st.name}</h2>
          <div>
            {tasksData.data
              .filter((task) => task.status.id === st.id)
              .map((task) => (
                <Link to={`/task/${task.id}`} key={task.id}>
                  <div style={{ border: "1px solid black" }}>
                    <h4>{task.name}</h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
