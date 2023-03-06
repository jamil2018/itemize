interface LogoSize {
  size: number;
}

export default function Logo({ size }: LogoSize) {
  const logoSize = `text-${size}xl`;

  return (
    <h1 className={`${logoSize} tracking-wide mb-6`}>
      <span className="text-orange-400 underline">Item</span>izE
      <span className="text-orange-400">.</span>
    </h1>
  );
}
