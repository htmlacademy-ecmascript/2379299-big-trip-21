import ApiService from './framework/api-service.js';

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE',
};
export default class PointsApiService extends ApiService {
  async getPoints() {
    const response = await this._load({url: 'points'});
    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }

  async updatePoint(point) {
    const response = await this._load({
      url: `points/${point.id}`,
      method: Method.PUT,
      body: JSON.stringify(this.#adaptToServer(point)),
      headers: new Headers({'Content-Type': 'application/json'}),
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }

  async addPoint(point) {
    const response = await this._load({
      url: 'points',
      method: Method.POST,
      body: JSON.stringify(this.#adaptToServer(point)),
      headers: new Headers({'Content-Type': 'application/json'}),
    });

    const parsedResponse = await ApiService.parseResponse(response);

    return parsedResponse;
  }

  async deletePoint(point) {
    return await this._load({
      url: `points/${point.id}`,
      method: Method.DELETE,
      headers: new Headers({'Content-Type': 'application/json'}),
    });
  }

  #adaptToServer(point) {
    const adaptedPoint = {
      ...point,
      'date_from': point.dateFrom instanceof Date ? point.dateFrom.toISOString() : null,
      'date_to': point.dateTo instanceof Date ? point.dateTo.toISOString() : null,
      'base_price': Number(point.price),
      'is_favorite': point.isFavorite ?? false,
      'destination': point.destination.id,
      'offers': point.offers.map((item) => item.id),
    };

    delete adaptedPoint.dateFrom;
    delete adaptedPoint.dateTo;
    delete adaptedPoint.price;
    delete adaptedPoint.isFavorite;

    return adaptedPoint;

  }

}
