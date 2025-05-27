export interface Note {
  id: string;
  patientId: string;
  note: string;
  noteDate: string; // ISO format (ex: "2025-05-27")
}