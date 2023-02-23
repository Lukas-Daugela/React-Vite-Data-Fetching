import PageLink from "../PageLink/PageLink";
import "./PagePagination.scss";

type PagePaginationProps = {
  currentPage: number;
  amountOfPages: number;
  setCurrentPage: (page: number) => void;
};

const PagePagination = ({
  currentPage,
  setCurrentPage,
  amountOfPages,
}: PagePaginationProps) => {
  let startPageIndex: number;
  let endPageIndex: number;

  if (amountOfPages <= 5) {
    startPageIndex = 0;
    endPageIndex = amountOfPages;
  } else {
    if (currentPage <= 3) {
      startPageIndex = 0;
      endPageIndex = 6;
    } else if (currentPage + 3 >= amountOfPages) {
      startPageIndex = amountOfPages - 6;
      endPageIndex = amountOfPages;
    } else {
      startPageIndex = currentPage - 3;
      endPageIndex = currentPage + 3;
    }
  }

  const amountOfPagesArray = Array.from(
    { length: (amountOfPages - 1) / 1 + 1 },
    (value, index) => 1 + index * 1
  );

  const displayedPages = amountOfPagesArray.slice(startPageIndex, endPageIndex);

  return (
    <nav className="page-pagination">
      <PageLink
        text="<"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      />
      {displayedPages.map((pageNum, index) => (
        <PageLink
          text={pageNum}
          key={index}
          active={pageNum === currentPage}
          onClick={() => setCurrentPage(pageNum)}
        />
      ))}
      <PageLink
        text=">"
        disabled={currentPage === amountOfPages}
        onClick={() => {
          setCurrentPage(currentPage + 1);
        }}
      />
    </nav>
  );
};

export default PagePagination;
