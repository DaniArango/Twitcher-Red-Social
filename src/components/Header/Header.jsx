import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import "./Header.scss";
import { useState } from "react";
import {
  IconLogo,
  IconLogoMobile,
  Menu,
  NavbarContainer,
  NavbarWrapper,
} from "../Navbar/Navbar.elements";
import { GiFlexibleStar } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
    const ChangeClick = () => {
        setClick(!click);
    }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/loginUser");
  };
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate("/search/" + text);
    }
    
  };

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <IconLogo>
          <GiFlexibleStar size={"2em"} />
          Twitcher
        </IconLogo>
        <IconLogoMobile onClick={() => ChangeClick()}>
          <FaBars />
        </IconLogoMobile>
        <Menu>
          <Link to="/">Home</Link>
        </Menu>

        {user ? (
          <>
            <Menu onClick={onLogout}>Logout</Menu>
            <Menu>
              <Link to="/profile">{user.user.name}</Link>
            </Menu>
          </>
        ) : (
          <>
            <Menu>
              <Link to="/loginUser">Login</Link>
            </Menu>
            <Menu>
              <Link to="/createUser">Register</Link>
            </Menu>
            <input
              onKeyUp={handleChange}
              placeholder="search post"
              name="text"
            />
            {user?.user?.role === "admin" ? (
              <Menu>
                <Link to="/admin">Admin</Link>
              </Menu>
            ) : (
              ""
            )}
          </>
        )}
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Header;
