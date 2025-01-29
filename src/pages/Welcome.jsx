import "./Pages.css";
import { useTranslation } from "react-i18next";

export default function Welcome() {
  const { t } = useTranslation();

  return (
    <>
      <div className="hello-container">
        <h1>{t("HelloThere")}</h1>
        <h2>{t("welcomeScreen")}</h2>
      </div>
    </>
  );
}
