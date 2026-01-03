interface WorkProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  isFeatured?: boolean;
}

export const worksData: WorkProps[] = [
  {
    id: 1,
    title: "Project One",
    description: "Description for project one.",
    imageUrl: "../../../public/file.svg",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Project Two",
    description: "Description for project two.",
    imageUrl: "../../../public/globe.svg",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description for project three.",
    imageUrl: "../../../public/next.svg",
    isFeatured: true,
  },
];
