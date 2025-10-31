import React, { useState } from "react";

export default function CommunityBanAppealTab() {
  const [formData, setFormData] = useState({
    mcName: "",
    discord: "",
    email: "",
    banReason: "",
    appealReason: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sende...");

    try {
      const res = await fetch(
        "https://discord.com/api/webhooks/1429147388043333794/sdlGV4zxI82KrwuFz9gzaJ3E1cZ8nwj7AkMDrfNxZMjv_rYLE98bdzcxszSSy-6RXdvY",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: "BBHF Ban-Appeal",
            embeds: [
              {
                title: "📝 Neuer Ban-Appeal",
                color: 0x2ecc71,
                fields: [
                  {
                    name: "Minecraft-Name",
                    value: formData.mcName || "n/a",
                    inline: true,
                  },
                  {
                    name: "Discord",
                    value: formData.discord || "n/a",
                    inline: true,
                  },
                  {
                    name: "E-Mail",
                    value: formData.email || "n/a",
                    inline: true,
                  },
                  {
                    name: "Grund des Banns",
                    value: formData.banReason || "Nicht angegeben",
                    inline: false,
                  },
                  {
                    name: "Begründung für Entbannung",
                    value: formData.appealReason || "Keine angegeben",
                    inline: false,
                  },
                ],
                timestamp: new Date().toISOString(),
              },
            ],
          }),
        }
      );

      if (res.ok) {
        setStatus("✅ Antrag erfolgreich gesendet! Danke!");
        setFormData({
          mcName: "",
          discord: "",
          email: "",
          banReason: "",
          appealReason: "",
        });
      } else {
        setStatus("❌ Fehler beim Senden. Bitte später erneut versuchen.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Verbindung fehlgeschlagen.");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto text-left bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white">Ban-Appeal</h2>

      <p className="text-slate-300 mb-4">
        Wenn du auf unserem Discord oder Minecraft-Netzwerk gebannt wurdest,
        kannst du hier einen Antrag auf Entbannung stellen.
      </p>

      <p className="text-red-400 mb-6 text-sm font-semibold">
        ⚠️ Hinweis: Dieser Antrag kann <u>nur einmal</u> gestellt werden.
        Bei einem wiederholten Bann wird eine erneute Aufhebung dauerhaft abgelehnt.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label>
          <span className="font-semibold text-white">
            Minecraft-Name <span className="text-sky-400">*</span>
          </span>
          <input
            name="mcName"
            value={formData.mcName}
            onChange={handleChange}
            required
            className="w-full bg-slate-900/70 text-white border border-slate-700 rounded-xl p-3 placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 outline-none"
            placeholder="z.B. DeinSpielername"
          />
        </label>

        <label>
          <span className="font-semibold text-white">
            Discord <span className="text-sky-400">*</span>
          </span>
          <input
            name="discord"
            value={formData.discord}
            onChange={handleChange}
            required
            className="w-full bg-slate-900/70 text-white border border-slate-700 rounded-xl p-3 placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 outline-none"
            placeholder="z.B. @username oder name"
          />
        </label>

        <label>
          <span className="font-semibold text-white">E-Mail (optional)</span>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-900/70 text-white border border-slate-700 rounded-xl p-3 placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 outline-none"
            placeholder="z.B. name@example.com"
          />
        </label>

        <label>
          <span className="font-semibold text-white">
            Grund des Banns <span className="text-sky-400">*</span>
          </span>
          <input
            name="banReason"
            value={formData.banReason}
            onChange={handleChange}
            required
            className="w-full bg-slate-900/70 text-white border border-slate-700 rounded-xl p-3 placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 outline-none"
            placeholder="z.B. Beleidigung, Spam, etc."
          />
        </label>

        <label>
          <span className="font-semibold text-white">
            Warum sollten wir dich entbannen?{" "}
            <span className="text-sky-400">*</span>
          </span>
          <textarea
            name="appealReason"
            value={formData.appealReason}
            onChange={handleChange}
            required
            rows={5}
            className="w-full bg-slate-900/70 text-white border border-slate-700 rounded-xl p-3 placeholder-slate-500 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200 outline-none resize-none"
            placeholder="Beschreibe ehrlich, warum du eine zweite Chance verdient hast..."
          />
        </label>

        <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-md"
        >
          Antrag absenden
        </button>

        {status && <p className="text-sm text-slate-400 mt-2">{status}</p>}
      </form>
    </div>
  );
}
