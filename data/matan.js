const SUBJECT = {
  id: 'matan',
  title: 'Математический анализ',
  emoji: '📈',
  img: 'images/matan.png', 
  cards: [
    {
      q: "Определение производной $f'(x)$",
      a: "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
      type: "formula"
    },
    {
      q: "Что изображено на графике?",
      img: "images/sin.jpg",
      a: "синус",
      type: "text"
    },
    {
      q: "Дискриминант $ax^2 + bx + c = 0$",
      a: "b^2 - 4ac",
      type: "formula"
    },
    {
      q: "Интеграл $\\int x^n\\,dx$ при $n \\neq -1$",
      a: "\\frac{x^{n+1}}{n+1} + C",
      type: "formula"
    },
    {
      q: "Формула Ньютона–Лейбница",
      a: "\\int_a^b f(x)\\,dx = F(b) - F(a)",
      type: "formula"
    },
    {
      q: "Предел $\\lim_{x \\to 0} \\dfrac{\\sin x}{x}$",
      a: "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1",
      type: "formula"
    },
  ],
  theory: [
    {
      title: 'Производная — определение',
      video: 'videos/Derivative.mp4'
    },
    {
      title: 'Лекция 1',
      pdf: 'PDFs/TestingSTD.pdf'
    },
  ]
};