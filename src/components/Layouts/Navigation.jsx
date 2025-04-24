import React from "react";
import { Button } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import "@/index.css";

function Navbar() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Community", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <header className="flex items-center justify-between py-3 max-w-screen-xl mx-auto md:px-0 px-4">
      <img src="/images/Logo.png" className="w-32" alt="Logo" />
      <nav className="hidden md:flex gap-10 items-center">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="text-sm font-medium">
            {item.label}
          </a>
        ))}
        <Button>
          <span className="flex items-center">
            Register Now
            <img src="/images/icon/Right.svg" className="ml-1 w-3" alt="" />
          </span>
        </Button>
      </nav>

      {/* mobile */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <img src="/images/icon/Burger.png" alt="" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-5 mt-8 px-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm font-medium">
                  {item.label}
                </a>
              ))}
              <Button className="w-full mt-4">
                <span className="flex items-center">
                  Register Now
                  <img src="/images/icon/Right.svg" className="ml-1 w-3" alt="" />
                </span>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
