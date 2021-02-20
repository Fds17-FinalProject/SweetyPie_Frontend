import axios from 'axios';

export const getList = async query =>
  await axios.get(`http://3.34.50.91/api${query}`);

export const postBookMark = async id => {
  await axios.post(
    `http://3.34.50.91/api/bookmark`,
    {
      accommodationId: id,
    },
    {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    },
  );
};

export const deleteBookMark = async id => {
  console.log(id);
  await axios.delete(`http://3.34.50.91/api/bookmark?accommodationId=${id}}`, {
    headers: {
      Authorization: localStorage.getItem('token'),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};
