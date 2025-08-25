import { t } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCloseCircle, IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <div className="nav bg-slate-100  ">
        <div className="  mx-20 py-2 flex flex-col md:flex-row md:items-center   justify-between">
          <div className="logo w-20 ">LOGO</div>
          <div className="menu hidden md:flex items-center md:flex-1 mx-10 justify-between ">
            <ul className="flex gap-7 ">
              <li className="group lg:text-lg md:text-base text-sm font-light lg:mx-8 mx-6 tracking-wide hover:text-cyan-700 relative">
              <Link to={'/'}>
                {t("navbar.home")}
                <span className=" absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-700 transform scale-x-0 group-hover:scale-x-100 tanst duration-300"></span>
              </Link>
              </li>
              <li className="group lg:text-lg md:text-base text-sm font-light lg:mx-8 mx-6 tracking-wide hover:text-cyan-700 relative">
                <Link to="/about">
                {t("navbar.about")}
                </Link>
                 <span className=" absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-700 transform scale-x-0 group-hover:scale-x-100 tanst duration-300"></span>
              </li>
              <li className="group lg:text-lg md:text-base text-sm font-light lg:mx-8 mx-6 tracking-wide hover:text-cyan-700 relative">{t("navbar.contact")}
                 <span className=" absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-700 transform scale-x-0 group-hover:scale-x-100 tanst duration-300"></span>
              </li>
              <li className="group lg:text-lg md:text-base text-sm font-light lg:mx-8 mx-6 tracking-wide hover:text-cyan-700 relative">{t("navbar.services")}
                 <span className=" absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-700 transform scale-x-0 group-hover:scale-x-100 tanst duration-300"></span>
              </li>
            </ul>
            <button
              onClick={toggleLang}
              className="bg-blue-500 px-2 py-1 rounded text-white"
            >
              {i18n.language === "en" ? "العربية" : "English"}
            </button>
          </div>
          <div className="md:hidden text-center relative">
            {!isOpenMenu ? (
              <IoIosMenu
                onClick={() => setIsOpenMenu(true)}
                className="text-4xl -mt-6 float-end "
              />
            ) : (
              <IoIosCloseCircle
                onClick={() => setIsOpenMenu(false)}
                className="text-4xl -mt-6 float-end"
              />
            )}
            {isOpenMenu && (
              <div className="md:hidden  w-full  py-4  px-10 ">
                 <ul className="flex flex-col gap-10 ">
              <li className="group lg:text-lg md:text-base text-sm font-light lg:mx-8 mx-6 tracking-wide hover:text-cyan-700 relative">
                {t("navbar.home")}
                <span className=" absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-700 transform scale-x-0 group-hover:scale-x-100 tanst duration-300"></span>
              </li>
              <li className="group lg:text-lg md:text-base text-sm font-light lg:mx-8 mx-6 tracking-wide hover:text-cyan-700 relative">{t("navbar.about")}
                 <span className=" absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-700 transform scale-x-0 group-hover:scale-x-100 tanst duration-300"></span>
              </li>
              <li className="group lg:text-lg md:text-base text-sm font-light lg:mx-8 mx-6 tracking-wide hover:text-cyan-700 relative">{t("navbar.contact")}
                 <span className=" absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-700 transform scale-x-0 group-hover:scale-x-100 tanst duration-300"></span>
              </li>
              <li className="group lg:text-lg md:text-base text-sm font-light lg:mx-8 mx-6 tracking-wide hover:text-cyan-700 relative">{t("navbar.services")}
                 <span className=" absolute -bottom-1 left-0 w-full h-[1px] bg-cyan-700 transform scale-x-0 group-hover:scale-x-100 tanst duration-300"></span>
              </li>
            </ul>
                <button
                  onClick={toggleLang}
                  className="bg-blue-500 px-2 py-1 my-10 rounded text-white"
                >
                  {i18n.language === "en" ? "العربية" : "English"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
