import axios from 'axios';

export const getList = async query =>
  await axios.get(`http://3.34.50.91/api${query}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });

export const postBookMark = async id => {
  console.log(id);
  await axios.post(
    `http://3.34.50.91/api/bookmark`,
    {
      accommodationId: id,
    },
    {
      headers: {
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MTIzQGdtYWlsLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsIm1lbWJlcklkIjoxLCJleHAiOjE2NDUyNjUzOTR9.v84KuW7pEJvr7-Ff848gNY2hNL8KNYv7gNYnymL56BPgiCRnzWVe0HPSoQpCyb-c4yJYHRUPlowJqNKU4HiWXA`,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  );
};

export const deleteBookMark = async id => {
  // console.log(id);
  await axios.delete(`http://3.34.50.91/api/bookmark/${id}`, {
    headers: {
      // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MTIzQGdtYWlsLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsIm1lbWJlcklkIjoxLCJleHAiOjE2NDUyNjUzOTR9.v84KuW7pEJvr7-Ff848gNY2hNL8KNYv7gNYnymL56BPgiCRnzWVe0HPSoQpCyb-c4yJYHRUPlowJqNKU4HiWXA`,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};
