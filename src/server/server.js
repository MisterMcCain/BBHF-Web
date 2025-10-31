import express from "express";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Datenordner für lokale Speicherung
const DATA_DIR = path.resolve("./data");
const APPEALS_FILE = path.join(DATA_DIR, "appeals.json");

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(APPEALS_FILE)) fs.writeFileSync(APPEALS_FILE, "[]");

const WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

// API-Route: POST /api/banappeal
app.post("/api/banappeal", async (req, res) => {
  const { mcName, discord, email, banReason, appealReason } = req.body || {};

  if (!mcName || !discord || !banReason || !appealReason) {
    return res.status(422).json({ error: "Bitte alle Pflichtfelder ausfüllen." });
  }

  const norm = (s) => String(s).trim().toLowerCase();
  const mcNorm = norm(mcName);
  const discordNorm = norm(discord);

  const appeals = JSON.parse(fs.readFileSync(APPEALS_FILE, "utf8"));
  const exists = appeals.find(
    (a) => norm(a.mcName) === mcNorm || norm(a.discord) === discordNorm
  );

  if (exists) {
    return res.status(409).json({
      error: "Ein Antrag wurde bereits gestellt. Wiederholte Anträge sind nicht erlaubt.",
    });
  }

  const payload = {
    username: "BBHF Ban-Appeal",
    embeds: [
      {
        title: "📝 Neuer Ban-Appeal",
        color: 0x2ecc71,
        fields: [
          { name: "Minecraft-Name", value: mcName, inline: true },
          { name: "Discord", value: discord, inline: true },
          { name: "E-Mail", value: email || "Keine angegeben", inline: true },
          { name: "Grund des Banns", value: banReason, inline: false },
          { name: "Begründung für Entbannung", value: appealReason, inline: false },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    const resp = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      console.error("Discord error:", await resp.text());
      return res.status(502).json({ error: "Fehler beim Senden an Discord." });
    }

    // Speichere lokale Kopie
    appeals.push({
      id: Date.now(),
      createdAt: new Date().toISOString(),
      mcName,
      discord,
      email,
      banReason,
      appealReason,
    });
    fs.writeFileSync(APPEALS_FILE, JSON.stringify(appeals, null, 2));

    res.json({ ok: true });
  } catch (err) {
    console.error("API error:", err);
    res.status(500).json({ error: "Serverfehler" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server läuft auf Port ${PORT}`);
});
