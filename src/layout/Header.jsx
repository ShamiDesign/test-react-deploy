import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";

const Header = () => {
  const { t, i18n } = useTranslation();

  // Initialize language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("userLanguage") || "en";
    i18n.changeLanguage(savedLanguage);
    document.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.dir = lng === "ar" ? "rtl" : "ltr";
    localStorage.setItem("userLanguage", lng);
  };
  return (
    <>
      <div className="section px-10 bg-teal-800 text-white flex items-center justify-between py-3">
        <div className="logo">logo</div>
        <div className="menu ">
          <ul className="flex gap-8">
            <li>{t("navbar.home")}</li>
            <li>{t("navbar.about")}</li>
            <li>{t("navbar.contact")}</li>
            <li>{t("navbar.services")}</li>
          </ul>
        </div>
         {/* ===================== Switch CTA ============================= */}
      <div className="CTA flex justify-center gap-7">
        {i18n.language !== "en" && (
          <button
            onClick={() => changeLanguage("en")}
            className="bg-teal-300 px-3 py-2 rounded-lg text-white font-bold"
          >
            English
          </button>
        )}

        {i18n.language !== "ar" && (
          <button
            onClick={() => changeLanguage("ar")}
            className="bg-orange-500 px-3 py-2 rounded-lg text-white font-bold"
          >
            العربية
          </button>
        )}
      </div>
      </div>
      <Navbar />
   

      <br />
      <br />
      <br />
    </>
  );
};

export default Header;
