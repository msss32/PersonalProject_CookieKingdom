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
- 

<br/>

### 3. 화면구성
#

- **메인화면**

<img width="600" alt="1" src="">
<br/>
<br/>

- **로그인 & 회원가입**

<img width="600" alt="1" src="">
<br/>

```javascript

```
```javascript

```
```javascirpt

```
기본적

<br/>

- **점프와 더블 점프**

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

    