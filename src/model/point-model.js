import {getPoint} from '../mock/point.js';
import Observable from '../framework/observable.js';

const POINT_COUNT = 7;
export default class PointModel extends Observable {
  #points = Array.from({length: POINT_COUNT }, getPoint);

  get points(){
    return this.#points;
  }
}
