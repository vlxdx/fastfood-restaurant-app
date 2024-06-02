import Card from '../../components/Card';

function Home({ items, onAddtoConfigurator }) {
  return (
    <div className="content">
      <h1>BELIEBTE PRODUKTE</h1>

      <div className="foods">
        {items.map((item, titel) => (
          <Card
            key={titel}
            titel={item.titel}
            info={item.info}
            preis={item.preis}
            imageUrl={item.imageUrl}
            onSelect={onAddtoConfigurator}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
