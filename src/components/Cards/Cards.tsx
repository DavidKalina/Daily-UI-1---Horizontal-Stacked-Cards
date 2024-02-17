import { Card } from "../Card/Card";
import "./styles.css";

interface CardsProps {
  count: number;
  direction?: "row" | "column";
}
export const Cards = ({ count, direction = "row" }: CardsProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {Array.from({ length: count }, (_, index) => (
        <Card order={index} key={index}>
          Card {`${index}`}
        </Card>
      ))}
    </div>
  );
};
