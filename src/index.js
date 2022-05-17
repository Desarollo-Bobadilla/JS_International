import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

function getLang() {
  return navigator.userLanguage || navigator.language;
}

console.log(getLang());

ReactDOM.render(
  <IntlProvider
    locale={getLang()}
    messages={getLang() === "es-419" ? localeEsMessages : localeEnMessages}
  >
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
