import fs from "fs"
import path from "path"
import sharp from "sharp"

const root = "src/assets/Images"

const skipFiles = [
    "Our Blooms®",
    "O.B",
    "Hamburger",
    "Cancel",
    "Logo_image",
]

async function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
        const filePath = path.join(dir, entry.name)

        if (entry.isDirectory()) {
            await walk(filePath)
            continue
        }

        if (!entry.name.toLowerCase().endsWith(".png")) {
            continue
        }

        const shouldSkip = skipFiles.some((name) =>
            entry.name.includes(name)
        )

        if (shouldSkip) {
            continue
        }

        const outputPath = filePath.replace(/\.png$/i, ".webp")

        // file đã convert rồi thì bỏ qua
        if (fs.existsSync(outputPath)) {
            continue
        }

        const oldSize = fs.statSync(filePath).size

        await sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputPath)

        const newSize = fs.statSync(outputPath).size

        console.log(
            `${filePath}: ${(oldSize / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB`
        )
    }
}

await walk(root)