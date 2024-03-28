const {main, transporter} =require('./nodemailer')
const sendEmail=require('./nodemailer')
exports. Login= (req,res)=>{
    try{
        console.log("hello")
        const {email,password}=req.body
        if((!email)&& (!password)){
            res.status(401).send("not provided the required fileds")
        }
        else{
            res.status(200).send("login sucessfull")
        }
    }
    catch(error){
        res.status(400).send(error)
    }
    
}

exports.Registration = (req, res) => {
    try {
        // Extract required fields from request body
        const { email, phone, password, confirm } = req.body;
        
        // Check if any required field is missing
        if (!phone || !password || !confirm || !email) {
            // Respond with error status code and message
            return res.status(400).json({ error: "Required fields are not provided" });
        }

        // Here you would typically perform the actual registration logic
        // such as saving the user to a database
        // For now, let's just send a success message
        res.status(200).json({ message: "Registration successful" });
    } catch (error) {
        // If any error occurs, respond with error status code and message
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

    exports. ForgotPassword=async(req,res)=>{
        try{
           
            const { email } = req.body;
            const{otp}=req.body
            if (!email || typeof email !== 'string' || !email.trim()) {
                return res.status(400).send("Invalid email provided");
            }
            else{
                
                const link = `${process.env.BASE_URL}/password-reset`;
                await sendEmail(email, "Password reset", link);
                if(!otp){
                    console.log("not provided proper otp")
                }
            }
        }
        catch(error){
            console.error("Error in ForgotPassword function:", error);
            res.status(500).send("Internal server error");

        }

    }

