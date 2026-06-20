import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import DeveloperShowcase from "./components/DeveloperShowcase";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import MainDemo from "./components/otherHooks/MainDemo";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>,
      children: [
        {
          path: "/",
          element: <MainContainer/>
        },
        {
          path: "/watch",
          element: <WatchPage />
        },
        {
          path: "/demo",
          element: <MainDemo />
        }
      ]
    },
  ]);

  return (
    <Provider store={store}>
      <div className="relative min-h-screen bg-slate-50">
        <Header />
        <RouterProvider router={appRouter} />
        <DeveloperShowcase />
      </div>
    </Provider>
  );
}

export default App;
