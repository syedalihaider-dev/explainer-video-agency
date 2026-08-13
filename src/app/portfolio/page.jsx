import OurWorkPage, { metadata as ourWorkMetadata } from "../our-work/page";

export const metadata = {
  ...ourWorkMetadata,
  alternates: {
    canonical: "/portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default OurWorkPage;
