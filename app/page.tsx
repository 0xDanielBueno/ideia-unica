import Link from "next/link";
import React, { JSX } from "react";

const Home: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-purple-500">Home</h1>
      <Link href="/sobre">Acessar página sobre</Link>
    </div>
  );
};

export default Home;
