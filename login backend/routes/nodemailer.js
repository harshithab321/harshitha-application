const nodemailer = require("nodemailer");
const Otp=require('./otp')
const sendEmail = async (email, subject, text) => {
    const otp = Otp();
    try {
        const transporter = nodemailer.createTransport({
            host:"smtp.gmail.com",
            service: "gmail",
            port: 587,
            secure: true,
            auth: {
                user: "harshitha.b225@gmail.com",
                pass: "mnzd wbzg fnoo fgnn",
            },
        });

        await transporter.sendMail({
           
            from: "harshitha.b225@gmail.com",
            to: email,
            subject: subject,
            text:otp 
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;