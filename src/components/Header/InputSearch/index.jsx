import Button from "../../../styles/buttons";

function InputSearch({ setFilter }) {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        placeholder="Digitar Pesquisa"
        onChange={(event) => setFilter(event.target.value)}
      />
      <Button theme="primary">Pesquisar</Button>
    </div>
  );
}

export default InputSearch;
