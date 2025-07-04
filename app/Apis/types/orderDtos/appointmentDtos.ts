export interface CreateAppointmentDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  concerns: string;
  medicalHistory?: string;
  termsAccepted: boolean;
  userId?: string;
}

export interface GetAppointmentDto {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  concerns: string;
  medicalHistory?: string;
  termsAccepted: boolean;
  userId?: string;
  status?: "pending" | "confirmed" | "completed" | "cancelled";
  createdAt?: string;
  updatedAt?: string;
}
