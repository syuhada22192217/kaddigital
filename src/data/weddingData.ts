export interface ContactPerson {
  name: string;
  relation: string;
  phone: string;
  role: 'groom' | 'bride';
}

export interface AttendeeRecord {
  id: string;
  name: string;
  pax: number;
  status: 'attending' | 'declined';
  time: string;
  side: 'groom' | 'bride';
}

export interface Wish {
  id: string;
  name: string;
  message: string;
  time: string;
  relationship?: string;
}

export const WEDDING_DATA = {
  groom: {
    fullName: "Muhammad Amar Muazzam bin Mohd Sayuni",
    shortName: "Amar",
    father: "Mohd Sayuni bin Endut",
    mother: "Faridah binti Ahmad",
    phone: "60179102340",
  },
  bride: {
    fullName: "Nur Alia Syuhada binti Mustaffa",
    shortName: "Syuhada",
    father: "Mustaffa bin Majid",
    mother: "Wan Eshah binti Wan Muda",
    phone: "60112345678",
  },
  event: {
    title: "Walimatul Urus",
    hashtag: "#AMARriedtoSYU",
    dateFormatted: "Jumaat, 1 Januari 2027",
    dateHijri: "22 Rejab 1448H",
    targetDateISO: "2027-01-01T20:00:00+08:00",
    timeFormatted: "8:00 Malam - 11:00 Malam",
    startTime: "8:00 PM",
    endTime: "11:00 PM",
    venueName: "Dewan Masjid Seberang Takir",
    venueAddress: "Jalan Fikir, 21300 Kampung Seberang Takir, Kuala Terengganu, Terengganu Darul Iman",
    googleMapsUrl: "https://maps.app.goo.gl/Ez7RiFrEjqVQ7V789",
    wazeUrl: "https://waze.com/ul?ll=5.346121,103.135914&navigate=yes",
    latitude: 5.346121,
    longitude: 103.135914,
  },
  itinerary: [
    { time: "8:00 PM", title: "Ketibaan Para Tetamu", desc: "" },
    { time: "11:00 PM", title: "Majlis Bersurai", desc: "" }
  ],
  dressCode: {
    brideSide: "Soft Pink / Bebas",
    groomSide: "Coklat / Bebas",
  },
  initialAttendees: [
    { id: "att-1", name: "Dato' Sri Zamani & Isteri", pax: 2, status: "attending", time: "2 jam lepas", side: "groom" },
    { id: "att-2", name: "Cikgu Hafiz & Cikgu Salina", pax: 4, status: "attending", time: "5 jam lepas", side: "bride" },
    { id: "att-3", name: "Dr. Aiman & Pasangan", pax: 2, status: "attending", time: "Semalam", side: "groom" },
    { id: "att-4", name: "Farah Adila (Keluarga)", pax: 3, status: "attending", time: "Semalam", side: "bride" },
    { id: "att-5", name: "Pak Teh Razak", pax: 2, status: "attending", time: "2 hari lepas", side: "groom" },
    { id: "att-6", name: "Ustaz Hamdan", pax: 1, status: "declined", time: "3 hari lepas", side: "bride" },
  ] as AttendeeRecord[],
  contacts: [
    { name: "Bapa Pengantin Lelaki", relation: "Bapa Pengantin Lelaki", phone: "0129534254", role: "groom" },
    { name: "Ibu Pengantin Perempuan", relation: "Ibu Pengantin Perempuan", phone: "0139392745", role: "bride" },
    { name: "Pengantin Lelaki (Amar)", relation: "Pengantin Lelaki", phone: "0193186512", role: "groom" },
    { name: "Pengantin Perempuan (Syuhada)", relation: "Pengantin Perempuan", phone: "01123448571", role: "bride" },
  ] as ContactPerson[],
  giftAccounts: [
    {
      bankName: "Maybank",
      accountNumber: "163019842100",
      holderName: "MUHAMMAD AMAR MUAZZAM",
      type: "Bank Transfer",
    },
    {
      bankName: "Bank Islam",
      accountNumber: "13017020849201",
      holderName: "NUR ALIA SYUHADA BINTI MUSTAFFA",
      type: "Bank Transfer",
    },
    {
      bankName: "DuitNow QR",
      accountNumber: "0179102340",
      holderName: "AMAR & SYUHADA WALIMATUL URUS",
      type: "DuitNow / Touch 'n Go eWallet",
    }
  ],
  initialWishes: [] as Wish[]
};
