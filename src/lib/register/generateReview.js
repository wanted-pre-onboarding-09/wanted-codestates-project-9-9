import faker from '@faker-js/faker';
import dayjs from 'dayjs';

export function Review(image, rating, content, totalCnt) {
  return {
    nickname: faker.name.findName(),
    postNumber: totalCnt,
    contents: content,
    img: image,
    rating,
    createdAt: dayjs().format('YYYY-MM-DD'),
    comments: [],
    commentCnt: 0,
  };
}
