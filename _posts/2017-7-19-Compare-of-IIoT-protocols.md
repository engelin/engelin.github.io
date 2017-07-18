## Compare of IIoT(Industrial Internet of Thing)
_그냥 궁금해서 정리해 봄.._
_틀릴 수 있음.._
IIoT(Industrial Internet of Thing) 플랫폼에서 정보 수집과 제어를 자동화하기 위한 프로토콜
    1. OPC-UA
    2. Modbus
    3. MQTT

### OPC-UA (Open Platform Communication - Unified Architecture)
OPC-UA는 통신 프로토콜의 일부인 아키텍처이고 OPC foundation에 의해 개발된 산업 자동화용 M-to-M 통신 프로토콜이다. 산업용 장비와 시스템의 데이터 수집과 제어에 중점적으로 개발되었다. Windows에서만 동작하는 단점이 있는데 이를 해결하기 위해 노력 중이다.

# 1. OPC-UA
OPC는 windows os에서 돌아가는 어플리케이션을 산업용 automation devices에 연결하여 data access를 하기 위해 설계되었다. 초기 OPC(-DA, -HDA 등)의 주요 단점은 windows에서만 동작하는 것이다.

# 2. 장점
*	무료로 사용가능
*	Service-oriented architecture
*	Robust Security
*	Integral information model

# 3. 단점
* Windows에서만 동작
* 13개 이상의 문서와 1000페이지에 걸쳐있는 많은 spec.

# 4. Protocol..
2015년에 추가한 publish/subscribe에 기반한 두 가지 통신 프로토콜을 지원한다. 이는 URL 변경을 통해서만 어플리케이션 개발자에게 보여준다. Binary tcp 프로토콜은 ‘opc.tcp://Server’이고 web service 프로토콜은 ‘http://Server’이다.
Binary tcp 프로토콜은 최상의 성능과 최소한의 오버 헤드를 제공한다. 또한, 임베디드 디바이스에 중요한 최소 리소스를 요구 하며 최상의 상호 운용성을 제공한다. 터널링을 완화하거나 방화벽을 통해 쉽게 사용할 수 있도록 임의로 선택 가능한 단일 TCP 포트를 사용한다. Web service (SOAP) 프로토콜은 Java 또는 .NET 환경과 같은 사용 가능한 도구에서 가장 잘 지원되며 표준 HTTP (S) 포트를 사용하여 방화벽 친화적이다.

