import { useEffect, useState } from "react";

import {
  fetchApiData,
  filterCountriesLessThan,
  filterCountriesRegion,
  findArea,
  reverseData,
} from "../../services/fetchAndFilter";
import Button from "../Button/Button";
import PagePagination from "../PagePagination/PagePagination";
import SectionCountries from "../SectionCountries/SectionCountries";
import upAndDownArrow from "/assets/upAndDownArrows.svg";
import "./SectionMain.scss";

function SectionMain() {
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

  // Sorting data alphabetically (in this case by name)
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

  // Filter buttons handlers
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

  const handleFilterRegion = () => {
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

  const handleAllCountries = () => {
    setCurrentCountries(fetchedCountries);
    setIsRegionFilter(false);
    setIsAreaFilter(false);
    setCurrentPage(1);
  };

  // Slicing current data to display required amount of elements in current page
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const displayedCountries = currentCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  return (
    <>
      <main className="main">
        <div className="main__buttons-container">
          <div className="buttons-container__filter-buttons">
            <Button onClick={handleAllCountries} text="All countries" />
            <Button onClick={handleLessThanArea} text="Area < Lithuania" />
            <Button onClick={handleFilterRegion} text="Oceania region" />
          </div>
          <Button
            type={"sort"}
            currentState={descendingOrder}
            onClick={setDescendingOrder}
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

export default SectionMain;
