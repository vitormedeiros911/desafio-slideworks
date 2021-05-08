import { FormEvent } from "react";
import { Container } from "./styles";

interface TagItemProps {
  tagTitle: string;
  onClick: (event: FormEvent) => void;
  color: string;
}

export function TagItem({ tagTitle, onClick, color }: TagItemProps) {
  return (
    <Container
      className="tag-btn"
      onClick={(event) => onClick(event)}
      color={color}
    >
      <span>{tagTitle}</span>
    </Container>
  );
}
