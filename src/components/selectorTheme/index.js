import "./style.css";

const SelectorTheme = ( { setBackground, background } ) => {
  
  return (
    <>
      <div
        className=" tot fs-6 d-flex 
            justify-content-center align-items-center gap-1"
        onClick={() => setBackground(!background)}
      >
        <i className={`${background ? 'd-block' : 'd-none'} themes bi bi-brightness-high-fill`} ></i>
        <i className={`${background ? 'd-none' : 'd-block'} themes bi bi-moon-fill`}></i>
      </div>
    </>
  );
};

export { SelectorTheme };
