// lib/projects.ts

export type Project =
  | {
      title: string;
      category: string;
      type: "image";
      thumbnail: string;
      src: string;
      description?: string;
      featured?: boolean;
    }
  | {
      title: string;
      category: string;
      type: "video" | "website";
      thumbnail: string;
      url: string;
      description?: string;
      featured?: boolean;
    };

export const projects: Project[] = [
  {
    title: "Japanese Restaurant UI/UX",
    category: "Web Development",
    type: "website",
    thumbnail: "/images/work/japanese-restaurant.png",
    url: "https://resto-template.vercel.app/dashboard/admin-dashboard",
    featured: true,
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    type: "website",
    thumbnail: "/images/work/website.png",
    url: "https://example.com",
    featured: true,
  },
  {
    title: "Business Opening Video",
    category: "Videography",
    type: "video",
    thumbnail: "/images/work/ipponyari.png",
    url: "https://youtu.be/DNcGtC-xnWU",
    featured: true,
  },
  {
    title: "Korean Restaurant Business",
    category: "Videography",
    type: "video",
    thumbnail: "/images/work/bonga-restaurant.png",
    url: "https://youtu.be/OCzz_a2Ep5E",
  },
  {
    title: "Pet Shop Business",
    category: "Videography",
    type: "video",
    thumbnail: "/images/work/petshop.png",
    url: "https://youtu.be/nji5JqWjWW4",
  },
  {
    title: "Music Video",
    category: "Videography",
    type: "video",
    thumbnail: "/images/work/mv.png",
    url: "https://youtu.be/zDysAdf4xZc?si=hnjUZTLh9gU-3Qc-",
    featured: true,
  },
  {
    title: "Prenup Session",
    category: "Photography",
    type: "image",
    thumbnail: "/images/work/A-3411.jpg",
    src: "/images/work/A-3411.jpg",
    featured: true,
  },
  {
    title: "Potrait Session",
    category: "Photography",
    type: "image",
    thumbnail: "/images/work/portrait.jpg",
    src: "/images/work/portrait.jpg",
  },
  {
    title: "Social Media Thumbnail",
    category: "Graphics",
    type: "image",
    thumbnail: "/images/work/Thumbnail.png",
    src: "/images/work/Thumbnail.png",
    featured: true,
  },
  {
    title: "Social Poster Multimedia",
    category: "Graphics",
    type: "image",
    thumbnail: "/images/work/POSTING 5.png",
    src: "/images/work/POSTING 5.png",
  },
  {
    title: "Social Poster Website",
    category: "Graphics",
    type: "image",
    thumbnail: "/images/work/POSTING 6.png",
    src: "/images/work/POSTING 6.png",
  },
  {
    title: "Back Menu Cover",
    category: "Graphics",
    type: "image",
    thumbnail: "/images/work/history.jpg",
    src: "/images/work/history.jpg",
  },
  {
    title: "Japanese Drinks Menu",
    category: "Graphics",
    type: "image",
    thumbnail: "/images/work/menu.jpg",
    src: "/images/work/menu.jpg",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
