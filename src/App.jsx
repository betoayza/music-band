import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import { Header } from "./components/pure/Header";
import { Footer } from "./components/pure/Footer";
import { Route, Routes } from "react-router-dom";
import * as Components from "./index/indexComponents";

function App() {
  return (
    <div
      className="App h-auto vw-100"
      style={{
        display: "grid",
        alignContent: "space-between",
        minHeight: "100vh",
      }}
    >
      <div className={"w-100 h-auto"}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Components.Home />} />

          {/* <Route exact path="/login" element={<Components.Login />} />

          <Route exact path="/signup" element={<Components.SignUp />} /> */}

          <Route exact path="/about" element={<Components.About />} />

          <Route exact path="/contact" element={<Components.Contact />} />

          <Route exact path="/news" element={<Components.News />} />

          <Route exact path="/tours" element={<Components.Tours />} />

          <Route exact path="/demos" element={<Components.Demos />} />

          <Route exact path="/shop" element={<Components.Shop />} />

          <Route exact path="/gallery" element={<Components.Gallery />} />

          <Route exact path="/albums" element={<Components.Albums />} />

          <Route exact path="/login" element={<Components.Login />} />

          <Route exact path="/signup" element={<Components.SignUp />} />

          <Route exact path="*" element={<Components.Error404 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
