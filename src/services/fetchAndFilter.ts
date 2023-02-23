const fetchApiData = () => {
  const url = "https://restcountries.com/v2/all?fields=name,region,area";
  return fetch(url).then((res) => res.json());
};

const reverseData = (data: any[]) => data.reverse();

type countryDataProps = {
  name: string;
  region: string;
  area: number;
  independent: boolean;
};

const findArea = (arrayOfCountries: any[], countryName: string) => {
  const correctCountry = arrayOfCountries.find(
    (country: countryDataProps): object | undefined => {
      if (country.name === countryName) return country;
    }
  );
  return correctCountry.area;
};

const filterCountriesLessThan = (
  arrayOfCountries: any[],
  lessThanArea: number
) => {
  const filteredCountries = arrayOfCountries.filter(
    (country: countryDataProps): object | undefined => {
      if (country.area < lessThanArea) return country;
    }
  );
  return filteredCountries;
};

const filterCountriesRegion = (arrayOfCountries: any[], regionName: string) => {
  const filteredCountries = arrayOfCountries.filter(
    (country: countryDataProps): object | undefined => {
      if (country.region === regionName) return country;
    }
  );
  return filteredCountries;
};

export {
  fetchApiData,
  reverseData,
  findArea,
  filterCountriesLessThan,
  filterCountriesRegion,
};
