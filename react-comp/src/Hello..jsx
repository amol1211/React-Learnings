function Hello() {
  let myName = "Amol";
  let number = 12;
  let fullName = () => {
    return "Amol Shinde";
  };

  return (
    <p>
      MessageNo: {number} I am your master {fullName()}
    </p>
  );
}

export default Hello;
