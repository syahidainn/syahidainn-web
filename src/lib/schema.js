import { z } from "zod";

export const schemaBooking = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  ktp: z.string().min(1, { message: "Identity number is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  checkInDate: z.coerce?.date({ message: "Check-in date is required" }),
  checkOutDate: z.coerce?.date({ message: "Check-out date is required" }),
});
