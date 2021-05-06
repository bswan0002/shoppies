import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const ResultsPagination = ({ pageCount, page, setPage }) => {
  const [pageView, setPageView] = useState(1);

  const currentPages = (pages) => {
    if (pageView % 5 === 0) return pages.slice(pageView - 5, pageView);
    return pages.slice(
      pageView - (pageView % 5),
      pageView + 5 - (pageView % 5)
    );
  };

  const renderPaginationItems = () => {
    let paginationItems = [];

    for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
      paginationItems.push(
        <Pagination.Item
          key={pageNum}
          active={page === pageNum}
          onClick={() => {
            setPage(pageNum);
            setPageView(pageNum);
          }}
        >
          {pageNum}
        </Pagination.Item>
      );
    }

    if (pageCount <= 5) {
      return paginationItems;
    } else {
      return (
        <>
          <Pagination.First
            onClick={() => {
              setPage(1);
              setPageView(1);
            }}
          />
          <Pagination.Prev
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
                setPageView(page - 1);
              }
            }}
          />
          {pageView > 5 ? (
            <Pagination.Ellipsis onClick={() => setPageView(pageView - 5)} />
          ) : (
            <Pagination.Ellipsis disabled />
          )}
          {currentPages(paginationItems)}
          {pageView + (pageView % 5) < pageCount ? (
            <Pagination.Ellipsis onClick={() => setPageView(pageView + 5)} />
          ) : (
            <Pagination.Ellipsis disabled />
          )}
          <Pagination.Next
            onClick={() => {
              if (page < pageCount) {
                setPage(page + 1);
                setPageView(page + 1);
              }
            }}
          />
          <Pagination.Last
            onClick={() => {
              setPage(pageCount);
              setPageView(pageCount);
            }}
          />
        </>
      );
    }
  };

  return <Pagination>{renderPaginationItems()}</Pagination>;
};

export default ResultsPagination;
