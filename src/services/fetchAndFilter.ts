const getCountriesData = () => {
  const url = "https://restcountries.com/v2/all?fields=name,region,area";
  return fetch(url).then((res) => res.json());
};

const reverseData = (data: any[]) => data.reverse();

export { getCountriesData, reverseData };
