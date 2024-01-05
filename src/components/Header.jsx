import { A } from "@solidjs/router";

function Header() {
  return (
    <header
      className="
      fixed z-50 w-full top-0
      bg-black/90
      py-3 px-4
      flex items-center gap-4"
    >
      <A
        href="/"
        className="text-white font-bold text-3xl mr-auto"
      >
        SolidBase
      </A>
    </header>
  );
}

export default Header;
