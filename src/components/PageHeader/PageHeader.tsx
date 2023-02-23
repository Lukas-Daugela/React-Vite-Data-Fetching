import "./PageHeader.scss";

type PageHeaderProps = {
  title: string;
};

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <header className="page-header">
      <h1 className="page-header__title">{title}</h1>
    </header>
  );
};

export default PageHeader;
