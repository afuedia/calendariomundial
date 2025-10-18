# Calendario Mundial

## Demo
(pendiente incluir aquí una captura de la web)

## Descripción

Este proyecto es una web que muestra que fecha sería hoy si estuviera en vigor una versión adaptada del Calendario Mundial de Elisabeth Achelis.

El código JavaScript convierte la fecha actual en la fecha del calendario mundial, y tiene en cuenta las variaciones que suponen la existencia de días fuera del calendario (no pertenecen a ningún mes ni dia de la semana) y de años bisiestos.

## Tecnologías
El proyecto fue originalmente desarrollado utilizando html, css y js, y luego migrado a Astro.

## Estructura del proyecto
Árbol de carpetas real (incluye assets/fonts), para que “vean” orden y modularidad.

## Accesibilidad 
Lighthouse da un 89 en rendimiento, señalando bajo contraste entre el fondo y la fuente de algunos elementos. Pendiente de arreglar

## Rendimiento
Lighthouse da un 99 en rendimiento, señala algo respecto a la carga de las fuentes. Pendiente de optimizar

## Lecciones aprendidas
En una primera versión, manejo de la etiqueta <table> en HTML + uso de Date() en JavaScript

## Diferencias vs. Calendario de Achelis
Mi trabajo no se basa 100% en el Calendario de Achelis, dado que el mismo empieza la semana en domingo y esta versión del Calendario Mundial, siguiendo la norma ISO 8601, empieza la semana en lunes, y por lo tanto también hace que los 1 de Enero caigan en lunes.