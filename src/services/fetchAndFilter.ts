const getCountriesData = () => {
  const url = "https://restcountries.com/v2/all?fields=name,region,area";
  return fetch(url).then((res) => res.json());
};

const reverseData = (data: any[]) => data.reverse();

type filterProps = {
  name: string;
  region: string;
  area: number;
  independent: boolean;
};

const findArea = (arrayOfCountries: any[], countryName: string) => {
  const correctCountry = arrayOfCountries.find(
    (country: filterProps): object | undefined => {
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
    (country: filterProps): object | undefined => {
      if (country.area < lessThanArea) return country;
    }
  );
  return filteredCountries;
};

export { getCountriesData, reverseData, findArea, filterCountriesLessThan };
