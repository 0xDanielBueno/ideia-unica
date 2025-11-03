import { JSX } from "react";

export const dynamic = "force-dynamic";

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

export const getStaticDate = async (): Promise<string> => {
  console.log("> Passando pelo getStaticDate()");
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Sao_Paulo",
    { next: { revalidate: 1 } }
  );
  const { datetime: dateTime } = await res.json();
  const resDate = new Date(dateTime).toUTCString();
  return resDate;
};

export default Tempo;
