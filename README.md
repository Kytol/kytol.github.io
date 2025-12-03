# 🎃 Goblin Realm - skeleton crew - submission for kiroween 👻

> *Where goblins lurk and tasks go bump in the night...*

An Angular monorepo haunted by mischievous creatures and spooky productivity.

## 🦇 Projects

| App | Description |
|-----|-------------|
| 🧌 **Goblin Tasks** | Task management with goblin minions, XP, loot & dark/light themes |
| ⚔️ **Raid Squad** | Mercenary recruitment portal with squads, missions & treasury |
| 📦 **UI-Lib** | Shared component library (buttons, inputs, calendar) |

## 🕸️ Quick Start

```bash
npm install
npm start                                  # 📦 Combined Demo (all 3 views)
npm run start -- --project=goblin-tasks   # 🧌
npm run start -- --project=raid-squad     # ⚔️
```

## 🚀 GitHub Pages Deployment

The combined demo app is automatically deployed via GitHub Actions when you push to `main`.

**Manual build:**
```bash
npm run build:gh-pages
```

**Setup:**
1. Push to GitHub
2. Go to Settings → Pages → Source: "GitHub Actions"
3. The workflow deploys to `https://<username>.github.io/skeleton-crew/`

> Note: Update `baseHref` in `angular.json` if your repo name differs from `skeleton-crew`

## 🪦 Features

- 🌙 Dark/Light theme toggle
- 🎲 Mini-games & gambling
- 🏆 Achievements & leveling
- 💰 Economy & shop system
- 📜 Quest chains
- 🌤️ Dynamic weather effects

## 🔮 Tech Stack

Angular 18 • TypeScript • Signals • Standalone Components

---

*Built with 💀 and a sprinkle of goblin magic*
