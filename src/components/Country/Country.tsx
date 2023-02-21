import "./Country.scss";

type CountryProps = {
  country: string;
  region: string;
  areaSize: number;
};

const Country = ({ country, region, areaSize }: CountryProps) => {
  return (
    <ul className="country">
      <li className="country__prop">Country: {country}</li>
      <li className="country__prop">Region: {region}</li>
      <li className="country__prop">Area size: {areaSize} m²</li>
    </ul>
  );
};

export default Country;
