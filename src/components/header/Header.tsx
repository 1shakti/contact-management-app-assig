import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="w-full h-16 flex items-center justify-center bg-blue-500 text-white font-medium">
      {title}
    </header>
  );
};

export default Header;
