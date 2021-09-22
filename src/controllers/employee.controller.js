import { sendEmail } from '../services/email.service';
import config from '../config';

const templateId = config.NEW_EMPLOYEE_TEMPLATE_ID;

export const employeeSignUp = async (req, res) => {
  const { employee_id, name, employee_email } = req.body;
  try {
    const dynamicTemplateData = {
      subject: 'Bienvenido',
      employee_id,
      name,
    };
    await sendEmail(employee_email, dynamicTemplateData, templateId);
    return res.status(200).json({ message: 'Email enviado' });
  } catch (error) {
    return res.status(500).json({ message: 'Lo sentimos, ha ocurrido un problema' });
  }
};

export const employeeTest = (req, res) => {
  const { id } = req.params;

  return res.status(200).json({ message: `id ${id}` });
};
