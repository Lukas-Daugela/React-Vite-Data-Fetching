import Country from "../Country/Country";
import "./SectionCountries.scss";

type SectionCountriesProps = {
  formatedData: {
    name: string;
    region: string;
    area?: number;
  }[];
};

const SectionCountries = ({ formatedData }: SectionCountriesProps) => {
  return (
    <section className="countries">
      {formatedData.map((data) => {
        return (
          <Country
            key={data.name}
            areaSize={data.area}
            country={data.name}
            region={data.region}
          />
        );
      })}
    </section>
  );
};

export default SectionCountries;
