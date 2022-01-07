import Image from "next/image";

import { Heading1 } from "@/components/ui/typography/Heading1";
import { Layout } from "@/layout/Layout";

export default function Onas() {
  return (
    <Layout title="O nás">
      <Heading1>O nás</Heading1>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-col w-full md:w-2/3 md:pr-8">
          <p className="text-2xl mb-2">
            Quick and Easy jsme založili v roce 2014 jako malý rodinný podnik s
            vizí poskytnout lidem kvalitní, chutné, zdravé a zároveň cenově
            dostupné jídlo. Naším cílem je denně nabídnout zákazníkům to
            nejlepší, co můžeme. V naší nabídce naleznete čerstvé saláty,
            zapečené tortily a výborné domácí polévky, které jsou připraveny z
            ingrediencí od prověřených a kvalitních dodavatelů.
          </p>
          <p className="text-2xl italic mb-2">
            Naše motto je jednoduché – čím jednodušší, tím lepší!
          </p>
          <p className="text-2xl mb-2">
            Nabízíme nevšední tortily a saláty z čerstvě připravených
            ingrediencí, které pro zahřátí můžete doplnit našimi výbornými
            polévkami z denni nabidky. Přijďte ochutnat něco z naší jedinečné
            nabídky a načerpat příjemnou atmosféru – nebudete litovat!!!
            Nacházíme se na Sokolovské ulici v Praze, přímo na tramvajové
            zastávce Karlínské náměstí.
          </p>
          <p className="text-2xl mb-2">
            A nezapomeňte…cokoliv v životě děláte… “Keep it simple, keep it
            good!”
          </p>
          <div className="flex">
            <p className="text-2xl mb-2 mr-1">Quick & Easy Team</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center md:max-h-96 mb-4 md:w-1/3">
          <Image
            className="self-center rounded-lg"
            src="https://res.cloudinary.com/dmiizmobu/image/upload/v1641564852/quickandeasy/onas.jpg"
            alt="Quick and Easy O nás"
            width={400}
            height={250}
          />
        </div>
      </div>
    </Layout>
  );
}
