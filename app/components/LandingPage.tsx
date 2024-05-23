import Image from "next/image";
import imageHeroMobile from "/public/image-hero-mobile.png";
import imageHeroDesktop from "/public/image-hero-desktop.png";
import imageClientDatabiz from "/public/client-databiz.svg";
import imageClientAudiophile from "/public/client-audiophile.svg";
import imageClientMeet from "/public/client-meet.svg";
import imageClientMaker from "/public/client-maker.svg";

import { getImageProps } from "next/image";

export default function LandingPage() {
  //
  const common = { alt: "Graphic shapes" };
  const {
    props: { srcSet: mobile },
  } = getImageProps({
    ...common,
    width: imageHeroMobile.width,
    height: imageHeroMobile.height,
    src: imageHeroMobile.src,
  });
  const {
    props: { srcSet: desktop, ...rest },
  } = getImageProps({
    ...common,
    width: imageHeroDesktop.width,
    height: imageHeroDesktop.height,
    src: imageHeroDesktop.src,
  });

  const desktopMinWidth = `(min-width: ${process.env.DESKTOP_BREAKPOINT})`;
  const mobileMaxWidth = `(max-width: ${process.env.DESKTOP_BREAKPOINT})`;

  return (
    <div
      className="gPageContentWrapper
                   lg:gPageContentWrapperDesktop lg:flex-row"
    >
      <picture className="self-center lg:order-2">
        <source media={desktopMinWidth} srcSet={desktop} />
        <source media={mobileMaxWidth} srcSet={mobile} />
        <img
          {...rest}
          alt="graphic shapes"
          className="w-auto lg:mb-3 lg:ml-2 lg:max-h-[40rem] lg:min-w-[23rem]"
        />
      </picture>
      <article
        className="flex flex-col items-center justify-start gap-2 
                  lg:order-1 lg:max-w-[32.5rem] lg:basis-3/4 lg:items-start lg:gap-10 lg:pt-8"
      >
        {/* prettier-ignore */}
        <h1
          className="gh1
                    lg:gh1Desktop"
        >Make <br className="hidden lg:inline"/>remote work 
        </h1>
        <p
          className="px-4 text-center text-sm leading-6 tracking-wide text-almostBlack
                    lg:mt-1 lg:px-0 lg:pr-28 lg:text-left lg:text-base lg:tracking-normal lg:text-mediumGray"
        >
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <a
          href="#"
          className="mt-2 rounded-xl border-2 border-almostBlack bg-almostBlack
          px-5 py-2 text-sm text-almostWhite duration-300 hover:bg-white
          hover:text-almostBlack lg:px-6 lg:py-3 lg:text-base
          "
        >
          Learn more
        </a>
        <div
          className="mt-10 flex h-8 w-full max-w-5xl flex-row justify-around align-middle
                       lg:mt-16 lg:flex-wrap lg:justify-start lg:gap-9"
        >
          <Image
            className="h-3 w-auto
                      lg:h-4"
            alt="Databiz logo"
            src={imageClientDatabiz}
          />
          <Image
            className="-my-1 h-6 w-auto
                      lg:-my-2 lg:h-8"
            alt="Audiophine logo"
            src={imageClientAudiophile}
          />
          <Image
            className="h-3 w-auto
                      lg:h-4"
            alt="Meet logo"
            src={imageClientMeet}
          />
          <Image
            className="h-4 w-auto
                      lg:-my-1 lg:h-[1.3rem]"
            alt="Maker logo"
            src={imageClientMaker}
          />
        </div>
      </article>
    </div>
  );
}
