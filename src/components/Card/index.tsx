import { CardContainer, Image, Title, Description } from "./index.styles";

interface ICardProps {
  image: string;
  title: string;
  description: string;
}

export function Card ({ image, title, description }: ICardProps) {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};
