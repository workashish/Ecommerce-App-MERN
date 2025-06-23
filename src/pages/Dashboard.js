import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container text-center"> 
      <h2>Dashboard</h2>
      <Link to="/logout" className="btn btn-primary">
        Logout
      </Link>
    </div>
  );
}
export default Dashboard;