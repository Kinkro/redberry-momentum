import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <img />
      <div className="">
        <Link to="/addemployee">
          <button>თანამშრომლის შექმნა</button>
        </Link>
        <Link to="/addtask">
          <button>+შექმენი ახალი დავალება</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
