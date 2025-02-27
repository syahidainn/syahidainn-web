"use server";
import { schemaBooking } from "@/lib/schema";

export default async function Booking(formData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    ktp: formData.get("ktp"),
    phone: formData.get("phone"),
    checkInDate: formData.get("checkInDate"),
    checkOutDate: formData.get("checkOutDate"),
  };

  console.log(data);

  const validate = schemaBooking.safeParse(data);

  console.log(validate);

  if (!validate.success) {
    console.log(validate);
    return {
      error: validate.error.errors.map((err) => err.message),
    };
  }

  return { success: true };
}
