import Main from "./Main";
import About from "./About";
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
  ]);
  return routes;
};

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => (
          <div style={styles.container}>
            <h1>Hello {user.username}</h1>
            <button style={styles.button} onClick={signOut}>
              Sign out
            </button>
            <br />
            <h2>Amplify Todos</h2>
            <input
              onChange={(event) => setInput("name", event.target.value)}
              style={styles.input}
              value={formState.name}
              placeholder="Name"
            />
            <input
              onChange={(event) => setInput("description", event.target.value)}
              style={styles.input}
              value={formState.description}
              placeholder="Description"
            />
            <button style={styles.button} onClick={addTodo}>
              Create Todo
            </button>
            {todos.map((todo, index) => (
              <div key={todo.id ? todo.id : index} style={styles.todo}>
                <p style={styles.todoName}>{todo.name}</p>
                <p style={styles.todoDescription}>{todo.description}</p>
              </div>
            ))}
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
