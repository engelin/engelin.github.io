## Ubuntu16.04+GTX1080+CUDA8.0+cuDNN5.1+Tensorflow

Setup for deep learning!

### 1. Install Nvdia GTX 1080 driver

```markdown
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt-get update
sudo apt-get install nvidia-367
sudo apt-get install mesa-common-dev
sudo apt-get install freeglut3-dev
```
Reboot PC.

### 2. Install CUDA8.0

[CUDA8.0 Download](https://developer.nvidia.com/cuda-downloads)
Linux+x86_64+Ubuntu16.04+runfile(local)
```markdown
sudo sh cuda_8.0.27_linux.run
```

```markdown
Do you accept the previously read EULA?
accept/decline/quit: accept

Install NVIDIA Accelerated Graphics Driver for Linux-x86_64 375.26?
(y)es/(n)o/(q)uit: **n**

Install the CUDA 8.0 Toolkit?
(y)es/(n)o/(q)uit: **y**

Enter Toolkit Location
 [ default is /usr/local/cuda-8.0 ]: 

Do you want to install a symbolic link at /usr/local/cuda?
(y)es/(n)o/(q)uit: **y**

Install the CUDA 8.0 Samples?
(y)es/(n)o/(q)uit: **y**

Enter CUDA Samples Location
 [ default is /home/yerin ]: 

Installing the CUDA Toolkit in /usr/local/cuda-8.0 ...
Installing the CUDA Samples in /home/yerin ...
Copying samples to /home/yerin/NVIDIA_CUDA-8.0_Samples now...
Finished copying samples.

===========
= Summary =
===========

Driver:   Not Selected
Toolkit:  Installed in /usr/local/cuda-8.0
Samples:  Installed in /home/yerin

Please make sure that
 -   PATH includes /usr/local/cuda-8.0/bin
 -   LD_LIBRARY_PATH includes /usr/local/cuda-8.0/lib64, or, add /usr/local/cuda-8.0/lib64 to /etc/ld.so.conf and run ldconfig as root

To uninstall the CUDA Toolkit, run the uninstall script in /usr/local/cuda-8.0/bin

Please see CUDA_Installation_Guide_Linux.pdf in /usr/local/cuda-8.0/doc/pdf for detailed information on setting up CUDA.

***WARNING: Incomplete installation! This installation did not install the CUDA Driver. A driver of version at least 361.00 is required for CUDA 8.0 functionality to work.
To install the driver using this installer, run the following command, replacing <CudaInstaller> with the name of this run file:
    sudo <CudaInstaller>.run -silent -driver

Logfile is /tmp/cuda_install_2952.log
```

-Add PATH and LD_LIBRARY_PATH variables to the end of .bashrc file
```markdown
export PATH=/usr/local/cuda-8.0/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-8.0/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

-Verify installation
```markdown
nvidia-smi
```

### 3. Install cuDNN5.1

[cuDNN Download](https://developer.nvidia.com/rdp/cudnn-download)
-Download cuDNN **v5.1** for CUDA 8.0 (cuDNN v6.0 has so many problems.)
-cuDNN v5.1 Library for Linux

```markdown
tar -zxvf cudnn-8.0*
sudo cp cuda/include/cudnn.h /usr/local/cuda/include/
sudo cp cuda/lib64/libcudnn* /usr/local/cuda/lib64/
sudo chmod a+r /usr/local/cuda/include/cudnn.h
sudo chmod a+r /usr/local/cuda/lib64/libcudnn*
```

### 4. Install Tensorflow Python Dependency

```markdown
sudo apt-get install python-pip
sudo apt-get install python-numpy swig python-dev python-wheel
```

### 5. Install Google Build Tool Bazel

-Install the Java JDK in Ubuntu 16.04
```markdown
sudo apt-get update
sudo apt-get install default-jre
sudo apt-get install default-jdk
```
-Install Bazel
```markdown
wget https://github.com/bazelbuild/bazel/releases/download/0.3.0/bazel-0.3.0-installer-linux-x86_64.sh
chmod +x bazel-0.3.0-installer-linux-x86_64.sh
./bazel-0.3.0-installer-linux-x86_64.sh --user
```
-Add PATH variable to the end of .bashrc file
```markdown
source /home/yerin/.bazel/bin/bazel-complete.bash
export PATH=$PATH:/home/yerin/.bazel/bin
```
Execute:
```markdown
source ~/.bashrc
```

### 6. Intall Tensorflow-gpu

```markdown
pip install tensorflow-gpu   # python2.7
pip3 install tensorflow-gpu  # python3.5
```
-If _install tensorflow-gpu_ failed, install the latest version of TensorFlow by issuing a command of the following format:
```markdown
sudo pip  install --upgrade TF_PYTHON_URL  # Python 2.7
sudo pip3 install --upgrade TF_PYTHON_URL  # Python 3.N 
```
-[TF_PYTHON_URL](https://www.tensorflow.org/install/install_linux#TF_PYTHON_URL)
Python 2.7 GPU:
```markdown
https://storage.googleapis.com/tensorflow/linux/gpu/tensorflow_gpu-1.1.0-cp27-none-linux_x86_64.whl
```
Python 3.5 GPU:
```markdown
https://storage.googleapis.com/tensorflow/linux/gpu/tensorflow_gpu-1.1.0-cp35-cp35m-linux_x86_64.whl
```


This post refers to:
1.[Dive Into Tensorflow, Part 3](http://textminingonline.com/dive-into-tensorflow-part-iii-gtx-1080-ubuntu16-04-cuda8-0-cudnn5-0-tensorflow)
2.[Installing Tensorflow on Ubuntu](https://www.tensorflow.org/install/install_linux)
3.[파이쿵](http://pythonkim.tistory.com/71)