# 5. References
1. [OPC and MQTT in the IIoT](http://blog.opto22.com/optoblog/opc-and-mqtt-in-the-iiot)
2. [OPC-UA protocol vs MQTT protocol](https://stackoverflow.com/questions/29897654/opc-ua-protocol-vs-mqtt-protocol)
3. [OPC Unified Architecture](https://en.wikipedia.org/wiki/OPC_Unified_Architecture)


### Modbus
원격 시스템에서 근거리 센서들로부터 정보를 수집하기 위해 시리얼 통신에 기반한 프로토콜이다. 모니터링 내용을 서버로 전송하고 서버에서 원격시스템을 제어하기 위해서는 Modbus TCP를 이용한다.
Modbus는 일반적으로 장치간 SCADA 식의 네트워크 통신에 사용된다. 예를 들어, 대형 서버는 PLC 또는 PAC의 마스터가 될 수 있고, PLC/PAC는 또한 센서, 밸브, 모터 또는 기타 임베디드 장치의 마스터가 될 수도 있다. 이러한 요구를 충족하기 위해 Modbus는 유연적인 데이터 및 함수 모델을 갖춘 request-response 프로토콜로서 제작되었다. 이러한 특징이 바로 Modbus가 현재에도 여전히 사용되는 이유이다.

# 1. Modbus
제조공장이나 놀이공원의 기계들을 자동화하고 제어하는 목적으로 사용되는 Programmable Logic Controller(PLC)들과의 통신에 사용할 목적으로 만들어졌다. 프로토콜이 단순하지만 장비 제어와 모니터링에 필요한 기능들을 수행할 수 있다.

# 2. 장점
*	산업용 프로토콜로 개발됨
*	프로토콜이 무료로 공개되어 있음
*	설치와 유지보수 용이
*	비트/워드 단위로 정보조작 용이
Modbus는 약 240개의 장비들을 서로 연결할 수 있다. 예를 들면, 온도와 습도를 측정하는 여러 장비들이 모니터링 서버로 현재 상태를 보고하도록 할 수 있다. 일반적으로 서버에서 sensing 장비들에게 질의를 보내고 장비들은 이에 대해 응답하는 형태로 동작한다. Supervisory control and data acquisition (SCADA) 시스템에서도 모니터링 서버와 remote terminal unit (RTU)을 연결하기 위해 Modbus를 자주 사용한다. 

# 3. Protocol
![Master/slave](https://github.com/engelin/engelin.github.io/blob/master/images/Master_slave.png?raw=true)
Master/slave 기반 프로토콜이다. 네트워크상에 연결된 모든 노드들이 요청을 받을 수는 있지만, 요청정보에 들어있는 목적주소 장비만이 이에 응답한다. 물론 목적지 주소가 브로드캐스트 주소일 때는 예외이다. 목적지 주소를 0으로 설정하면, 수신한 모든 노드에서 요청을 처리하지만, 응답은 보내지 않는다. 또한, Modbus 요청 정보에는 통신 오류를 검출하기 위한 코드를 포함한다.
Modbus를 지원하는 모뎀과 게이트웨이들이 많이 존재한다. 주로 serial-to-IP 제품들로 master측으로는 Wi-Fi나 이동 통신 등 무선통신을 지원하기도 한다.

# 4. References
1. [Modbus](http://system-monitoring.readthedocs.io/en/latest/modbus.html)
2. [NI Modbus](http://www.ni.com/white-paper/7675/ko/)


### MQTT
초기 MQTT는 위성 오일 파이프라인에 센서를 부착하여 데이터를 얻기 위해 IBM에서 개발된 비동기 프로토콜이다[1]. 현재는 M2M, IoT 플랫폼에서 사용하기 위해 최적화되었다. 따라서 센서가 부착될 제한적인 통신 환경, 즉, 저전력, 저대역 환경에서 잘 동작하도록 설계되었고 TCP 프로토콜 기반의 subscribe/publish communication을 사용한다.

# 1. MQTT
IoT devices에 최적화된 light messaging 프로토콜로서, 다양한 어플리케이션과 서비스의 등장으로 HTTP등의 기존 프로토콜만으로는 커뮤니케이션의 다양한 요구사항을 수용할 수 없게 되었고, 제한된 통신 환경을 고려하여 설계되었다. 통신에 사용되는 리소스를 최소화하는 방향으로 설계되었고 예를 들어, 헤더가 작게는 2BYTE정도로 HTTP와 비교도 안 되게 작다. 

# 2. 장점
*	프로토콜의 리소스 점유를 최소화
*	네트워크 장애와 단절에 대비
*	신뢰성 있는 메시지를 위한 QoS 옵션 제공
*	무료로 사용가능

# 3. Protocol
![MQTT](https://github.com/engelin/engelin.github.io/blob/master/images/MQTT.png?raw=true)
MQTT는 TCP/IP 네트워크를 통해 데이터 바이트를 구성하고 전송하는 방법을 지정하는 유선 프로토콜이다. MQTT 프로토콜은 네트워크에서 message broker(server)와 여러 clients와 같이 두 가지 유형의 엔티티를 정의한다.
Broker는 클라이언트에서 모든 메시지를 수신 한 다음, 해당 메시지를 관련된 해당 client에 push하는 server이다. Client는 broker와 상호 작용하여 메시지를 보내고 받을 수 있는 모든 devices들이다. 예를 들어, 데이터를 얻고자 하는 곳의 IoT 센서 또는 IoT 데이터를 처리하는 데이터 센터의 애플리케이션이 될 수 있다.

# 4. References
1. [MQTT why good for IoT](https://www.ibm.com/developerworks/library/iot-mqtt-why-good-for-iot/index.html)
2. [MQTT Tutorial](https://www.joinc.co.kr/w/man/12/MQTT/Tutorial)

