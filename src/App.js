import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signup/SignUp";
import { ToastContainer } from "react-toastify";
import { Inventory } from "./pages/inventory/Inventory";
import { Blogs } from "./pages/blogs/Blogs";
import { NotFound } from "./pages/NotFound/NotFound";
import { RequireAuth } from "./hooks/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/:itemId"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
