// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://profeenrique.github.io/",
	base: "/prg301-tp2026/",
	integrations: [
		starlight({
			title: "Programación y Algoritmos",
			social: [{ icon: "github", label: "GitHub", href: "https://github.com/profeenrique" }],
			defaultLocale: "root",
			locales: {
				root: { 
					label: "Español",
					lang: "es",
				},
			},
			sidebar: [
				// UNIDAD 01
				{
					label: "Introducción",
					collapsed: true,
					items: [
						{ slug: "introduccion" },
						{ slug: "introduccion/historia-y-filosofia" },
						{
							label: "Entorno",
							collapsed: true,
							autogenerate: { directory: '01-introduccion/01-entorno' },
						},
						{
							label: "Primeros pasos",
							collapsed: true,
							autogenerate: { directory: '01-introduccion/02-primeros-pasos' },
						},
						{ slug: "introduccion/glosario" }
					],
				},
				// UNIDAD 02
				{
					label: "Fundamentos",
					collapsed: true,
					items: [
						{ slug: "fundamentos" },
						{
							label: "Variables",
							collapsed: true,
							autogenerate: { directory: '02-fundamentos/01-variables' },
						},
						{
							label: "Operadores",
							collapsed: true,
							autogenerate: { directory: '02-fundamentos/02-operadores' },
						},
						{
							label: "Interacción",
							collapsed: true,
							autogenerate: { directory: '02-fundamentos/03-interaccion' },
						},
						{ slug: "fundamentos/glosario" },
					],
				},
				// UNIDAD 03
				{
					label: "Control de flujo",
					collapsed: true,
					items: [
						{ slug: "control-de-flujo" },
						{
							label: "Selectivas",
							collapsed: true,
							autogenerate: { directory: '03-control-de-flujo/01-selectivas' },
						},
						{
							label: "Repetitivas",
							collapsed: true,
							autogenerate: { directory: '03-control-de-flujo/02-repetitivas' },
						},
						{ slug: "control-de-flujo/glosario" },
					],
				},
				// UNIDAD 04
				{
					label: "Colecciones",
					collapsed: true,
					items: [
						{ slug: "colecciones" },
						{
							label: "Listas",
							collapsed: true,
							autogenerate: { directory: '04-colecciones/01-listas' },
						},
						{
							label: "Diccionarios",
							collapsed: true,
							autogenerate: { directory: '04-colecciones/02-diccionarios' },
						},
						{
							label: "Tuplas y sets",
							collapsed: true,
							autogenerate: { directory: '04-colecciones/03-tuplas-y-sets' },
						},
						{ slug: "colecciones/glosario" },
					],
				},
				// UNIDAD 05
				{
					label: "Cadenas de texto",
					collapsed: true,
					items: [
						{ slug: "cadenas-de-texto" },
						{
							label: "Acceso y propiedades",
							collapsed: true,
							autogenerate: { directory: '05-cadenas-de-texto/01-acceso-y-propiedades' },
						},
						{
							label: "Limpieza y transformación",
							collapsed: true,
							autogenerate: { directory: '05-cadenas-de-texto/02-limpieza-y-transformacion' },
						},
						{
							label: "Separación y unión",
							collapsed: true,
							autogenerate: { directory: '05-cadenas-de-texto/03-separacion-y-union' },
						},
						{
							label: "Interpolación",
							collapsed: true,
							autogenerate: { directory: '05-cadenas-de-texto/04-interporlacion' },
						},
						{ slug: "cadenas-de-texto/glosario" },
					],
				},
				// UNIDAD 06
				{
					label: "Algoritmos",
					collapsed: true,
					items: [
						{ slug: "algoritmos" },
						{
							label: "Patrones lógicos",
							collapsed: true,
							autogenerate: { directory: '06-algoritmos/01-patrones-logicos' },
						},
						{
							label: "Ordenamiento",
							collapsed: true,
							autogenerate: { directory: '06-algoritmos/02-ordenamiento' },
						},
						{
							label: "Búsqueda",
							collapsed: true,
							autogenerate: { directory: '06-algoritmos/03-busqueda' },
						},
						{ slug: "algoritmos/glosario" },
					],
				},
				// UNIDAD 07
				{
					label: "Modularidad",
					collapsed: true,
					items: [
						{ slug: "modularidad" },
						{
							label: "Funciones",
							collapsed: true,
							autogenerate: { directory: '07-modularidad/01-funciones' },
						},
						{
							label: "Scopes",
							collapsed: true,
							autogenerate: { directory: '07-modularidad/02-scope' },
						},
						{
							label: "Módulos y paquetes",
							collapsed: true,
							autogenerate: { directory: '07-modularidad/03-modulos-y-paquetes' },
						},
						{ slug: "modularidad/glosario" },
					],
				},
				// UNIDAD 08
				{
					label: "Manejo de errores",
					collapsed: true,
					items: [
						{ slug: "manejo-de-errores" },
						{
							label: "Excepciones",
							collapsed: true,
							autogenerate: { directory: '08-manejo-de-errores/01-excepciones' },
						},
						{
							label: "Debugging",
							collapsed: true,
							autogenerate: { directory: '08-manejo-de-errores/02-debugging' },
						},
						{ slug: "manejo-de-errores/glosario" },
					],
				},
				// UNIDAD 09
				{
					label: "Persistencia de datos",
					collapsed: true,
					items: [
						{ slug: "persistencia-de-datos" },
						{
							label: "Archivos de texto",
							collapsed: true,
							autogenerate: { directory: "09-persistencia-de-datos/01-archivos-de-texto" },
						},
						{
							label: "Formatos estructurados",
							collapsed: true,
							autogenerate: { directory: "09-persistencia-de-datos/02-formatos-estructurados" },
						},
						{
							label: "Bases de datos",
							collapsed: true,
							autogenerate: { directory: "09-persistencia-de-datos/03-bases-de-datos" },
						},
						{
							label: "Buenas prácticas",
							collapsed: true,
							autogenerate: { directory: "09-persistencia-de-datos/04-buenas-practicas" },
						},
						{ slug: "persistencia-de-datos/glosario" },
					],
				},
				// UNIDAD 10
				{
					label: "Prog. orientada a objetos",
					collapsed: true,
					items: [
						{ slug: "poo" },
						{
							label: "Clases y objetos",
							collapsed: true,
							autogenerate: { directory: "10-poo/01-clases-y-objetos" },
						},
						{
							label: "Pilares de la POO",
							collapsed: true,
							autogenerate: { directory: "10-poo/02-pilares-poo" },
						},
						{
							label: "Métodos mágicos",
							collapsed: true,
							autogenerate: { directory: "10-poo/03-metodos-magicos" },
						},
						{ slug: "poo/glosario" },
					],

				},
				// UNIDAD 11
				{
					label: "Ecosistema Python",
					collapsed: true,
					items: [
						{ slug: "ecosistema-python" },
						{
							label: "Entornos virtuales",
							collapsed: true,
							autogenerate: { directory: "11-ecosistema-python/01-entornos-virtuales" },
						},
						{
							label: "Paquetes externos",
							collapsed: true,
							autogenerate: { directory: "11-ecosistema-python/02-paquetes-externos" },
						},
						{
							label: "Conexiones externas",
							collapsed: true,
							autogenerate: { directory: "11-ecosistema-python/03-conexiones-externas" },
						},
						{ slug: "ecosistema-python/glosario" },
					]
				},
				// UNIDAD 12
				{
					label: "Proyectos",
					collapsed: true,
					items: [
						{ slug: "proyectos" },
						{
							label: "Herramientas CLI",
							collapsed: true,
							autogenerate: { directory: "12-proyectos/01-herramientas-cli" },
						},
						{
							label: "Interfaz gráfica",
							collapsed: true,
							autogenerate: { directory: "12-proyectos/02-interfaz-grafica" },
						},
						{
							label: "Aplicaciones web",
							collapsed: true,
							autogenerate: { directory: "12-proyectos/03-aplicaciones-web" },
						},
						{
							label: "Análisis de datos",
							collapsed: true,
							autogenerate: { directory: "12-proyectos/04-analisis-de-datos" },
						},
						{
							label: "Hardware e IoT",
							collapsed: true,
							autogenerate: { directory: "12-proyectos/05-hardware-iot" },
						},
						{ slug: "proyectos/glosario" },
					]
				},
				// UNIDAD 13
				{
					label: "Recursos",
					collapsed: true,
					items: [
						{ slug: "recursos" },
						{ slug: "recursos/el-zen-de-python" },
						{ slug: "recursos/guia-type-hinting" },
						{ slug: "recursos/codigo-limpio" },
						{ slug: "recursos/guia-markdown" },
						{
							label: "Git",
							collapsed: true,
							autogenerate: { directory: "13-recursos/01-git" },
						},
						{
							label: "GitHub",
							collapsed: true,
							autogenerate: { directory: "13-recursos/02-github" },
						},
						{
							label: "Testing básico",
							collapsed: true,
							autogenerate: { directory: "13-recursos/03-testing-basico" },
						},
						{ slug: "recursos/glosario-completo" },
					]
				}
			],
		}),
	],
});
