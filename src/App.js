import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import Helmet from "react-helmet";
// import { ThemeProvider } from "./components/Themeing";
import Routes from "./routes";
import { renderRoutes } from "react-router-config";
import rootReducer  from "./duckStore";
import Navigation from "./components/header/Navigation";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

const config = {
  htmlAttributes: { lang: "en" },
  title: "",
  titleTemplate: "React Hooks - %s",
  meta: [
    {
      name: "React Hooks",
      content: "The best app in the world."
    }
  ]
};


function App() {
  return (
    <>
      <Helmet {...config} />    
      <BrowserRouter>
        <Provider store={store}>
            <Navigation />
            {renderRoutes(Routes)}
          {/* <ThemeProvider>
          </ThemeProvider> */}
        </Provider>
      </BrowserRouter>
  </>
  );
}

export default App;
