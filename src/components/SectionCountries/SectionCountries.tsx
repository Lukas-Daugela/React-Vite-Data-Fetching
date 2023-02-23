import Country from "../Country/Country";
import "./SectionCountries.scss";

type SectionCountriesProps = {
  isLastPage?: boolean;
  formatedData: {
    name: string;
    region: string;
    area?: number;
  }[];
};

const SectionCountries = ({
  formatedData,
  isLastPage,
}: SectionCountriesProps) => {
  const createCustomClassName = (
    isLastPage: boolean | undefined
  ): string | undefined => {
    if (isLastPage) return "countries--on-last-page";
    else return "";
  };

  const customClass = createCustomClassName(isLastPage);

  return (
    <section className={`countries ${customClass}`}>
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
