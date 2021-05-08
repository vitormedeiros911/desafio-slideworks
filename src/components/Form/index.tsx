import { useState, FormEvent } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

import { handleCreateCard } from "../../services/api";

import { TagItem } from "../TagItem";

import { Container, Row, RadioBox } from "./styles";

export interface Tag {
  id: number;
  name: string;
}

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState<Tag>({ id: 0, name: "" });
  const [tags, setTags] = useState<Tag[]>([]);
  const [list, setList] = useState("");

  function handleAddTag(tag: Tag) {
    const foundTag = tags.find((foundTag) => foundTag.name === tag.name);

    if (tag.name && !foundTag) {
      setTag({ id: 0, name: "" });
      setTags([...tags, tag]);
    } else {
      const notify = () =>
        toast.error("Ih, deu ruim! Essa tag já foi adicionada.");
      notify();
      return;
    }
  }

  function handleDeleteTag(id: number) {
    const filteredTags = tags.filter((tag) => tag.id !== id);
    setTags(filteredTags);
  }

  async function callCreateCard(event: FormEvent) {
    await handleCreateCard({ name, email, description, list }, tags, event);

    setDescription("");
    setEmail("");
    setList("");
    setName("");
    setTag({ id: 0, name: "" });
    setTags([]);
  }

  return (
    <Container>
      <h2>Criar Card no Trello</h2>

      <Row numberOfColumns={2}>
        <div className="inputContainer">
          <h3>Nome *</h3>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
        </div>
        <div className="inputContainer">
          <h3>E-mail *</h3>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
      </Row>

      <h3>Descrição *</h3>
      <textarea
        name="descricao"
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Digite a descrição do card..."
        value={description}
        required
      />
      <h3>Adicionar Tags</h3>
      <Row numberOfColumns={2}>
        <input
          type="text"
          maxLength={10}
          placeholder="Ex: React"
          value={tag.name}
          onChange={(event) =>
            setTag({ name: String(event.target.value), id: Math.random() })
          }
        />
        <button
          className="add-btn"
          type="button"
          onClick={() => handleAddTag(tag)}
        >
          <FaPlus color="#fff" size={20} />
        </button>
      </Row>
      <Row numberOfColumns={4}>
        {tags.map((tag) => (
          <TagItem
            key={String(Math.random())}
            tagTitle={tag.name}
            onClick={() => handleDeleteTag(tag.id)}
          />
        ))}
      </Row>

      <h3>Status da tarefa</h3>
      <Row numberOfColumns={3}>
        <RadioBox
          type="button"
          onClick={() => setList("Iniciado")}
          isActive={list === "Iniciado"}
          activeColor="blue"
        >
          <span>Iniciado</span>
        </RadioBox>
        <RadioBox
          type="button"
          onClick={() => setList("Pendente")}
          isActive={list === "Pendente"}
          activeColor="red"
        >
          <span>Pendente</span>
        </RadioBox>
        <RadioBox
          type="button"
          onClick={() => setList("Finalizado")}
          isActive={list === "Finalizado"}
          activeColor="green"
        >
          <span>Finalizado</span>
        </RadioBox>
      </Row>
      <button
        type="submit"
        onClick={(event) => {
          callCreateCard(event);
        }}
      >
        Cadastrar
      </button>
    </Container>
  );
}
