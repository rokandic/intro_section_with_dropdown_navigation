"use client";

type HamburgerMenuButtonProps = {
  navExpanded: boolean;
  setNavExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
};

export default function HamburgerMenuButton({
  navExpanded,
  setNavExpanded,
  className,
}: HamburgerMenuButtonProps) {
  function buttonClick(event: React.SyntheticEvent<HTMLButtonElement>): void {
    if (event.currentTarget instanceof HTMLButtonElement) {
      setNavExpanded(!navExpanded);
    }
  }

  return (
    <button
      className="z-100 group bg-transparent"
      aria-controls="navigation"
      aria-expanded={navExpanded}
      onClick={buttonClick}
    >
      <svg className={className} viewBox="0 0 100 100">
        <rect
          className="h-[8%] w-[100%] origin-center duration-500 ease-in-out
                      [rx:4%] [x:0%] [y:20%]                       
                      group-aria-expanded:-rotate-45 group-aria-expanded:[y:45%]"
        ></rect>
        <rect
          className="h-[8%] w-[100%] origin-center duration-300
                      ease-in-out [rx:4%] [x:0%] 
                      [y:45%] group-hover:w-[40%]
                      group-hover:[x:30%] group-aria-expanded:w-[0%]
                      group-aria-expanded:[x:50%]"
        ></rect>
        <rect
          className="h-[8%] w-[100%] origin-center duration-500 ease-in-out
                      [rx:4%] [x:0%] [y:70%] 
                      group-aria-expanded:rotate-45 group-aria-expanded:[y:45%]"
        ></rect>
      </svg>
    </button>
  );
}
