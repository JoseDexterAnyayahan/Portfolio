export type Project = {
  title: string
  category: "Videography" | "Graphic Design" | "Photography"
  cover: string
  type: "image" | "video"
  src: string
}

export const featuredProjects: Project[] = [
  {
    title: "Ipponyari Grand Opening",
    category: "Videography",
    cover: "/images/work/ipponyari.png",
    type: "video",
    src: "/videos/work/IPPONYARI.mp4",
  },
  {
    title: "Social Media Posting",
    category: "Graphic Design",
    cover: "/images/work/POSTING 6.png",
    type: "image",
    src: "/images/work/POSTING 6.png",
  },
  {
    title: "Prenup Photoshoot",
    category: "Photography",
    cover: "/images/work/A-3411.jpg",
    type: "image",
    src: "/images/work/A-3411.jpg",
  },
]
