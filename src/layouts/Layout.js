import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import Card from "../organisms/Card";
import { withUserName } from "../utils";

const Layout = ({ list, text }) => {
  const [pagination, setPagination] = useState({
    data: list,
    offset: 0,
    numberPerPage: 4,
    pageCount: 0,
    currentData: [],
  });
  useEffect(() => {
    setPagination((prevState) => ({
      ...prevState,
      pageCount: prevState.data.length / prevState.numberPerPage,
      currentData: prevState.data.slice(
        pagination.offset,
        pagination.offset + pagination.numberPerPage
      ),
    }));
  }, [pagination.numberPerPage, pagination.offset]);
  const handlePageClick = (event) => {
    const selected = event.selected;
    const offset = selected * pagination.numberPerPage;
    setPagination({ ...pagination, offset });
  };

  const CardWithUser = withUserName(Card);

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 ">
          {pagination.currentData &&
            pagination.currentData.map((post, index) => {
              return (
                <div className="col mb-3" key={post.id}>
                  <CardWithUser
                    post={post}
                    key={`${index}-${post.userId}`}
                    text={text}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pagination.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Layout;
