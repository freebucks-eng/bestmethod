export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 bg-[#1a1f24] text-white/60 text-center text-sm">
      © 2023 - {currentYear} AppSneak. All rights reserved.
    </footer>
  );
}
