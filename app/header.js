import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <nav>
        <Link href="/stories">Stories</Link>
      </nav>
    </header>
  );
}

export default Header;
