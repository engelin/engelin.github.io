## Install Caffe/Caffe2 on Jetson TX2

### Install Caffe on Jetson TX2
Install packages
```markdown
$ sudo apt-get install libprotobuf-dev libleveldb-dev libsnappy-dev libhdf5-serial-dev protobuf-compiler -y
$ sudo apt-get install --no-install-recommends libboost-all-dev -y
$ sudo apt-get install libatlas-base-dev -y
$ sudo apt-get install libgflags-dev libgoogle-glog-dev liblmdb-dev -y
$ sudo apt-get install python-dev python-numpy -y
```

Download Caffe Source
```markdown
$ git clone https://github.com/BVLC/caffe.git 
```

Edit Makefile
```markdown
$ cd caffe
$ cp Makefile.config.example Makefile.config
$ vi Makefile.config
```
```
CUDA_DIR := /usr/local/cuda-8.0
INCLUDE_DIRS := $(PYTHON_INCLUDE) /usr/local/include /usr/include/hdf5/serial
LIBRARY_DIRS := $(PYTHON_LIB) /usr/local/lib /usr/lib /usr/lib/aarch64-linux-gnu/hdf5/serial/
```

Build
```markdown
$ cd caffe
$ cmake -DCUDA_USE_STATIC_CUDA_RUNTIME=OFF
$ make -j6 all
$ make -j6 runtest
```

### Install Caffe2 on Jetson TX2
Download Caffe2 Source
```markdown
$ git clone --recursive https://github.com/caffe2/caffe2.git
```

Run the build Script
```markdown
$ cd caffe2
$ ./scripts/build_tegra_x1.sh
```
Don't care 'build_tegra_x1'.

This post refers to:
1. [JetsonHacks - Install Caffe](https://github.com/jetsonhacks/installCaffeJTX2)
2. [Install Caffe2](https://caffe2.ai/docs/getting-started.html?platform=tegra&configuration=compile)
