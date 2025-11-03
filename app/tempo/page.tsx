import { JSX } from "react";

export const dynamic = "force-static";

type TempoProps = {
  staticDate: string;
};

const Tempo: React.FC<TempoProps> = ({
  staticDate = getStaticDate(),
}): JSX.Element => {
  console.log("> Passando pelo Fontend");
  const dynamicDate = new Date().toUTCString();
  return (
    <div>
      <div>{dynamicDate} (Dinâmico)</div>
      <div>{staticDate} (Estático)</div>
    </div>
  );
};

export const getStaticDate = (): string => {
  console.log("> Passando pelo getStaticDate()");
  return new Date().toUTCString();
};

export default Tempo;
