import Logo from '@/assets/icons/logo_colored.png';
export default function Footer() {
  return (
    <footer className="border-t bg-[#E5E5E5] text-black">
      <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-zinc-500 flex flex-col gap-[13px]">
        <img src={Logo} alt="Logo" className="w-20 h-auto object-contain" />
        <p>복잡한 딥러닝 모델 설계, 이제는 큐브 AI와 함께 하세요.</p>
      </div>
    </footer>
  );
}
