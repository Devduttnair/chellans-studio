export type Category =
  | "portraits"
  | "photography"
  | "videography"
  | "restoration"
  | "frames";

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: Category;
  /** natural dimensions, used for aspect-ratio placeholders */
  w: number;
  h: number;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  portraits: "Studio Portraits",
  photography: "Photography",
  videography: "Videography",
  restoration: "Restoration",
  frames: "Frames & Prints",
};

export const GALLERY: GalleryImage[] = [
  {
    src: "/images/portrait-1.jpg",
    alt: "Moody studio portrait of a woman in a black dress against a dark background",
    caption: "Studio portrait, dramatic light",
    category: "portraits",
    w: 1600,
    h: 2400,
  },
  {
    src: "/images/photo-1.jpg",
    alt: "Newlywed Indian couple embracing outdoors in traditional wedding attire",
    caption: "Wedding portrait, Tripunithura",
    category: "photography",
    w: 1600,
    h: 1067,
  },
  {
    src: "/images/video-1.jpg",
    alt: "Professional cinema camera set up on an outdoor film set",
    caption: "On set, cinematic production",
    category: "videography",
    w: 2560,
    h: 1707,
  },
  {
    src: "/images/frames-1.jpg",
    alt: "Black and white framed photographs arranged on a gallery wall",
    caption: "Gallery wall, custom framing",
    category: "frames",
    w: 1600,
    h: 2124,
  },
  {
    src: "/images/portrait-2.webp",
    alt: "Elegant black and white studio portrait of a woman",
    caption: "Studio portrait, monochrome",
    category: "portraits",
    w: 1400,
    h: 2100,
  },
  {
    src: "/images/photo-2.jpg",
    alt: "Bride and groom dancing at night during their wedding celebration",
    caption: "Wedding celebration, night",
    category: "photography",
    w: 1600,
    h: 1067,
  },
  {
    src: "/images/restore-after.webp",
    alt: "Restored black and white studio portrait of a young woman",
    caption: "Restoration sample, after",
    category: "restoration",
    w: 1400,
    h: 1570,
  },
  {
    src: "/images/photo-3.jpg",
    alt: "Indian bride and groom in traditional wedding clothes, portrait",
    caption: "Wedding portrait, traditional attire",
    category: "photography",
    w: 1600,
    h: 1067,
  },
  {
    src: "/images/video-2.jpg",
    alt: "Cinematic camera in use during an outdoor film shoot",
    caption: "Filming outdoors",
    category: "videography",
    w: 1600,
    h: 900,
  },
  {
    src: "/images/portrait-3.jpg",
    alt: "Black and white studio portrait of a woman in a white shirt",
    caption: "Studio portrait, natural light study",
    category: "portraits",
    w: 1600,
    h: 2400,
  },
  {
    src: "/images/frames-2.jpg",
    alt: "Elegant black and white framed photographs on a modern interior wall",
    caption: "Fine prints, modern interior",
    category: "frames",
    w: 1600,
    h: 1086,
  },
  {
    src: "/images/photo-4.jpg",
    alt: "Indian couple celebrating haldi ceremony with yellow floral decor",
    caption: "Haldi ceremony",
    category: "photography",
    w: 2560,
    h: 1707,
  },
  {
    src: "/images/portrait-4.jpg",
    alt: "Dramatic low light studio portrait of a woman in shadow",
    caption: "Studio portrait, low key",
    category: "portraits",
    w: 1600,
    h: 2400,
  },
  {
    src: "/images/photo-5.jpg",
    alt: "Close intimate moment of an Indian wedding ceremony",
    caption: "Wedding ceremony, quiet moment",
    category: "photography",
    w: 1600,
    h: 1067,
  },
  {
    src: "/images/video-3.jpg",
    alt: "Cameraman operating professional video equipment outdoors",
    caption: "Videography in the field",
    category: "videography",
    w: 1600,
    h: 1065,
  },
  {
    src: "/images/photo-6.jpg",
    alt: "Indian wedding couple in traditional attire embracing outdoors",
    caption: "Wedding portrait, outdoors",
    category: "photography",
    w: 1200,
    h: 1803,
  },
  {
    src: "/images/frames-3.jpg",
    alt: "Cozy gallery wall of framed pictures with soft ambient lighting",
    caption: "Gallery wall, warm interior",
    category: "frames",
    w: 1600,
    h: 2400,
  },
  {
    src: "/images/kerala-wedding.jpg",
    alt: "Kerala couple exchanging floral garlands during a traditional wedding ceremony",
    caption: "Kerala wedding ceremony",
    category: "photography",
    w: 1600,
    h: 2844,
  },
  {
    src: "/images/kerala-bride.jpg",
    alt: "Close-up portrait of a Kerala bride wearing traditional gold jewelry",
    caption: "Traditional bridal portrait",
    category: "portraits",
    w: 1600,
    h: 2000,
  },
];
