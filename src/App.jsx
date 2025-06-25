import { Provider } from "react-redux";
import "./App.css";
import AdminLayout from "./components/layout/AdminLayout";
import store from "./redux/store";
import { publicRoutes } from "./router";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="w-full flex justify-center">
      <Provider store={store}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.element;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <AdminLayout>
                    <Page />
                  </AdminLayout>
                }
              />
            );
          })}
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
