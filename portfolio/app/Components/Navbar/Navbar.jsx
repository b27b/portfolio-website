export default function Navbar() {
  return (
    <section className="flex justify-center">
      <nav
        className="font-[family-name:var(--font-reddit-mono)]) text-lightcolour 
      bg-[url('/images/backgrounds/nav.png')] bg-contain bg-no-repeat bg-center 
      flex justify-between items-center 
      w-11/12
      pt-12 pb-14 px-12
      rounded-3xl 
      fixed z-50 top-1
      shadow-[0_20px_5px_-15px_rgba(0,0,0,0)]
      "
      >
        <a href="/" className="">
          Kathy Zhang
        </a>
        <div className="flex justify-between items-center gap-4">
          <a>works</a>
          <a>about</a>
          <a>contact</a>
        </div>
      </nav>
    </section>
  );
}
