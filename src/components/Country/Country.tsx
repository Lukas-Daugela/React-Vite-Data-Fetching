import "./Country.scss";

type CountryProps = {
  country: string;
  region: string;
  areaSize?: number;
};

const Country = ({ country, region, areaSize }: CountryProps) => {
  return (
    <ul className="country">
      <li className="country__prop">Country: {country}</li>
      <li className="country__prop">Region: {region}</li>
      {areaSize && <li className="country__prop">Area size: {areaSize}</li>}
    </ul>
  );
};

export default Country;
