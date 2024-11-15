export default function handler(req, res) {
  res.status(200).json(
     [
        {
          id: "1",
          name: "Project One",
          images: ["/project_0.png", "https://example.com/image2.jpg"],
          description: "This is the description for project one.",
          link: "https://example.com/project-one"
        },
        {
          id: "2",
          name: "Project Two",
          images: ["/project_0.png", "https://example.com/image4.jpg"],
          description: "This is the description for project two.",
          link: "https://example.com/project-two"
        },
        {
          id: "3",
          name: "Project Three",
          images: ["/project_0.png", "https://example.com/image6.jpg"],
          description: "This is the description for project three.",
          link: "https://example.com/project-three"
        }
      ]
  )
}
