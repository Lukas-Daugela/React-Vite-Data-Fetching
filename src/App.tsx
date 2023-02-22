import { useEffect, useState } from "react";

import "./App.scss";
import SectionCountries from "./components/SectionCountries/SectionCountries";
import PageHeader from "./components/Header/PageHeader";
import Button from "./components/Button/Button";
import upAndDownArrow from "/assets/upAndDownArrows.svg";
import {
  getCountriesData,
  reverseData,
  findArea,
  filterCountriesLessThan,
  filterCountriesRegion,
} from "./services/fetchAndFilter";

function App() {
  const [fetchedCities, setFetchedCities] = useState<any[]>([]);
  const [currentCities, setCurrentCities] = useState<any[]>([]);
  const [descendingOrder, setDescendingOrder] = useState<boolean>();
  const [isAreaFilter, setIsAreaFilter] = useState<boolean>(false);
  const [isRegionFilter, setIsRegionFilter] = useState<boolean>(false);

  const getCountries = async () => {
    await getCountriesData().then((data) => {
      setCurrentCities(data);
      setFetchedCities(data);
    });
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (descendingOrder) {
      handleReverse(currentCities);
    } else if (!descendingOrder) {
      handleReverse(currentCities);
    }
  }, [descendingOrder]);

  const handleReverse = (dataToReverse: any[]) => {
    const reversedData = reverseData([...dataToReverse]);
    setCurrentCities(reversedData);
  };

  const handleLessThanLithuania = async () => {
    if (!isAreaFilter) {
      const areaSize = await findArea(fetchedCities, "Lithuania");
      const filteredCountries = filterCountriesLessThan(
        fetchedCities,
        areaSize
      );
      setCurrentCities(filteredCountries);
      setIsAreaFilter(true);
      setIsRegionFilter(false);
    } else return;
  };

  const handleFilterRegion = async () => {
    if (!isRegionFilter) {
      const filteredCountries = filterCountriesRegion(fetchedCities, "Oceania");
      setCurrentCities(filteredCountries);
      setIsRegionFilter(true);
      setIsAreaFilter(false);
    } else return;
  };

  return (
    <>
      <PageHeader title="Reiz Tech Assignment" />
      <main className="main">
        <div className="main__buttons-container">
          <div className="buttons-container__filter-buttons">
            <Button
              type={"filter"}
              func={handleLessThanLithuania}
              text="area < Lithuania"
            />
            <Button
              type={"filter"}
              func={handleFilterRegion}
              text="Oceania region"
            />
          </div>
          <Button
            type={"sort"}
            currentState={descendingOrder}
            func={setDescendingOrder}
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
