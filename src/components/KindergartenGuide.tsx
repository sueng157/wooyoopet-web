// Phase 2: CSS 디자인 적용

export default function KindergartenGuide() {
  const steps = [
    {
      number: "01",
      title: "유치원 모드 전환",
      description: "앱 내 마이페이지에서 유치원 모드로 전환하세요.",
      icon: "🔄",
    },
    {
      number: "02",
      title: "유치원 정보 입력",
      description: "유치원 이름, 위치, 돌봄 가능 시간, 가격 등 기본 정보를 입력합니다.",
      icon: "✏️",
    },
    {
      number: "03",
      title: "우유펫 교육 이수",
      description: "안전한 돌봄을 위한 우유펫 교육을 이수해주세요.",
      icon: "📖",
    },
    {
      number: "04",
      title: "정산 정보 등록",
      description: "돌봄 수익을 정산받을 계좌 정보를 등록합니다.",
      icon: "💳",
    },
    {
      number: "05",
      title: "관리자 확인 후 등록 완료",
      description: "우유펫 관리자가 확인한 뒤 유치원 등록이 완료됩니다. 이제 돌봄 요청을 받아보세요!",
      icon: "✅",
    },
  ];

  return (
    <section id="kindergarten" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-kindergarten-light text-kindergarten text-sm font-semibold mb-4">
            KINDERGARTEN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            유치원 등록 안내
          </h2>
          <p className="mt-4 text-lg text-gray max-w-2xl mx-auto">
            강아지를 사랑하는 반려인이라면 누구나 유치원을 운영할 수 있어요.
          </p>
        </div>

        {/* 자격 안내 배너 */}
        <div className="relative rounded-3xl bg-gradient-to-br from-kindergarten-light to-white border border-kindergarten/15 p-8 sm:p-10 mb-14 text-center">
          <div className="w-16 h-16 rounded-2xl bg-kindergarten/10 flex items-center justify-center mx-auto mb-5">
            <span className="text-4xl">🎓</span>
          </div>
          <h3 className="text-2xl font-bold text-dark mb-3">유치원 자격</h3>
          <p className="text-lg text-gray max-w-lg mx-auto leading-relaxed">
            별도의 자격증이 필요 없어요.<br />
            <strong className="text-kindergarten">강아지를 사랑하는 반려인</strong>이라면 누구나 지원할 수 있습니다.
          </p>
        </div>

        {/* 등록 방법 */}
        <div>
          <h3 className="text-center text-xl font-bold text-dark-secondary mb-10">
            등록 방법
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                {/* 화살표 커넥터 (데스크탑) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 text-kindergarten/40 text-xl z-10">
                    →
                  </div>
                )}

                <div className="h-full rounded-2xl border border-border bg-white p-6 text-center hover:border-kindergarten/30 hover:shadow-lg hover:shadow-kindergarten/5 transition-all duration-300">
                  <span className="inline-block text-xs font-bold text-kindergarten bg-kindergarten-light px-2.5 py-1 rounded-md mb-4">
                    STEP {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-kindergarten/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h4 className="text-base font-bold text-dark mb-2">{step.title}</h4>
                  <p className="text-sm text-gray leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
