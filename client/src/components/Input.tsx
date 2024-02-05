interface prop {
  placeholder: string;
}

export default function Input({ placeholder }: prop) {
  return (
    <input
      placeholder={placeholder}
      className="shadow-[5px_5px_0px_0px_rgba(0,0,0)] h-10 text-2xl rounded-md border border-accBlack focus:outline-none p-1.5 font-mono"
    />
  );
}
