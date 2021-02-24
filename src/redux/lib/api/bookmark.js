import axios from 'axios';

export const getBookmark = async () => {
  await axios.get(`https://sweetypie.ga/api/bookmark`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export const postBookmark = async id => {
  await axios.post(
    `https://sweetypie.ga/api/bookmark`,
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
  await axios.delete(`https://sweetypie.ga/api/bookmark/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};
