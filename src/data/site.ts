export const SITE = {
  name: "Chellan's Studio",
  altName: "Chellans Studio and Frames",
  tagline: "A legacy of memories. Reimagined for today.",
  realTagline: "We capture your memories forever",
  founded: 1976,
  phoneDisplay: "+91 81368 46979",
  phoneHref: "tel:+918136846979",
  whatsappNumber: "918136846979",
  email: "chellanstpra@gmail.com",
  emailHref: "mailto:chellanstpra@gmail.com",
  address: {
    street: "Main Road, Tripunithura",
    city: "Ernakulam",
    region: "Kerala",
    country: "IN",
    full: "Chellan's Studio, Main Road, Tripunithura, Ernakulam, Kerala, India",
  },
  branches: [
    {
      name: "Tripunithura",
      lines: ["Main Road, Tripunithura", "Ernakulam, Kerala"],
      mapsQuery:
        "Chellans Studio and Frames Main Road Tripunithura Ernakulam Kerala",
    },
    {
      name: "Kakkanad",
      lines: [
        "Edappally - Pukkattupady Rd,",
        "Near Kosamattam Finance, Judgemukku,",
        "Thrikkakara, Ernakulam, Kerala",
      ],
      mapsQuery:
        "Chellans Studio and Frames Edappally Pukkattupady Road Judgemukku Thrikkakara Ernakulam Kerala",
    },
  ],
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Chellans+Studio+and+Frames+Tripunithura+Kerala",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Chellans+Studio+and+Frames+Tripunithura+Kerala",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Chellans+Studio+and+Frames,+Main+Road,+Tripunithura,+Kerala,+India&output=embed",
} as const;

export const branchMapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const branchDirectionsUrl = (query: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsappNumber}`;

export function whatsappEnquiry(prefill: string): string {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(prefill)}`;
}

export const SERVICES = [
  "Professional Photography",
  "Cinematic Videography",
  "Studio Portraits",
  "Photo Frames & Fine Prints",
  "Photo Retouching",
  "Photo Restoration",
] as const;

/** Everyday counter services, from the studio's own service list. */
export const QUICK_SERVICES = [
  "One-minute passport photos",
  "Photo enlargement",
  "Photo lamination",
  "Album designing",
  "Mug printing",
  "Personalized gifts",
] as const;
