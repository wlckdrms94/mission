const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let items = [
  {
    id: 1,
    name: "Broad Sword",
    description: "A versatile weapon for close combat.",
    recipe: "Iron Bar x3, Wood Plank x2"
  },
  {
    id: 2,
    name: "Mage Staff",
    description: "A powerful staff for casting spells.",
    recipe: "Silver Bar x2, Enchanted Wood x1"
  },
  {
    id: 3,
    name: "Leather Armor",
    description: "Protective armor made of tough leather.",
    recipe: "Leather x5, Iron Bar x2"
  }
];

let builds = [
  {
    id: 1,
    name: "Warrior Build",
    description: "A build focused on melee combat with high defense."
  },
  {
    id: 2,
    name: "Mage Build",
    description: "A build that maximizes spell casting abilities."
  },
  {
    id: 3,
    name: "Ranger Build",
    description: "A build optimized for ranged attacks and mobility."
  }
];

let parties = [
  {
    id: 1,
    title: "Dungeon Run",
    members: "5 members"
  },
  {
    id: 2,
    title: "PvP Squad",
    members: "10 members"
  },
  {
    id: 3,
    title: "Raid Team",
    members: "20 members"
  }
];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/builds', (req, res) => {
  res.json(builds);
});

app.post('/api/builds', (req, res) => {
  const newBuild = { id: builds.length + 1, ...req.body };
  builds.push(newBuild);
  res.json(newBuild);
});

app.get('/api/parties', (req, res) => {
  res.json(parties);
});

app.post('/api/parties', (req, res) => {
  const newParty = { id: parties.length + 1, ...req.body };
  parties.push(newParty);
  res.json(newParty);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
