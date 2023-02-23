import { useEffect, useState } from "react";

import "./App.scss";
import SectionCountries from "./components/SectionCountries/SectionCountries";
import PageHeader from "./components/Header/PageHeader";
import Button from "./components/Button/Button";
import upAndDownArrow from "/assets/upAndDownArrows.svg";
import {
  fetchApiData,
  reverseData,
  findArea,
  filterCountriesLessThan,
  filterCountriesRegion,
} from "./services/fetchAndFilter";
import PagePagination from "./components/PagePagination/PagePagination";

function App() {
  const [fetchedCountries, setFetchedCountries] = useState<any[]>([]);
  const [currentCountries, setCurrentCountries] = useState<any[]>([]);
  const [descendingOrder, setDescendingOrder] = useState<boolean>();
  const [isAreaFilter, setIsAreaFilter] = useState<boolean>(false);
  const [isRegionFilter, setIsRegionFilter] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const countriesPerPage: number = 5;

  const amountOfPages = Math.ceil(currentCountries.length / countriesPerPage);
  const isLastPage = currentPage === amountOfPages;

  const fetchData = async () => {
    await fetchApiData().then((data) => {
      setCurrentCountries(data);
      setFetchedCountries(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (descendingOrder) {
      handleReverse(currentCountries);
    } else if (!descendingOrder) {
      handleReverse(currentCountries);
    }
  }, [descendingOrder]);

  const handleReverse = (dataToReverse: any[]) => {
    const reversedData = reverseData([...dataToReverse]);
    setCurrentCountries(reversedData);
  };

  const handleLessThanArea = async () => {
    if (!isAreaFilter) {
      const areaSize = await findArea(fetchedCountries, "Lithuania");
      const filteredCountries = filterCountriesLessThan(
        fetchedCountries,
        areaSize
      );
      setCurrentCountries(filteredCountries);
      setIsAreaFilter(true);
      setIsRegionFilter(false);
      setCurrentPage(1);
    } else return;
  };

  const handleFilterRegion = async () => {
    if (!isRegionFilter) {
      const filteredCountries = filterCountriesRegion(
        fetchedCountries,
        "Oceania"
      );
      setCurrentCountries(filteredCountries);
      setIsRegionFilter(true);
      setIsAreaFilter(false);
      setCurrentPage(1);
    } else return;
  };

  const handleAllCuntries = async () => {
    setCurrentCountries(fetchedCountries);
    setIsRegionFilter(false);
    setIsAreaFilter(false);
    setCurrentPage(1);
  };

  // Slicing current data to display required amount of elements in on page
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const displayedCountries = currentCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  return (
    <>
      <PageHeader title="Reiz Tech Assignment" />
      <main className="main">
        <div className="main__buttons-container">
          <div className="buttons-container__filter-buttons">
            <Button
              type={"filter"}
              func={handleAllCuntries}
              text="All countries"
            />
            <Button
              type={"filter"}
              func={handleLessThanArea}
              text="Area < Lithuania"
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
        {currentCountries && (
          <SectionCountries
            isLastPage={isLastPage}
            formatedData={displayedCountries}
          />
        )}
      </main>
      <PagePagination
        amountOfPages={amountOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
