## Install Caffe on Ubuntu 16.04 + GTX1080 + CUDA8.0 + cuDNN5.1

[Setup GPU environment](https://engelin.github.io/Install-Tensorflow/)

### 1. Install opencv for caffe

Install required packages
```markdown
[compiler]
$ sudo apt-get install build-essential
[required]
$ sudo apt-get install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev
[optional]
$ sudo apt-get install python-dev python-numpy libtbb2 libtbb-dev libjpeg-dev libpng-dev libtiff-dev libjasper-dev libdc1394-22-dev

```

Getting OpenCV source code
```markdown
$ git clone https://github.com/opencv/opencv.git

```

Building OpenCV from source using cmake
```markdown
$ cd opencv
$ mkdir build
$ cd build
$ cmake -D CMAKE_BUILD_TYPE=Release -D CMAKE_INSTALL_PREFIX=/usr/local ..
$ make -j7
$ sudo make install
```

### 2. Install Caffe

Install required packages
```markdown
$ sudo apt-get install libprotobuf-dev libleveldb-dev libsnappy-dev libopencv-dev libhdf5-serial-dev protobuf-compiler
$ sudo apt-get install --no-install-recommends libboost-all-dev
$ sudo apt-get install libgflags-dev libgoogle-glog-dev liblmdb-dev
```

Getting Caffe source code
```markdown
$ git clone https://github.com/BVLC/caffe.git
```
Building Caffe from source
```markdonw
$ cd caffe
$ cp Makefile.config.example Makefile.config
$ make all -j4
5분 내로 컴파일 됨. (su 풀었으면 앞에 make 앞에 sudo를 붙여줄 것)
$ make test -j4
$ make runtest
```


This post refers to:
1. [Ubuntu 16.04 Installation](https://github.com/BVLC/caffe/wiki/Caffe-installing-script-for-ubuntu-16.04---support-Cuda-8)
2. [우분투-리눅스-설치-및-Caffe-설치](http://bigblue.tistory.com/entry/%EC%9A%B0%EB%B6%84%ED%88%AC-%EB%A6%AC%EB%88%85%EC%8A%A4-%EC%84%A4%EC%B9%98-%EB%B0%8F-Caffe-%EC%84%A4%EC%B9%98)
