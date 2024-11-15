export default function handler(req, res) {
  res.status(200).json(
     [
        {
          name: "Blogr Landing Page",
          images: ["/projects/blogr_landing_page.png"],
          description: "A simple langing page designed for the frontend mentors frontend training and challenge website.",
        },
        {
          name: "Redwood.js Website",
          images: ["/projects/redwook_js_website.png"],
          description: "Contibutions to the development or the redwood js frontend development framework.",
        },
        {
          name: "Visual Json",
          images: ["/projects/visual_json.png"],
          description: "A simple development tool i built and use to run GET requests and represent JSON respones into a graphical tree.",
          link: 'https://github.com/0x15BA88FF/Visual-JSON'
        },
        {
          name: "Setifi",
          images: ["/projects/setifi_module.png"],
          description: 'A node package to make your data certification easier and secure users from brute force attacks, used to validate passwords and test their strength complete with documentation and showcase.',
          link: "https://github.com/0x15BA88FF/setifi"
        },
        {
          name: "Discord Meme Bot",
          images: ["/projects/bot_senpai_discord_bot.png"],
          description: "A discord bot designed to scrape memes from the internet and send them on discord.",
        }
      ]
  )
}

//  {
//    name: 'color-versioning',
//    description: 'No description provided.',
//    link: 'https://github.com/0x15BA88FF/color-versioning'
//  },
//  {
//    name: 'devault',
//    description: 'Manage local projects and repositories like a git server',
//    link: 'https://github.com/0x15BA88FF/devault'
//  },
//  {
//    name: 'karaoke.py',
//    description: 'Karaoke is a lightweight Python library designed to facilitate interactions with song LRC (Lyric) files.',
//    link: 'https://github.com/0x15BA88FF/karaoke.py'
//  },
//  {
//    name: 'Presec-AI-Companion',
//    description: 'No description provided.',
//    link: 'https://github.com/0x15BA88FF/Presec-AI-Companion'
//  },
//  {
//    name: 'thalamus',
//    description: 'A LLM driven engine that performs actions and commands',
//    link: 'https://github.com/0x15BA88FF/thalamus'
//  },
//  {
//    name: 'Workin',
//    description: 'No description provided.',
//    link: 'https://github.com/0x15BA88FF/Workin'
//  },
//  {
//    name: 'yt-data-drive',
//    description: 'Command-line tool designed to efficiently encode and decode files for video archiving.',
//    link: 'https://github.com/0x15BA88FF/yt-data-drive'
//  }
