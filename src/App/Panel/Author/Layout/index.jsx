import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/auth";
import { useEffect } from "react";

const AuthorLayout = ({ children }) => {
  const [auth] = useAuth();
  const router = useNavigate();

  useEffect(() => {
    if (!auth.token) {
      router("/");
    }
  }, [auth.token, router]);
  return (
    <>
      <nav>Author's Dashboard Header</nav>

      {children}
    </>
  );
};

export default AuthorLayout;
