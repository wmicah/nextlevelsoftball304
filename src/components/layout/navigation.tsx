"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Results", href: "#results" },
  { name: "About", href: "#about" },
  { name: "Coaching Info", href: "#coaching-info" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2A2E33] bg-[#0E0F11]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#F5F7FA]">
              Next Level Pitching
            </span>
          </Link>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[#A7B1BA] transition-colors hover:text-[#3AAFFF]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Link 
            href="#coaching-info"
            className="rounded-lg bg-[#3AAFFF] px-6 py-2.5 text-sm font-semibold text-[#0E0F11] transition-all hover:bg-[#74C9FF] hover:shadow-[0_0_16px_rgba(58,175,255,0.4)]"
          >
            Get Coaching Info
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-[#F5F7FA]" />
          ) : (
            <Menu className="h-6 w-6 text-[#F5F7FA]" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-[#2A2E33] bg-[#0E0F11] md:hidden">
          <div className="mx-auto max-w-[1280px] px-6 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-[#A7B1BA] transition-colors hover:text-[#3AAFFF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                href="#coaching-info"
                className="block w-full rounded-lg bg-[#3AAFFF] px-6 py-2.5 text-sm font-semibold text-[#0E0F11] text-center transition-all hover:bg-[#74C9FF]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Coaching Info
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
