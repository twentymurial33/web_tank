import Main from "./Main";
import About from "./About";
import History from "./History";
import Network from "./Network";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const AppWrapper = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/network",
      element: <Network />,
    },
    {
      path: "/history",
      element: <History />,
    },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
        <Router>
          <AppWrapper />
        </Router>
      </Authenticator>
    </div>
  );
}

export default App;
