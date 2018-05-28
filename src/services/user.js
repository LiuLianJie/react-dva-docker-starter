import request from '../utils/request';

export function fetch({ page = 1 }) {
  return request(`http://api.map.baidu.com/telematics/v3/weather?location=嘉兴&output=json&ak=5slgyqGDENN7Sy7pw29IUvrZ`);
}