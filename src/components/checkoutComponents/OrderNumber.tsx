function GenerateOrderNumber() {
  const maxNumber = 420;
  const orderNumber = Math.floor(Math.random() * maxNumber + 1);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Order id: #{orderNumber}</h2>
    </div>
  );
}

export default GenerateOrderNumber;
