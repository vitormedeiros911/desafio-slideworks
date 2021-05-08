import { toast } from "react-toastify";

export function isEmail(email: string) {
  // eslint-disable-next-line no-useless-escape
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email.match(mailFormat)) {
    const notify = () =>
      toast.error("Não tá funcionando! O formato do e-mail está incorreto.");
    notify();
    return false;
  }

  return true;
}
