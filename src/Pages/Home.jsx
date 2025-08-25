import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Home = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // ينزل لأسفل شاشة الهيرو
      behavior: "smooth", // يخليها smooth scroll
    });
  };
   const { i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };
  return (
    <>
    <div className="main  relative">
      <img src="/public/image/smiling-girl.jpg" className="h-lvh w-full" alt="" />
      <div  className="absolute bottom-[100px] inset-0 flex items-end justify-center ">
        <button onClick={handleScrollDown} className="w-[200px]  py-2 text-white font-bold tracking-wide bg-pink-800 rounded-lg">Scrol Down</button>
      </div>
    </div>
    <div className="">
<h1 className="text-5xl font-mono text-center my-20 text-lime-800 tracking-widest">{t('Header.welcome')}</h1>
      <div className="App ">
      <h1 
        data-aos="fade-up-right" 
        className="text-3xl font-bold text-center text-pink-800 mt-10"
      >
        Hello AOS 👋
      </h1>
      <p 
        data-aos="zoom-in" 
        className="text-center mt-5 text-gray-800"
      >
        هذا النص سيظهر مع أنيميشن عند التمرير
      </p>
    </div>
      <div className="App">
      <h1 
        data-aos="zoom-in-down" 
        className="text-3xl font-bold text-center mt-10"
      >
        Hello AOS 👋
      </h1>
      <p 
        data-aos="zoom-in" 
        className="text-center mt-5 text-gray-800"
      >
        هذا النص سيظهر مع أنيميشن عند التمرير
      </p>
    </div>
      <div className="App">
      <h1 
        data-aos="fade-up" 
        className="text-3xl font-bold text-center mt-10"
      >
        Hello AOS 👋
      </h1>
      <p 
        data-aos="zoom-in" 
        className="text-center mt-5 text-gray-800"
      >
        هذا النص سيظهر مع أنيميشن عند التمرير
      </p>
    </div>
    </div>
    </>
  )
}

export default Home