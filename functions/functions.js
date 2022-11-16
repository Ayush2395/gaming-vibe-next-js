exports.handler = async () => {
  console.log("funtions ran");

  const data = [{ name: "Mario" }, { name: "Super Mario" }, { name: "Tekken" }];

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
