module.exports = {
    content: ["./src/**/*.{astro,html,js,svelte,ts}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "2rem"
            },
            fontFamily: {
                "paytone": ["Paytone One", "display"],
                "mulish": ["Mulish", "sans-serif"],
                "specify-ex": ["Specify ExExp", "sans-serif"],
                "specify": ["Specify Exp", "sans-serif"],
            },
            backgroundImage: {
                "hero": `url("/src/lib/assets/hero.webp")`,
            },
            colors: {
                "sb-yellow": "#F2C94C",
                "sb-orange": "#fb923c",
                "sb-green": "#10b981",
                "sb-blue": "#38bef8",
                "sb-dark-blue": "#152443",
            }
        },
    },
    plugins: [],
}