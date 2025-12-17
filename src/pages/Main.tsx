import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TwoCube from '@/assets/twoblocks.png';
import One from '@/assets/main/1.png';
import Two from '@/assets/main/2.png';
import Three from '@/assets/main/3.png';
import Four from '@/assets/main/4.png';
import { useTypingAnimation } from '@/hooks/animation/useTypingAnimation';
import { useSectionVisibility } from '@/hooks/animation/useSectionVisibility';

//애니메이션 컴포넌트
function AnimatedImage({
  src,
  alt,
  className,
  isVisible,
}: {
  src: string;
  alt: string;
  className?: string;
  isVisible: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className || ''} transition-opacity duration-[1500ms] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}

function AnimatedText({
  text,
  isVisible,
  className,
  speed = 50,
}: {
  text: string;
  isVisible: boolean;
  className?: string;
  speed?: number;
}) {
  const { displayedText } = useTypingAnimation(text, isVisible, speed);

  return (
    <span className={className}>
      {displayedText}
      {isVisible && displayedText.length < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
}

export default function MainPage() {
  const { visibleSections, setSectionRef } = useSectionVisibility();
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <div className="mx-auto max-w-100% px-4 md:px-[153px] bg-[#0090FB] flex items-center h-screen">
        <div className="container mx-auto w-full">
          <div className="space-y-8">
            <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
              <AnimatedText
                text="큐브 AI, 실무형 인공지능 학습의 시작"
                isVisible={true}
                speed={80}
              />
            </h1>
            <p className="text-white text-lg md:text-2xl font-medium leading-relaxed">
              <AnimatedText
                text="AI를 처음 배우는 사람도, 개념부터 실습까지"
                isVisible={true}
                speed={50}
              />
              <br />
              <AnimatedText
                text="한 번에 익히고 바로 활용할 수 있습니다."
                isVisible={true}
                speed={50}
              />
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  const editorSection = document.getElementById('editor-section');
                  editorSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-[#0090FB] px-10 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                시작하기
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-0 place-items-center relative">
          <AnimatedImage
            src={TwoCube}
            alt="TwoCube"
            className="max-w-[529px] max-h-[320px] w-full h-auto object-contain"
            isVisible={true}
          />
        </div>
      </div>

      {/* Section 1: 흰색 */}
      <section
        id="editor-section"
        ref={el => setSectionRef('section1', el)}
        data-section-id="section1"
        className="mx-auto max-w-100% px-4 md:px-[153px] min-h-[550px] bg-white flex items-center"
      >
        <div className="flex justify-center gap-0 place-items-center relative">
          <AnimatedImage
            src={One}
            alt="One"
            className="max-w-[635px] max-h-[384px] w-full h-auto object-contain"
            isVisible={visibleSections.has('section1')}
          />
        </div>
        <div className="container mx-auto w-full">
          <div className="space-y-8 text-right">
            <h1 className="text-[#0090FB] text-2xl md:text-4xl font-bold leading-tight">
              <AnimatedText
                text="직관적인"
                isVisible={visibleSections.has('section1')}
                speed={80}
              />
              <br />
              <AnimatedText
                text="블록 인터페이스"
                isVisible={visibleSections.has('section1')}
                speed={80}
              />
            </h1>
            <p className="text-[#0090FB] text-base md:text-xl font-medium leading-relaxed">
              <AnimatedText
                text="프로그래밍 지식 없이도 드래그 앤 클릭만으로"
                isVisible={visibleSections.has('section1')}
                speed={50}
              />
            </p>
            <p className="text-[#0090FB] text-sm md:text-base font-normal leading-relaxed mt-4">
              <AnimatedText
                text="복잡한 코드 작성 없이 시각적 블록 조작으로 AI 모델을 구축하고,"
                isVisible={visibleSections.has('section1')}
                speed={40}
              />
              <br />
              <AnimatedText
                text="실시간으로 생성되는 Python 코드를 확인하며 학습할 수 있습니다."
                isVisible={visibleSections.has('section1')}
                speed={40}
              />
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 파란색 */}
      <section
        ref={el => setSectionRef('section2', el)}
        data-section-id="section2"
        className="mx-auto max-w-100% px-4 md:px-[153px] min-h-[550px] bg-[#0090FB] flex items-center"
      >
        <div className="container mx-auto w-full">
          <div className="space-y-8">
            <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">
              <AnimatedText
                text="실시간 코드 생성"
                isVisible={visibleSections.has('section2')}
                speed={80}
              />
            </h1>
            <p className="text-white text-base md:text-xl font-medium leading-relaxed">
              <AnimatedText
                text="완전한 실행이 가능한 Python 코드 자동 생성"
                isVisible={visibleSections.has('section2')}
                speed={50}
              />
            </p>
            <p className="text-white text-sm md:text-base font-normal leading-relaxed mt-4">
              <AnimatedText
                text="블록을 연결하는 순간, 실제로 실행 가능한 Python 코드가 생성됩니다."
                isVisible={visibleSections.has('section2')}
                speed={40}
              />
              <br />
              <AnimatedText
                text="코드 탭에서 실시간으로 확인하고, 바로 실행하여 결과를 확인해보세요."
                isVisible={visibleSections.has('section2')}
                speed={40}
              />
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-0 place-items-center relative">
          <AnimatedImage
            src={Two}
            alt="Two"
            className="max-w-[635px] max-h-[384px] w-full h-auto object-contain"
            isVisible={visibleSections.has('section2')}
          />
        </div>
      </section>

      {/* Section 3: 흰색 */}
      <section
        ref={el => setSectionRef('section3', el)}
        data-section-id="section3"
        className="mx-auto max-w-100% px-4 md:px-[153px] min-h-[550px] bg-white flex items-center"
      >
        <div className="flex justify-center gap-0 place-items-center relative">
          <AnimatedImage
            src={Three}
            alt="Three"
            className="max-w-[635px] max-h-[384px] w-full h-auto object-contain"
            isVisible={visibleSections.has('section3')}
          />
        </div>
        <div className="container mx-auto w-full">
          <div className="space-y-8 text-right">
            <h1 className="text-[#0090FB] text-2xl md:text-4xl font-bold leading-tight">
              <AnimatedText
                text="교육적 가치"
                isVisible={visibleSections.has('section3')}
                speed={80}
              />
            </h1>
            <p className="text-[#0090FB] text-base md:text-xl font-medium leading-relaxed">
              <AnimatedText
                text="AI 학습의 각 단계를 시각적으로 이해"
                isVisible={visibleSections.has('section3')}
                speed={50}
              />
            </p>
            <p className="text-[#0090FB] text-sm md:text-base font-normal leading-relaxed mt-4">
              <AnimatedText
                text="데이터 전처리부터 모델 학습, 평가까지 AI 개발의 전체 과정을"
                isVisible={visibleSections.has('section3')}
                speed={40}
              />
              <br />
              <AnimatedText
                text="직관적인 블록 인터페이스로 체계적으로 학습할 수 있습니다."
                isVisible={visibleSections.has('section3')}
                speed={40}
              />
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 파란색 */}
      <section
        ref={el => setSectionRef('section4', el)}
        data-section-id="section4"
        className="mx-auto max-w-100% px-4 md:px-[153px] min-h-[550px] bg-[#0090FB] flex items-center"
      >
        <div className="container mx-auto w-full">
          <div className="space-y-8">
            <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">
              <AnimatedText
                text="즉시 실행 가능"
                isVisible={visibleSections.has('section4')}
                speed={80}
              />
            </h1>
            <p className="text-white text-base md:text-xl font-medium leading-relaxed">
              <AnimatedText
                text="생성된 코드를 바로 실행하고 결과 확인"
                isVisible={visibleSections.has('section4')}
                speed={50}
              />
            </p>
            <p className="text-white text-sm md:text-base font-normal leading-relaxed mt-4">
              <AnimatedText
                text="학습 탭에서 실시간으로 모델 학습 진행 상황을 모니터링하고,"
                isVisible={visibleSections.has('section4')}
                speed={40}
              />
              <br />
              <AnimatedText
                text="데이터 탭에서 데이터셋 정보와 시각화 결과를 확인할 수 있습니다."
                isVisible={visibleSections.has('section4')}
                speed={40}
              />
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-0 place-items-center relative">
          <AnimatedImage
            src={Four}
            alt="Four"
            className="max-w-[635px] max-h-[384px] w-full h-auto object-contain"
            isVisible={visibleSections.has('section4')}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
