from manim import *

class Derivative(Scene):
    def construct(self):
        # Тёмный фон под стиль сайта
        self.camera.background_color = "#0f0f0f"

        # Заголовок
        title = Text("Производная", font_size=40, color=WHITE)
        title.to_edge(UP)

        # Определение словами
        definition = Text(
            "Скорость изменения функции в точке",
            font_size=24,
            color=GRAY
        )
        definition.next_to(title, DOWN, buff=0.4)

        # Формула
        formula = MathTex(
            r"f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}",
            font_size=48,
            color=WHITE
        )
        formula.move_to(ORIGIN)

        # Анимация
        self.play(Write(title), run_time=1)
        self.play(FadeIn(definition), run_time=0.8)
        self.wait(0.5)
        self.play(Write(formula), run_time=2)
        self.wait(2)