import shRequest from '../index';

export function getEntireRoomList(offset = 0, size = 20) {
  return shRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}