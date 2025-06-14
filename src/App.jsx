import { Provider } from "react-redux";
import "./App.css";
import AdminLayout from "./components/layout/AdminLayout";
import ListCustomerPage from "./pages/ListCustomerPage";
import store from "./redux/store";

function App() {
  return (
    <div className="w-full flex justify-center">
      <Provider store={store}>
        <AdminLayout>
          <ListCustomerPage />
        </AdminLayout>
      </Provider>
    </div>
  );
}

export default App;
