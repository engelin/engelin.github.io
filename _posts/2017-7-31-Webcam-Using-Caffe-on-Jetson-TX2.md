## Webcam with Caffe on TX2

웹캠을 사용한 프로젝트일 경우 Caffe의 사용이 조금 더 용이할 것으로 판단됨
일단은 on board camera와 병렬적으로 수행 중

* V4L2 interface를 이용하여 webcam 스트림 캡쳐
* webcam 이미지를 caffe를 이용하여 detecting 테스트
* 실시간 object detecting 테스트
* 강화학습 적용
* 차후 소스코드 정리하여 업데이트 예정

### Step 1. Capturing webcam stream using V4L2 interface _170719_

![웹캠캡쳐](https://github.com/engelin/engelin.github.io/blob/master/images/%EC%9B%B9%EC%BA%A0%EC%BA%A1%EC%B3%90.jpg?raw=true)

- Jpeg 이미지로 캡쳐

### Step 2. CNN with Caffe

### Step 3. Realtime object detecting with Caffe

### Step 4. Reinforcement Learning

