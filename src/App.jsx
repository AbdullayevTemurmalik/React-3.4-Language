import "./App.css";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
function App() {
  let { t } = useTranslation();

  return (
    <>
      <Navbar />
      <h1>{t("hi")}</h1>
      <h2>{t("us")}</h2>
    </>
  );
}

export default App;
