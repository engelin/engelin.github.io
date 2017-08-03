## Jetson TX2 on board Camera with Caffe

NVIDIA에서 제공하는 API로 진행
Argus라는 자체적인 드라이버 사용

* Jetson TX2의 on board camera를 이용하여 실시간 스트림
* Caffe를 이용하여 카메라에서 받아온 영상의 object detection 진행
* Caffe + Cuda C++으로 영상을 이용한 강화학습 진행
* 차후 소스코드 정리하여 업로드 예정

### Step 1. Camera preview _170729_

![Preview](https://github.com/engelin/engelin.github.io/blob/master/images/%ED%94%84%EB%A6%AC%EB%B7%B0%ED%85%8C%EC%8A%A4%ED%8A%B8.jpg?raw=true)

Problem
- /dev/video0 가 열리긴 하나 그 전에 먼저 /dev/camera/video1 을 open 시도
=> Webcam을 꽂아놓으면 이런 현상 

### Step 2. CNN using Caffe on Jetson TX2


### Step 3. Reinforcement Learning using Caffe on Jetson TX2


References

[1] [Getting Started JetPack Camera API](http://on-demand.gputechconf.com/gtc/2016/webinar/getting-started-jetpack-camera-api.pdf)

[2] [Caffe](http://caffe.berkeleyvision.org/)
