import React from "react";

function Footer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <footer className="bg-[#020202] h-fit p-4 md:p-24 w-screen">
      {children}
    </footer>
  );
}

export default Footer;
