// export const prerender = false;

// import type { APIRoute } from "astro";
// import nodemailer from "nodemailer";

// export const POST: APIRoute = async ({ request }) => {
//   const { name, mail, message } = await request.json();

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: import.meta.env.EMAIL_USER,
//       pass: import.meta.env.EMAIL_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: import.meta.env.EMAIL_USER,
//       to: import.meta.env.EMAIL_USER,
//       subject: `Nuevo Mensaje Desde La WEB de: ${name}`,
//       replyTo: mail,
//       text: message,
//     });

//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//     });
//   } catch (err) {
//     console.error("Error al enviar el mensaje:", err);
//     return new Response(
//       JSON.stringify({
//         success: false,
//         message: "Error interno al enviar el email.",
//       }),
//       {
//         status: 500,
//       }
//     );
//   }
// };
