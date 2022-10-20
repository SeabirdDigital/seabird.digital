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
                "chevron": `url("/assets/chevron.svg")`,
            },
            colors: {
                "sb-blue": "#00BBF9",
                "sb-purple": "#9B5DE5",
                "sb-pink": "#FF1CB2",
                "sb-orange": "#FEB240",
                "sb-yellow": "#FEE440",
                "sb-green": "#018E42"
            },
            boxShadow: {
                hard: "8px 8px black"
            }
        },
    },
    variants: {
        animation: ({ after }) => after(["motion-safe", "motion-reduce"])
    },
    plugins: [],
}