import {getRandomPoint} from '../mock/point.js';

const POINT_COUNT = 7;

export default class PointModel {
  #points = Array.from({length: POINT_COUNT }, getRandomPoint);

  get points(){
    return this.#points;
  }

}
