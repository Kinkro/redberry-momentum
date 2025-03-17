import {
  Route,
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import TaskDetails from "./pages/TaskDetails";
import AddNewTask from "./pages/AddNewTask";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/task/:id" element={<TaskDetails />} />
      <Route path="/addtask" element={<AddNewTask />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
