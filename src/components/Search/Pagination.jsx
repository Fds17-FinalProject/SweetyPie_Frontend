import React, { useState, useEffect } from 'react';
// import axios from 'axios'
import ReactPaginate from 'react-paginate';
import '../../App.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Pagination() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    // const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
    // const data = res.data;
    // const slice = data.slice(offset, offset + perPage);
    // const postData = slice.map(pd => <div key={pd.id}>
    //     <p>{pd.title}</p>
    //     <img src={pd.thumbnailUrl} alt=""/>
    // </div>)
    // setData(postData)
    // setPageCount(Math.ceil(data.length / perPage))
    // const headers = {'Content-Type': 'application/json'};
    // const res = await axios.get(`http://3.36.126.11/api/accommodations`, {headers})
    // const data = res.data;
    // const slice = data.slice(offset, offset + perPage);
    // console.log(slice);
  };

  const handlePageClick = e => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  return (
    <div>
      {data}
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
