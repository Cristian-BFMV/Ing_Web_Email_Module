import { sendEmail } from '../services/email.service';
import config from '../config';

const templateId = config.GUEST_TOKEN_TEMPLATE_ID;

export const guestController = async (req, res) => {
  const { token, guest_email } = req.body;
  try {
    const dynamicTemplateData = {
      token,
    };
    await sendEmail(guest_email, dynamicTemplateData, templateId);
    return res.status(200).json({ message: 'Email enviado' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};
