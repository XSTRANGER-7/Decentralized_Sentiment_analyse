import localFont from "next/font/local";

export const general_sans = localFont({
    src: [
        {
            path: "./reg.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./meditalic.woff2",
            weight: "400",
            style: "italic",
        },
        {
            path: "./semibold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./med.woff2",
            weight: "500",
            style: "medium",
        },
        {
            path: "./bold.woff2",
            weight: "700",
            style: "italic",
        },
    ],
});
