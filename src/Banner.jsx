import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t, i18n } = useTranslation();

  // Initialize language from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("userLanguage") || "en";
    i18n.changeLanguage(savedLanguage);
    document.dir = savedLanguage === "ar" ? "rtl" : "ltr";
  }, [i18n]);

  return (
    <>
        <div className="bg-teal-500">
          <h1>{t("mainHome.title")}</h1>
          <p1>{t("mainHome.body.b1")}</p1>
        </div>
      <div className="grid grid-cols-2  bg-lime-100  justify-center text-md gap-6">
        <div className="bg-teal-500">
          <h1>{t("body.title")}</h1>
          <p>{t("body.description")}</p>
        </div>
        <div className="bg-teal-500">
          <img src="/public/image/weew.png" alt="" width={200} />
        </div>
      </div>
    </>
  );
};

export default Banner;
