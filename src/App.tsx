import { useEffect, useState } from "react";

import "./App.scss";
import SectionCountries from "./components/SectionCountries/SectionCountries";
import PageHeader from "./components/Header/PageHeader";
import Button from "./components/Button/Button";
import upAndDownArrow from "/assets/upAndDownArrows.svg";
import { getCountriesData, reverseData } from "./services/fetchAndFilter";

function App() {
  const [fetchedCities, setFetchedCities] = useState<any[]>();
  const [currentCities, setCurrentCities] = useState<any[]>();
  const [descendingOrder, setDescendingOrder] = useState<boolean>();

  const getCountries = async () => {
    await getCountriesData().then((data) => {
      setCurrentCities(data);
      setFetchedCities(data);
    });
  };

  const handleReverse = () => {
    if (fetchedCities !== undefined) {
      const reversedData = reverseData([...fetchedCities]);
      setCurrentCities(reversedData);
    }
  };

  useEffect(() => {
    getCountries();
    console.log("making call");
  }, []);

  useEffect(() => {
    if (descendingOrder) {
      handleReverse();
    } else {
      setDescendingOrder(false);
      setCurrentCities(fetchedCities);
    }
  }, [descendingOrder]);

  return (
    <>
      <PageHeader title="Reiz Tech Assignment" />
      <main className="main">
        <div className="main__buttons-container">
          <div className="buttons-container__filter-buttons">
            <Button
              type={"filter"}
              setState={() => {}}
              text="area < Lithuania"
            />
            <Button type={"filter"} setState={() => {}} text="Oceania region" />
          </div>
          <Button
            type={"sort"}
            currentState={descendingOrder}
            setState={setDescendingOrder}
            text="A - Z"
          >
            <img src={upAndDownArrow} alt="" />
          </Button>
        </div>
        {currentCities && <SectionCountries formatedData={currentCities} />}
      </main>
    </>
  );
}

export default App;
