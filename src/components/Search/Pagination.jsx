import React, { useState, useEffect } from 'react';
// import axios from 'axios'
import ReactPaginate from 'react-paginate';
import '../../App.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import { useCallback } from 'react';

function Pagination() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const getData = useCallback(async () => {
    try {
      const res = await axios.get(`http://3.34.50.91/api/accommodations`);
      const data = res.data.content;
      console.log(data);
      const slice = data.slice(offset, offset + perPage);
      const postData = slice.map(pd => <div key={pd.id}>
          <p>{pd.title}</p>
          {/* <img src={pd.thumbnailUrl} alt=""/> */}
      </div>)
      setData(postData)
      setPageCount(Math.ceil(data.length / perPage))
    } catch (e) {
      console.log(e);
    }
    
    // const headers = {'Content-Type': 'application/json'};
    // const res = await axios.get(`http://3.36.126.11/api/accommodations`, {headers})
    // const data = res.data;
    // const slice = data.slice(offset, offset + perPage);
    // console.log(slice);
  }, [offset, perPage]);

  const handlePageClick = e => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [getData, offset]);

  return (
    <div>
      {/* {data} */}
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default Pagination;
