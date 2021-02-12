import React, { useState, useEffect } from 'react';
// import axios from 'axios'
import ReactPaginate from 'react-paginate';
import '../../index.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getList } from '../../redux/lib/api';
import { getAccommList } from '../../redux/modules/accommodations';

function Pagination() {
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const location = useLocation();

  const accommodations = useSelector(state => state.accommodations);
  
  const url = new URL(window.location.href);
  const page = url.searchParams.get('page');
  const history = useHistory();
  const handlePageClick = e => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);

    if (!page) { 
      url.searchParams.append('page', selectedPage + 1);
    }
    
    if (page) { 
      url.searchParams.set('page', selectedPage + 1);
    } 
    history.push(url.search);
    window.scrollTo(0, 0);
  };

  useEffect(() => { 
    setOffset(url.searchParams.get('page') || 1)
  },[]);

  return (
    <div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={accommodations.pageable.totalPages - 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        pageNum={offset}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default Pagination;