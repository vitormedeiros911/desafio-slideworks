import { useState, FormEvent } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

import { handleCreateCard } from "../../services/api";

import { TagItem } from "../TagItem";

import { Container, Row, RadioBox } from "./styles";

export interface Tag {
  name: string;
  color: string;
}

const initialState = {
  name: "",
  color: "",
};

export function Form() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState<Tag>(initialState);
  const [tags, setTags] = useState<Tag[]>([]);
  const [list, setList] = useState("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  function handleAddTag(tag: Tag, color: string) {
    const foundTag = tags.find((foundTag) => foundTag.name === tag.name);

    if (tag.name && !foundTag) {
      setTag(initialState);
      if (color === "") {
        toast.error("Ih, deu ruim! Essa cor de tag não existe.");
        return;
      } else {
        tag.color = color;
        setTags([...tags, tag]);
      }
    } else {
      toast.error("Ih, deu ruim! Essa tag já foi adicionada ou está vazia.");
      return;
    }
  }

  function handleDeleteTag(name: string, event: FormEvent) {
    event.preventDefault();
    const filteredTags = tags.filter((tag) => tag.name !== name);
    setTags(filteredTags);
  }

  async function callCreateCard(event: FormEvent) {
    const card = { name, email, description, list, title };

    await handleCreateCard(card, tags, event);

    setDescription("");
    setEmail("");
    setList("");
    setName("");
    setTitle("");
    setTag(initialState);
    setTags([]);
  }

  return (
    <Container>
      <h2>Criar card de tarefa</h2>

      <h3>Titulo *</h3>
      <input
        type="text"
        placeholder="Digite o titulo para seu card"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
      />

      <Row numberOfColumns={2}>
        <div className="inputContainer">
          <h3>Nome *</h3>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
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

      <h3>Adicionar etiqueta e cor</h3>
      <Row numberOfColumns={3}>
        <input
          type="text"
          maxLength={10}
          placeholder="Ex: React"
          value={tag.name}
          onChange={(event) =>
            setTag({
              name: String(event.target.value),
              color: selectedColor,
            })
          }
        />
        <select
          name="color"
          onChange={(event) => setSelectedColor(event.target.value)}
          className="color-select"
          defaultValue={""}
        >
          <option disabled value="">
            Selecione uma cor
          </option>
          <option value="green">Verde</option>
          <option value="yellow">Amarelo</option>
          <option value="orange">Laranja</option>
          <option value="red">Vermelho</option>
          <option value="purple">Roxo</option>
          <option value="blue">Azul</option>
          <option value="null">Nenhuma</option>
        </select>
        <button
          className="add-btn"
          type="button"
          onClick={() => handleAddTag(tag, selectedColor)}
        >
          <FaPlus color="#fff" size={20} />
        </button>
      </Row>
      <Row numberOfColumns={4}>
        {tags.map((tag) => (
          <TagItem
            key={tag.name}
            tagTitle={tag.name}
            onClick={(event) => handleDeleteTag(tag.name, event)}
            color={tag.color}
          />
        ))}
      </Row>

      <h3>Lista da tarefa *</h3>
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
