## Building Tegra Multimedia API

Included in Jetpack 3.0.

The Jetson Multimedia API package provides low level APIs for flexible application development.

![Folder](https://github.com/engelin/engelin.github.io/blob/master/images/Tegra_Multimedia_API_1.png?raw=true)

### Build argus (ARGUS Camera API)

Install packages
```markdown
$ sudo apt-get install cmake build-essential pkg-config
$ sudo apt-get install libx11-dev
$ sudo apt-get install libgtk-3-dev
$ sudo apt-get install libjpeg-dev
$ sudo apt-get install libgstreamer1.0-dev
```

Build argus
```
$ cd tegra_multimedia_api/argus
$ mkdir build
$ cd build
$ cmake ../
# Additional options:
# - If CMake cannot find an include path for any dependencies,
#   it may be required to provide them explicitly. E.g:
#   'cmake -DOPENGLES_INCLUDE_DIR=/path/to/khronos/includes ..'
# - The DISABLE_MULTIPROCESS option may be provided to use the single-process
#   Argus implementation (ie. does not require argus-daemon service):
#   'cmake -DDISABLE_MULTIPROCESS=ON ..'
$ make
# - Alternatively, build individual executables:
#   'make [-jN] argus_openglbox'
$ sudo make install
```

### Build tegra_multimedia_api folder
```markdown
$ cd tegra_multimedia_api
$ make
```

```
nvidia@tegra-ubuntu:~/tegra_multimedia_api$ make
Make in samples/00_video_decode
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/00_video_decode'
g++ -o video_decode video_decode_csvparser.o video_decode_main.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include"  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -lpthread -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/00_video_decode'
Make in samples/01_video_encode
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/01_video_encode'
g++ -o video_encode video_encode_csvparser.o video_encode_main.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include"  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -lpthread -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/01_video_encode'
Make in samples/02_video_dec_cuda
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/02_video_dec_cuda'
g++ -o video_dec_cuda videodec_csvparser.o videodec_main.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o ../common/algorithm/cuda/NvAnalysis.o ../common/algorithm/cuda/NvCudaProc.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include" -std=c++11 -I"../common/algorithm/cuda"  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -L"/usr/local/cuda/targets/aarch64-linux/lib" -ldl -lpthread -lrt -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg -lnvosd -lcuda -lcudart
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/02_video_dec_cuda'
Make in samples/03_video_cuda_enc
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/03_video_cuda_enc'
g++ -o video_cuda_enc video_cuda_enc_csvparser.o video_cuda_enc_main.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o ../common/algorithm/cuda/NvAnalysis.o ../common/algorithm/cuda/NvCudaProc.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include" -I../common/algorithm/cuda  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -L"/usr/local/cuda/targets/aarch64-linux/lib" -ldl -lpthread -lrt -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg -lcuda -lcudart
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/03_video_cuda_enc'
Make in samples/04_video_dec_gie
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/04_video_dec_gie'
g++ -o video_dec_gie video_dec_gie_csvparser.o video_dec_gie_main.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o ../common/algorithm/cuda/NvAnalysis.o ../common/algorithm/cuda/NvCudaProc.o ../common/algorithm/gie/gie_inference.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include" -std=c++11 -I"../common/algorithm/cuda" -I"../common/algorithm/gie" -I"/usr/local/cuda/targets/aarch64-linux/include"  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -L"/usr/local/cuda/targets/aarch64-linux/lib" -ldl -lpthread -lrt -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg -lcuda -lcudart -lnvinfer -lnvcaffe_parser -lcudnn -lcublas -lcudart_static -lnvToolsExt -lrt -ldl -lopencv_core -lopencv_imgproc -lopencv_highgui -lopencv_objdetect
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/04_video_dec_gie'
Make in samples/05_jpeg_encode
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/05_jpeg_encode'
g++ -o jpeg_encode jpeg_encode_csvparser.o jpeg_encode_main.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include" -I"../../include/libjpeg-8b"  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -lpthread -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/05_jpeg_encode'
Make in samples/06_jpeg_decode
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/06_jpeg_decode'
g++ -o jpeg_decode jpeg_decode_csvparser.o jpeg_decode_main.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include" -I"../../include/libjpeg-8b"  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -lpthread -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/06_jpeg_decode'
Make in samples/07_video_convert
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/07_video_convert'
g++ -o video_convert video_convert_csvparser.o video_convert_main.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include"  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -lpthread -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/07_video_convert'
Make in samples/09_camera_jpeg_capture
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/09_camera_jpeg_capture'
g++ -o camera_jpeg_capture main.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o ../../argus/samples/utils/Thread.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include" -I"../../argus/samples/utils" -I"../../include/libjpeg-8b"  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -lpthread -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg -lnveglstream_camconsumer -largus
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/09_camera_jpeg_capture'
Make in samples/10_camera_recording
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/10_camera_recording'
g++ -o camera_recording main.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o ../../argus/samples/utils/Thread.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include" -I"../../argus/samples/utils"  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -l pthread -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg -lnveglstream_camconsumer -largus
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/10_camera_recording'
Make in samples/11_camera_object_identification
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/11_camera_object_identification'
make[1]: Nothing to be done for 'all'.
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/11_camera_object_identification'
Make in samples/12_camera_v4l2_cuda
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/12_camera_v4l2_cuda'
g++ -o camera_v4l2_cuda camera_v4l2_cuda.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o ../common/algorithm/cuda/NvAnalysis.o ../common/algorithm/cuda/NvCudaProc.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include" -I"../common/algorithm/cuda"  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -L"/usr/local/cuda/targets/aarch64-linux/lib" -lpthread -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg -lcuda -lcudart
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/12_camera_v4l2_cuda'
Make in samples/backend
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/backend'
g++ -o backend v4l2_backend_csvparser.o v4l2_backend_main.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o ../common/algorithm/cuda/NvAnalysis.o ../common/algorithm/cuda/NvCudaProc.o ../common/algorithm/gie/gie_inference.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include" -std=c++11 -I"../../include/libjpeg-8b" -I"../common/algorithm/cuda" -I"../common/algorithm/gie" -I"/usr/local/cuda/targets/aarch64-linux/include" -D ENABLE_GIE  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -L"/usr/local/cuda/targets/aarch64-linux/lib" -ldl -lpthread -lrt -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg -lnvosd -lcuda -lcudart -lnvinfer -lnvcaffe_parser -lcudnn -lcublas -lcudart_static -lnvToolsExt -lrt -ldl -lopencv_core -lopencv_imgproc -lopencv_highgui -lopencv_objdetect
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/backend'
Make in samples/frontend
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/samples/frontend'
g++ -o frontend main.o StreamConsumer.o VideoEncodeStreamConsumer.o VideoEncoder.o ../common/classes/NvElementProfiler.o ../common/classes/NvElement.o ../common/classes/NvApplicationProfiler.o ../common/classes/NvVideoDecoder.o ../common/classes/NvJpegEncoder.o ../common/classes/NvVideoConverter.o ../common/classes/NvBuffer.o ../common/classes/NvLogging.o ../common/classes/NvEglRenderer.o ../common/classes/NvUtils.o ../common/classes/NvJpegDecoder.o ../common/classes/NvVideoEncoder.o ../common/classes/NvV4l2ElementPlane.o ../common/classes/NvV4l2Element.o ../../argus/samples/utils/Thread.o GIEStreamConsumer.o ../common/algorithm/cuda/NvAnalysis.o ../common/algorithm/cuda/NvCudaProc.o ../common/algorithm/gie/gie_inference.o  -I"/usr/include/aarch64-linux-gnu" -I"../../include" -std=c++11 -I"../../argus/samples/utils" -I"../../include/libjpeg-8b" -DENABLE_GIE -I"../common/algorithm/gie" -I"../common/algorithm/cuda" -I"/usr/local/cuda/include"  -L"/usr/lib/aarch64-linux-gnu" -L"/usr/lib/aarch64-linux-gnu/tegra" -lpthread -lv4l2 -lEGL -lGLESv2 -lX11 -lnvbuf_utils -lnvjpeg -largus -L"/usr/local/cuda/targets/aarch64-linux/lib" -lnvinfer -lnvcaffe_parser -lcudart -lcuda -lnvosd -lopencv_objdetect
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/samples/frontend'
Make in tools/ConvertCaffeToGieModel
make[1]: Entering directory '/home/nvidia/tegra_multimedia_api/tools/ConvertCaffeToGieModel'
make[1]: Nothing to be done for 'all'.
make[1]: Leaving directory '/home/nvidia/tegra_multimedia_api/tools/ConvertCaffeToGieModel'
```
