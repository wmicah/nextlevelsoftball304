import Link from "next/link";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[#34363B] bg-[#0B0B0C]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-6 text-xs text-[#D9D9DF]/80 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} Next Level Softball. All rights reserved.</div>
        <div className="flex gap-4">
          <Link href="/contact" className="hover:text-[#FFFFFF] transition-colors">
            Contact
          </Link>
          <Link href="#" className="hover:text-[#FFFFFF] transition-colors">
            Policies
          </Link>
        </div>
      </div>
    </footer>
  );
}
