import { axios } from "@lib/axios";

function getParams(options) {
  if (!options) return;

  let params = [];
  Object.entries(options).forEach(([key, value]) =>
    params.push(`${key}=${value}`)
  );
  return params.join("&");
}

const methods = {
  searchSongs: async function (options = {}) {
    const params = getParams(options);

    const {
      data: { results },
    } = await axios.get(`/api/v1/searchsongs?${params}`);
    return results;
  },
  checkUserExist: async function (username) {
    const {
      data: { results },
    } = await axios.get(`/api/v1/usernameexist?username=${username}`);
    return results.exists;
  },
  getUserInfo: async function (uid) {
    const {
      data: { results },
    } = await axios.get(`/api/v1/getusername?uid=${uid}`);
    return results?.username;
  },
  createProfile: async function (uid, username) {
    const {
      data: { success },
    } = await axios.post(`/api/v1/addnewuser`, {
      uid,
      username,
    });
    return success;
  },
};

export default methods;