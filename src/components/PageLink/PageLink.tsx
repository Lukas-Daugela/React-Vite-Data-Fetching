import "./PageLink.scss";

type PageLinkProps = {
  text: string | number;
  onClick: Function;
  disabled?: boolean;
  active?: boolean;
};

const PageLink = ({ text, onClick, disabled, active }: PageLinkProps) => {
  const createCustomClassName = (
    disab: boolean | undefined,
    activ: boolean | undefined
  ): string | undefined => {
    if (disab) return "page-link--disabled";
    if (activ) return "page-link--active";
    else return;
  };

  const customClassName = createCustomClassName(disabled, active);

  if (disabled) {
    return <span className={`page-link ${customClassName}`}>{text}</span>;
  }

  return (
    <a
      aria-current={active ? "page" : undefined}
      onClick={() => onClick()}
      className={`page-link ${customClassName}`}
    >
      {text}
    </a>
  );
};

export default PageLink;
