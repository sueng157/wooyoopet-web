// Phase 2: CSS 디자인 적용

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "김민지",
      dog: "말티즈 · 코코",
      rating: 5,
      text: "처음 맡기는 거라 걱정했는데, 사진도 자주 보내주시고 정말 잘 돌봐주셨어요. 코코가 집에 와서도 기분이 좋아보여서 안심했습니다.",
    },
    {
      id: 2,
      name: "이준호",
      dog: "포메라니안 · 뭉치",
      rating: 5,
      text: "출장 갈 때마다 이용하고 있어요. 가정집이라 뭉치가 스트레스를 덜 받는 것 같아요. 픽업 서비스도 너무 편하고요!",
    },
    {
      id: 3,
      name: "박서연",
      dog: "비숑 · 구름",
      rating: 5,
      text: "유치원 선생님이 정말 꼼꼼하세요. 산책도 시켜주시고, 구름이가 너무 좋아했어요. 다음에도 꼭 이용할게요.",
    },
    {
      id: 4,
      name: "최영수",
      dog: "골든리트리버 · 해피",
      rating: 5,
      text: "대형견도 문제없이 맡길 수 있어서 좋아요. 넓은 집에서 편하게 지내다 왔어요. 해피가 또 가고 싶어해요!",
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-4">
            REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            이용 후기
          </h2>
          <p className="mt-4 text-lg text-gray max-w-2xl mx-auto">
            우유펫을 이용하신 보호자님들의 생생한 후기
          </p>
        </div>

        {/* 후기 카드 그리드 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group bg-white rounded-2xl border border-border p-7 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              {/* 별점 */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* 후기 내용 */}
              <p className="text-[15px] text-dark-secondary leading-relaxed mb-6 min-h-[80px]">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* 작성자 정보 */}
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-50 to-primary-light flex items-center justify-center text-sm font-bold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">{review.name}</p>
                  <p className="text-xs text-gray-light">{review.dog}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
