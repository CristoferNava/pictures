import { useEffect, useState } from "react";

import Pictures from "./components/Pictures";

const BASE_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "mx9wIeQEviKsnX4o9M4CWxSuKPO0lYv7btO0V8VmXco";

function App() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(BASE_URL + "?query=oceans", {
        method: "GET",
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      });
      const jsonResponse = await response.json();
      const pictures = jsonResponse.results;
      setPictures(pictures);
    };

    fetchData();
  }, []);

  return <Pictures picturesList={pictures} />;
}

export default App;
