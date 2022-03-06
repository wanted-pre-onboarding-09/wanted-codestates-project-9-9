# wanted-codestates-project-9-9

# Balaan 과제

## 프로젝트 소개

- 고객이 리뷰를 등록 하고 리뷰를 확인할 수 있는 페이지 제작
- 기간: 22.03.03~22.03.04

## 배포링크

[🚀💾 Demo Link ] (https://balaan9.netlify.app/)

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
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
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

### 유송현

### 서한석

### 손영산

- 이미지 업로드와 이미지 미리보기 기능 구현
  - 단일 이미지 업로드의 미리보기만 구현했을 때는 하나의 이미지 데이터만 처리해주면 되었기 때문에 그렇게 복잡하지 않았지만 여러 개의 이미지에 대한 미리보기를 구현할때는 이미지 데이터를 처리해주는 과정이 복잡해서 이해가 되지 않았다.
  - MDN 문서에 `FileReader` 의 `readAsDataURL` 메서드를 사용하는 예제들을 찾아보면서 바닐라 자바스크립트로 구현된 로직을 리액트스러운 로직으로 변경해 구현
    
    ```jsx
    // MDN 다중 이미지 미리보기 예제
    function previewFiles() {
    
      var preview = document.querySelector('#preview');
      var files   = document.querySelector('input[type=file]').files;
    
      function readAndPreview(file) {
    
        // `file.name` 형태의 확장자 규칙에 주의하세요
        if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
          var reader = new FileReader();
    
          reader.addEventListener("load", function () {
            var image = new Image();
            image.height = 100;
            image.title = file.name;
            image.src = this.result;
            preview.appendChild( image );
          }, false);
    
          reader.readAsDataURL(file);
        }
    
      }
    
      if (files) {
        [].forEach.call(files, readAndPreview);
      }
    
    }
    ```
    
    ```jsx
    // 과제에 적용한 다중 이미지 미리보기 로직
    const onLoadFile = (e) => {
        e.preventDefault();
        const { files } = e.target;
    
        function readAndPreview(file) {
          const reader = new FileReader();
    
          reader.onloadend = () => {
            const base64 = reader.result;
            if (base64) {
              setImage((prev) => [...prev, base64]);
            }
          };
          reader.onerror = (error) => {
            console.error('Error: ', error);
          };
          reader.readAsDataURL(file);
        }
    
        if (files) {
          [].forEach.call(files, readAndPreview);
          setFiles(files);
        }
      };
    ```

### 윤솔비

- 상세페이지 댓글과 대댓글 추가 구현
  - 댓글 추가: 어느 리뷰에 해당하는 댓글인지 찾기 위해 일단 `postNumber`를 받아와 `filter` 함수로 해당 리뷰를 찾아줬다. 해당 리뷰에 `action.patload.newComment`에 값을 넣어줬다.
  - 대댓글 추가: 어느 리뷰에 해당하는 대댓글인지 찾기 위해 현재 어떤 리뷰인지를 찾아 `currentReview`에 넣어주었다. 그 리뷰의 어느 댓글인지를 찾기 위해 `commentId`를 받아 `filter` 함수로 해당 대댓글을 찾아줬다. 해당 대댓글에 `action.payload.newRecomment`를 넣어줬다.

### 이지수
- 무한스크롤 구현
  - `useEffect` 부분
    - `IntersectionObsever API` 를 이용하여  Target Element가 viewport에 노출 되었는지 감시함 </br>
렌더링 된 요소 중 가장 마지막 element를 Target요소로 지정
    - target 요소가 화면에 50% 보여질 때 onIntersect 함수 시행
  - `onIntersect` 부분
    - `props`로 전달 받는 데이터를 20개씩 복사해서 화면에 렌더링 하는데(`reviews.slice(0, dataIndex.current)`) target 요소가 화면에 보일 때마다 복사하는 index를 20씩 증가 시켜서 다음 데이터가 보일 수 있게 함 `dataIndex.current += 20`

### 조영제
 - 리뷰 리스트 grid 뷰 구현
   display : grid를 사용해 구현
 - 뷰 변환 버튼 구현
   style component props를 사용해 구현함
   - 어려웠던 점 : props 사용아 낮설어 Dom 요소를 사용해 구현하였는데 팀원의 코드리뷰를 통해 style component를 이용하기로 해서 해매던 와중에 팀원분에 도움으로 구현할 수 있었다.
   - button에 tab이라는 props로 state를 전달해 boolean 값을 주어 해결하였다.
 - 정렬 기능 버튼 구현
   data에 sort를 사용해 기능 구현함
    - 어려웠던 점 : 기능 구현까지는 어렵지 않았으나 전체 페이지에서 리랜더링 되지 않는 문제점을 발견했는데 redux에 대한 이해가 부족해 결국 혼자서 완성하지 못 하였음
      redux의 필요성을 다시 느끼게 되었다.

## 실행 방법

```
npm i
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
