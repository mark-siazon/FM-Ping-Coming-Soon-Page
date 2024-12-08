import React from "react";
import HeaderSect from "./components/1_HeaderSect";
import ButtonSect from "./components/2_ButtonSect";
import SocmedBtnSect from "./components/3_SocmedBtnSect";
import Footer from "./components/4_Footer";
import imgIllustration from "./assets/illustration-dashboard.png";

const App = () => {
  return (
    <div className="flex flex-col items-center sm:justify-center min-h-screen min-w-28 bg-gray-200 text-center">
      <HeaderSect />
      <ButtonSect />
      <img src={imgIllustration} className="w-auto max-w-xs md:max-w-xl lg:max-w-2xl my-16 transition-all duration-700" alt="Skeletal structure of the incoming page" />
      <SocmedBtnSect />
      <Footer />
      {/* Todo ## + Footer + Error States */}
    </div>
  );
};

export default App;