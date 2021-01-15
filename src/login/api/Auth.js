import axios from 'axios';
export const loginApi = (data) => {
  return axios({
    method: 'POST',
    url: 'https://proxibox-pharma-api-staging.enouvo.com/api/v1/auth/login',
    data: data,
    headers: {
      Authorization: 'Bearer ' + 'Token',
      'Content-Type': 'application/json',
    },
  })
    .then(function (response) {
      return response;
    })
    .catch((err) => {
      throw err.response;
    });
};
