export default function handler(req, res) {
  res.status(200).json(
     [
        {
          title: "Blogr Landing Page",
          images: ["/projects/blogr_landing_page.png"],
          description: "A simple langing page designed for the frontend mentors frontend training and challenge website.",
        },
        {
          title: "Redwood.js Website",
          images: ["/projects/redwook_js_website.png"],
          description: "Contibutions to the development or the redwood js frontend development framework.",
        },
        {
          title: "Visual Json",
          images: ["/projects/visual_json.png"],
          description: "A simple development tool i built and use to run GET requests and represent JSON respones into a graphical tree.",
          link: "https://example.com/project-three"
        },
        {
          title: "Setifi",
          images: ["/projects/setifi_module.png"],
          description: "A Node.js library used to validate passwords and test their strength complete with documentation and showcase.",
          link: "https://github.com/0x15BA88FF/setifi"
        },
        {
          title: "Discord Meme Bot",
          images: ["/projects/bot_senpai_discord_bot.png"],
          description: "A discord bot designed to scrape memes from the internet and send them on discord.",
        }
      ]
  )
}
