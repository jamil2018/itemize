interface LogoSize {
  size: number;
}

export default function Logo({ size }: LogoSize) {
  return (
    <h1 className="text-5xl tracking-wide mb-6">
      <span className="text-orange-400 underline">Item</span>izE
      <span className="text-orange-400">.</span>
    </h1>
  );
}
