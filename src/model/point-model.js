import {getPoint} from '../mock/point.js';

const POINT_COUNT = 7;
export default class PointModel {
  #points = Array.from({length: POINT_COUNT }, getPoint);

  get points(){
    return this.#points;
  }

}

