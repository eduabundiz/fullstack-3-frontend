export default function handler(req, res) {
  res
    .status(200)
    .json(["Javascript", "React", "Next js", "Java", "Springboot", "Node js"]);
}
