import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-danger">
      Home
      <button>
        <Link to={"/CreateBlog"}>Create Blog</Link>
      </button>
    </div>
  );
};

export default Home;
