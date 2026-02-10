// lib/projects.ts

export type Project =
  | {
      title: string;
      category: string;
      type: "image";
      thumbnail: string;
      src: string | string[]; // Now supports single or multiple images
      description?: string;
      featured?: boolean;
    }
  | {
      title: string;
      category: string;
      type: "video";
      thumbnail: string;
      url: string;
      description?: string;
      featured?: boolean;
    }
  | {
      title: string;
      category: string;
      type: "website";
      thumbnail: string;
      url: string;
      description?: string;
      featured?: boolean;
      techStack?: string[];
    };

export const projects: Project[] = [
  {
    title: "Japanese Restaurant UI/UX",
    category: "Web Development",
    type: "website",
    thumbnail: "/images/work/japanese-restaurant.png",
    url: "https://resto-template.vercel.app/dashboard/admin-dashboard",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS"],
  },
  {
    title: "To Do List UI/UX Web App",
    category: "Web Development",
    type: "website",
    thumbnail: "/images/work/ToDoList.jpg",
    url: "https://todolist-jd.vercel.app/",
    featured: true,
    techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    type: "website",
    thumbnail: "/images/work/MyPortfolio.png",
    url: "https://jdportfolio.vercel.app/",
    techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS"],
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
    src: ["/images/work/A-3390.jpg",
      "/images/work/A-3427.jpg",
      "/images/work/A-3437.jpg",
      "/images/work/A-3467.jpg",
    ],
    
    featured: true,
  },
  {
    title: "Potrait Session",
    category: "Photography",
    type: "image",
    thumbnail: "/images/work/portrait.jpg",
    src: ["/images/work/A-2989.jpg",
          "/images/work/A-3029.jpg",
          "/images/work/A-3343.jpg",
    ]
  },
  {
    title: "Social Media Thumbnail",
    category: "Graphics",
    type: "image",
    thumbnail: "/images/work/Thumbnail.png",
    src: [
      "/images/work/Thumbnail.png",
      "/images/work/roadmap.png",
      "/images/work/ai.png",
      "/images/work/photog.png",
    ],
    featured: true,
  },
  {
    title: "Social Media Poster",
    category: "Graphics",
    type: "image",
    thumbnail: "/images/work/POSTING 5.png",
    src: ["/images/work/POSTING 5.png",
      "/images/work/POSTING 6.png",
      "/images/work/POSTING 1.png",
      "/images/work/abic services.png"
    ]
  },
  {
    title: "Back Menu Cover",
    category: "Graphics",
    type: "image",
    thumbnail: "/images/work/History.jpg",
    src: "/images/work/History.jpg",
  },
  {
    title: "Japanese Drinks Menu",
    category: "Graphics",
    type: "image",
    thumbnail: "/images/work/menu.jpg",
    src: ["/images/work/menu.jpg",
          "/images/work/MENU 1.jpg",
    ]
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
