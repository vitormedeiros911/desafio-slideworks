import { FormEvent } from "react";
import { Container } from "./styles";

interface TagItemProps {
  tagTitle: String;
  onClick: (event: FormEvent) => void;
}

export function TagItem({ tagTitle, onClick }: TagItemProps) {
  return (
    <Container className="tag-btn" onClick={(event) => onClick(event)}>
      <span>{tagTitle}</span>
    </Container>
  );
}
