lineWidth(0.075)
const angle = 0.75
const h = 0.6
for (var i = 0; i < 3; ++i) arc(0, h / 2, h - (h / 3) * i, -angle, PI + angle, true).stroke()
lineWidth(0.1)
point(0, h / 2, 0, h / 2)
