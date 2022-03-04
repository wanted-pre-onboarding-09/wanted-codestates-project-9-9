# wanted-codestates-project-9-9

# Balaan 과제

## 프로젝트 소개

- 고객이 리뷰를 등록 하고 리뷰를 확인할 수 있는 페이지 제작
- 기간: 22.03.3~22.03.04

## 배포링크

[🚀💾 Demo Link ]

## 팀원 소개

|  이름  |    Role     |
| :----: | :---------: |
| 유송현 | Team Leader |
| 서한석 | Team Member |
| 손영산 | Team member |
| 윤솔비 | Team member |
| 이지수 | Team member |
| 조영제 | Team member |

## 기술 스택

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

<br/>

## 요구사항

- 리뷰 등록 페이지
    - 리뷰 제목, 이미지 선택 , 평점(별점 5점 만점) 등록
    - 리뷰등록 페이지는 등록(입력) 기능만 있는 **간단한 페이지로 구현** 합니다.
- 리뷰 리스트 페이지
    - 리뷰리스트 무한 스크롤
    - 정렬(최신순, 리뷰카운트순, 랜덤 정렬)
    - 리뷰 목록 표시 형태 선택(그리드 뷰, 리스트 뷰)
- 리뷰 상세 페이지
    - 리뷰 상세 이미지
    - 리뷰 댓글 달기
    - 좋아요
    - 링크 공유


## 디렉터리 구조

```bash
│  App.css
│  App.js
│  data.json
│  index.css
│  index.js
│
├─assets
│      btn_share_fb.png
│      btn_share_ks.png
│      btn_share_kt.png
│      btn_share_tw.png
│      btn_share_url.png
│      detailIcon.png
│      gridIcon.png
│      ic-new-heart-normal.png
│      icon-box-20.webp
│      icon-more.png
│      icon-star-black.webp
│      icon-star-gray.webp
│      icons8-heart-96.png
│      ic_can_btn.png
│      ic_left_btn.png
│      like-hand-fill.png
│      like_hand.png
│      share.png
│      tab-icon-01@2x.png
│      tab-icon-02@2x.png
│
├─components
│  ├─atmoms
│  │  │  ArrowUp.js
│  │  │  Dibs.js
│  │  │  Filter.js
│  │  │  Likes.js
│  │  │  ListBtn.js
│  │  │  OneClickTop.js
│  │  │  ReviewList.js
│  │  │  Share.js
│  │  │  ShareItems.js
│  │  │  SlideDots.js
│  │  │  Star.js
│  │  │
│  │  └─register
│  │          RegisterButton.js
│  │          ReviewInput.js
│  │
│  ├─molecules
│  │  │  CommentForm.js
│  │  │  CommentItem.js
│  │  │  InfiniteList.js
│  │  │  ListPage.js
│  │  │  Rating.js
│  │  │  RecommentItem.js
│  │  │
│  │  └─register
│  │          ImagePreview.js
│  │          RegisterHeader.js
│  │
│  ├─organisms
│  │  │  CommentContainer.js
│  │  │  DetailButton.js
│  │  │
│  │  ├─detail
│  │  │      DetailButton.js
│  │  │      DetailBuyOption.js
│  │  │      DetailContent.js
│  │  │      DetailDelivery.js
│  │  │      DetailHeader.js
│  │  │      DetailImg.js
│  │  │      DetailRating.js
│  │  │      DetailReviewSwiper.js
│  │  │      DetailTop.js
│  │  │
│  │  └─register
│  │          RegisterForm.js
│  │
│  └─pages
│          DetailPage.js
│          Home.js
│          Register.js
│
├─data
│      mockdata.json
│
├─lib
│  └─register
│          generateReview.js
│
└─store
    │  index.js
    │  modalValue.js
    │
    ├─form
    │      formSlice.js
    │
    └─review
            reviewSlice.js
```

## 실행 방법

```
npm start
```

## 커밋 컨벤션

|          | 사용 예시        |
| -------- | ---------------- |
| Feat     | 새로운 기능 추가 |
| Design   | CSS 스타일링     |
| Fix      | 버그 수정        |
| Refactor | 리팩토링         |
| Deploy   | 배포             |
| Remove   | 파일 삭제        |
