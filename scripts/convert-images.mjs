import sharp from "sharp"

for (let i = 1; i <= 5; i++) {
    const number = String(i).padStart(2, "0")

    const input =
        `src/assets/Images/Home/flower-wheel-${number}.png`

    const output =
        `src/assets/Images/Home/flower-wheel-${number}.webp`

    await sharp(input)
        .webp({ quality: 80 })
        .toFile(output)

    console.log(`Converted flower-wheel-${number}`)
}