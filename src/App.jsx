import SimpleCard from "./simpleCard";
import withConditionalCard from "./withConditionalCard";
import TestCard from "./TestCard";
const ConditionalSimpleCard = withConditionalCard(SimpleCard);
const ConditionalTestCard = withConditionalCard(TestCard);

// 이렇게 하는 이유??

const App = () => {
  return (
    <>
      <ConditionalSimpleCard
        title="Active Card"
        content="This card is active."
        disabled={false}
      />
      <ConditionalSimpleCard
        title="Diabled Card"
        content="This card is disabled."
        disabled={true}
      />
      <ConditionalTestCard subject="Test Subject" />
    </>
  );
};

export default App;
