import React, { useState } from "react";
import Auth from "./components/Auth";
import { dbFirestore } from "./config/firebase";
function App() {
  const [moviesList, setMovieslist] = useState([]);
  return (
    <div>
      <Auth />
    </div>
  );
}

export default App;
