import { useState, useEffect } from 'react';

// 11 Hosting-Pläne
const hostingPlans = [
  { name: 'ES1', price: '3,49€', ram: '2 GB DDR4 RAM', cpu: '1 vCore (AMD EPYC™)', storage: '30 GB NVMe SSD' },
  { name: 'ES2', price: '4,99€', ram: '4 GB DDR4 RAM', cpu: '2 vCores (AMD EPYC™)', storage: '50 GB NVMe SSD' },
  { name: 'ES3', price: '7,99€', ram: '8 GB DDR4 RAM', cpu: '4 vCores (AMD EPYC™)', storage: '75 GB NVMe SSD' },
  { name: 'ES4', price: '12,99€', ram: '16 GB DDR4 RAM', cpu: '4 vCores (AMD EPYC™)', storage: '100 GB NVMe SSD' },
  { name: 'ES5', price: '21,99€', ram: '24 GB DDR4 ECC RAM', cpu: '6 vCores (AMD EPYC™)', storage: '150 GB NVMe SSD' },
  { name: 'ES6', price: '28,99€', ram: '32 GB DDR4 ECC RAM', cpu: '6 vCores (AMD EPYC™)', storage: '200 GB NVMe SSD' },
  { name: 'ES7', price: '38,99€', ram: '48 GB DDR4 ECC RAM', cpu: '8 vCores (AMD EPYC™)', storage: '250 GB NVMe SSD' },
  { name: 'ES8', price: '46,99€', ram: '64 GB DDR4 ECC RAM', cpu: '10 vCores (AMD EPYC™)', storage: '300 GB NVMe SSD' },
  { name: 'ES9', price: '54,99€', ram: '72 GB DDR4 ECC RAM', cpu: '12 vCores (AMD EPYC™)', storage: '350 GB NVMe SSD' },
  { name: 'ES10', price: '74,99€', ram: '96 GB DDR4 ECC RAM', cpu: '14 vCores (AMD EPYC™)', storage: '400 GB NVMe SSD' },
  { name: 'ES11', price: '94,99€', ram: '128 GB DDR4 ECC RAM', cpu: '16 vCores (AMD EPYC™)', storage: '500 GB NVMe SSD' },
];

// Unterstützte Spiele
const supportedGames = [
  { name: 'Minecraft', icon: '🧱' },
  { name: 'Valheim', icon: '⚔️' },
  { name: 'ARK: Survival Evolved', icon: '🦖' },
  { name: 'Rust', icon: '🏚️' },
  { name: 'Counter-Strike 2', icon: '🔫' },
  { name: 'Terraria', icon: '⛏️' },
  { name: 'Factorio', icon: '⚙️' },
  { name: 'Satisfactory', icon: '🏭' },
  { name: 'Palworld', icon: '🐾' },
  { name: 'Sons of the Forest', icon: '🌲' },
  { name: 'Arma 3', icon: '🚁' },
  { name: "Garry's Mod", icon: '🎈' },
];

// Ressourcenempfehlungen
const gameRequirements = {
  'Minecraft': { cpu: '2 vCores', ram: '4–8 GB', storage: '5 GB SSD', plan: 'ES3' },
  'Valheim': { cpu: '2 vCores', ram: '4 GB', storage: '3 GB SSD', plan: 'ES2' },
  'ARK: Survival Evolved': { cpu: '6 vCores', ram: '16 GB', storage: '20 GB SSD', plan: 'ES5' },
  'Rust': { cpu: '4 vCores', ram: '8 GB', storage: '10 GB SSD', plan: 'ES4' },
  'Counter-Strike 2': { cpu: '4 vCores', ram: '6 GB', storage: '15 GB SSD', plan: 'ES3' },
  'Terraria': { cpu: '1 vCore', ram: '2 GB', storage: '2 GB SSD', plan: 'ES1' },
  'Factorio': { cpu: '2 vCores', ram: '2 GB', storage: '2 GB SSD', plan: 'ES1' },
  'Satisfactory': { cpu: '4 vCores', ram: '8 GB', storage: '10 GB SSD', plan: 'ES4' },
  'Palworld': { cpu: '6 vCores', ram: '16 GB', storage: '25 GB SSD', plan: 'ES6' },
  'Sons of the Forest': { cpu: '6 vCores', ram: '16 GB', storage: '20 GB SSD', plan: 'ES6' },
  'Arma 3': { cpu: '4 vCores', ram: '8 GB', storage: '15 GB SSD', plan: 'ES4' },
  "Garry's Mod": { cpu: '2 vCores', ram: '4 GB', storage: '5 GB SSD', plan: 'ES2' },
};

export default function GameSelector() {
  const [selectedGame, setSelectedGame] = useState(null);
  const game = selectedGame ? gameRequirements[selectedGame] : null;
  const recommendedPlan = hostingPlans.find((p) => p.name === game?.plan);

  // Event zum Öffnen des Custom Server Modals
  const handleConfigureClick = () => {
    const event = new CustomEvent("openCustomServerModal", {
      detail: { spiel: selectedGame, plan: game?.plan },
    });
    window.dispatchEvent(event);
  };

  return (
    <div className="text-center">
      {/* Spiele-Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {supportedGames.map((g) => (
          <button
            key={g.name}
            onClick={() => setSelectedGame(g.name)}
            className="bg-slate-800/80 text-white rounded-2xl p-5 flex flex-col items-center justify-center
                       border border-slate-700/70 shadow-lg hover:shadow-sky-500/30 hover:border-sky-400/60
                       transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
              {g.icon}
            </div>
            <span className="text-sm md:text-base font-medium">{g.name}</span>
          </button>
        ))}
      </div>

      {/* Info-Modal */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-slate-900 p-6 rounded-2xl shadow-[0_0_25px_rgba(56,189,248,0.2)] w-11/12 md:w-1/2 border border-sky-500/30 relative">
            <button
              className="absolute top-3 right-4 text-slate-400 hover:text-white text-2xl"
              onClick={() => setSelectedGame(null)}
            >
              ×
            </button>

            <h3 className="text-xl font-bold mb-4 text-sky-400">{selectedGame}</h3>
            {game ? (
              <>
                <ul className="text-slate-300 mb-6 space-y-1">
                  <li><strong>CPU:</strong> {game.cpu}</li>
                  <li><strong>RAM:</strong> {game.ram}</li>
                  <li><strong>Speicher:</strong> {game.storage}</li>
                </ul>

                {recommendedPlan && (
                  <div className="bg-slate-800/60 border border-sky-400/20 rounded-xl p-4 mb-5">
                    <p className="text-slate-400 text-sm mb-1">💡 Empfohlener Hosting-Plan:</p>
                    <h4 className="text-lg font-semibold text-sky-400">
                      {recommendedPlan.name} – {recommendedPlan.price}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {recommendedPlan.cpu}, {recommendedPlan.ram}, {recommendedPlan.storage}
                    </p>
                  </div>
                )}

                <button
                  onClick={handleConfigureClick}
                  className="bg-gradient-to-r from-sky-600 to-cyan-500 hover:from-sky-500 hover:to-cyan-400
                             px-6 py-3 rounded-lg font-semibold text-white w-full transition-all shadow-lg"
                >
                  🚀{" "}
                  {recommendedPlan
                    ? `${recommendedPlan.name} jetzt konfigurieren`
                    : "Server bestellen"}
                </button>
              </>
            ) : (
              <p className="text-slate-300">Keine Daten verfügbar.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
