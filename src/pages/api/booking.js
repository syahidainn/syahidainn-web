import { mailOptions, transporter } from "@/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.name ||
      !data.email ||
      !data.KTP ||
      !data.phone ||
      !data.checkIn ||
      !data.checkOut
    ) {
      return res.status(400).json({ message: "Bad Request" });
    }

    try {
      await transporter.sendMail({
        from: mailOptions.from, // Tetap menggunakan email pengirim dari config
        to: data.email, // Menggunakan email user dari body
        subject: data.subject || "Konfirmasi Pemesanan Hotel", // Subjek email
        html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <div>
            <h1 style="font-size: 20px; text-transform: uppercase; margin: 0;">Syahida Inn</h1>
            <p style="font-size: 12px; margin: 0; text-align: center;">Hotel in Ciputat</p>
          </div>
          <h1 style="font-size: 20px; text-transform: uppercase; margin: 0;">Invoice 000-11</h1>
        </div>
        <hr style="border: 1px solid #d4af37; margin: 20px 0;" />
        <h1 style="font-size: 24px; text-align: center; text-decoration: underline;">${data.name}</h1>
        <div style="border: 1px solid #d4af37; padding: 20px; margin: 20px 0;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
              <p style="color: #888;">Check-In</p>
              <p style="color: #000;">Date</p>
            </div>
            <div>
              <p style="color: #888;">Total Length of Stay</p>
              <p style="color: #000;">1 Night</p>
            </div>
            <div>
              <p style="color: #888;">Type Room</p>
              <p style="color: #000;">${data.roomType}</p>
            </div>
            <div>
              <p style="color: #888;">Email</p>
              <p style="color: #000;">${data.email}</p>
            </div>
            <div>
              <p style="color: #888;">Check-Out</p>
              <p style="color: #000;">Date</p>
            </div>
            <div>
              <p style="color: #888;">Total Room</p>
              <p style="color: #000;">1</p>
            </div>
            <div>
              <p style="color: #888;">Phone</p>
              <p style="color: #000;">${data.phone}</p>
            </div>
          </div>
        </div>
        <p style="font-weight: bold; text-transform: uppercase; margin-top: 20px;">Your Price Summary</p>
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 14px; font-weight: bold;">
            <p style="color: #888;">Rooms</p>
            <p style="color: #000;">IDR ${data.roomPrice}</p>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 14px; font-weight: bold;">
            <p style="color: #888;">Extras</p>
            <p style="color: #000;">0</p>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 18px; font-weight: bold; color: #d4af37; text-transform: uppercase;">
            <p>Total Price</p>
            <p>IDR ${data.roomPrice}</p>
          </div>
        </div>
        <div style="margin-top: 20px; text-align: center;">
          <a href="${data.invoiceDownloadLink}" style="padding: 10px 20px; background-color: #d4af37; color: #fff; text-decoration: none; border-radius: 5px;">Download Invoice</a>
        </div>
      </div>
    `,
      });
      await transporter.sendMail({
        from: mailOptions.from,
        to: mailOptions.from,
        subject: data.subject || "Pesanan Masuk",
        text: `Halo ${data.name}, terima kasih telah melakukan pemesanan. Detail Anda:
        - KTP: ${data.KTP}
        - Nomor Telepon: ${data.phone}
        - Check-In: ${data.checkIn}
        - Check-Out: ${data.checkOut}`,
        html: `<p>Halo <strong>${data.name}</strong>,</p>
        <p>Terima kasih telah melakukan pemesanan. Berikut adalah detail Anda:</p>
        <ul>
          <li>KTP: ${data.KTP}</li>
          <li>Nomor Telepon: ${data.phone}</li>
          <li>Check-In: ${data.checkIn}</li>
          <li>Check-Out: ${data.checkOut}</li>
        </ul>
        <p>Semoga Anda menikmati pengalaman menginap bersama kami!</p>`,
      });
      res.status(200).json({ message: "Email berhasil dikirim" });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "Bad Request" });
  }
};

export default handler;
