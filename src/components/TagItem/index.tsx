import { Container } from "./styles";

interface TagItemProps {
  tagTitle: String;
}

export function TagItem({ tagTitle }: TagItemProps) {
  return <Container>{tagTitle}</Container>;
}
