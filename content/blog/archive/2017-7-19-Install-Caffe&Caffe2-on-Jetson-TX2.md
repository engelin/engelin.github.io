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
USE_CUDNN := 1
CUDA_DIR := /usr/local/cuda-8.0
INCLUDE_DIRS := $(PYTHON_INCLUDE) /usr/local/include /usr/include/hdf5/serial
LIBRARY_DIRS := $(PYTHON_LIB) /usr/local/lib /usr/lib /usr/lib/aarch64-linux-gnu/hdf5/serial/
```

Build
```
$ cd caffe
$ make -j6 all
$ make -j6 test
$ make -j6 runtest
```

Test
```
nvidia@tegra-ubuntu:~/workspace/caffe$ build/tools/caffe time --model=models/bvlc_alexnet/deploy.prototxt --gpu=0
I0803 16:17:03.198223  4515 caffe.cpp:348] Use GPU with device ID 0
I0803 16:17:04.214577  4515 net.cpp:51] Initializing net from parameters: 
name: "AlexNet"
state {
  phase: TRAIN
  level: 0
  stage: ""
}
layer {
  name: "data"
  type: "Input"
  top: "data"
  input_param {
    shape {
      dim: 10
      dim: 3
      dim: 227
      dim: 227
    }
  }
}
layer {
  name: "conv1"
  type: "Convolution"
  bottom: "data"
  top: "conv1"
  param {
    lr_mult: 1
    decay_mult: 1
  }
  param {
    lr_mult: 2
    decay_mult: 0
  }
  convolution_param {
    num_output: 96
    kernel_size: 11
    stride: 4
  }
}
layer {
  name: "relu1"
  type: "ReLU"
  bottom: "conv1"
  top: "conv1"
}
layer {
  name: "norm1"
  type: "LRN"
  bottom: "conv1"
  top: "norm1"
  lrn_param {
    local_size: 5
    alpha: 0.0001
    beta: 0.75
  }
}
layer {
  name: "pool1"
  type: "Pooling"
  bottom: "norm1"
  top: "pool1"
  pooling_param {
    pool: MAX
    kernel_size: 3
    stride: 2
  }
}
layer {
  name: "conv2"
  type: "Convolution"
  bottom: "pool1"
  top: "conv2"
  param {
    lr_mult: 1
    decay_mult: 1
  }
  param {
    lr_mult: 2
    decay_mult: 0
  }
  convolution_param {
    num_output: 256
    pad: 2
    kernel_size: 5
    group: 2
  }
}
layer {
  name: "relu2"
  type: "ReLU"
  bottom: "conv2"
  top: "conv2"
}
layer {
  name: "norm2"
  type: "LRN"
  bottom: "conv2"
  top: "norm2"
  lrn_param {
    local_size: 5
    alpha: 0.0001
    beta: 0.75
  }
}
layer {
  name: "pool2"
  type: "Pooling"
  bottom: "norm2"
  top: "pool2"
  pooling_param {
    pool: MAX
    kernel_size: 3
    stride: 2
  }
}
layer {
  name: "conv3"
  type: "Convolution"
  bottom: "pool2"
  top: "conv3"
  param {
    lr_mult: 1
    decay_mult: 1
  }
  param {
    lr_mult: 2
    decay_mult: 0
  }
  convolution_param {
    num_output: 384
    pad: 1
    kernel_size: 3
  }
}
layer {
  name: "relu3"
  type: "ReLU"
  bottom: "conv3"
  top: "conv3"
}
layer {
  name: "conv4"
  type: "Convolution"
  bottom: "conv3"
  top: "conv4"
  param {
    lr_mult: 1
    decay_mult: 1
  }
  param {
    lr_mult: 2
    decay_mult: 0
  }
  convolution_param {
    num_output: 384
    pad: 1
    kernel_size: 3
    group: 2
  }
}
layer {
  name: "relu4"
  type: "ReLU"
  bottom: "conv4"
  top: "conv4"
}
layer {
  name: "conv5"
  type: "Convolution"
  bottom: "conv4"
  top: "conv5"
  param {
    lr_mult: 1
    decay_mult: 1
  }
  param {
    lr_mult: 2
    decay_mult: 0
  }
  convolution_param {
    num_output: 256
    pad: 1
    kernel_size: 3
    group: 2
  }
}
layer {
  name: "relu5"
  type: "ReLU"
  bottom: "conv5"
  top: "conv5"
}
layer {
  name: "pool5"
  type: "Pooling"
  bottom: "conv5"
  top: "pool5"
  pooling_param {
    pool: MAX
    kernel_size: 3
    stride: 2
  }
}
layer {
  name: "fc6"
  type: "InnerProduct"
  bottom: "pool5"
  top: "fc6"
  param {
    lr_mult: 1
    decay_mult: 1
  }
  param {
    lr_mult: 2
    decay_mult: 0
  }
  inner_product_param {
    num_output: 4096
  }
}
layer {
  name: "relu6"
  type: "ReLU"
  bottom: "fc6"
  top: "fc6"
}
layer {
  name: "drop6"
  type: "Dropout"
  bottom: "fc6"
  top: "fc6"
  dropout_param {
    dropout_ratio: 0.5
  }
}
layer {
  name: "fc7"
  type: "InnerProduct"
  bottom: "fc6"
  top: "fc7"
  param {
    lr_mult: 1
    decay_mult: 1
  }
  param {
    lr_mult: 2
    decay_mult: 0
  }
  inner_product_param {
    num_output: 4096
  }
}
layer {
  name: "relu7"
  type: "ReLU"
  bottom: "fc7"
  top: "fc7"
}
layer {
  name: "drop7"
  type: "Dropout"
  bottom: "fc7"
  top: "fc7"
  dropout_param {
    dropout_ratio: 0.5
  }
}
layer {
  name: "fc8"
  type: "InnerProduct"
  bottom: "fc7"
  top: "fc8"
  param {
    lr_mult: 1
    decay_mult: 1
  }
  param {
    lr_mult: 2
    decay_mult: 0
  }
  inner_product_param {
    num_output: 1000
  }
}
layer {
  name: "prob"
  type: "Softmax"
  bottom: "fc8"
  top: "prob"
}
I0803 16:17:04.217660  4515 layer_factory.hpp:77] Creating layer data
I0803 16:17:04.217803  4515 net.cpp:84] Creating Layer data
I0803 16:17:04.217862  4515 net.cpp:380] data -> data
I0803 16:17:04.371876  4515 net.cpp:122] Setting up data
I0803 16:17:04.372035  4515 net.cpp:129] Top shape: 10 3 227 227 (1545870)
I0803 16:17:04.372294  4515 net.cpp:137] Memory required for data: 6183480
I0803 16:17:04.372364  4515 layer_factory.hpp:77] Creating layer conv1
I0803 16:17:04.372453  4515 net.cpp:84] Creating Layer conv1
I0803 16:17:04.372503  4515 net.cpp:406] conv1 <- data
I0803 16:17:04.372565  4515 net.cpp:380] conv1 -> conv1
I0803 16:17:05.912035  4515 net.cpp:122] Setting up conv1
I0803 16:17:05.912184  4515 net.cpp:129] Top shape: 10 96 55 55 (2904000)
I0803 16:17:05.912271  4515 net.cpp:137] Memory required for data: 17799480
I0803 16:17:05.912387  4515 layer_factory.hpp:77] Creating layer relu1
I0803 16:17:05.912469  4515 net.cpp:84] Creating Layer relu1
I0803 16:17:05.912513  4515 net.cpp:406] relu1 <- conv1
I0803 16:17:05.912564  4515 net.cpp:367] relu1 -> conv1 (in-place)
I0803 16:17:05.915706  4515 net.cpp:122] Setting up relu1
I0803 16:17:05.915803  4515 net.cpp:129] Top shape: 10 96 55 55 (2904000)
I0803 16:17:05.915858  4515 net.cpp:137] Memory required for data: 29415480
I0803 16:17:05.915904  4515 layer_factory.hpp:77] Creating layer norm1
I0803 16:17:05.915983  4515 net.cpp:84] Creating Layer norm1
I0803 16:17:05.916025  4515 net.cpp:406] norm1 <- conv1
I0803 16:17:05.916081  4515 net.cpp:380] norm1 -> norm1
I0803 16:17:05.918577  4515 net.cpp:122] Setting up norm1
I0803 16:17:05.918715  4515 net.cpp:129] Top shape: 10 96 55 55 (2904000)
I0803 16:17:05.918841  4515 net.cpp:137] Memory required for data: 41031480
I0803 16:17:05.918890  4515 layer_factory.hpp:77] Creating layer pool1
I0803 16:17:05.918954  4515 net.cpp:84] Creating Layer pool1
I0803 16:17:05.918994  4515 net.cpp:406] pool1 <- norm1
I0803 16:17:05.919059  4515 net.cpp:380] pool1 -> pool1
I0803 16:17:05.919251  4515 net.cpp:122] Setting up pool1
I0803 16:17:05.919298  4515 net.cpp:129] Top shape: 10 96 27 27 (699840)
I0803 16:17:05.919344  4515 net.cpp:137] Memory required for data: 43830840
I0803 16:17:05.919381  4515 layer_factory.hpp:77] Creating layer conv2
I0803 16:17:05.919489  4515 net.cpp:84] Creating Layer conv2
I0803 16:17:05.919531  4515 net.cpp:406] conv2 <- pool1
I0803 16:17:05.919586  4515 net.cpp:380] conv2 -> conv2
I0803 16:17:05.942358  4515 net.cpp:122] Setting up conv2
I0803 16:17:05.942502  4515 net.cpp:129] Top shape: 10 256 27 27 (1866240)
I0803 16:17:05.942555  4515 net.cpp:137] Memory required for data: 51295800
I0803 16:17:05.942628  4515 layer_factory.hpp:77] Creating layer relu2
I0803 16:17:05.942692  4515 net.cpp:84] Creating Layer relu2
I0803 16:17:05.942729  4515 net.cpp:406] relu2 <- conv2
I0803 16:17:05.942844  4515 net.cpp:367] relu2 -> conv2 (in-place)
I0803 16:17:05.945503  4515 net.cpp:122] Setting up relu2
I0803 16:17:05.945633  4515 net.cpp:129] Top shape: 10 256 27 27 (1866240)
I0803 16:17:05.945686  4515 net.cpp:137] Memory required for data: 58760760
I0803 16:17:05.945757  4515 layer_factory.hpp:77] Creating layer norm2
I0803 16:17:05.945832  4515 net.cpp:84] Creating Layer norm2
I0803 16:17:05.945871  4515 net.cpp:406] norm2 <- conv2
I0803 16:17:05.945919  4515 net.cpp:380] norm2 -> norm2
I0803 16:17:05.948796  4515 net.cpp:122] Setting up norm2
I0803 16:17:05.948920  4515 net.cpp:129] Top shape: 10 256 27 27 (1866240)
I0803 16:17:05.948971  4515 net.cpp:137] Memory required for data: 66225720
I0803 16:17:05.949008  4515 layer_factory.hpp:77] Creating layer pool2
I0803 16:17:05.949077  4515 net.cpp:84] Creating Layer pool2
I0803 16:17:05.949115  4515 net.cpp:406] pool2 <- norm2
I0803 16:17:05.949158  4515 net.cpp:380] pool2 -> pool2
I0803 16:17:05.949379  4515 net.cpp:122] Setting up pool2
I0803 16:17:05.949421  4515 net.cpp:129] Top shape: 10 256 13 13 (432640)
I0803 16:17:05.949472  4515 net.cpp:137] Memory required for data: 67956280
I0803 16:17:05.949506  4515 layer_factory.hpp:77] Creating layer conv3
I0803 16:17:05.949565  4515 net.cpp:84] Creating Layer conv3
I0803 16:17:05.949637  4515 net.cpp:406] conv3 <- pool2
I0803 16:17:05.949681  4515 net.cpp:380] conv3 -> conv3
I0803 16:17:05.973181  4515 net.cpp:122] Setting up conv3
I0803 16:17:05.973318  4515 net.cpp:129] Top shape: 10 384 13 13 (648960)
I0803 16:17:05.973363  4515 net.cpp:137] Memory required for data: 70552120
I0803 16:17:05.973582  4515 layer_factory.hpp:77] Creating layer relu3
I0803 16:17:05.973649  4515 net.cpp:84] Creating Layer relu3
I0803 16:17:05.973682  4515 net.cpp:406] relu3 <- conv3
I0803 16:17:05.973728  4515 net.cpp:367] relu3 -> conv3 (in-place)
I0803 16:17:05.977110  4515 net.cpp:122] Setting up relu3
I0803 16:17:05.977200  4515 net.cpp:129] Top shape: 10 384 13 13 (648960)
I0803 16:17:05.977252  4515 net.cpp:137] Memory required for data: 73147960
I0803 16:17:05.977298  4515 layer_factory.hpp:77] Creating layer conv4
I0803 16:17:05.977402  4515 net.cpp:84] Creating Layer conv4
I0803 16:17:05.977447  4515 net.cpp:406] conv4 <- conv3
I0803 16:17:05.977509  4515 net.cpp:380] conv4 -> conv4
I0803 16:17:06.008054  4515 net.cpp:122] Setting up conv4
I0803 16:17:06.008193  4515 net.cpp:129] Top shape: 10 384 13 13 (648960)
I0803 16:17:06.008245  4515 net.cpp:137] Memory required for data: 75743800
I0803 16:17:06.008306  4515 layer_factory.hpp:77] Creating layer relu4
I0803 16:17:06.008358  4515 net.cpp:84] Creating Layer relu4
I0803 16:17:06.008393  4515 net.cpp:406] relu4 <- conv4
I0803 16:17:06.008445  4515 net.cpp:367] relu4 -> conv4 (in-place)
I0803 16:17:06.011718  4515 net.cpp:122] Setting up relu4
I0803 16:17:06.011795  4515 net.cpp:129] Top shape: 10 384 13 13 (648960)
I0803 16:17:06.011845  4515 net.cpp:137] Memory required for data: 78339640
I0803 16:17:06.011883  4515 layer_factory.hpp:77] Creating layer conv5
I0803 16:17:06.011955  4515 net.cpp:84] Creating Layer conv5
I0803 16:17:06.011993  4515 net.cpp:406] conv5 <- conv4
I0803 16:17:06.012049  4515 net.cpp:380] conv5 -> conv5
I0803 16:17:06.039333  4515 net.cpp:122] Setting up conv5
I0803 16:17:06.039472  4515 net.cpp:129] Top shape: 10 256 13 13 (432640)
I0803 16:17:06.039527  4515 net.cpp:137] Memory required for data: 80070200
I0803 16:17:06.039608  4515 layer_factory.hpp:77] Creating layer relu5
I0803 16:17:06.039662  4515 net.cpp:84] Creating Layer relu5
I0803 16:17:06.039700  4515 net.cpp:406] relu5 <- conv5
I0803 16:17:06.039752  4515 net.cpp:367] relu5 -> conv5 (in-place)
I0803 16:17:06.043056  4515 net.cpp:122] Setting up relu5
I0803 16:17:06.043130  4515 net.cpp:129] Top shape: 10 256 13 13 (432640)
I0803 16:17:06.043179  4515 net.cpp:137] Memory required for data: 81800760
I0803 16:17:06.043217  4515 layer_factory.hpp:77] Creating layer pool5
I0803 16:17:06.043269  4515 net.cpp:84] Creating Layer pool5
I0803 16:17:06.043309  4515 net.cpp:406] pool5 <- conv5
I0803 16:17:06.043401  4515 net.cpp:380] pool5 -> pool5
I0803 16:17:06.043694  4515 net.cpp:122] Setting up pool5
I0803 16:17:06.043737  4515 net.cpp:129] Top shape: 10 256 6 6 (92160)
I0803 16:17:06.043788  4515 net.cpp:137] Memory required for data: 82169400
I0803 16:17:06.043823  4515 layer_factory.hpp:77] Creating layer fc6
I0803 16:17:06.043887  4515 net.cpp:84] Creating Layer fc6
I0803 16:17:06.043923  4515 net.cpp:406] fc6 <- pool5
I0803 16:17:06.043969  4515 net.cpp:380] fc6 -> fc6
I0803 16:17:06.282215  4515 net.cpp:122] Setting up fc6
I0803 16:17:06.282359  4515 net.cpp:129] Top shape: 10 4096 (40960)
I0803 16:17:06.282419  4515 net.cpp:137] Memory required for data: 82333240
I0803 16:17:06.282512  4515 layer_factory.hpp:77] Creating layer relu6
I0803 16:17:06.282570  4515 net.cpp:84] Creating Layer relu6
I0803 16:17:06.282609  4515 net.cpp:406] relu6 <- fc6
I0803 16:17:06.282657  4515 net.cpp:367] relu6 -> fc6 (in-place)
I0803 16:17:06.292750  4515 net.cpp:122] Setting up relu6
I0803 16:17:06.292851  4515 net.cpp:129] Top shape: 10 4096 (40960)
I0803 16:17:06.292908  4515 net.cpp:137] Memory required for data: 82497080
I0803 16:17:06.292986  4515 layer_factory.hpp:77] Creating layer drop6
I0803 16:17:06.293043  4515 net.cpp:84] Creating Layer drop6
I0803 16:17:06.293084  4515 net.cpp:406] drop6 <- fc6
I0803 16:17:06.293146  4515 net.cpp:367] drop6 -> fc6 (in-place)
I0803 16:17:06.293340  4515 net.cpp:122] Setting up drop6
I0803 16:17:06.293385  4515 net.cpp:129] Top shape: 10 4096 (40960)
I0803 16:17:06.293439  4515 net.cpp:137] Memory required for data: 82660920
I0803 16:17:06.293555  4515 layer_factory.hpp:77] Creating layer fc7
I0803 16:17:06.293607  4515 net.cpp:84] Creating Layer fc7
I0803 16:17:06.293645  4515 net.cpp:406] fc7 <- fc6
I0803 16:17:06.293702  4515 net.cpp:380] fc7 -> fc7
I0803 16:17:06.400069  4515 net.cpp:122] Setting up fc7
I0803 16:17:06.400209  4515 net.cpp:129] Top shape: 10 4096 (40960)
I0803 16:17:06.400264  4515 net.cpp:137] Memory required for data: 82824760
I0803 16:17:06.400332  4515 layer_factory.hpp:77] Creating layer relu7
I0803 16:17:06.400388  4515 net.cpp:84] Creating Layer relu7
I0803 16:17:06.400429  4515 net.cpp:406] relu7 <- fc7
I0803 16:17:06.400477  4515 net.cpp:367] relu7 -> fc7 (in-place)
I0803 16:17:06.408512  4515 net.cpp:122] Setting up relu7
I0803 16:17:06.408635  4515 net.cpp:129] Top shape: 10 4096 (40960)
I0803 16:17:06.408689  4515 net.cpp:137] Memory required for data: 82988600
I0803 16:17:06.408740  4515 layer_factory.hpp:77] Creating layer drop7
I0803 16:17:06.408797  4515 net.cpp:84] Creating Layer drop7
I0803 16:17:06.408835  4515 net.cpp:406] drop7 <- fc7
I0803 16:17:06.408887  4515 net.cpp:367] drop7 -> fc7 (in-place)
I0803 16:17:06.409065  4515 net.cpp:122] Setting up drop7
I0803 16:17:06.409107  4515 net.cpp:129] Top shape: 10 4096 (40960)
I0803 16:17:06.409168  4515 net.cpp:137] Memory required for data: 83152440
I0803 16:17:06.409205  4515 layer_factory.hpp:77] Creating layer fc8
I0803 16:17:06.409302  4515 net.cpp:84] Creating Layer fc8
I0803 16:17:06.409343  4515 net.cpp:406] fc8 <- fc7
I0803 16:17:06.409399  4515 net.cpp:380] fc8 -> fc8
I0803 16:17:06.435755  4515 net.cpp:122] Setting up fc8
I0803 16:17:06.435909  4515 net.cpp:129] Top shape: 10 1000 (10000)
I0803 16:17:06.435962  4515 net.cpp:137] Memory required for data: 83192440
I0803 16:17:06.436030  4515 layer_factory.hpp:77] Creating layer prob
I0803 16:17:06.436085  4515 net.cpp:84] Creating Layer prob
I0803 16:17:06.436125  4515 net.cpp:406] prob <- fc8
I0803 16:17:06.436180  4515 net.cpp:380] prob -> prob
I0803 16:17:06.440680  4515 net.cpp:122] Setting up prob
I0803 16:17:06.440795  4515 net.cpp:129] Top shape: 10 1000 (10000)
I0803 16:17:06.440843  4515 net.cpp:137] Memory required for data: 83232440
I0803 16:17:06.440886  4515 net.cpp:200] prob does not need backward computation.
I0803 16:17:06.440943  4515 net.cpp:200] fc8 does not need backward computation.
I0803 16:17:06.440979  4515 net.cpp:200] drop7 does not need backward computation.
I0803 16:17:06.441013  4515 net.cpp:200] relu7 does not need backward computation.
I0803 16:17:06.441035  4515 net.cpp:200] fc7 does not need backward computation.
I0803 16:17:06.441066  4515 net.cpp:200] drop6 does not need backward computation.
I0803 16:17:06.441097  4515 net.cpp:200] relu6 does not need backward computation.
I0803 16:17:06.441129  4515 net.cpp:200] fc6 does not need backward computation.
I0803 16:17:06.441169  4515 net.cpp:200] pool5 does not need backward computation.
I0803 16:17:06.441201  4515 net.cpp:200] relu5 does not need backward computation.
I0803 16:17:06.441260  4515 net.cpp:200] conv5 does not need backward computation.
I0803 16:17:06.441292  4515 net.cpp:200] relu4 does not need backward computation.
I0803 16:17:06.441323  4515 net.cpp:200] conv4 does not need backward computation.
I0803 16:17:06.441354  4515 net.cpp:200] relu3 does not need backward computation.
I0803 16:17:06.441383  4515 net.cpp:200] conv3 does not need backward computation.
I0803 16:17:06.441455  4515 net.cpp:200] pool2 does not need backward computation.
I0803 16:17:06.441489  4515 net.cpp:200] norm2 does not need backward computation.
I0803 16:17:06.441520  4515 net.cpp:200] relu2 does not need backward computation.
I0803 16:17:06.441551  4515 net.cpp:200] conv2 does not need backward computation.
I0803 16:17:06.441581  4515 net.cpp:200] pool1 does not need backward computation.
I0803 16:17:06.441612  4515 net.cpp:200] norm1 does not need backward computation.
I0803 16:17:06.441643  4515 net.cpp:200] relu1 does not need backward computation.
I0803 16:17:06.441696  4515 net.cpp:200] conv1 does not need backward computation.
I0803 16:17:06.441807  4515 net.cpp:200] data does not need backward computation.
I0803 16:17:06.441840  4515 net.cpp:242] This network produces output prob
I0803 16:17:06.441987  4515 net.cpp:255] Network initialization done.
I0803 16:17:06.442365  4515 caffe.cpp:360] Performing Forward
I0803 16:17:06.822495  4515 caffe.cpp:365] Initial loss: 0
I0803 16:17:06.822669  4515 caffe.cpp:366] Performing Backward
I0803 16:17:06.822717  4515 caffe.cpp:374] *** Benchmark begins ***
I0803 16:17:06.822813  4515 caffe.cpp:375] Testing for 50 iterations.
I0803 16:17:07.116785  4515 caffe.cpp:403] Iteration: 1 forward-backward time: 293.594 ms.
I0803 16:17:07.335254  4515 caffe.cpp:403] Iteration: 2 forward-backward time: 218.292 ms.
I0803 16:17:07.550601  4515 caffe.cpp:403] Iteration: 3 forward-backward time: 215.254 ms.
I0803 16:17:07.729667  4515 caffe.cpp:403] Iteration: 4 forward-backward time: 178.901 ms.
I0803 16:17:07.909078  4515 caffe.cpp:403] Iteration: 5 forward-backward time: 179.288 ms.
I0803 16:17:08.122238  4515 caffe.cpp:403] Iteration: 6 forward-backward time: 213.042 ms.
I0803 16:17:08.303161  4515 caffe.cpp:403] Iteration: 7 forward-backward time: 180.746 ms.
I0803 16:17:08.485319  4515 caffe.cpp:403] Iteration: 8 forward-backward time: 182.007 ms.
I0803 16:17:08.701047  4515 caffe.cpp:403] Iteration: 9 forward-backward time: 215.602 ms.
I0803 16:17:08.922197  4515 caffe.cpp:403] Iteration: 10 forward-backward time: 220.995 ms.
I0803 16:17:09.100910  4515 caffe.cpp:403] Iteration: 11 forward-backward time: 178.549 ms.
I0803 16:17:09.276290  4515 caffe.cpp:403] Iteration: 12 forward-backward time: 175.255 ms.
I0803 16:17:09.481331  4515 caffe.cpp:403] Iteration: 13 forward-backward time: 204.868 ms.
I0803 16:17:09.690618  4515 caffe.cpp:403] Iteration: 14 forward-backward time: 209.191 ms.
I0803 16:17:09.889997  4515 caffe.cpp:403] Iteration: 15 forward-backward time: 199.238 ms.
I0803 16:17:10.116230  4515 caffe.cpp:403] Iteration: 16 forward-backward time: 226.111 ms.
I0803 16:17:10.326534  4515 caffe.cpp:403] Iteration: 17 forward-backward time: 210.189 ms.
I0803 16:17:10.531677  4515 caffe.cpp:403] Iteration: 18 forward-backward time: 204.957 ms.
I0803 16:17:10.754664  4515 caffe.cpp:403] Iteration: 19 forward-backward time: 222.914 ms.
I0803 16:17:10.973207  4515 caffe.cpp:403] Iteration: 20 forward-backward time: 218.376 ms.
I0803 16:17:11.165033  4515 caffe.cpp:403] Iteration: 21 forward-backward time: 191.712 ms.
I0803 16:17:11.376941  4515 caffe.cpp:403] Iteration: 22 forward-backward time: 211.768 ms.
I0803 16:17:11.582613  4515 caffe.cpp:403] Iteration: 23 forward-backward time: 205.557 ms.
I0803 16:17:11.790361  4515 caffe.cpp:403] Iteration: 24 forward-backward time: 207.547 ms.
I0803 16:17:12.016669  4515 caffe.cpp:403] Iteration: 25 forward-backward time: 226.644 ms.
I0803 16:17:12.228827  4515 caffe.cpp:403] Iteration: 26 forward-backward time: 211.551 ms.
I0803 16:17:12.427079  4515 caffe.cpp:403] Iteration: 27 forward-backward time: 198.087 ms.
I0803 16:17:12.632848  4515 caffe.cpp:403] Iteration: 28 forward-backward time: 205.677 ms.
I0803 16:17:12.838124  4515 caffe.cpp:403] Iteration: 29 forward-backward time: 205.156 ms.
I0803 16:17:13.032464  4515 caffe.cpp:403] Iteration: 30 forward-backward time: 194.202 ms.
I0803 16:17:13.251883  4515 caffe.cpp:403] Iteration: 31 forward-backward time: 219.283 ms.
I0803 16:17:13.466523  4515 caffe.cpp:403] Iteration: 32 forward-backward time: 214.479 ms.
I0803 16:17:13.681284  4515 caffe.cpp:403] Iteration: 33 forward-backward time: 214.626 ms.
I0803 16:17:13.892423  4515 caffe.cpp:403] Iteration: 34 forward-backward time: 211.003 ms.
I0803 16:17:14.088310  4515 caffe.cpp:403] Iteration: 35 forward-backward time: 195.752 ms.
I0803 16:17:14.314023  4515 caffe.cpp:403] Iteration: 36 forward-backward time: 225.574 ms.
I0803 16:17:14.519307  4515 caffe.cpp:403] Iteration: 37 forward-backward time: 205.159 ms.
I0803 16:17:14.739157  4515 caffe.cpp:403] Iteration: 38 forward-backward time: 219.758 ms.
I0803 16:17:14.936991  4515 caffe.cpp:403] Iteration: 39 forward-backward time: 197.547 ms.
I0803 16:17:15.153398  4515 caffe.cpp:403] Iteration: 40 forward-backward time: 216.259 ms.
I0803 16:17:15.373872  4515 caffe.cpp:403] Iteration: 41 forward-backward time: 220.352 ms.
I0803 16:17:15.569602  4515 caffe.cpp:403] Iteration: 42 forward-backward time: 195.595 ms.
I0803 16:17:15.776454  4515 caffe.cpp:403] Iteration: 43 forward-backward time: 206.719 ms.
I0803 16:17:15.972460  4515 caffe.cpp:403] Iteration: 44 forward-backward time: 195.864 ms.
I0803 16:17:16.164607  4515 caffe.cpp:403] Iteration: 45 forward-backward time: 192.007 ms.
I0803 16:17:16.369493  4515 caffe.cpp:403] Iteration: 46 forward-backward time: 204.743 ms.
I0803 16:17:16.587821  4515 caffe.cpp:403] Iteration: 47 forward-backward time: 218.188 ms.
I0803 16:17:16.804493  4515 caffe.cpp:403] Iteration: 48 forward-backward time: 216.533 ms.
I0803 16:17:16.998848  4515 caffe.cpp:403] Iteration: 49 forward-backward time: 194.213 ms.
I0803 16:17:17.206017  4515 caffe.cpp:403] Iteration: 50 forward-backward time: 207.006 ms.
I0803 16:17:17.206199  4515 caffe.cpp:406] Average time per layer: 
I0803 16:17:17.206244  4515 caffe.cpp:409]       data	forward: 0.0120006 ms.
I0803 16:17:17.206333  4515 caffe.cpp:412]       data	backward: 0.0121914 ms.
I0803 16:17:17.206375  4515 caffe.cpp:409]      conv1	forward: 7.43227 ms.
I0803 16:17:17.206419  4515 caffe.cpp:412]      conv1	backward: 7.7391 ms.
I0803 16:17:17.206457  4515 caffe.cpp:409]      relu1	forward: 0.722562 ms.
I0803 16:17:17.206495  4515 caffe.cpp:412]      relu1	backward: 0.0125638 ms.
I0803 16:17:17.206548  4515 caffe.cpp:409]      norm1	forward: 1.05185 ms.
I0803 16:17:17.206588  4515 caffe.cpp:412]      norm1	backward: 2.11676 ms.
I0803 16:17:17.206653  4515 caffe.cpp:409]      pool1	forward: 1.19453 ms.
I0803 16:17:17.206691  4515 caffe.cpp:412]      pool1	backward: 0.0120525 ms.
I0803 16:17:17.206784  4515 caffe.cpp:409]      conv2	forward: 10.3094 ms.
I0803 16:17:17.206830  4515 caffe.cpp:412]      conv2	backward: 18.5262 ms.
I0803 16:17:17.206869  4515 caffe.cpp:409]      relu2	forward: 0.485988 ms.
I0803 16:17:17.206909  4515 caffe.cpp:412]      relu2	backward: 0.0123315 ms.
I0803 16:17:17.206954  4515 caffe.cpp:409]      norm2	forward: 0.71694 ms.
I0803 16:17:17.206992  4515 caffe.cpp:412]      norm2	backward: 1.5055 ms.
I0803 16:17:17.207043  4515 caffe.cpp:409]      pool2	forward: 0.833416 ms.
I0803 16:17:17.207114  4515 caffe.cpp:412]      pool2	backward: 0.0129747 ms.
I0803 16:17:17.207155  4515 caffe.cpp:409]      conv3	forward: 6.55943 ms.
I0803 16:17:17.207204  4515 caffe.cpp:412]      conv3	backward: 16.0434 ms.
I0803 16:17:17.207244  4515 caffe.cpp:409]      relu3	forward: 0.234976 ms.
I0803 16:17:17.207301  4515 caffe.cpp:412]      relu3	backward: 0.0127533 ms.
I0803 16:17:17.207339  4515 caffe.cpp:409]      conv4	forward: 6.03037 ms.
I0803 16:17:17.207375  4515 caffe.cpp:412]      conv4	backward: 9.48437 ms.
I0803 16:17:17.207419  4515 caffe.cpp:409]      relu4	forward: 0.201824 ms.
I0803 16:17:17.207455  4515 caffe.cpp:412]      relu4	backward: 0.0118554 ms.
I0803 16:17:17.207491  4515 caffe.cpp:409]      conv5	forward: 3.74736 ms.
I0803 16:17:17.207528  4515 caffe.cpp:412]      conv5	backward: 8.47134 ms.
I0803 16:17:17.207564  4515 caffe.cpp:409]      relu5	forward: 0.134808 ms.
I0803 16:17:17.207600  4515 caffe.cpp:412]      relu5	backward: 0.0169568 ms.
I0803 16:17:17.207638  4515 caffe.cpp:409]      pool5	forward: 0.209638 ms.
I0803 16:17:17.207672  4515 caffe.cpp:412]      pool5	backward: 0.0122406 ms.
I0803 16:17:17.207708  4515 caffe.cpp:409]        fc6	forward: 41.2163 ms.
I0803 16:17:17.207747  4515 caffe.cpp:412]        fc6	backward: 14.1298 ms.
I0803 16:17:17.207818  4515 caffe.cpp:409]      relu6	forward: 0.0653779 ms.
I0803 16:17:17.207859  4515 caffe.cpp:412]      relu6	backward: 0.0154739 ms.
I0803 16:17:17.207895  4515 caffe.cpp:409]      drop6	forward: 0.126979 ms.
I0803 16:17:17.207931  4515 caffe.cpp:412]      drop6	backward: 0.0124506 ms.
I0803 16:17:17.207967  4515 caffe.cpp:409]        fc7	forward: 29.7265 ms.
I0803 16:17:17.208103  4515 caffe.cpp:412]        fc7	backward: 6.22975 ms.
I0803 16:17:17.208190  4515 caffe.cpp:409]      relu7	forward: 0.0614003 ms.
I0803 16:17:17.208231  4515 caffe.cpp:412]      relu7	backward: 0.0148736 ms.
I0803 16:17:17.208269  4515 caffe.cpp:409]      drop7	forward: 0.105217 ms.
I0803 16:17:17.208307  4515 caffe.cpp:412]      drop7	backward: 0.0135034 ms.
I0803 16:17:17.208343  4515 caffe.cpp:409]        fc8	forward: 7.4792 ms.
I0803 16:17:17.208389  4515 caffe.cpp:412]        fc8	backward: 1.56872 ms.
I0803 16:17:17.208427  4515 caffe.cpp:409]       prob	forward: 0.0889613 ms.
I0803 16:17:17.208472  4515 caffe.cpp:412]       prob	backward: 0.00883328 ms.
I0803 16:17:17.208546  4515 caffe.cpp:417] Average Forward pass: 120.556 ms.
I0803 16:17:17.208590  4515 caffe.cpp:419] Average Backward pass: 86.8019 ms.
I0803 16:17:17.208628  4515 caffe.cpp:421] Average Forward-Backward: 207.71 ms.
I0803 16:17:17.208688  4515 caffe.cpp:423] Total Time: 10385.5 ms.
I0803 16:17:17.208740  4515 caffe.cpp:424] *** Benchmark ends ***
```


#### warning
```
nvcc warning : The 'compute_20', 'sm_20', and 'sm_21' architectures are deprecated, and may be removed in a future release (Use -Wno-deprecated-gpu-targets to suppress warning).
```
Change Makefile.config
```
CUDA_ARCH := -gencode arch=compute_30,code=sm_30 \
                -gencode arch=compute_35,code=sm_35 \
                -gencode arch=compute_50,code=sm_50 \
                -gencode arch=compute_52,code=sm_52 \
                -gencode arch=compute_60,code=sm_60 \
                -gencode arch=compute_61,code=sm_61 \
                -gencode arch=compute_61,code=compute_61
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
