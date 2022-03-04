import faker from '@faker-js/faker';
import dayjs from 'dayjs';

export function Review(image, rating, content, totalCnt) {
  return {
    nickname: faker.name.findName(),
    postNumber: totalCnt,
    contents: content,
    img: image,
    rating,
    date: dayjs().format('YYYY-MM-DD'),
    like: 0,
    comments: [],
    commentCnt: 0,
    reviewSize: [
      { txt: '생각보다 커요', title: '사이즈는 어떤가요?' },
      { txt: '화면과 같아요', title: '색상은 어떤가요?' },
    ],
    deliveryDay: 6,
  };
}
