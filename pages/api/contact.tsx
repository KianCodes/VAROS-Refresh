import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer, { Transporter } from 'nodemailer';

export default function (req: NextApiRequest,  res: NextApiResponse) { 
    require('dotenv').config()
    let transporter: Transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
        user: 'varostech@gmail.com',
        pass: process.env.password,
        },
        secure: true,
    });

    let options = {
        from: `varostech@gmail.com`,
        to: 'contact@varostech.com',
        subject: `VAROSTech.com Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div><p><b>Subject: </b>${req.body.subject}</p></div><div><p><b>Body:</b><div>${req.body.message}</div></p></div><p>Sent from:
        ${req.body.email}</p>`
    };

    transporter.sendMail(options, (err,data) => {
        if(err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success mail sent'
            })
        }
    })
}