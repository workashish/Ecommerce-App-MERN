import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </div>
  );
}

export default Home;
