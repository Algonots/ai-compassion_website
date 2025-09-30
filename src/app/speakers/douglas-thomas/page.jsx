import Image from "next/image";
import douglas from "@/../public/douglas.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={douglas}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Douglas Thomas</h1>
      <p className="mt-4 text-lg text-gray-700">
        Douglas Thomas is Professor at USC Iovine and Young Academy and USC Annenberg, researching the intersection of technology and culture. He founded Games & Culture, the first academic journal studying video game culture, and collaborated with John Seely Brown to develop "gamer disposition," named a Harvard Business Review "Breakthrough Ideas." Their book "A New Culture of Learning" is read worldwide. Thomas has consulted with governments on educational reform and is currently working on "Bodies of Code."
      </p>
    </div>
  );
}