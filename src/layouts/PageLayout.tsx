import { ReactNode } from "react";
import "./PageLayout.scss";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return <div className="page-layout">{children}</div>;
};

export default PageLayout;
