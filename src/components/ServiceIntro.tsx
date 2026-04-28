// Phase 2: CSS 디자인 적용

export default function ServiceIntro() {
  return (
    <section id="service" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-4">
            SERVICE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            서비스 소개
          </h2>
          <p className="mt-4 text-lg text-gray max-w-2xl mx-auto">
            우유펫은 반려견 가정집 돌봄 서비스입니다.
          </p>
        </div>

        {/* 메인 서비스 카드 */}
        <div className="relative rounded-3xl bg-gradient-to-br from-primary-50 to-primary-light border border-primary/10 p-8 sm:p-12 mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
              <span className="text-4xl sm:text-5xl">🏠</span>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-dark mb-3">가정집 돌봄</h3>
              <p className="text-lg text-gray leading-relaxed max-w-2xl">
                검증된 펫시터의 가정에서 내 아이를 돌봐드립니다.
                낯선 환경이 아닌, 따뜻한 가정집에서 편안하게 지낼 수 있어요.
                마치 이웃집에 놀러 간 것처럼, 스트레스 없이 행복한 시간을 보냅니다.
              </p>
            </div>
          </div>
        </div>

        {/* 추가 옵션 */}
        <div className="mb-6">
          <h3 className="text-center text-xl font-bold text-dark-secondary mb-8">
            추가 옵션으로 더 편리하게
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* 산책 옵션 */}
          <div className="group rounded-2xl border border-border bg-white p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🐾</span>
            </div>
            <h4 className="text-xl font-bold text-dark mb-2">산책</h4>
            <p className="text-gray leading-relaxed">
              돌봄 중 산책 서비스를 추가할 수 있어요.
              우리 아이의 활동량도 걱정 없이!
            </p>
          </div>

          {/* 픽업/드랍 옵션 */}
          <div className="group rounded-2xl border border-border bg-white p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🚗</span>
            </div>
            <h4 className="text-xl font-bold text-dark mb-2">픽업 / 드랍</h4>
            <p className="text-gray leading-relaxed">
              직접 데려다주기 어려우신가요?
              픽업·드랍 서비스로 편하게 맡기세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
