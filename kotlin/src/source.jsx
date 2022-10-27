//Импорт всех компонентов
import HistoryKotlin from "./assets/components/HistoryKotlin";
import BooleanType from "./assets/components/BooleanType";
import ArrayType from "./assets/components/ArrayType";
import ArrayPrimType from "./assets/components/ArrayPrimType";
import Operation from "./assets/components/Operation";
import JVM from "./assets/components/jvm";
import StringType from "./assets/components/String";
import Permanent from "./assets/components/Permanent";
import Literal from "./assets/components/Literal";
import Point from "./assets/components/Point";
import Integer from "./assets/components/Integer";
import IsKotlin from "./assets/components/IsKotlin";
import Transform from "./assets/components/Transform";

// Массив объъектов для маршрутизации между страницами
export const arrRoute = [
	{path: "/iskotlin", el: <IsKotlin />},
	{path: "/kotlin", el: <HistoryKotlin />},
	{path: "/boolean", el: <BooleanType />},
	{path: "/array", el: <ArrayType />},
	{path: "/arrayprim", el: <ArrayPrimType />},
	{path: "/operation", el: <Operation />},
	{path: "/jvm", el: <JVM />},
	{path: "/string", el: <StringType />},
	{path: "/permanent", el: <Permanent />},
	{path: "/literal", el: <Literal />},
	{path: "/point", el: <Point />},
	{path: "/integer", el: <Integer />},
	{path: "/transform", el: <Transform />},
]

//Это массив обЪектов, в котором хранятся наши блоки-заголовки,
//и автоматически генерируются через фильтр
export const itemInfo = [
	{name: ' Что такое Kotlin?', classNL: 'search__item', classNA: 'search__link', path: '/iskotlin'},
	{name: ' История языка Kotlin', classNL: 'search__item', classNA: 'search__link', path: '/kotlin'},
	{name: ' Логический тип', classNL: 'search__item', classNA: 'search__link', path: '/boolean'},
	{name: ' Массивы', classNL: 'search__item', classNA: 'search__link', path: '/array'},
	{name: ' Массивы примитивных типов', classNL: 'search__item', classNA: 'search__link', path: '/arrayprim'},
	{name: ' Операции', classNL: 'search__item', classNA: 'search__link', path: '/operation'},
	{name: ' Представление чисел в JVM', classNL: 'search__item', classNA: 'search__link', path: '/jvm'},
	{name: ' Символы и строки', classNL: 'search__item', classNA: 'search__link', path: '/string'},
	{name: ' Символьные постоянные', classNL: 'search__item', classNA: 'search__link', path: '/permanent'},
	{name: ' Строковые литералы', classNL: 'search__item', classNA: 'search__link', path: '/literal'},
	{name: ' Типы с плавающей точкой', classNL: 'search__item', classNA: 'search__link', path: '/point'},
	{name: ' Целочисленные типы', classNL: 'search__item', classNA: 'search__link', path: '/integer'},
]