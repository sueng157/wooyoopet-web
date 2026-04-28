// Phase 2: CSS 디자인 적용
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-dark py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단: 로고 + 사업자정보 */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 pb-10 border-b border-white/10">
          {/* 로고 영역 */}
          <div className="lg:w-1/3">
            <a href="#" className="inline-flex items-center gap-2.5 mb-4">
              <Image src="/images/logo.png" alt="우유펫 로고" width={32} height={32} />
              <span className="text-lg font-bold text-white">우유펫</span>
            </a>
            <p className="text-sm text-white/50 leading-relaxed">
              우리 아이를 위한 따뜻한 가정집 돌봄 서비스
            </p>
          </div>

          {/* 사업자 정보 */}
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-white/70 mb-4">사업자 정보</h4>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-white/40 leading-relaxed">
              <p>상호명 : 주식회사 우유펫</p>
              <p>대표 : 권승혁</p>
              <p>사업자등록번호 : 453-86-03578</p>
              <p>고객센터 : 010-9688-2728</p>
              <p className="sm:col-span-2">주소 : 경기도 하남시 미사강변중앙로 208, 7층 701-d-31호(망월동, 부강타워)</p>
            </div>
          </div>
        </div>

        {/* 하단: 약관 + 카피라이트 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <div className="flex items-center gap-4 text-sm text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">이용약관</a>
            <span className="w-px h-3 bg-white/20" />
            <a href="#" className="hover:text-white/70 transition-colors font-semibold">개인정보처리방침</a>
            <span className="w-px h-3 bg-white/20" />
            <a href="#" className="hover:text-white/70 transition-colors">위치기반 서비스 약관</a>
          </div>
          <p className="text-sm text-white/30">
            © 2025 wooyoopet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
