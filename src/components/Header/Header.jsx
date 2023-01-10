import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import "./Header.scss";
import { useState } from "react";
import {
  IconLogo,
  Menu,
  NavbarContainer,
  NavbarWrapper,
} from "../Navbar/Navbar.elements";
import { GiFlexibleStar } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";

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
              <Link to="/loginUser">Login/Register</Link>
            </Menu>
          </>
        )}
              <Menu>
                <Link to="/">Home</Link>
                </Menu>
                <Menu>

                  <GiArchiveResearch />
                <input
                    onKeyUp={handleChange}
                    placeholder="Buscar"
                    name="text"
                  />
              </Menu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Header;
