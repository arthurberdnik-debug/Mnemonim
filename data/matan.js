const SUBJECT = {
  id: 'matan',
  title: 'Математический анализ',
  emoji: '📈',
  cards: [
    {
      q: "Определение производной $f'(x)$",
      a: "$$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$"
    },
    {
      q: "Дискриминант $ax^2 + bx + c = 0$",
      a: "$$D = b^2 - 4ac$$"
    },
    {
      q: "Интеграл $\\int x^n\\,dx$ при $n \\neq -1$",
      a: "$$\\frac{x^{n+1}}{n+1} + C$$"
    },
    {
      q: "Формула Ньютона–Лейбница",
      a: "$$\\int_a^b f(x)\\,dx = F(b) - F(a)$$"
    },
    {
      q: "Предел $\\lim_{x \\to 0} \\dfrac{\\sin x}{x}$",
      a: "$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$"
    },
  ],
  theory: [
    {
      title: 'Производная — определение',
      video: 'videos/Derivative.mp4'
    },
  ]
};