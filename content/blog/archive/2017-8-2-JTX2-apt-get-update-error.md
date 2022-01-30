## sudo apt-get update && upgrade error

### lock error
If you meet this error,
```
E: Could not get lock /var/lib/apt/lists/lock - open (11:Resource temporarily unavailable).
E: Enable to lock directory /var/lib/apt/lists/
```
try:
```
$ sudo rm /var/lib/apt/lists/* -vf
```

If you meet this error,
```
E: Could not get lock /var/lib/dpkg/lock - open (11 Resource temporarily unavailable).
E: Unable~~~~
```
try:
```
$ sudo rm /var/lib/dpkg/lock
$ sudo apt-get autoclean && apt-get clear cache
$ sudo reboot
```

```
$ sudo dpkg --configure -a
$ sudo apt-get upgrade && update
$ sudo apt-get -f install
```

### date error
If you meet this error,
```
W: Invalid 'Date' entry in Release file /var/lib/apt/lists/_var_nv-gie-repo-ga-cuda8.0-gie1.0-20170116_Release
W: GPG error: file:/var/libopencv4tegra-repo  Release: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY D88C3D385C37D3BE
W: The repository 'file:/var/libopencv4tegra-repo  Release' is not signed.
N: Data from such a repository can't be authenticated and is therefore potentially dangerous to use.
N: See apt-secure(8) manpage for repository creation and user configuration details.
W: Invalid 'Date' entry in Release file /var/lib/apt/lists/_var_libopencv4tegra-repo_Release
```

try:
```
nvidia@tegra-ubuntu:~$ sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys D88C3D385C37D3BEExecuting: /tmp/tmp.b8wjooAHp1/gpg.1.sh --keyserver
keyserver.ubuntu.com
--recv-keys
D88C3D385C37D3BE
gpg: requesting key 5C37D3BE from hkp server keyserver.ubuntu.com
gpg: key 5C37D3BE: public key "cudatools <cudatools@nvidia.com>" imported
gpg: Total number processed: 1
gpg:               imported: 1
```

and then try update if you will meet,
```
W: Invalid 'Date' entry in Release file /var/lib/apt/lists/_var_nv-gie-repo-ga-cuda8.0-gie1.0-20170116_Release
W: Invalid 'Date' entry in Release file /var/lib/apt/lists/_var_libopencv4tegra-repo_Release
```
try:
```
$ sudo dpkg --force-architecture --remove-architecture arm64
$ sudo dpkg --add-architecture arm64
```
```
$ sudo su
# rm /etc/apt/sources.list.d/nv-gie-ga-cuda8.0-gie1.0-20170116.list
# rm /etc/apt/sources.list.d/libopencv4tegra-repo.list 
# apt-get update
# apt-get -f install
# apt-get install python-numpy

# cd /var/libopencv4tegra-repo
# dpkg -i libopencv4tegra_2.4.13-17-g5317135_arm64.deb
# dpkg -i libopencv4tegra-dev_2.4.13-17-g5317135_arm64.deb
# dpkg -i libopencv4tegra-python_2.4.13-17-g5317135_arm64.deb

# cd /var/nv-gie-repo-ga-cuda8.0-gie1.0-20170116
# dpkg -i *.deb
```


References

[JTX2 apt-get update error](https://devtalk.nvidia.com/default/topic/1002140/jetson-tx2/apt-get-update-errors/2)
