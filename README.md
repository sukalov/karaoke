# karaoke songbook app

web app for choosing songs. connected to a [telegram bot](https://github.com/sukalov/karaokebot), where users choose songs and wait for their turn

may be used as a template for a simple catalogue web app:

- [next 15.1](https://nextjs.org/)
- [react 19 + react compiler](https://react.dev/learn/react-compiler)
- fully responsive
- fuzzy search
- styled with [shadcn ui](https.ui.shadcn.com)
- [drizzle orm](https://orm.drizzle.team/)

deployment script builds two branches of the project: `main` and `songbook`. while main branch has connection to telegram bot, songbook branch is a simple catalogue where links are direct links to song chords
