function ItemListContainer({ greeting }) {
  return (
    <div className="container mx-auto px-5 py-6 text-center">
        <h1 className="font-bold tittle-font mb">
          Bienvenido a gavishop! {greeting}
        </h1>
    </div>
  );
}

export default ItemListContainer;
