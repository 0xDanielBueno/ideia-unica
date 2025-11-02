import Link from "next/link";
import React, { JSX } from "react";

const Sobre: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-purple-500">Sobre</h1>
      <Link href="/">Acessar página home</Link>
    </div>
  );
};

export default Sobre;
