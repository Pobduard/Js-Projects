//+ Modulo para utilidades generales de mate
//+ el export antes de todo es pa que se pueda exportar

export const PI = 3.14159;
export function getCircumference (radius) {
	return 2 * PI * radius;
}

export function getArea (radius) {
	return PI * radius * radius;
}