import "./PageHeader.scss";

type PageHeader = {
  title: string;
};

const PageHeader = ({ title }: PageHeader) => {
  return (
    <header className="page-header">
      <h1 className="page-header__title">{title}</h1>
    </header>
  );
};

export default PageHeader;
