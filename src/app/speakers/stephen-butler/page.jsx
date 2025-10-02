import Image from "next/image";
import dafa from "@/../public/butler.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={dafa}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Stephen Butler
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Stephen Butler is Executive Director of the Compassion Institute and Owner/Executive Producer of Buffalo Jump Records, specializing in Native American and Indigenous music. With 27+ years at Canyon Records, he produced 230+ recordings including 21 Grammy-nominated and 14 award-winning albums, notably producing R. Carlos Nakai's 4+ million album sales. Co-founder of "A Skeptic's Path to Enlightenment" podcast, Butler bridges Indigenous culture, Buddhist meditation, and compassion training, developing programs for individuals, institutions, and communities promoting global wellbeing.
      </p>
    </div>
  );
}