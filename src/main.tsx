import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import i18n from "./i18n";
import "./index.css";

i18n.changeLanguage(localStorage.getItem('Langs') || 'en');

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
      <App />
    </Provider>
);
