import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Что значит «под усадку» и почему это важно?",
    answer:
      "Профилированный брус — живой материал, он даёт усадку 3–7% в течение 1–2 лет после постройки. Мы проектируем и строим с учётом этого процесса: устанавливаем усадочные компенсаторы, правильно крепим оконные и дверные блоки. Это гарантирует, что дом не перекосит и не потрескается.",
  },
  {
    question: "Сколько времени занимает строительство дома?",
    answer:
      "Сруб дома площадью до 150 м² мы собираем за 4–8 недель. Сроки зависят от проекта, этажности и сложности конструкции. Баня строится быстрее — обычно 2–4 недели. После сборки дом оставляют на усадку, и только затем делают финишную отделку.",
  },
  {
    question: "Из какого бруса вы строите?",
    answer:
      "Используем профилированный брус естественной влажности камерной сушки из хвойных пород — сосна и ель. Сечение подбираем под климат и назначение постройки: от 150×150 мм для бань до 200×200 мм для жилых домов с постоянным проживанием.",
  },
  {
    question: "Вы работаете только в своём регионе?",
    answer:
      "Нет, мы строим по всей России. Сруб изготавливается на нашем производстве, затем доставляется и собирается на вашем участке. Выезд бригады возможен в любой регион — стоимость логистики рассчитывается индивидуально.",
  },
  {
    question: "Нужен ли мне проект или можно строить по типовому?",
    answer:
      "У нас есть готовые типовые проекты домов и бань, которые можно адаптировать под ваш участок и пожелания. Также разрабатываем проекты с нуля. Типовой проект обходится дешевле и быстрее — хорошее решение, если нет специфических требований.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Свяжитесь с нами любым удобным способом — по телефону, в мессенджере или через форму на сайте. Обсудим ваши пожелания, участок и бюджет. После этого подготовим расчёт стоимости и, при необходимости, выедем на осмотр участка бесплатно.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}