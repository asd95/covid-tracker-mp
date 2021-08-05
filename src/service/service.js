export default class ServiceCovid {
  _apiBase = "https://api.covid19api.com/";

  getCovidData = async (url = '') => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${res.url}, received ${res.status}`);
    }
    const data = await res.json();
    return data;
  };
}