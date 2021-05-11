import { toast } from "react-toastify";

export function isValidEmail(email: string) {
  // eslint-disable-next-line no-useless-escape
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email.match(mailFormat)) {
    toast.error("Tem coisa errada ai! O formato do e-mail está incorreto.");
    return false;
  }

  return true;
}

export function isValidName(name: string) {
  const nameFormat = /^[A-Za-z]+$/;

  if (!name.match(nameFormat)) {
    toast.error("Tem coisa errada ai! O campo nome só aceita letras.");
    return false;
  }

  return true;
}
