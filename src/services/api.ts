/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import { Tag } from "../components/Form";
import { isValidEmail, isValidName } from "./util";

interface Card {
  title: string;
  name: string;
  email: string;
  description: string;
  list: string;
}

export const api = axios.create({
  baseURL: `https://api.trello.com/1/`,
});

export async function handleCreateCard(
  card: Card,
  tags: Tag[],
  event: FormEvent
) {
  event.preventDefault();

  if (
    card.title === "" ||
    card.name === "" ||
    card.description === "" ||
    card.list === ""
  ) {
    const notify = () =>
      toast.error("Por favor, Preencha todos os campos obrigatórios");
    notify();
    return;
  }

  const validatedEmail = isValidEmail(card.email);
  const validatedName = isValidName(card.name);

  if (!validatedEmail || !validatedName) return;

  let idList;

  if (card.list === "Iniciado") {
    idList = process.env.REACT_APP_ID_INICIADO;
  }
  if (card.list === "Pendente") {
    idList = process.env.REACT_APP_ID_PENDENTE;
  }
  if (card.list === "Finalizado") {
    idList = process.env.REACT_APP_ID_FINALIZADO;
  }

  let response = await api.post(
    `cards?key=${process.env.REACT_APP_KEY}&token=${process.env.REACT_APP_TOKEN}&idList=${idList}&name=${card.title}&desc=${card.description} - Criado por ${card.name} - ${card.email}`
  );

  if (response.status === 200) {
    const cardId = response.data.id;
    await handleCreateLabel(tags, cardId);
    const notify = () =>
      toast.success("Deu bom! O card foi criado com sucesso");
    notify();
    return;
  } else {
    const notify = () => toast.error("Deu tudo errado! Tente novamente.");
    notify();
    return;
  }
}

export async function handleCreateLabel(tags: Tag[], cardId: number) {
  if (tags.length === 0) return;

  for (let i = 0; i < tags.length; i++) {
    const response = await api.post(
      `cards/${cardId}/labels?key=${process.env.REACT_APP_KEY}&token=${process.env.REACT_APP_TOKEN}&name=${tags[i].name}&color=${tags[i].color}`
    );

    if (response.status !== 200) {
      const notify = () =>
        toast.error(
          `Ih deu ruim, não foi possível criar a tag: ${tags[i].name}`
        );
      notify();
      return;
    }
  }
}
