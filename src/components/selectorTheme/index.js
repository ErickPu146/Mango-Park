import "./style.css";

const SelectorTheme = ( { setBackground, backGround } ) => {
  
  return (
    <>
      <div
        className="btn btn-light themes fs-5 d-flex 
            justify-content-center align-items-center gap-1
            p-2 border border-4 rounded-5 
        "
        onClick={() => setBackground(!backGround)}
      >
        <span>{backGround ? 'Claro' : 'Oscuro'}</span>
        <i className={`${backGround ? 'd-block' : 'd-none'} bi bi-brightness-high-fill`} ></i>
        <i className={`${backGround ? 'd-none' : 'd-block'} bi bi-moon-fill`}></i>
      </div>
    </>
  );
};

export { SelectorTheme };
