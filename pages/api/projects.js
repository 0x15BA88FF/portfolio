export default function handler(req, res) {
  res.status(200).json(
     [
        {
          title: "Project One",
          images: ["/projects/blogr_landing_page.png", "/projects/visual_json.png"],
          description: "## This is the description for project one.",
          link: "https://example.com/project-one"
        },
        {
          title: "Project Two",
          images: ["/projects/redwook_js_website.png"],
          description: "This is the description for project two.",
          link: "https://example.com/project-two"
        },
        {
          title: "Project Three",
          images: ["/projects/visual_json.png"],
          description: "This is the description for project three.",
          link: "https://example.com/project-three"
        },
        {
          title: "Project Three",
          images: ["/projects/setifi_module.png"],
          description: "This is the description for project three.",
          link: "https://example.com/project-three"
        },
        {
          title: "Project Three",
          images: ["/projects/bot_senpai_discord_bot.png"],
          description: "This is the description for project three.",
          link: "https://example.com/project-three"
        }
      ]
  )
}
