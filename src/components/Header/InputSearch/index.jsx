import Button from "../../../styles/buttons";

function InputSearch() {
  return (
    <div className="search">
      <input type="text" name="search" placeholder="Digitar Pesquisa" />
      <Button theme="primary">Pesquisar</Button>
    </div>
  );
}

export default InputSearch;
