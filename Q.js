// Función para mezclar las opciones de cada pregunta y asegurar que la respuesta correcta varíe de posición
function mezclarOpciones(opciones) {
    const correctIndex = Math.floor(Math.random() * opciones.length); // Índice aleatorio para la respuesta correcta
    for (let i = opciones.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opciones[i], opciones[j]] = [opciones[j], opciones[i]];
    }
    // Asegurar que la respuesta correcta esté en el índice seleccionado
    if (!opciones[correctIndex].correcta) {
        const correctOption = opciones.find(option => option.correcta);
        const currentOption = opciones[correctIndex];
        opciones[correctIndex] = correctOption;
        opciones[opciones.indexOf(correctOption)] = currentOption;
    }
    return opciones;
}

// Base de preguntas organizada por niveles y temas
const preguntas = {
    nivel1: {
        "Números de oxidación": [
            {
                pregunta: "¿Cuál es el número de oxidación del oxígeno en la mayoría de sus compuestos?",
                opciones: mezclarOpciones([
                    { texto: "A) 0", correcta: false },
                    { texto: "B) -2", correcta: true },
                    { texto: "C) +2", correcta: false }
                ])
            },
            {
                pregunta: "¿Cuál es el número de oxidación del hidrógeno cuando se combina con un no metal?",
                opciones: mezclarOpciones([
                    { texto: "A) +1", correcta: true },
                    { texto: "B) -1", correcta: false },
                    { texto: "C) 0", correcta: false }
                ])
            },
            {
                pregunta: "¿Cuál es el número de oxidación del azufre en H₂SO₄?",
                opciones: mezclarOpciones([
                    { texto: "A) +6", correcta: true },
                    { texto: "B) -2", correcta: false },
                    { texto: "C) +4", correcta: false }
                ])
            }
        ],
        "Balance de ecuaciones": [
            {
                pregunta: "¿Qué coeficiente debe ponerse frente al O₂ para balancear la ecuación: C₃H₈ + O₂ → CO₂ + H₂O?",
                opciones: mezclarOpciones([
                    { texto: "A) 5", correcta: false },
                    { texto: "B) 4", correcta: true },
                    { texto: "C) 3", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué coeficiente debe ponerse frente al H₂ en la reacción N₂ + H₂ → NH₃ para balancearla?",
                opciones: mezclarOpciones([
                    { texto: "A) 3", correcta: true },
                    { texto: "B) 6", correcta: false },
                    { texto: "C) 1", correcta: false }
                ])
            },
            {
                pregunta: "¿Cuántas moléculas de H₂ se necesitan para reaccionar con una molécula de O₂ y formar H₂O?",
                opciones: mezclarOpciones([
                    { texto: "A) 1", correcta: false },
                    { texto: "B) 2", correcta: true },
                    { texto: "C) 3", correcta: false }
                ])
            }
        ],
        "Los gases": [
            {
                pregunta: "¿Cuál es la unidad de medida de la presión en el Sistema Internacional?",
                opciones: mezclarOpciones([
                    { texto: "A) atm", correcta: false },
                    { texto: "B) Pa", correcta: true },
                    { texto: "C) mmHg", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué propiedad de un gas se mide en litros (L)?",
                opciones: mezclarOpciones([
                    { texto: "A) Volumen", correcta: true },
                    { texto: "B) Temperatura", correcta: false },
                    { texto: "C) Presión", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué sucede con el volumen de un gas si la presión aumenta, manteniendo constante la temperatura?",
                opciones: mezclarOpciones([
                    { texto: "A) Aumenta", correcta: false },
                    { texto: "B) Disminuye", correcta: true },
                    { texto: "C) No cambia", correcta: false }
                ])
            }
        ]
    },
    nivel2: {
        "Ley de Charles y Gay-Lussac": [
            {
                pregunta: "¿Qué magnitudes relaciona la Ley de Charles?",
                opciones: mezclarOpciones([
                    { texto: "A) Volumen y temperatura", correcta: true },
                    { texto: "B) Volumen y presión", correcta: false },
                    { texto: "C) Presión y temperatura", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué tipo de relación tienen volumen y temperatura según la Ley de Charles?",
                opciones: mezclarOpciones([
                    { texto: "A) Directamente proporcional", correcta: true },
                    { texto: "B) Inversamente proporcional", correcta: false },
                    { texto: "C) No están relacionadas", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué sucede con la presión si se aumenta la temperatura manteniendo el volumen constante?",
                opciones: mezclarOpciones([
                    { texto: "A) Aumenta", correcta: true },
                    { texto: "B) Disminuye", correcta: false },
                    { texto: "C) No cambia", correcta: false }
                ])
            }
        ],
        "Gases ideales": [
            {
                pregunta: "¿Cuál es la ecuación de estado de los gases ideales?",
                opciones: mezclarOpciones([
                    { texto: "A) PV = nRT", correcta: true },
                    { texto: "B) P + V = nRT", correcta: false },
                    { texto: "C) PV = nR/T", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué representa 'n' en la ecuación PV = nRT?",
                opciones: mezclarOpciones([
                    { texto: "A) Número de moles", correcta: true },
                    { texto: "B) Volumen", correcta: false },
                    { texto: "C) Temperatura", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué valor tiene la constante R en atm·L/(mol·K)?",
                opciones: mezclarOpciones([
                    { texto: "A) 0.0821", correcta: true },
                    { texto: "B) 8.314", correcta: false },
                    { texto: "C) 62.36", correcta: false }
                ])
            }
        ]
    },
    nivel3: {
        "Soluciones": [
            {
                pregunta: "¿Qué término describe la cantidad de soluto disuelto en una solución?",
                opciones: mezclarOpciones([
                    { texto: "A) Concentración", correcta: true },
                    { texto: "B) Solubilidad", correcta: false },
                    { texto: "C) Disolución", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué es una solución saturada?",
                opciones: mezclarOpciones([
                    { texto: "A) Una solución que contiene la máxima cantidad de soluto que puede disolverse", correcta: true },
                    { texto: "B) Una solución con poca cantidad de soluto", correcta: false },
                    { texto: "C) Una solución en la que no se puede disolver más soluto", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué sucede si se agrega soluto adicional a una solución saturada?",
                opciones: mezclarOpciones([
                    { texto: "A) Se disuelve completamente", correcta: false },
                    { texto: "B) Se precipita o queda sin disolver", correcta: true },
                    { texto: "C) La solución se diluye", correcta: false }
                ])
            }
        ],
        "Unidades de concentración": [
            {
                pregunta: "¿Qué unidad de concentración mide moles de soluto por litro de solución?",
                opciones: mezclarOpciones([
                    { texto: "A) Molaridad (M)", correcta: true },
                    { texto: "B) Molalidad (m)", correcta: false },
                    { texto: "C) Fracción molar", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué representa la molalidad en una solución?",
                opciones: mezclarOpciones([
                    { texto: "A) Moles de soluto por kilogramo de disolvente", correcta: true },
                    { texto: "B) Moles de soluto por litro de solución", correcta: false },
                    { texto: "C) Moles de soluto por volumen de disolvente", correcta: false }
                ])
            },
            {
                pregunta: "¿Cómo se expresa la concentración en porcentaje masa/masa?",
                opciones: mezclarOpciones([
                    { texto: "A) (masa soluto/masa solución) * 100", correcta: true },
                    { texto: "B) (masa soluto/volumen solución) * 100", correcta: false },
                    { texto: "C) (masa disolvente/masa solución) * 100", correcta: false }
                ])
            }
        ]
    },
    nivel4: {
        "Cálculos estequiométricos": [
            {
                pregunta: "¿Qué es la relación molar en estequiometría?",
                opciones: mezclarOpciones([
                    { texto: "A) Proporción de moles entre reactivos y productos", correcta: true },
                    { texto: "B) Número de átomos", correcta: false },
                    { texto: "C) Masa molar", correcta: false }
                ])
            },
            {
                pregunta: "¿Cómo se calcula la masa molar de un compuesto?",
                opciones: mezclarOpciones([
                    { texto: "A) Sumando las masas atómicas de los elementos en la fórmula", correcta: true },
                    { texto: "B) Dividiendo la masa por el número de moles", correcta: false },
                    { texto: "C) Multiplicando la densidad por el volumen", correcta: false }
                ])
            },
            {
                pregunta: "¿Cuál es el reactivo limitante en una reacción?",
                opciones: mezclarOpciones([
                    { texto: "A) El reactivo que se consume completamente", correcta: true },
                    { texto: "B) El reactivo que sobra", correcta: false },
                    { texto: "C) El reactivo que se combina en exceso", correcta: false }
                ])
            }
        ],
        "Química orgánica": [
            {
                pregunta: "¿Qué son los alcanos?",
                opciones: mezclarOpciones([
                    { texto: "A) Hidrocarburos saturados con enlaces simples", correcta: true },
                    { texto: "B) Hidrocarburos insaturados", correcta: false },
                    { texto: "C) Hidrocarburos con al menos un triple enlace", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué son los alquenos?",
                opciones: mezclarOpciones([
                    { texto: "A) Hidrocarburos saturados", correcta: false },
                    { texto: "B) Hidrocarburos con al menos un doble enlace", correcta: true },
                    { texto: "C) Hidrocarburos con un triple enlace", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué tipo de hidrocarburo es el propino?",
                opciones: mezclarOpciones([
                    { texto: "A) Alcano", correcta: false },
                    { texto: "B) Alqueno", correcta: false },
                    { texto: "C) Alquino", correcta: true }
                ])
            }
        ]
    },
    nivel5: {
        "Isótopos": [
            {
                pregunta: "¿Qué es un isótopo?",
                opciones: mezclarOpciones([
                    { texto: "A) Átomos del mismo elemento con diferente número de neutrones", correcta: true },
                    { texto: "B) Átomos con igual número de electrones", correcta: false },
                    { texto: "C) Átomos con diferentes masas y propiedades químicas", correcta: false }
                ])
            },
            {
                pregunta: "¿Cuál de los siguientes es un ejemplo de isótopo del hidrógeno?",
                opciones: mezclarOpciones([
                    { texto: "A) Deuterio", correcta: true },
                    { texto: "B) Carbono-12", correcta: false },
                    { texto: "C) Helio-4", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué caracteriza a los isótopos?",
                opciones: mezclarOpciones([
                    { texto: "A) Diferente número de neutrones", correcta: true },
                    { texto: "B) Igual número de protones", correcta: true },
                    { texto: "C) Igual número de electrones", correcta: false }
                ])
            }
        ],
        "Nomenclatura de alcanos, alquenos y alquinos": [
            {
                pregunta: "¿Cuál es el nombre de un alcano con cinco carbonos?",
                opciones: mezclarOpciones([
                    { texto: "A) Pentano", correcta: true },
                    { texto: "B) Hexano", correcta: false },
                    { texto: "C) Butano", correcta: false }
                ])
            },
            {
                pregunta: "¿Cuál es el nombre de un alquino con tres carbonos?",
                opciones: mezclarOpciones([
                    { texto: "A) Propino", correcta: true },
                    { texto: "B) Propano", correcta: false },
                    { texto: "C) Propeno", correcta: false }
                ])
            },
            {
                pregunta: "¿Qué es la isomería?",
                opciones: mezclarOpciones([
                    { texto: "A) Compuestos con la misma fórmula molecular pero diferente estructura", correcta: true },
                    { texto: "B) Moléculas con la misma estructura pero diferente fórmula molecular", correcta: false },
                    { texto: "C) Átomos con el mismo número de neutrones", correcta: false }
                ])
            }
        ]
    }
};
