import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();
  return (
    <div>
      <button onClick={() => i18n.changeLanguage("uz")}>uz</button>
      <button onClick={() => i18n.changeLanguage("ru")}>ru</button>
      <button onClick={() => i18n.changeLanguage("en")}>en</button>
    </div>
  );
};

export default Navbar;
