function status(request, response) {
  response.status(200).json({Banana: "banana"});
}

export default status;
