import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),

		VitePWA({
			registerType: "autoUpdate",
			devOptions: {
				enabled: true,
			},
			includeAssets: ["favicon.ico", "favicon.svg", "apple-touch-icon.png"],
			manifest: {
				name: "FarePassage App",
				short_name: "FarePassage",
				description: "Lleva un seguimiento de tu tarjeta de transporte público",
				categories: ["navigation", "productivity", "travel", "lifestyle"],
				lang: "es-mx",
				orientation: "landscape",
				theme_color: "#faca50",
				background_color: "#ffffff",
				icons: [
					{
						src: "Icon-16.png",
						sizes: "16x16",
						type: "image/png",
					},
					{
						src: "Icon-32.png",
						sizes: "32x32",
						type: "image/png",
					},
					{
						src: "Icon-48.png",
						sizes: "48x48",
						type: "image/png",
					},
					{
						src: "Icon-64.png",
						sizes: "64x64",
						type: "image/png",
					},
					{
						src: "Icon-80.png",
						sizes: "80x80",
						type: "image/png",
					},
					{
						src: "Icon-100.png",
						sizes: "100x100",
						type: "image/png",
					},
					{
						src: "Icon-128.png",
						sizes: "128x128",
						type: "image/png",
					},
					{
						src: "Icon-144.png",
						sizes: "144x144",
						type: "image/png",
					},
					{
						src: "Icon-196.png",
						sizes: "196x196",
						type: "image/png",
					},
					{
						src: "Icon-256.png",
						sizes: "256x256",
						type: "image/png",
					},
					{
						src: "Icon-512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "Icon-512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any",
					},
					{
						src: "Icon-512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable",
					},
					{
						src: "Icon-1024.png",
						sizes: "1024x1024",
						type: "image/png",
					},
				],
			},
		}),
	],
});
