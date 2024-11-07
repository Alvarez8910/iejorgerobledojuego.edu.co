// Función para mezclar las opciones de cada pregunta
function mezclarOpciones(opciones) {
    for (let i = opciones.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opciones[i], opciones[j]] = [opciones[j], opciones[i]];
    }
    return opciones;
}

// Base de preguntas, organizada por niveles y temas
const preguntas = {
    nivel1: {
        "Números de oxidación": [
            {
                pregunta: "¿Cuál es el número de oxidación del oxígeno en la mayoría de sus compuestos?",
                opciones: mezclarOpciones([
                    { texto: "0", correcta: false },
                    { texto: "-2", correcta: true },
                    { texto: "+2", correcta: false }
                ])
            },
            {
                pregunta: "¿Cuál es el número de oxidación del hidrógeno cuando se combina con un no metal?",
                opciones: mezclarOpciones([
                    { texto: "+1", correcta: true },
                    { texto: "-1", correcta: false },
                    { texto: "0", correcta: false }
                ])
            },
            {
                pregunta: "¿Cuál es el número de oxidación del azufre en H2SO4?",
                opciones: mezclarOpciones([
                    { texto: "+6", correcta: true },
                    { texto: "-2", correcta: false },
                    { texto: "+4", correcta: false }
                ])
            }
        ],
        "Balance de ecuaciones": [
            {
                pregunta: "¿Qué coeficiente debe ponerse frente al O2 para balancear la ecuación: C3H8 + O2 → CO2 + H2O?",
                opciones: mezclarOpciones([
                    { texto: "5", correcta: false },
                    { texto: "3", correcta: false },
                    { texto: "4", correcta: true }
                ])
            },
            {
                pregunta: "¿Qué sustancia es el reactivo limitante en la reacción de 2H2 + O2 → 2H2O si tienes 3 moles de H2 y 1 mole de O2?",
                opciones: mezclarOpciones([
                    { texto: "H2", correcta: false },
                    { texto: "O2", correcta: true },
                    { texto: "H2O", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué coeficiente debe ponerse frente al HCl para balancear la ecuación: Zn + HCl → ZnCl2 + H2?",
                opciones: mezclarOpciones([
                    { texto: "2", correcta: true },
                    { texto: "1", correcta: false },
                    { texto: "3", correcta: false }
                ])
            }
        ],
        "Los gases": [
            {
                pregunta: "¿Cuál es la unidad de medida de la presión en el Sistema Internacional?",
                opciones: mezclarOpciones([
                    { texto: "atm", correcta: false },
                    { texto: "mmHg", correcta: false },
                    { texto: "Pa", correcta: true }
                ])
            },
            {
                pregunta: "¿Qué propiedad de un gas se mide en litros (L)?",
                opciones: mezclarOpciones([
                    { texto: "Volumen", correcta: true },
                    { texto: "Temperatura", correcta: false },
                    { texto: "Presión", correcta: false }
                ])
            },
            {
                pregunta: "¿Cuál es la constante de los gases ideales (R) en unidades de atm·L/(mol·K)?",
                opciones: mezclarOpciones([
                    { texto: "0.0821", correcta: true },
                    { texto: "8.314", correcta: false },
                    { texto: "62.36", correcta: false }
                ])
            }
        ],
        "Ley de Charles y Gay-Lussac": [
            {
                pregunta: "¿Qué magnitudes relaciona la Ley de Charles?",
                opciones: mezclarOpciones([
                    { texto: "Volumen y temperatura", correcta: true },
                    { texto: "Volumen y presión", correcta: false },
                    { texto: "Presión y temperatura", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué tipo de relación tienen volumen y temperatura según la Ley de Charles?",
                opciones: mezclarOpciones([
                    { texto: "Directamente proporcional", correcta: true },
                    { texto: "Inversamente proporcional", correcta: false },
                    { texto: "No están relacionadas", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué magnitudes relaciona la Ley de Gay-Lussac?",
                opciones: mezclarOpciones([
                    { texto: "Presión y temperatura", correcta: true },
                    { texto: "Volumen y temperatura", correcta: false },
                    { texto: "Volumen y presión", correcta: false }
                ])
            }
        ]
    },
    nivel2: {
        "Gases ideales": [
            {
                pregunta: "¿Cuál es la ecuación de estado de los gases ideales?",
                opciones: mezclarOpciones([
                    { texto: "PV = nRT", correcta: true },
                    { texto: "P + V = nRT", correcta: false },
                    { texto: "PV = nR/T", correcta: false }
                ])
            },
            {
                pregunta: "En la ecuación PV = nRT, ¿qué representa 'n'?",
                opciones: mezclarOpciones([
                    { texto: "Número de moles", correcta: true },
                    { texto: "Volumen", correcta: false },
                    { texto: "Temperatura", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué valor tiene R en el Sistema Internacional de Unidades (SI)?",
                opciones: mezclarOpciones([
                    { texto: "8.314 J/(mol·K)", correcta: true },
                    { texto: "0.0821 atm·L/(mol·K)", correcta: false },
                    { texto: "62.36 L·mmHg/(mol·K)", correcta: false }
                ])
            }
        ],
        "Soluciones": [
            {
                pregunta: "¿Qué término describe la cantidad de soluto disuelto en una solución?",
                opciones: mezclarOpciones([
                    { texto: "Concentración", correcta: true },
                    { texto: "Solubilidad", correcta: false },
                    { texto: "Disolución", correcta: false }
                ])
            },
            {
                pregunta: "¿Cuál de las siguientes es una solución saturada?",
                opciones: mezclarOpciones([
                    { texto: "Una solución que contiene la máxima cantidad de soluto disuelto", correcta: true },
                    { texto: "Una solución con poca cantidad de soluto disuelto", correcta: false },
                    { texto: "Una solución en la que no se puede disolver más soluto", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué es una disolución coloidal?",
                opciones: mezclarOpciones([
                    { texto: "Una mezcla en la que las partículas están suspendidas y no se disuelven", correcta: true },
                    { texto: "Una mezcla homogénea de dos líquidos miscibles", correcta: false },
                    { texto: "Una disolución saturada con sal", correcta: false }
                ])
            }
        ]
    },
    nivel3: {
        "Unidades de concentración": [
            {
                pregunta: "¿Qué unidad de concentración mide moles de soluto por litro de solución?",
                opciones: mezclarOpciones([
                    { texto: "Molaridad (M)", correcta: true },
                    { texto: "Molalidad (m)", correcta: false },
                    { texto: "Fracción molar", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué representa la molalidad en una solución?",
                opciones: mezclarOpciones([
                    { texto: "Moles de soluto por kilogramo de disolvente", correcta: true },
                    { texto: "Moles de soluto por litro de solución", correcta: false },
                    { texto: "Moles de soluto por volumen de disolvente", correcta: false }
                ])
            }
        ]
    }
};
