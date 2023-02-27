# 쿠키런 카드뽑기(미완성) 

<img width="1178" alt="1" src="https://user-images.githubusercontent.com/107898063/212458533-d26c4952-6dc3-44be-ae00-85c73984501d.png">

<br/>

## React를 활용한 쿠키 카드뽑기 구현
<br/>
<br/>

### 1. 사용기술
#
- React, Redux, Axios, Express 등등

<br/> 


### 2. 기획
#
- 로그인
- 카드뽑기
- 경매(미구현)
- 거래게시판(미구현)
- 도감(일부구현)

<br/>

### 3. 화면구성
#

- **오프닝**

<img width="600" alt="1" src="https://user-images.githubusercontent.com/107897886/221533336-c957c455-1a34-4aff-a100-b263e01432fb.png">
<br/>
<br/>
<img width="600" alt="1" src="https://user-images.githubusercontent.com/107897886/221534205-f6c1f665-e600-4342-9f38-081f7f39629e.gif">
<br/>
<br/>

```javascript
import ReactPlayer from "react-player";

const [playIndex, setPlayIndex] = useState(0);
  const playList = [
    { index: 0, url: "video/video1.mp4" },
    { index: 1, url: "video/video2.mp4" },
    { index: 2, url: "video/video3.mp4" },
    { index: 3, url: "video/video4.mp4" },
    { index: 4, url: "video/video5.mp4" },
  ];
  const handleNextVideo = (video, playIndex) => {
    if (playIndex === video.length - 1) {
      setPlayIndex(0);
    } else {
      setPlayIndex(playIndex + 1);
    }
  };
```
리액트 플레이어라는 라이브러리를 도입하여 백그라운드에 영상이 계속적으로 실행되도록 구현. 각각 영상이 끝날때 인덱스의 값을 1추가하여 다음 영상이 진행되도록 함.

<br/>

- **로그인 & 회원가입**

<img width="600" alt="1" src="https://user-images.githubusercontent.com/107897886/221541343-b0623519-4dff-4cd0-b5a9-e5ad3305a6de.gif">
<br/>
<br/>
<img width="600" alt="1" src="https://user-images.githubusercontent.com/107897886/221541360-a8cdbbb2-31ac-401f-9363-a0ed6d932e04.gif">
<br/>
<br/>

```javascript

```
<br/>

```javascript
function signup(id, pw, name, phone, point) {
  return async (dispatch, getState) => {
    const user = await axios({
      method: "post",
      url: "http://localhost:5000/signup",
      data: {
        id,
        pw,
        name,
        phone,
        point,
      },
    });
    if (user.data) {
      const container = document.getElementById("container");
      container.classList.remove("right-panel-active");
      alert("회원가입 완료");
    } else {
      alert("아이디 중복");
    }
  };
}
```
<br/>

```javascirpt

```
기본적

<br/>

- **도감**

<img width="600" alt="1" src="1">

```javascript

```
스

<br/>

- **충돌**

<img width="600" alt="1" src="1">

```javascript

```
1
<br/>
<br/>


### 4. 이슈
#


(1) 높은 장애물을 올라타고 점프를 하여 캐릭터의 Y좌표의 값이 -가 될 경우 끝없이 Y좌표의 값이 무한대로 마이너스되는 이슈가 발생

    테스트를 하면서 Y의 값이 움직이는 변수 yspeed의 값을 삭제시켜서 문제 발생 
    - yspeed의 값과 gravity의 적당한 조절로 해결
<br/>

(2) floor에 올라타게 되거나 점프하고 착지할 때, 추락하는 문제가 발생

    floor와 캐릭터가 충돌했을 때 닿는 값을 고정값으로 줬기 때문에 문제가 발생했다는 것을 확인
    - 충돌 값을 범위로 설정해서 해결.
    이후 장애물이나 젤리도 같은 방법으로 구현

    