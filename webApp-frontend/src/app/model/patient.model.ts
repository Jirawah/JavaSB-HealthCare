export interface Patient {
  id: number;
  prenom: string;
  nom: string;
  birthday: string; // ISO date string (ex: "2025-04-30")
  gender: string;
  phone: string;
  address: string;
  email: string;
}
