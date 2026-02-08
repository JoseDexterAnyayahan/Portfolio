// lib/projects.ts

export type Project =
  | {
      title: string;
      category: string;
      type: "image";
      thumbnail: string;
      src: string; // local image
      description?: string;
    }
  | {
      title: string;
      category: string;
      type: "video" | "website";
      thumbnail: string;
      url: string; // youtube or live site
      description?: string;
    };

export const featuredProjects: Project[] = [
    {
    title: "Japanese Restaurant UI/UX",
    category: "Web Development",
    type: "website",
    thumbnail: "/images/work/japanese-restaurant.png",
    url: "https://resto-template.vercel.app/dashboard/admin-dashboard",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    type: "website",
    thumbnail: "/images/work/website.png",
    url: "https://example.com",
  },
  {
    title: "Business Opening Video",
    category: "Videography",
    type: "video",
    thumbnail: "/images/work/ipponyari.png",
    url: "https://youtu.be/DNcGtC-xnWU",
  },
  {
    title: "Prenup Session",
    category: "Photography",
    type: "image",
    thumbnail: "/images/work/A-3411.jpg",
    src: "/images/work/A-3411.jpg",
  },
  {
    title: "Social Media Thumbnail",
    category: "Graphics",
    type: "image",
    thumbnail: "/images/work/Thumbnail.png",
    src: "/images/work/Thumbnail.png",
  },
];
