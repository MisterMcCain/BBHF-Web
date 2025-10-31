export const initialCommunityEvents = [];

const roleOrder = [
  'Inhaber & Development',
  'Stellvertretung',
  'Stellvertretung & Development',
  'Development',
  'Management & Development',
  'Management & Eventleitung',
  'Teamleitung',
  'Admin',
  'Mod-Leitung',
  'Moderator',
  'Eventleitung',
  'Supporter'
];

export let teamMembersData = [
  { id: 1, name: 'MisterMcCain (McOpi)', role: 'Inhaber & Development', joinDate: '∞', avatar: 'MM' },
  { id: 4, name: 'LKO', role: 'Stellvertretung & Development', joinDate: '13.12.2024', avatar: 'LK' },
  { id: 20, name: 'Nico', role: 'Management & Development', joinDate: '21.07.2025', avatar: 'NI' },
  { id: 20, name: 'Tom', role: 'Development', joinDate: '18.02.2025', avatar: 'TO' },
  { id: 22, name: 'Flixses', role: 'Management & Eventleitung', joinDate: '21.06.2025', avatar: 'FX' },
  { id: 12, name: 'Nachtmahr', role: 'Teamleitung', joinDate: '05.10.2024', avatar: 'NM' },
  { id: 26, name: 'Gabriel', role: 'Mod-Leitung', joinDate: '16.08.2025', avatar: 'GA' },
  { id: 6, name: 'Bomboclaat', role: 'Teamleitung', joinDate: '06.09.2024', avatar: 'BC' },
  { id: 14, name: 'Sandevistan', role: 'Moderator', joinDate: '10.09.2024', avatar: 'SV' },
  { id: 15, name: 'Justice', role: 'Moderator', joinDate: '04.07.2025', avatar: 'JU' },
  { id: 26, name: 'Bene', role: 'Supporter', joinDate: '27.05.2025', avatar: 'BE' },
  { id: 26, name: 'Rias', role: 'Supporter', joinDate: '10.09.2025', avatar: 'RI' },
];

teamMembersData.sort((a, b) => {
  const roleAIndex = roleOrder.indexOf(a.role);
  const roleBIndex = roleOrder.indexOf(b.role);
  
  if (roleAIndex === -1 && roleBIndex === -1) return 0;
  if (roleAIndex === -1) return 1;
  if (roleBIndex === -1) return -1;

  if (roleAIndex === roleBIndex) {
    if (a.joinDate === '∞') return -1;
    if (b.joinDate === '∞') return 1;
    const datePartsA = a.joinDate.split('.');
    const datePartsB = b.joinDate.split('.');
    const dateA = new Date(`${datePartsA[2]}-${datePartsA[1]}-${datePartsA[0]}`);
    const dateB = new Date(`${datePartsB[2]}-${datePartsB[1]}-${datePartsB[0]}`);
    return dateA - dateB;
  }
  return roleAIndex - roleBIndex;
});

export const communityRules = [
  {
    id: 1,
    title: '§1 ᕁ 📚 ALLGEMEINES',
    description: 'Die Moderatoren & andere Teammitglieder haben das letzte Wort! Du darfst nur mit einem Account auf dem Server sein ...',
  },
  {
    id: 2,
    title: '§2 ᕁ 🗯️ VERHALTEN IN TEXT-& SPRACHKANÄLEN',
    description: 'Behandle alle Mitglieder respektvoll. Wir tolerieren keine Streitigkeiten oder andere toxische Inhalte ...',
  },
  {
    id: 3,
    title: '§3 ᕁ 📜 Discord Richtlinien',
    description:
      'Auf diesem Server gelten uneingeschränkt die offiziellen <a href="https://discord.com/terms" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300 underline">Discord Nutzungsbedingungen</a> ...',
  },
  {
    id: 4,
    title: '§4 ᕁ 👤 Profil- & Bio-Regel',
    description: 'Das Profil jedes Members muss unseren Community-Regeln entsprechen ...',
  },
  {
    id: 5,
    title: '§5 ᕁ ♀ Schutz aller Mitglieder',
    description: 'Jegliche Form von respektlosem Verhalten gegenüber Mitgliedern ist untersagt ...',
  },
  {
    id: 6,
    title: 'Mit der Teilnahme an unserem Discord erklärst du dich mit diesem Regelwerk einverstanden!',
    description: '',
  },
];
