import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={"Home"}/>
            <Route path="/Movies-&-Shows" element={"Movies & Shows"} />
            <Route path="/Support" element={"Support"}/>
            <Route path="/Subscriptions" element={"Subscriptions"}/>
          </Route>
          <Route path="/login" element={"login"}/>
          <Route path="/register" element={"register"} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}
