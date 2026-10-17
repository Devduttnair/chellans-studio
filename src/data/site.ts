export const SITE = {
  name: "Chellan's Studio",
  altName: "Chellans Studio and Frames",
  tagline: "A legacy of memories. Reimagined for today.",
  founded: 1976,
  phoneDisplay: "+91 81368 46979",
  phoneHref: "tel:+918136846979",
  whatsappNumber: "918136846979",
  address: {
    street: "Tripunithura",
    city: "Ernakulam",
    region: "Kerala",
    country: "IN",
    full: "Chellan's Studio, Tripunithura, Ernakulam, Kerala, India",
  },
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Chellans+Studio+and+Frames+Tripunithura+Kerala",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Chellans+Studio+and+Frames+Tripunithura+Kerala",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Chellans+Studio+and+Frames,+Tripunithura,+Kerala,+India&output=embed",
} as const;

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
