import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="Navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
        <div className="item">
            <span>{currentUser.displayName}</span>
          </div>
          <div className="item">
            <img
              src={currentUser.photoURL}
              alt=""
              srcset=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
