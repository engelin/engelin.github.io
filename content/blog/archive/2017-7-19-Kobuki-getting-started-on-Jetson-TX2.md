## Kobuki getting started on Jetson TX2

The [Kobuki](http://yujinrobot.github.io/kobuki/enMainPage.html) driver is a simple c++ library that allows interfacing to the kobuki mobile research base.
This post refers to [Installation - Linux](http://yujinrobot.github.io/kobuki/enInstallationLinuxGuide.html).

### ROS Installation on Jetson TX2
[ROS install](https://github.com/jetsonhacks/installROSTX2)

Install ROS
```markdown
$ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
$ sudo apt-get update
$ sudo apt-get install ros-kinetic-ros-base -y
$ sudo apt-get install python-rosdep -y
$ sudo c_rehash /etc/ssl/certs
$ sudo rosdep init
$ rosdep update
```

Environment setup
```markdown
$ echo "source /opt/ros/kinetic/setup.bash" >> ~/.bashrc
$ source ~/.bashrc
```

Install rosinstall
```markdown
$ sudo apt-get install python-rosinstall -y
```

### Kobuki driver installation on Jetson TX2

Install packages
```markdown
$ sudo apt-get install python-wstool cmake python-catkin-pkg python-empy python-nose python-setuptools build-essential
```

Catkin workspace
```markdown
$ mkdir kobuki_core
$ wstool init -j5 kobuki_core/src https://raw.github.com/yujinrobot/kobuki_core/devel/kobuki_core.rosinstall
$ cd kobuki_core
$ export PATH=`pwd`/src/catkin/bin/:${PATH}
$ catkin_make_isolated --install
```

Testing your installation
```markdown
$ cd kobuki_core
$ export LD_LIBRARY_PATH=`pwd`/install_isolated/lib
$ ./install_isolated/lib/kobuki_driver/demo_kobuki_simple_loop
```
