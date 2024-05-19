import { useState, useEffect } from "react";
import { zooLens } from "../assets";
import { navigation } from "../constants";
import { HashLink } from 'react-router-hash-link';
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import AuthButtons from "./AuthButtons";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/loader/Loader";

function Header() {
  const navigate = useNavigate();

  const [openNavigation, setOpenNavigation] = useState(false);
  const pathName = useLocation();
  const [authenticatedUser, setAuthenticatedUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
    return () => {
      listenAuth();
    };
  }, []);

  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  function handleClick() {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  }

  function toggleNavigation() {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  }

  function logOut() {
  
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLoading(false);
        toast.success("Sign-out Successful.", {
          position: "bottom-right",
        });
        navigate("/");
      })
      .catch((error) => {
        setIsLoading(false);
        // An error happened.
        toast.error(error.message, {
          position: "bottom-right",
        });
      });

    if (!openNavigation) return;
    setOpenNavigation(false);
  }

  return (
    <>
      {isLoading && <Loader />}
      <div
        className={`fixed top-0 left-0 w-full z-50 border-b border-n-3 bg-orange-500/90 backdrop-blur-sm`}
      >
        <div className="flex items-center px-5 lg:px-7,5 xl:px-10 max-lg:py-4">
          <HashLink className="block w-[12rem] xl:mr-8" to="/#hero">
            <img src={zooLens} width="190" height="40" alt="zooLens" />
          </HashLink>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[5rem] left-0 right-0 bot-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent my-6`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
              {navigation.map((item) => (
                <HashLink
                  key={item.id}
                  to={item.url}
                  onClick={handleClick}
                  className={`block relative font-grotesk text-2xl uppercase text-n-1 lg:transition-colors hover:text-orange-100 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                    item.url === pathName.hash
                      ? "z-2 lg:text-n-"
                      : "lg:text-n-8/80"
                  } lg:leading-5 lg:hover:text-text-n-1 xl:px-12`}
                >
                  {item.title}
                </HashLink>
              ))}
              {authenticatedUser === null ? (
                <div className="flex flex-col font-code text-2xl uppercase text-n-1 transition-colors hover:text-orange-100 lg:hidden px-6 md:py-8 lg:-mr-0.25 z-2">
                  <HashLink className="py-6 md:pt-0" to="/register" onClick={handleClick}>
                    New Account
                  </HashLink>
                  <HashLink className="px-6 py-6" to="/login" onClick={handleClick}>
                    Sign in
                  </HashLink>
                </div>
              ) : (
                <div
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors lg:hidden px-6 z-2 `}
                >
                  <HashLink className="block py-6" to="/classifier" onClick={handleClick}>
                    ZooLens app
                    
                  </HashLink>
                  <a
                    className="hover:text-orange-100 block px-6 py-6 cursor-pointer"
                    onClick={logOut}
                  >
                    Log out
                  </a>
                </div>
              )}
            </div>

            <HamburgerMenu />
          </nav>
          <AuthButtons authenticatedUser={authenticatedUser} />
          <Button
            className="ml-auto lg:hidden"
            pc="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </>
  );
}

export default Header;
