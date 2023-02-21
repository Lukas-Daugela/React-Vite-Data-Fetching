import "./App.scss";
import SectionCountries from "./components/SectionCountries/SectionCountries";
import PageHeader from "./components/Header/PageHeader";
import Button from "./components/Button/Button";
import upAndDownArrow from "/assets/upAndDownArrows.svg";

function App() {
  const testArray: {
    country: string;
    region: string;
    areaSize: number;
  }[] = [
    {
      country: "Lithuania",
      region: "Europe",
      areaSize: 325151516,
    },
    {
      country: "Latvia",
      region: "Europe",
      areaSize: 187891516,
    },
    {
      country: "New York",
      region: "United States",
      areaSize: 98989962135,
    },
  ];

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
        <SectionCountries formatedData={testArray} />
      </main>
    </>
  );
}

export default App;
