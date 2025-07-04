import axios from "../types/axios";
import { CreateAppointmentDto } from "../types/orderDtos/appointmentDtos";
import { GenericResponse } from "../types/Shared/sharedDtos";

export const appointmentController = {
  CreateAppointmentAsync: async (
    createAppointmentDto: CreateAppointmentDto
  ) => {
    const response = await axios.post<GenericResponse<number>>(
      `/Appointment`,
      createAppointmentDto
    );
    return response.data;
  },
  GetAllUserAppointmentsAsync: async (userId: string) => {
    const response = await axios.get(
      `/Appointment/GetAllUserAppointmentsAsync/${userId}`
    );
    return response.data;
  },
};

export default appointmentController;
