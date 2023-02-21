import { useEffect, useState } from "react";

import "./App.scss";
import SectionCountries from "./components/SectionCountries/SectionCountries";
import PageHeader from "./components/Header/PageHeader";
import Button from "./components/Button/Button";
import upAndDownArrow from "/assets/upAndDownArrows.svg";
import getCountriesData from "./services/fetchData";

function App() {
  const [fetchedData, setFetchedData] = useState();

  const getCountries = async () => {
    const data = await getCountriesData();
    setFetchedData(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <PageHeader title="Reiz Tech Assignment" />
      <main className="main">
        <div className="main__buttons-container">
          <div className="buttons-container__filter-buttons">
            <Button text="area < Lithuania" />
            <Button text="Oceania region" />
          </div>
          <Button text="A - Z">
            <img src={upAndDownArrow} alt="" />
          </Button>
        </div>
        {fetchedData && <SectionCountries formatedData={fetchedData} />}
      </main>
    </>
  );
}

export default App;
