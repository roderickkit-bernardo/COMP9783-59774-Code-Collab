import Card from "./Card";

function Cards(props) {
  return (
    <div class="flex flex-wrap justify-center gap-4">
      {props.CardItems.map((CardItem, index) => (
        <Card CardItem={CardItem}></Card>
      ))}
    </div>
  );
}

export default Cards;
