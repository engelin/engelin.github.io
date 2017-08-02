## Machine Learning & Reinforcement Learning 간단히 정리

내 생각 정리한 것..

### ML(Machine Learning)

근래에 화두가 되고 있는 기계 학습(ML, Machine Learning) 혹은 인공 지능(AI, Artificial Intelligence)은 인간의 귀찮음을 해결하기 위해 발전한다. 예를 들어 메일의 스팸 메일을 구분한다던가 반복되는 업무를 자동적으로 수행하는 등이 있다.

초기 기계 학습은 주로 패턴 인식(Pattern Recognition)의 분야에 쓰였다. 패턴 인식에 활용되는 예를 살펴보면

              특징 추출        +          *분류/예측*
       Feature extractor     +     *Classification/Prediction*

주로 위와 같이 사용됨을 알 수 있다.

2 개 이상의 레이어로 구성된 뉴럴 네트워크가 발달하게 된 배경은 선형 모델의 단점인 선형성을 보완하기 위해서이다. 예를 들어, XOR 문제를 해결하기 위해서는 선형 분류기로는 해결되지 않고 비선형 분류기를 사용해야 한다. 뉴럴 네트워크 레이어 하나 하나는 선형적이지만 2개 이상 쌓게 되면 비선형을 띄게 된다.
이 때 뉴럴 네트워크와 함께 커널 트릭을 이용한 서포트 벡터 머신(SVM, Support Vector Machine)도 비약적인 발전을 이루었다. 최근까지도 활발한 연구가 진행되었지만 차원을 변형시키는 만큼 계산량이 많다는 단점이 있다.


초기 뉴럴 네트워크(NN, Neural Network)는 위와 같이 분류 혹은 예측을 위해 사용되는 알고리즘이었지만 컨볼루션 뉴럴 네트워크(CNN, Convolution Neural Network)이 제안되면서 특징 추출을 위해 널리 쓰이게 되었다. 영상처리 분야에서는 CNN을 도입하면서 비약적인 발전을 이루었다.


### RL(Reinforcement Learning)

그럼 강화 학습(RL, Reinforcement Learning)은 왜 탄생하게 되었을까?
AI의 최종 목표는 인간과 비슷한 기계를 만드는 것에 있다. 그렇다면 분류, 예측 뿐만 아니라 제어에도 관심이 가게 된다. *어떻게 하면 인간의 행동을 흉내낼 수 있을까? 어떻게 잘 행동할 것인가?* 에 대한 물음의 해답으로 강화 학습이 탄생하지 않았을까 생각된다.

강화 학습은 “어떤 환경 안에서 정의된 에이전트가 현재의 상태를 인식하여, 선택 가능한 행동들 중 보상을 최대화하는 행동 혹은 행동 순서를 선택하는 방법”으로 보상을 최대화 즉, 행동을 강화하는 방향으로 학습한다. 마코프 디시젼 프로세스(MDP, Markov Decision Process)에 기반한 알고리즘으로 마코프 프로세스와 비교할 수 있다.

마코프 프로세스에 기반한 알고리즘으로는 히든 마코프 모델(HMM, Hidden Markov Model)과 칼만 필터를 예로 들어 설명할 수 있다. 강화 학습은 decision을 한다는 대표적인 특징을 갖고 있지만 문제를 해결하는 방법에 있어서는 이 두 알고리즘과 상당히 유사한 점이 있다.


![Markov Process](https://github.com/engelin/engelin.github.io/blob/master/images/MP.png?raw=true)

마코프 프로세스에서는 상태(state)의 천이가 단순히 이전 상태에만 영향을 받는다. 따라서 상태 천이 행렬(Transition matrix)은 state에만 의존하는 것을 알 수 있다.

![Markov Decision Process](https://github.com/engelin/engelin.github.io/blob/master/images/MDP.png?raw=true)

마코프 디시젼 프로세스는 상태가 이전 상태뿐만 아니라 이전 상태에서 어떤 행동(action)을 하느냐에 따라 상태가 달라지게 된다. 즉, 상태의 천이가 이전 상태와 행동에 영향을 받는다.
그럼 여기서 ‘어떻게 행동을 할 것인가’를 결정해야 된다. 이것을 결정하는 것이 바로 *정책(Policy)* 이라고 할 수 있다. 위에서 강화 학습은 ‘어떻게 _잘_ 행동할 것인가’에 대한 해답으로 탄생했을 것이라 추측했다. 그렇다면 강화 학습의 목표는 _정책_ 을 최적화하는 것임을 알 수 있다.

강화 학습은 정책에 따른 행동을 하였을 때 보상(Reward)를 줌으로써 그 정책을 평가한다. 이 보상들을 누적한 것을 가치(Value)라고 한다. 강화 학습을 푸는 방법에는 많은 방법이 있지만 크게 가치를 parameterized하여 간접적으로 정책을 구하는 방법과 정책 자체를 parameterized 하여 정책을 구하는 방법이 있다.

예를 들어보자.
필자는 게임을 즐겨하지 않지만 강화 학습을 설명하기에는 게임이 가장 적절하고 쉽기 때문에 게임으로 예를 들어보겠다...ㅎㅎ
최근 유행하는 게임인 ‘오버워치’를 한 적이 있다. 오버워치는 FPS(First-person shooter)의 일종으로 1인칭 시점의 슈팅 게임이다. 디바라는 캐릭터를 선택하였었는데, 슈팅 게임에도 불구하고 몸통 박치기로 3 kills을 하였다. 잘못된 게임 방법이었지만 value가 크게 증가한 것을 보고 슈팅을 하지 않고 몸통 박치기로만 게임에 임했던 기억이 난다.

이와 같이 value를 최적화하여 간접적으로 policy를 구하는 방법은 value에따라 policy가 큰 영향을 받는다는 단점이 있다. 잘못된 행동으로 우연히 value가 높아졌음에도 불구하고 그것을 좋은 policy라고 인지할 가능성이 크다는 것이다. 가치를 이용하여 정책을 구하는 방법에는 대표적으로 SARSA와 Q-learning이 있다.

반면에 policy를 직접적으로 구하는 방법은 value에 큰 영향을 받지 않으며 이와 같이 parameterized policy 방법을 모두 policy gradient라고 부른다. 이 방법은 지도 학습(Supervised learning)의 형태를 하고 있기 때문에 local optima에 빠질 가능성이 크다는 단점이 있다. 이를 해결하기 위해 policy gradient 방법 중 하나로 actor-critic이 발전했다. 여기서 actor는 정책을 말하고 critic은 value를 말하는데 정책망(Policy Network)으로 정책을 구하고 가치망(Value Network)으로 가치를 평가하며 학습한다.

Google의 딥마인드는 policy gradient 알고리즘을 알파고와 데이터센터에 적용하며 policy gradient 알고리즘은 최근 가장 각광받는 알고리즘이 되었다.
