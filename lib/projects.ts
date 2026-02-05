export type Project = {
  title: string
  category: string
  type: "image" | "video" | "website"
  src: string
  thumbnail: string
  description?: string
}


export const featuredProjects: Project[] = [
  {
    title: "Business Opening Video",
    category: "Videography",
    type: "video",
    src: "/videos/work/IPPONYARI.mp4",
    thumbnail: "/images/work/ipponyari.png",
  },
  {
    title: "Prenup Session",
    category: "Photography",
    type: "image",
    src: "/images/work/A-3411.jpg",
    thumbnail: "/images/work/A-3411.jpg",
  },
  {
    title: "Trailer Edit",
    category: "Video Editing",
    type: "video",
    src: "/videos/work/Trailer.mp4",
    thumbnail: "/images/work/Cover.jpg",
  },
  {
    title: "Brand Poster Design",
    category: "Graphic Design",
    type: "image",
    src: "/images/work/POSTING 5.png",
    thumbnail: "/images/work/POSTING 5.png",
  },
  {
    title: "Portfolio Website",
    category: "Web Development",
    type: "website",
    src: "https://example.com",
    thumbnail: "/images/work/website.png",
  },
  {
    title: "Social Media Thumbnail",
    category: "Social Media Management",
    type: "image",
    src: "/images/work/Thumbnail.png",
    thumbnail: "/images/work/Thumbnail.png",
  },
]
