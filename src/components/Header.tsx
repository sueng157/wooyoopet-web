"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "서비스 소개", href: "#service" },
    { label: "이용 방법", href: "#how-to-use" },
    { label: "유치원 등록 안내", href: "#kindergarten" },
    { label: "후기", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "앱 다운로드", href: "#download" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 모바일 메뉴 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* 로고 */}
        <a href="#" className="flex items-center gap-2.5 shrink-0" onClick={handleNavClick}>
          <Image src="/images/logo.png" alt="우유펫 로고" width={38} height={38} />
          <span className="text-xl font-bold text-dark">우유펫</span>
        </a>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-3.5 py-2 rounded-lg text-[15px] font-medium text-dark-secondary hover:text-primary hover:bg-primary-50 transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          className="lg:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg hover:bg-light-gray transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`block w-5 h-0.5 bg-dark rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-[3px]" : "mb-1.5"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-dark rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "mb-1.5"
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-dark rounded-full transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      <div
        className={`lg:hidden absolute top-[72px] left-0 right-0 bg-white border-b border-border shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-4 py-3.5 rounded-xl text-base font-medium text-dark-secondary hover:text-primary hover:bg-primary-50 transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[72px] bg-dark/20 z-[-1]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
