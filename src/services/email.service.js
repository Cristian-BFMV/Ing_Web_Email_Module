import sgMail from '@sendgrid/mail';
import config from '../config'

sgMail.setApiKey(config.SENDGRID_API_KEY);

export const sendEmail = async (recipient, dynamicTemplateData, templateId) => {
  try {
    const msg = {
      to: recipient,
      from: 'ccamilo.mendoza@udea.edu.co',
      templateId,
      dynamicTemplateData,
    };
    await sgMail.send(msg);
  } catch (error) {
    throw new Error('Lo sentimos, ha ocurrido un problema');
  }
};
