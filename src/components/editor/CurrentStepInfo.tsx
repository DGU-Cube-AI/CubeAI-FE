import { editorStep, editorStepKor } from '@/types/editor';

import FinalResultDialog from './dialog/FinalResultDialog';
import { useUserStore } from '@/stores/useUserStore';
import { useResultStatus } from '@/apis/sidebar/quries/useResultQuery';

interface CurrentStepInfoProps {
  editorStep: editorStep;
  currentStepIndex: number;
  stepOrder: editorStep[];
  handleBackStep: () => void;
  handleCompleteAndNextStep: () => void;
}

export default function CurrentStepInfo({
  editorStep,
  currentStepIndex,
  stepOrder,
  handleBackStep,
  handleCompleteAndNextStep,
}: CurrentStepInfoProps) {
  const userId = useUserStore(state => state.userId);
  const { data: resultStatus } = useResultStatus({ user_id: userId });
  return (
    <div className="flex flex-col flex-1 items-center justify-center h-full">
      <p className="text-center mb-3 text-xl text-gray-700">
        현재 단계: <strong className="text-blue-600">{editorStepKor[editorStep]}</strong>
      </p>
      <div className="flex gap-6">
        <button
          onClick={handleBackStep}
          disabled={currentStepIndex === 0}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 disabled:bg-gray-200 disabled:text-gray-500 transition-colors duration-200"
        >
          이전으로
        </button>
        {currentStepIndex === stepOrder.length - 1 ? (
          resultStatus?.ready ? (
            // 마지막 단계일 경우 '최종 결과 보기' 버튼 표시
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 font-semibold transition-colors duration-200">
              <FinalResultDialog />
            </button>
          ) : (
            <p className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-full">
              결과 준비 안됨
            </p>
          )
        ) : (
          // 마지막 단계가 아닐 경우 '다음으로' 버튼 표시
          <button
            onClick={handleCompleteAndNextStep}
            disabled={currentStepIndex === stepOrder.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:bg-blue-300 transition-colors duration-200"
          >
            다음으로
          </button>
        )}
      </div>
    </div>
  );
}
