import axios from 'axios';

export const getBookmark = async () => {
  await axios.get(`http://3.34.50.91/api/bookmark`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export const postBookmark = async id => {
  await axios.post(
    `http://3.34.50.91/api/bookmark`,
    {
      accommodationId: id,
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  );
};

export const deleteBookmark = async id => {
  await axios.delete(`http://3.34.50.91/api/bookmark/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};
