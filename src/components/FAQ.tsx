"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "우유펫은 어떤 서비스인가요?",
      answer:
        "우유펫은 반려견 가정집 돌봄 서비스입니다. 검증된 펫시터의 가정에서 내 아이를 안전하고 편안하게 돌봐드립니다.",
    },
    {
      question: "돌봄 비용은 어떻게 되나요?",
      answer:
        "돌봄 비용은 유치원마다 다르며, 앱에서 각 유치원의 가격을 확인하실 수 있습니다. 산책, 픽업/드랍 옵션은 추가 비용이 발생할 수 있습니다.",
    },
    {
      question: "어떤 강아지든 맡길 수 있나요?",
      answer:
        "네, 소형견부터 대형견까지 모두 이용 가능합니다. 반려견 등록 시 견종, 크기, 특이사항 등을 입력하시면 적합한 유치원을 찾으실 수 있어요.",
    },
    {
      question: "펫시터는 어떻게 검증되나요?",
      answer:
        "모든 펫시터는 우유펫 교육을 이수해야 하며, 관리자 확인을 거쳐 등록됩니다. 이용 후기를 통해 다른 보호자님들의 경험도 확인하실 수 있습니다.",
    },
    {
      question: "돌봄 중에 우리 아이 소식을 받을 수 있나요?",
      answer:
        "네, 펫시터가 돌봄 중 사진과 메시지를 보내드립니다. 앱을 통해 실시간으로 우리 아이의 상태를 확인하실 수 있어요.",
    },
    {
      question: "유치원으로 등록하려면 자격증이 필요한가요?",
      answer:
        "아니요, 별도의 자격증은 필요 없습니다. 강아지를 사랑하는 반려인이라면 누구나 유치원을 운영할 수 있습니다. 우유펫 교육 이수와 관리자 확인만 거치면 됩니다.",
    },
    {
      question: "예약 취소는 어떻게 하나요?",
      answer:
        "앱 내 예약 내역에서 취소하실 수 있습니다. 취소 정책은 각 유치원마다 다를 수 있으니, 예약 시 확인해주세요.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 타이틀 */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark tracking-tight">
            자주 묻는 질문
          </h2>
          <p className="mt-4 text-lg text-gray">
            궁금한 점이 있으신가요?
          </p>
        </div>

        {/* FAQ 아코디언 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-colors duration-200 ${
                openIndex === index
                  ? "border-primary/30 bg-primary-50/30"
                  : "border-border bg-light-gray hover:border-primary/20"
              }`}
            >
              {/* 질문 (클릭 영역) */}
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              >
                <h3 className="text-[15px] sm:text-base font-semibold text-dark leading-snug">
                  {faq.question}
                </h3>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center text-sm transition-all duration-300 ${
                    openIndex === index
                      ? "bg-primary text-white border-primary rotate-45"
                      : "bg-white text-gray border-border"
                  }`}
                >
                  +
                </span>
              </button>

              {/* 답변 (토글) */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-[15px] text-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
