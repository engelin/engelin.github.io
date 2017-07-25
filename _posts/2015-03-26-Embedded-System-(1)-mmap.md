## Memory Mapped I/O
2015.03.26 수업 요약

![mmap1](https://github.com/engelin/engelin.github.io/blob/master/images/mmap1.jpg?raw=true)

### Memory mapped I/O
 - I/O peripheral <-> CPU
 * 왜 주소를 불러오는데 장치가 동작할까?

![mmap2](https://github.com/engelin/engelin.github.io/blob/master/images/mmap1_2.jpg?raw=true)

 * Control bit: I/O들을 컨트롤 가능
 
![mmap3](https://github.com/engelin/engelin.github.io/blob/master/images/mmap3.png?raw=true)
 
 * U-boot이 OS를 불러옴
 * U-boot만 살렸을 때랑 OS까지 살렸을 때의 차이점?
   - U-boot: Physical addr.
   - OS: Virtual addr.
   
   Physical addr.  |  Virtual addr.
                   |
                 mmap --> Virtual address를 사용하지만 physical address로 들어가게끔 mapping해줌
                 
### Physical addr. VS. Virtual addr.
 * Physical address는 쓰고자 하는 곳에 고정을 시키기 때문에 비효율적
 * E.g. PDP-11  VAX (multi user 환경)
 
 ![mmap4](https://github.com/engelin/engelin.github.io/blob/master/images/mmap4.png?raw=true)
 
   - C compiler는 A 위치에만 사용할 수 있게 해놨는데 만약 여러 명이 C compiler를 사용하게 될 경우 편리하게 사용하지 못 함.
     하지만 virtual address를 사용하면 이에 관계없이 사용가능.

 ![mmap5](https://github.com/engelin/engelin.github.io/blob/master/images/mmap5.png?raw=true)
 
  - 어디서 어떻게 동작하는지 알고 planning을 쫙 해놓으면 virtual address보다 physical address 사용하는 것이 훨씬 빠름
