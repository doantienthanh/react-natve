import axios from 'axios';
const API_URL = 'https://proxibox-pharma-api-staging.enouvo.com/api';
export default function callApi(endpoint, method = 'GET', body, Token) {
  return axios({
    method: method,
    url: API_URL,
    data: body,
    headers: {
      Authorization: 'Bearer ' + 'POST',
      'Content-Type': 'application/json',
    },
  })
    .then(function (response) {
      return response;
    })
    .catch((err) => {
      throw err.response;
    });
}
