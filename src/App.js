import Main from "./Main";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

const AppWrapper = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/about",
      element: <div>About!</div>,
    },
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <Router>
        <AppWrapper />
      </Router>
    </div>
  );
}

export default App;
