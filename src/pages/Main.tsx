import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TwoCube from '@/assets/twoblocks.png';
import One from '@/assets/main/1.png';
import Two from '@/assets/main/2.png';
import Three from '@/assets/main/3.png';
import Four from '@/assets/main/4.png';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Header />
      <div className="mx-auto max-w-100% px-4 md:px-[153px] pb-10 bg-[#0090FB] flex items-center min-h-[550px]">
        <div className="container mx-auto w-full">
          <div className="space-y-8">
            <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">
              큐브 AI, 실무형 인공지능 학습의 시작
            </h1>
            <p className="text-white text-base md:text-xl font-medium leading-relaxed">
              AI를 처음 배우는 사람도, 개념부터 실습까지
              <br />한 번에 익히고 바로 활용할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-0 place-items-center relative">
          <img
            src={TwoCube}
            alt="TwoCube"
            className="max-w-[529px] max-h-[320px] w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Section 1: 흰색 */}
      <section className="mx-auto max-w-100% px-4 md:px-[153px] min-h-[550px] bg-white flex items-center">
        <div className="flex justify-center gap-0 place-items-center relative">
          <img
            src={One}
            alt="One"
            className="max-w-[629px] max-h-[419px] w-full h-auto object-contain"
          />
        </div>
        <div className="container mx-auto w-full">
          <div className="space-y-8 text-right">
            <h1 className="text-[#0090FB] text-2xl md:text-4xl font-bold leading-tight">
              직관적인
              <br />
              블록 인터페이스
            </h1>
            <p className="text-[#0090FB] text-base md:text-xl font-medium leading-relaxed">
              프로그래밍 지식 없이도 드래그 앤 클릭만으로
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: 파란색 */}
      <section className="mx-auto max-w-100% px-4 md:px-[153px] min-h-[550px] bg-[#0090FB] flex items-center">
        <div className="container mx-auto w-full">
          <div className="space-y-8">
            <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">
              실시간 코드 생성
            </h1>
            <p className="text-white text-base md:text-xl font-medium leading-relaxed">
              완전한 실행이 가능한 Python 코드 자동 생성
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-0 place-items-center relative">
          <img
            src={Two}
            alt="Two"
            className="max-w-[629px] max-h-[419px] w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* Section 3: 흰색 */}
      <section className="mx-auto max-w-100% px-4 md:px-[153px] min-h-[550px] bg-white flex items-center">
        <div className="flex justify-center gap-0 place-items-center relative">
          <img
            src={Three}
            alt="Three"
            className="max-w-[629px] max-h-[419px] w-full h-auto object-contain"
          />
        </div>
        <div className="container mx-auto w-full">
          <div className="space-y-8 text-right">
            <h1 className="text-[#0090FB] text-2xl md:text-4xl font-bold leading-tight">
              교육적 가치
            </h1>
            <p className="text-[#0090FB] text-base md:text-xl font-medium leading-relaxed">
              AI 학습의 각 단계를 시각적으로 이해
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: 파란색 */}
      <section className="mx-auto max-w-100% px-4 md:px-[153px] min-h-[550px] bg-[#0090FB] flex items-center">
        <div className="container mx-auto w-full">
          <div className="space-y-8">
            <h1 className="text-white text-2xl md:text-4xl font-bold leading-tight">
              즉시 실행 가능
            </h1>
            <p className="text-white text-base md:text-xl font-medium leading-relaxed">
              생성된 코드를 바로 실행하고 결과 확인
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-0 place-items-center relative">
          <img
            src={Four}
            alt="Four"
            className="max-w-[629px] max-h-[419px] w-full h-auto object-contain"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
