
export const AVATAR_PATHS = {
  "Ahmet Demir": "/images/avatars/ahmet-demir.png",
  "Barış Yeşil": "/images/avatars/baris-yesil.png",
  "Nihat Uçar": "/images/avatars/nihat-ucar.png",
  "Hatice Sarı": "/images/avatars/hatice-sari.png",
  "Arda Beyaz": "/images/avatars/arda-beyaz.png",
  "Emine Kırmızı": "/images/avatars/emine-kirmizi.png",
  "Zeki Yılmaz": "/images/avatars/zeki-yilmaz.png",
  "Ayşe Aslan": "/images/avatars/ayse-aslan.png",
  default: "/images/avatars/default-avatar.png",
};
export const ICON_PATHS = {
  warning: "/images/icons/warning.png",
  chat: "/images/icons/chat.png",
  problem: "/images/icons/problem.png",
};

export const EMPLOYEES_DATA = {
  "Servis Ekibi": [
    {
      id: 1,
      name: "Ahmet Demir",
      position: "Garson",
      schedule: "09:05 - 17:32",
      totalHours: "7sa 57dk",
      unpaidBreak: "33dk",
      paidBreak: "12dk",
      status: null,
    },
    {
      id: 2,
      name: "Barış Yeşil",
      position: "Aşçı Yrd.",
      schedule: "--:--",
      totalHours: "0sa 00dk",
      unpaidBreak: "0dk",
      paidBreak: "0dk",
      status: "Gelmedi/devamsız",
    },
    {
      id: 3,
      name: "Nihat Uçar",
      position: "Bulaşıkçı",
      schedule: "08:51 --:--",
      totalHours: "0sa 00dk",
      unpaidBreak: "28dk",
      paidBreak: "0dk",
      status: "Çıkış yok",
    },
  ],
  "Mutfak Ekibi": [
    {
      id: 4,
      name: "Hatice Sarı",
      position: "Garson",
      schedule: "09:20-17:10",
      totalHours: "7sa 20dk",
      unpaidBreak: "32dk",
      paidBreak: "0dk",
      status: "Geç giriş, Erken çıkış",
    },
    {
      id: 5,
      name: "Arda Beyaz",
      position: "Kasiyer",
      schedule: "09:02-17:30",
      totalHours: "7sa 58dk",
      unpaidBreak: "0dk",
      paidBreak: "0dk",
      status: "2 mola kullanılmadı",
    },
    {
      id: 6,
      name: "Emine Kırmızı",
      position: "Garson",
      schedule: "09:13-17:30",
      totalHours: "7sa 47dk",
      unpaidBreak: "30dk",
      paidBreak: "0dk",
      status: "Plan dışı giriş",
      message:
        'Emine\'den mesaj var: "Maalesef benim mesaimi girmeyi unutmuşsunuz kendim başlatım"',
    },
  ],
  "İdari İşler": [
    {
      id: 7,
      name: "Zeki Yılmaz",
      position: "Depo sorumlusu",
      schedule: "09:02 - 17:32",
      totalHours: "8sa 00dk",
      unpaidBreak: "30dk",
      paidBreak: "12dk",
      status: null,
    },
    {
      id: 8,
      name: "Ayşe Aslan",
      position: "Muhasebe",
      schedule: "09:02 - 17:30",
      totalHours: "7sa 58dk",
      unpaidBreak: "30dk",
      paidBreak: "10dk",
      status: "Otomatik çıkış yapıldı",
    },
  ],
};

export const DEPARTMENT_OPTIONS = [
  { value: "", label: "Tüm departmanlar" },
  { value: "servis", label: "Servis Ekibi" },
  { value: "mutfak", label: "Mutfak Ekibi" },
  { value: "idari", label: "İdari İşler" },
];

export const ROLE_OPTIONS = [
  { value: "", label: "Tüm roller" },
  { value: "garson", label: "Garson" },
  { value: "asci", label: "Aşçı" },
  { value: "kasiyer", label: "Kasiyer" },
  { value: "muhasebe", label: "Muhasebe" },
];

export const getTotalEmployees = () => {
  return Object.values(EMPLOYEES_DATA).flat().length;
};

export const getTeamEmployeeCount = (teamName) => {
  return EMPLOYEES_DATA[teamName]?.length || 0;
};
export const getEmployeeAvatar = (employee) => {
  return AVATAR_PATHS[employee.name] || AVATAR_PATHS.default;
};
