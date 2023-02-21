import React from "react";
import Country from "../Country/Country";
import "./SectionCountries.scss";

type SectionCountriesProps = {
  formatedData: {
    country: string;
    region: string;
    areaSize: number;
  }[];
};

const SectionCountries = ({ formatedData }: SectionCountriesProps) => {
  return (
    <section className="countries">
      {formatedData.map((data) => {
        return (
          <Country
            key={data.country}
            areaSize={data.areaSize}
            country={data.country}
            region={data.region}
          />
        );
      })}
    </section>
  );
};

export default SectionCountries;
