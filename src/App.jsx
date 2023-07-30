import { useEffect, useState } from "react";

import Pictures from "./components/Pictures/Pictures.component";
import Search from "./components/Search/Search.component";

import "./App.styles.css";

const BASE_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "mx9wIeQEviKsnX4o9M4CWxSuKPO0lYv7btO0V8VmXco";

function App() {
  const [pictures, setPictures] = useState([]);
  const [search, setSearch] = useState("animals");
  const [nSearchs, setNSearchs] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const searchUrl = new URL(BASE_URL);
      searchUrl.searchParams.set("query", search);
      const response = await fetch(searchUrl, {
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
  }, [nSearchs]);

  return (
    <main className="main-content">
      <Search
        search={search}
        setSearch={setSearch}
        setPictures={setPictures}
        setNSearchs={setNSearchs}
      />
      <Pictures picturesList={pictures} />;
    </main>
  );
}

export default App;
