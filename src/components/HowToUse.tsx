// Phase 2: CSS 디자인 적용

export default function HowToUse() {
  const steps = [
    {
      number: "01",
      title: "앱 다운로드",
      description: "앱스토어 또는 플레이스토어에서 우유펫 앱을 다운로드하세요.",
      icon: "📲",
    },
    {
      number: "02",
      title: "반려견 등록",
      description: "우리 아이의 정보를 등록해주세요. 이름, 견종, 나이, 특이사항 등을 입력합니다.",
      icon: "🐕",
    },
    {
      number: "03",
      title: "지도에서 유치원 탐색",
      description: "지도에서 내 주변 유치원을 찾아보세요. 거리, 후기, 가격을 비교할 수 있어요.",
      icon: "🗺️",
    },
    {
      number: "04",
      title: "유치원에 돌봄 요청",
      description: "원하는 유치원을 선택하고 돌봄 날짜와 시간을 정해 요청을 보내세요.",
      icon: "📋",
    },
    {
      number: "05",
      title: "돌봄 시작",
      description: "펫시터가 요청을 수락하면 돌봄이 시작됩니다. 실시간으로 우리 아이 소식을 받아보세요.",
      icon: "💛",
    },
  ];

  return (
    <section id="how-to-use" className="py-20 sm:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-4">
            HOW TO USE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            이용 방법
          </h2>
          <p className="mt-4 text-lg text-gray max-w-2xl mx-auto">
            우유펫으로 돌봄을 시작하는 방법, 아주 간단해요.
          </p>
        </div>

        {/* 스텝 리스트 */}
        <div className="relative max-w-3xl mx-auto">
          {/* 세로 연결선 */}
          <div className="absolute left-6 sm:left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden sm:block" />

          <ol className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <li key={step.number} className="relative flex gap-5 sm:gap-8">
                {/* 넘버 서클 */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-primary shadow-md shadow-primary/10 flex items-center justify-center">
                  <span className="text-2xl">{step.icon}</span>
                </div>

                {/* 콘텐츠 카드 */}
                <div className="flex-1 bg-white rounded-2xl border border-border p-6 sm:p-7 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary-50 px-2.5 py-1 rounded-md">
                      STEP {step.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-dark">{step.title}</h3>
                  </div>
                  <p className="text-gray leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
