import { Route, Routes } from "react-router";
import Homelayout from "./components/Layout/HomeLayout";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homelayout />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
