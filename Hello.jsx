function Hello() {

  function getName(yourname) {
    return yourname;
  }

  function handleClick() {
    alert("Button was clicked");
  }
  const handleInput = (event)=>{
    console.clear()
    console.log("Value :", event.target.value)

  }

  const name = "YahuBaba";
  const name1 = "Dax";

  return (
    <>
      <h1>Hello {getName(name)}</h1>

      <h2>Byy {getName(name1)}</h2>
      <p onMouseOver={handleInput} onClick={handleInput}>
        Silver Oak Univercity
      </p>

      <button onClick={handleClick}>
        Click Me
      </button>
      <button onClick={()=> alert("Hello from inline fuction!") }>Say Hello</button>
      <input type="text" onChange={handleInput} placeholder="Type something"/>
      </>
  );
}

export default Hello;