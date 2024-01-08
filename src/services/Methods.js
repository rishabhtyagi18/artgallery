// apiConfigs is defined in public/index.html just before closing of head tag
const baseUrl = "https://gomechanic.app/";

function get(url, data = "") {
  let token = "Bearer " + localStorage.getItem("accessToken");
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const options = {
    method: "GET",
    headers: headers,
  };
  return fetch(baseUrl + url + data, options).then(
    (res) => res.json(),
    (err) => err
  );
}

function getfile(url, data = "") {
//   const signal = controller.signal

  let token = "Bearer " + localStorage.getItem("accessToken");

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const options = {
    method: "GET",
    headers: headers,
    // signal: signal
  };
  return fetch(baseUrl + url + data, options).then(
    (res) => res,
    (err) => err
  );
}

function post(url, data) {
  let token = "Bearer " + localStorage.getItem("accessToken");
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + url, options).then(
    (res) => res.json(),
    (err) => err
  );
}

function put(url, data) {
  let token = "Bearer " + localStorage.getItem("accessToken");
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const options = {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + url, options).then(
    (res) => res.json(),
    (err) => err
  );
}

function patch(url, data) {
  let token = "Bearer " + localStorage.getItem("accessToken");
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const options = {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + url, options).then(
    (res) => res.json(),
    (err) => err
  );
}

function deleteApi(url, data) {
  let token = "Bearer " + localStorage.getItem("accessToken");
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: token,
  };
  const options = {
    method: "DELETE",
    headers: headers,
    body: JSON.stringify(data),
  };
  return fetch(baseUrl + url, options).then(
    (res) => res.json(),
    (err) => err
  );
}

export {
  get,
  post,
  put,
  patch,
  deleteApi,
  getfile,
};
