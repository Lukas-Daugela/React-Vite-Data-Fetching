import "./Country.scss";

type CountryProps = {
  name: string;
  region: string;
  area?: number;
};

const Country = ({ name, region, area }: CountryProps) => {
  return (
    <ul className="country">
      <li className="country__prop">Country: {name}</li>
      <li className="country__prop">Region: {region}</li>
      {area && <li className="country__prop">Area size: {area}</li>}
    </ul>
  );
};

export default Country;
