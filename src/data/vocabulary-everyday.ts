// Vocabulario Cotidiano por Temas - Everyday Vocabulary by Topics
// With Spanish phonetic pronunciation guide

export interface EverydayWord {
  word: string;
  translation: string;
  pronunciation: string; // Spanish phonetic approximation
  example?: string;
  category: string;
}

export interface VocabularyTopic {
  id: string;
  name: string;
  nameEs: string;
  icon: string;
  level: number;
  words: EverydayWord[];
}

export const everydayVocabulary: VocabularyTopic[] = [
  // === GREETINGS & BASICS ===
  {
    id: 'greetings',
    name: 'Greetings & Basics',
    nameEs: 'Saludos y Básicos',
    icon: '👋',
    level: 1,
    words: [
      { word: 'Hello', translation: 'Hola', pronunciation: 'Jelóu', category: 'greeting' },
      { word: 'Hi', translation: 'Hola (informal)', pronunciation: 'Jái', category: 'greeting' },
      { word: 'Good morning', translation: 'Buenos días', pronunciation: 'Gud mórning', category: 'greeting' },
      { word: 'Good afternoon', translation: 'Buenas tardes', pronunciation: 'Gud afternún', category: 'greeting' },
      { word: 'Good evening', translation: 'Buenas noches', pronunciation: 'Gud ívning', category: 'greeting' },
      { word: 'Good night', translation: 'Buenas noches (despedida)', pronunciation: 'Gud náit', category: 'greeting' },
      { word: 'Goodbye', translation: 'Adiós', pronunciation: 'Gudbái', category: 'farewell' },
      { word: 'Bye', translation: 'Chao', pronunciation: 'Bái', category: 'farewell' },
      { word: 'See you later', translation: 'Hasta luego', pronunciation: 'Si iú léiter', category: 'farewell' },
      { word: 'See you tomorrow', translation: 'Hasta mañana', pronunciation: 'Si iú tumórou', category: 'farewell' },
      { word: 'How are you?', translation: '¿Cómo estás?', pronunciation: 'Jáu ar iú?', category: 'question' },
      { word: 'I\'m fine, thanks', translation: 'Estoy bien, gracias', pronunciation: 'Áim fáin, zenks', category: 'response' },
      { word: 'Nice to meet you', translation: 'Mucho gusto', pronunciation: 'Náis tu mít iú', category: 'introduction' },
      { word: 'Please', translation: 'Por favor', pronunciation: 'Plís', category: 'polite' },
      { word: 'Thank you', translation: 'Gracias', pronunciation: 'Zenk iú', category: 'polite' },
      { word: 'Thanks', translation: 'Gracias (informal)', pronunciation: 'Zenks', category: 'polite' },
      { word: 'You\'re welcome', translation: 'De nada', pronunciation: 'Iúr wélcom', category: 'polite' },
      { word: 'Excuse me', translation: 'Disculpe', pronunciation: 'Excús mi', category: 'polite' },
      { word: 'Sorry', translation: 'Perdón/Lo siento', pronunciation: 'Sóri', category: 'polite' },
      { word: 'Yes', translation: 'Sí', pronunciation: 'Iés', category: 'response' },
      { word: 'No', translation: 'No', pronunciation: 'Nóu', category: 'response' },
      { word: 'Maybe', translation: 'Quizás', pronunciation: 'Méibi', category: 'response' },
      { word: 'Of course', translation: 'Por supuesto', pronunciation: 'Of cors', category: 'response' },
      { word: 'I don\'t know', translation: 'No sé', pronunciation: 'Ái dóunt nóu', category: 'response' },
      { word: 'I understand', translation: 'Entiendo', pronunciation: 'Ái anderstand', category: 'response' }
    ]
  },

  // === HOME & HOUSE ===
  {
    id: 'home',
    name: 'Home & House',
    nameEs: 'Casa y Hogar',
    icon: '🏠',
    level: 2,
    words: [
      { word: 'House', translation: 'Casa', pronunciation: 'Jáus', category: 'building' },
      { word: 'Apartment', translation: 'Apartamento', pronunciation: 'Apártment', category: 'building' },
      { word: 'Flat', translation: 'Apartamento (UK)', pronunciation: 'Flat', category: 'building' },
      { word: 'Room', translation: 'Habitación', pronunciation: 'Rum', category: 'room' },
      { word: 'Bedroom', translation: 'Dormitorio', pronunciation: 'Bédrum', category: 'room' },
      { word: 'Living room', translation: 'Sala de estar', pronunciation: 'Líving rum', category: 'room' },
      { word: 'Kitchen', translation: 'Cocina', pronunciation: 'Kíchen', category: 'room' },
      { word: 'Bathroom', translation: 'Baño', pronunciation: 'Bázrum', category: 'room' },
      { word: 'Dining room', translation: 'Comedor', pronunciation: 'Dáining rum', category: 'room' },
      { word: 'Garage', translation: 'Garaje', pronunciation: 'Garásh', category: 'room' },
      { word: 'Garden', translation: 'Jardín', pronunciation: 'Gárden', category: 'outside' },
      { word: 'Yard', translation: 'Patio', pronunciation: 'Iárd', category: 'outside' },
      { word: 'Door', translation: 'Puerta', pronunciation: 'Dor', category: 'structure' },
      { word: 'Window', translation: 'Ventana', pronunciation: 'Wíndou', category: 'structure' },
      { word: 'Wall', translation: 'Pared', pronunciation: 'Wol', category: 'structure' },
      { word: 'Floor', translation: 'Piso/Suelo', pronunciation: 'Flor', category: 'structure' },
      { word: 'Ceiling', translation: 'Techo', pronunciation: 'Síling', category: 'structure' },
      { word: 'Roof', translation: 'Tejado', pronunciation: 'Ruf', category: 'structure' },
      { word: 'Stairs', translation: 'Escaleras', pronunciation: 'Stérs', category: 'structure' },
      { word: 'Furniture', translation: 'Muebles', pronunciation: 'Férnitur', category: 'furniture' },
      { word: 'Bed', translation: 'Cama', pronunciation: 'Bed', category: 'furniture' },
      { word: 'Table', translation: 'Mesa', pronunciation: 'Téibol', category: 'furniture' },
      { word: 'Chair', translation: 'Silla', pronunciation: 'Chér', category: 'furniture' },
      { word: 'Sofa', translation: 'Sofá', pronunciation: 'Sóufa', category: 'furniture' },
      { word: 'Couch', translation: 'Sofá (US)', pronunciation: 'Cáuch', category: 'furniture' },
      { word: 'Desk', translation: 'Escritorio', pronunciation: 'Desk', category: 'furniture' },
      { word: 'Lamp', translation: 'Lámpara', pronunciation: 'Lamp', category: 'furniture' },
      { word: 'Mirror', translation: 'Espejo', pronunciation: 'Míror', category: 'furniture' },
      { word: 'Closet', translation: 'Armario', pronunciation: 'Clóset', category: 'furniture' },
      { word: 'Wardrobe', translation: 'Armario (UK)', pronunciation: 'Wórdroub', category: 'furniture' }
    ]
  },

  // === FOOD & DRINKS ===
  {
    id: 'food',
    name: 'Food & Drinks',
    nameEs: 'Comida y Bebidas',
    icon: '🍔',
    level: 2,
    words: [
      { word: 'Food', translation: 'Comida', pronunciation: 'Fud', category: 'general' },
      { word: 'Drink', translation: 'Bebida', pronunciation: 'Drink', category: 'general' },
      { word: 'Water', translation: 'Agua', pronunciation: 'Wóter', category: 'drink' },
      { word: 'Coffee', translation: 'Café', pronunciation: 'Cófi', category: 'drink' },
      { word: 'Tea', translation: 'Té', pronunciation: 'Ti', category: 'drink' },
      { word: 'Juice', translation: 'Jugo', pronunciation: 'Chus', category: 'drink' },
      { word: 'Milk', translation: 'Leche', pronunciation: 'Milk', category: 'drink' },
      { word: 'Beer', translation: 'Cerveza', pronunciation: 'Bír', category: 'drink' },
      { word: 'Wine', translation: 'Vino', pronunciation: 'Wáin', category: 'drink' },
      { word: 'Bread', translation: 'Pan', pronunciation: 'Bred', category: 'food' },
      { word: 'Rice', translation: 'Arroz', pronunciation: 'Ráis', category: 'food' },
      { word: 'Pasta', translation: 'Pasta', pronunciation: 'Pásta', category: 'food' },
      { word: 'Meat', translation: 'Carne', pronunciation: 'Mit', category: 'food' },
      { word: 'Chicken', translation: 'Pollo', pronunciation: 'Chíken', category: 'food' },
      { word: 'Fish', translation: 'Pescado', pronunciation: 'Fish', category: 'food' },
      { word: 'Beef', translation: 'Carne de res', pronunciation: 'Bif', category: 'food' },
      { word: 'Pork', translation: 'Cerdo', pronunciation: 'Pork', category: 'food' },
      { word: 'Egg', translation: 'Huevo', pronunciation: 'Eg', category: 'food' },
      { word: 'Cheese', translation: 'Queso', pronunciation: 'Chis', category: 'food' },
      { word: 'Butter', translation: 'Mantequilla', pronunciation: 'Báter', category: 'food' },
      { word: 'Salt', translation: 'Sal', pronunciation: 'Solt', category: 'condiment' },
      { word: 'Sugar', translation: 'Azúcar', pronunciation: 'Shúgar', category: 'condiment' },
      { word: 'Pepper', translation: 'Pimienta', pronunciation: 'Péper', category: 'condiment' },
      { word: 'Apple', translation: 'Manzana', pronunciation: 'Ápol', category: 'fruit' },
      { word: 'Banana', translation: 'Plátano', pronunciation: 'Banána', category: 'fruit' },
      { word: 'Orange', translation: 'Naranja', pronunciation: 'Órinch', category: 'fruit' },
      { word: 'Tomato', translation: 'Tomate', pronunciation: 'Toméitou', category: 'vegetable' },
      { word: 'Potato', translation: 'Papa/Patata', pronunciation: 'Potéitou', category: 'vegetable' },
      { word: 'Onion', translation: 'Cebolla', pronunciation: 'Ánion', category: 'vegetable' },
      { word: 'Salad', translation: 'Ensalada', pronunciation: 'Sálad', category: 'food' },
      { word: 'Soup', translation: 'Sopa', pronunciation: 'Sup', category: 'food' },
      { word: 'Sandwich', translation: 'Sándwich', pronunciation: 'Sándwich', category: 'food' },
      { word: 'Pizza', translation: 'Pizza', pronunciation: 'Pítsa', category: 'food' },
      { word: 'Hamburger', translation: 'Hamburguesa', pronunciation: 'Jámberguer', category: 'food' },
      { word: 'French fries', translation: 'Papas fritas', pronunciation: 'French fráis', category: 'food' },
      { word: 'Ice cream', translation: 'Helado', pronunciation: 'Áis crim', category: 'dessert' },
      { word: 'Cake', translation: 'Pastel', pronunciation: 'Kéik', category: 'dessert' },
      { word: 'Cookie', translation: 'Galleta', pronunciation: 'Cúki', category: 'dessert' },
      { word: 'Breakfast', translation: 'Desayuno', pronunciation: 'Brékfast', category: 'meal' },
      { word: 'Lunch', translation: 'Almuerzo', pronunciation: 'Lanch', category: 'meal' },
      { word: 'Dinner', translation: 'Cena', pronunciation: 'Díner', category: 'meal' }
    ]
  },

  // === CLOTHING ===
  {
    id: 'clothing',
    name: 'Clothing',
    nameEs: 'Ropa',
    icon: '👕',
    level: 2,
    words: [
      { word: 'Clothes', translation: 'Ropa', pronunciation: 'Clóuds', category: 'general' },
      { word: 'Shirt', translation: 'Camisa', pronunciation: 'Shert', category: 'top' },
      { word: 'T-shirt', translation: 'Camiseta', pronunciation: 'Tí-shert', category: 'top' },
      { word: 'Blouse', translation: 'Blusa', pronunciation: 'Bláus', category: 'top' },
      { word: 'Sweater', translation: 'Suéter', pronunciation: 'Suéter', category: 'top' },
      { word: 'Jacket', translation: 'Chaqueta', pronunciation: 'Yáket', category: 'outerwear' },
      { word: 'Coat', translation: 'Abrigo', pronunciation: 'Cóut', category: 'outerwear' },
      { word: 'Pants', translation: 'Pantalones (US)', pronunciation: 'Pants', category: 'bottom' },
      { word: 'Trousers', translation: 'Pantalones (UK)', pronunciation: 'Tráusers', category: 'bottom' },
      { word: 'Jeans', translation: 'Jeans/Vaqueros', pronunciation: 'Yins', category: 'bottom' },
      { word: 'Shorts', translation: 'Shorts/Pantalones cortos', pronunciation: 'Shorts', category: 'bottom' },
      { word: 'Skirt', translation: 'Falda', pronunciation: 'Skert', category: 'bottom' },
      { word: 'Dress', translation: 'Vestido', pronunciation: 'Dres', category: 'full' },
      { word: 'Suit', translation: 'Traje', pronunciation: 'Sut', category: 'full' },
      { word: 'Shoes', translation: 'Zapatos', pronunciation: 'Shus', category: 'footwear' },
      { word: 'Boots', translation: 'Botas', pronunciation: 'Buts', category: 'footwear' },
      { word: 'Sneakers', translation: 'Tenis/Zapatillas', pronunciation: 'Sníkers', category: 'footwear' },
      { word: 'Sandals', translation: 'Sandalias', pronunciation: 'Sándals', category: 'footwear' },
      { word: 'Socks', translation: 'Calcetines', pronunciation: 'Soks', category: 'accessory' },
      { word: 'Hat', translation: 'Sombrero/Gorra', pronunciation: 'Jat', category: 'accessory' },
      { word: 'Belt', translation: 'Cinturón', pronunciation: 'Belt', category: 'accessory' },
      { word: 'Tie', translation: 'Corbata', pronunciation: 'Tái', category: 'accessory' },
      { word: 'Scarf', translation: 'Bufanda', pronunciation: 'Scarf', category: 'accessory' },
      { word: 'Gloves', translation: 'Guantes', pronunciation: 'Glavs', category: 'accessory' },
      { word: 'Underwear', translation: 'Ropa interior', pronunciation: 'Ánderwer', category: 'underwear' }
    ]
  },

  // === BODY PARTS ===
  {
    id: 'body',
    name: 'Body Parts',
    nameEs: 'Partes del Cuerpo',
    icon: '🫀',
    level: 2,
    words: [
      { word: 'Head', translation: 'Cabeza', pronunciation: 'Jed', category: 'head' },
      { word: 'Face', translation: 'Cara', pronunciation: 'Féis', category: 'head' },
      { word: 'Hair', translation: 'Cabello', pronunciation: 'Jér', category: 'head' },
      { word: 'Eye', translation: 'Ojo', pronunciation: 'Ái', category: 'head' },
      { word: 'Ear', translation: 'Oreja', pronunciation: 'Ír', category: 'head' },
      { word: 'Nose', translation: 'Nariz', pronunciation: 'Nóus', category: 'head' },
      { word: 'Mouth', translation: 'Boca', pronunciation: 'Máud', category: 'head' },
      { word: 'Teeth', translation: 'Dientes', pronunciation: 'Tid', category: 'head' },
      { word: 'Tongue', translation: 'Lengua', pronunciation: 'Tang', category: 'head' },
      { word: 'Neck', translation: 'Cuello', pronunciation: 'Nek', category: 'body' },
      { word: 'Shoulder', translation: 'Hombro', pronunciation: 'Shóulder', category: 'body' },
      { word: 'Arm', translation: 'Brazo', pronunciation: 'Arm', category: 'body' },
      { word: 'Elbow', translation: 'Codo', pronunciation: 'Élbou', category: 'body' },
      { word: 'Wrist', translation: 'Muñeca', pronunciation: 'Rist', category: 'body' },
      { word: 'Hand', translation: 'Mano', pronunciation: 'Jand', category: 'body' },
      { word: 'Finger', translation: 'Dedo (mano)', pronunciation: 'Fínguer', category: 'body' },
      { word: 'Thumb', translation: 'Pulgar', pronunciation: 'Dam', category: 'body' },
      { word: 'Chest', translation: 'Pecho', pronunciation: 'Chest', category: 'body' },
      { word: 'Back', translation: 'Espalda', pronunciation: 'Bak', category: 'body' },
      { word: 'Stomach', translation: 'Estómago', pronunciation: 'Stómak', category: 'body' },
      { word: 'Leg', translation: 'Pierna', pronunciation: 'Leg', category: 'body' },
      { word: 'Knee', translation: 'Rodilla', pronunciation: 'Ni', category: 'body' },
      { word: 'Ankle', translation: 'Tobillo', pronunciation: 'Ánkol', category: 'body' },
      { word: 'Foot', translation: 'Pie', pronunciation: 'Fut', category: 'body' },
      { word: 'Feet', translation: 'Pies', pronunciation: 'Fit', category: 'body' },
      { word: 'Toe', translation: 'Dedo (pie)', pronunciation: 'Tóu', category: 'body' },
      { word: 'Heart', translation: 'Corazón', pronunciation: 'Járt', category: 'organ' },
      { word: 'Brain', translation: 'Cerebro', pronunciation: 'Bréin', category: 'organ' },
      { word: 'Skin', translation: 'Piel', pronunciation: 'Skin', category: 'body' },
      { word: 'Blood', translation: 'Sangre', pronunciation: 'Blad', category: 'body' }
    ]
  },

  // === HEALTH ===
  {
    id: 'health',
    name: 'Health & Illness',
    nameEs: 'Salud y Enfermedades',
    icon: '🏥',
    level: 3,
    words: [
      { word: 'Healthy', translation: 'Saludable', pronunciation: 'Jéldi', category: 'general' },
      { word: 'Sick', translation: 'Enfermo', pronunciation: 'Sik', category: 'general' },
      { word: 'Ill', translation: 'Enfermo (UK)', pronunciation: 'Il', category: 'general' },
      { word: 'Pain', translation: 'Dolor', pronunciation: 'Péin', category: 'symptom' },
      { word: 'Headache', translation: 'Dolor de cabeza', pronunciation: 'Jédéik', category: 'symptom' },
      { word: 'Stomachache', translation: 'Dolor de estómago', pronunciation: 'Stómakéik', category: 'symptom' },
      { word: 'Toothache', translation: 'Dolor de muela', pronunciation: 'Túdéik', category: 'symptom' },
      { word: 'Fever', translation: 'Fiebre', pronunciation: 'Fíver', category: 'symptom' },
      { word: 'Cold', translation: 'Resfriado', pronunciation: 'Cóuld', category: 'illness' },
      { word: 'Flu', translation: 'Gripe', pronunciation: 'Flu', category: 'illness' },
      { word: 'Cough', translation: 'Tos', pronunciation: 'Cof', category: 'symptom' },
      { word: 'Sore throat', translation: 'Dolor de garganta', pronunciation: 'Sor zróut', category: 'symptom' },
      { word: 'Doctor', translation: 'Doctor', pronunciation: 'Dóctor', category: 'person' },
      { word: 'Nurse', translation: 'Enfermero/a', pronunciation: 'Ners', category: 'person' },
      { word: 'Hospital', translation: 'Hospital', pronunciation: 'Jóspital', category: 'place' },
      { word: 'Pharmacy', translation: 'Farmacia', pronunciation: 'Fármasi', category: 'place' },
      { word: 'Medicine', translation: 'Medicina', pronunciation: 'Médisin', category: 'treatment' },
      { word: 'Pill', translation: 'Pastilla', pronunciation: 'Pil', category: 'treatment' },
      { word: 'Prescription', translation: 'Receta', pronunciation: 'Priscripshon', category: 'treatment' },
      { word: 'Appointment', translation: 'Cita', pronunciation: 'Apóintment', category: 'general' }
    ]
  },

  // === WEATHER & NATURE ===
  {
    id: 'weather',
    name: 'Weather & Nature',
    nameEs: 'Clima y Naturaleza',
    icon: '🌤️',
    level: 2,
    words: [
      { word: 'Weather', translation: 'Clima', pronunciation: 'Wéder', category: 'general' },
      { word: 'Sun', translation: 'Sol', pronunciation: 'San', category: 'sky' },
      { word: 'Sunny', translation: 'Soleado', pronunciation: 'Sáni', category: 'weather' },
      { word: 'Cloud', translation: 'Nube', pronunciation: 'Cláud', category: 'sky' },
      { word: 'Cloudy', translation: 'Nublado', pronunciation: 'Cláudi', category: 'weather' },
      { word: 'Rain', translation: 'Lluvia', pronunciation: 'Réin', category: 'precipitation' },
      { word: 'Rainy', translation: 'Lluvioso', pronunciation: 'Réini', category: 'weather' },
      { word: 'Snow', translation: 'Nieve', pronunciation: 'Snóu', category: 'precipitation' },
      { word: 'Snowy', translation: 'Nevado', pronunciation: 'Snóui', category: 'weather' },
      { word: 'Wind', translation: 'Viento', pronunciation: 'Wind', category: 'weather' },
      { word: 'Windy', translation: 'Ventoso', pronunciation: 'Wíndi', category: 'weather' },
      { word: 'Storm', translation: 'Tormenta', pronunciation: 'Storm', category: 'weather' },
      { word: 'Hot', translation: 'Caliente/Caluroso', pronunciation: 'Jot', category: 'temperature' },
      { word: 'Cold', translation: 'Frío', pronunciation: 'Cóuld', category: 'temperature' },
      { word: 'Warm', translation: 'Templado/Cálido', pronunciation: 'Worm', category: 'temperature' },
      { word: 'Cool', translation: 'Fresco', pronunciation: 'Cul', category: 'temperature' },
      { word: 'Tree', translation: 'Árbol', pronunciation: 'Tri', category: 'nature' },
      { word: 'Flower', translation: 'Flor', pronunciation: 'Fláuer', category: 'nature' },
      { word: 'Mountain', translation: 'Montaña', pronunciation: 'Máunten', category: 'nature' },
      { word: 'River', translation: 'Río', pronunciation: 'Ríver', category: 'nature' },
      { word: 'Sea', translation: 'Mar', pronunciation: 'Si', category: 'nature' },
      { word: 'Beach', translation: 'Playa', pronunciation: 'Bich', category: 'nature' },
      { word: 'Forest', translation: 'Bosque', pronunciation: 'Fórest', category: 'nature' },
      { word: 'Sky', translation: 'Cielo', pronunciation: 'Skái', category: 'nature' },
      { word: 'Moon', translation: 'Luna', pronunciation: 'Mun', category: 'sky' }
    ]
  },

  // === TRANSPORTATION ===
  {
    id: 'transport',
    name: 'Transportation',
    nameEs: 'Transporte',
    icon: '🚗',
    level: 2,
    words: [
      { word: 'Car', translation: 'Carro/Coche', pronunciation: 'Car', category: 'vehicle' },
      { word: 'Bus', translation: 'Autobús', pronunciation: 'Bas', category: 'vehicle' },
      { word: 'Train', translation: 'Tren', pronunciation: 'Tréin', category: 'vehicle' },
      { word: 'Plane', translation: 'Avión', pronunciation: 'Pléin', category: 'vehicle' },
      { word: 'Airplane', translation: 'Avión', pronunciation: 'Érpléin', category: 'vehicle' },
      { word: 'Taxi', translation: 'Taxi', pronunciation: 'Táksi', category: 'vehicle' },
      { word: 'Bicycle', translation: 'Bicicleta', pronunciation: 'Báisikol', category: 'vehicle' },
      { word: 'Bike', translation: 'Bici', pronunciation: 'Báik', category: 'vehicle' },
      { word: 'Motorcycle', translation: 'Motocicleta', pronunciation: 'Mótorsáikol', category: 'vehicle' },
      { word: 'Boat', translation: 'Bote', pronunciation: 'Bóut', category: 'vehicle' },
      { word: 'Ship', translation: 'Barco', pronunciation: 'Ship', category: 'vehicle' },
      { word: 'Subway', translation: 'Metro (US)', pronunciation: 'Sábwei', category: 'vehicle' },
      { word: 'Underground', translation: 'Metro (UK)', pronunciation: 'Ándergráund', category: 'vehicle' },
      { word: 'Airport', translation: 'Aeropuerto', pronunciation: 'Érport', category: 'place' },
      { word: 'Station', translation: 'Estación', pronunciation: 'Stéishon', category: 'place' },
      { word: 'Bus stop', translation: 'Parada de autobús', pronunciation: 'Bas stop', category: 'place' },
      { word: 'Ticket', translation: 'Boleto', pronunciation: 'Tíket', category: 'item' },
      { word: 'Driver', translation: 'Conductor', pronunciation: 'Dráiver', category: 'person' },
      { word: 'Passenger', translation: 'Pasajero', pronunciation: 'Pásenger', category: 'person' },
      { word: 'Traffic', translation: 'Tráfico', pronunciation: 'Tráfic', category: 'general' },
      { word: 'Road', translation: 'Carretera/Calle', pronunciation: 'Róud', category: 'place' },
      { word: 'Street', translation: 'Calle', pronunciation: 'Strit', category: 'place' },
      { word: 'Highway', translation: 'Autopista', pronunciation: 'Jáiwéi', category: 'place' },
      { word: 'Parking', translation: 'Estacionamiento', pronunciation: 'Párking', category: 'place' },
      { word: 'Gas station', translation: 'Gasolinera', pronunciation: 'Gas stéishon', category: 'place' }
    ]
  },

  // === NUMBERS ===
  {
    id: 'numbers',
    name: 'Numbers',
    nameEs: 'Números',
    icon: '🔢',
    level: 1,
    words: [
      { word: 'Zero', translation: 'Cero', pronunciation: 'Zírou', category: 'cardinal' },
      { word: 'One', translation: 'Uno', pronunciation: 'Wán', category: 'cardinal' },
      { word: 'Two', translation: 'Dos', pronunciation: 'Tu', category: 'cardinal' },
      { word: 'Three', translation: 'Tres', pronunciation: 'Zri', category: 'cardinal' },
      { word: 'Four', translation: 'Cuatro', pronunciation: 'For', category: 'cardinal' },
      { word: 'Five', translation: 'Cinco', pronunciation: 'Fáiv', category: 'cardinal' },
      { word: 'Six', translation: 'Seis', pronunciation: 'Siks', category: 'cardinal' },
      { word: 'Seven', translation: 'Siete', pronunciation: 'Séven', category: 'cardinal' },
      { word: 'Eight', translation: 'Ocho', pronunciation: 'Éit', category: 'cardinal' },
      { word: 'Nine', translation: 'Nueve', pronunciation: 'Náin', category: 'cardinal' },
      { word: 'Ten', translation: 'Diez', pronunciation: 'Ten', category: 'cardinal' },
      { word: 'Eleven', translation: 'Once', pronunciation: 'Iléven', category: 'cardinal' },
      { word: 'Twelve', translation: 'Doce', pronunciation: 'Twelv', category: 'cardinal' },
      { word: 'Twenty', translation: 'Veinte', pronunciation: 'Twénti', category: 'cardinal' },
      { word: 'Thirty', translation: 'Treinta', pronunciation: 'Zérti', category: 'cardinal' },
      { word: 'Forty', translation: 'Cuarenta', pronunciation: 'Fórti', category: 'cardinal' },
      { word: 'Fifty', translation: 'Cincuenta', pronunciation: 'Fífti', category: 'cardinal' },
      { word: 'Hundred', translation: 'Cien', pronunciation: 'Jándred', category: 'cardinal' },
      { word: 'Thousand', translation: 'Mil', pronunciation: 'Záusand', category: 'cardinal' },
      { word: 'Million', translation: 'Millón', pronunciation: 'Mílion', category: 'cardinal' },
      { word: 'First', translation: 'Primero', pronunciation: 'Ferst', category: 'ordinal' },
      { word: 'Second', translation: 'Segundo', pronunciation: 'Sécond', category: 'ordinal' },
      { word: 'Third', translation: 'Tercero', pronunciation: 'Zerd', category: 'ordinal' },
      { word: 'Fourth', translation: 'Cuarto', pronunciation: 'Forz', category: 'ordinal' },
      { word: 'Fifth', translation: 'Quinto', pronunciation: 'Fifz', category: 'ordinal' }
    ]
  },

  // === TIME ===
  {
    id: 'time',
    name: 'Time',
    nameEs: 'Tiempo',
    icon: '⏰',
    level: 1,
    words: [
      { word: 'Time', translation: 'Tiempo/Hora', pronunciation: 'Táim', category: 'general' },
      { word: 'Hour', translation: 'Hora', pronunciation: 'Áuer', category: 'unit' },
      { word: 'Minute', translation: 'Minuto', pronunciation: 'Mínit', category: 'unit' },
      { word: 'Second', translation: 'Segundo', pronunciation: 'Sécond', category: 'unit' },
      { word: 'Day', translation: 'Día', pronunciation: 'Déi', category: 'unit' },
      { word: 'Week', translation: 'Semana', pronunciation: 'Wik', category: 'unit' },
      { word: 'Month', translation: 'Mes', pronunciation: 'Manz', category: 'unit' },
      { word: 'Year', translation: 'Año', pronunciation: 'Yír', category: 'unit' },
      { word: 'Today', translation: 'Hoy', pronunciation: 'Tudéi', category: 'when' },
      { word: 'Yesterday', translation: 'Ayer', pronunciation: 'Iésterdei', category: 'when' },
      { word: 'Tomorrow', translation: 'Mañana', pronunciation: 'Tumórou', category: 'when' },
      { word: 'Now', translation: 'Ahora', pronunciation: 'Náu', category: 'when' },
      { word: 'Later', translation: 'Luego', pronunciation: 'Léiter', category: 'when' },
      { word: 'Soon', translation: 'Pronto', pronunciation: 'Sun', category: 'when' },
      { word: 'Always', translation: 'Siempre', pronunciation: 'Ólweis', category: 'frequency' },
      { word: 'Never', translation: 'Nunca', pronunciation: 'Néver', category: 'frequency' },
      { word: 'Sometimes', translation: 'A veces', pronunciation: 'Sámtáims', category: 'frequency' },
      { word: 'Usually', translation: 'Usualmente', pronunciation: 'Yúshuali', category: 'frequency' },
      { word: 'Morning', translation: 'Mañana', pronunciation: 'Mórning', category: 'part' },
      { word: 'Afternoon', translation: 'Tarde', pronunciation: 'Afternún', category: 'part' },
      { word: 'Evening', translation: 'Noche (temprana)', pronunciation: 'Ívning', category: 'part' },
      { word: 'Night', translation: 'Noche', pronunciation: 'Náit', category: 'part' },
      { word: 'Midnight', translation: 'Medianoche', pronunciation: 'Mídnáit', category: 'part' },
      { word: 'Noon', translation: 'Mediodía', pronunciation: 'Nun', category: 'part' }
    ]
  },

  // === DAYS & MONTHS ===
  {
    id: 'calendar',
    name: 'Days & Months',
    nameEs: 'Días y Meses',
    icon: '📅',
    level: 1,
    words: [
      { word: 'Monday', translation: 'Lunes', pronunciation: 'Mándei', category: 'day' },
      { word: 'Tuesday', translation: 'Martes', pronunciation: 'Tiúsdei', category: 'day' },
      { word: 'Wednesday', translation: 'Miércoles', pronunciation: 'Wénsdei', category: 'day' },
      { word: 'Thursday', translation: 'Jueves', pronunciation: 'Zérsdei', category: 'day' },
      { word: 'Friday', translation: 'Viernes', pronunciation: 'Fráidei', category: 'day' },
      { word: 'Saturday', translation: 'Sábado', pronunciation: 'Sáterdei', category: 'day' },
      { word: 'Sunday', translation: 'Domingo', pronunciation: 'Sándei', category: 'day' },
      { word: 'January', translation: 'Enero', pronunciation: 'Yániueri', category: 'month' },
      { word: 'February', translation: 'Febrero', pronunciation: 'Fébrueri', category: 'month' },
      { word: 'March', translation: 'Marzo', pronunciation: 'March', category: 'month' },
      { word: 'April', translation: 'Abril', pronunciation: 'Éipril', category: 'month' },
      { word: 'May', translation: 'Mayo', pronunciation: 'Méi', category: 'month' },
      { word: 'June', translation: 'Junio', pronunciation: 'Yun', category: 'month' },
      { word: 'July', translation: 'Julio', pronunciation: 'Yulái', category: 'month' },
      { word: 'August', translation: 'Agosto', pronunciation: 'Ógast', category: 'month' },
      { word: 'September', translation: 'Septiembre', pronunciation: 'Septémber', category: 'month' },
      { word: 'October', translation: 'Octubre', pronunciation: 'Octóuber', category: 'month' },
      { word: 'November', translation: 'Noviembre', pronunciation: 'Novémber', category: 'month' },
      { word: 'December', translation: 'Diciembre', pronunciation: 'Disémber', category: 'month' }
    ]
  },

  // === COLORS ===
  {
    id: 'colors',
    name: 'Colors',
    nameEs: 'Colores',
    icon: '🎨',
    level: 1,
    words: [
      { word: 'Red', translation: 'Rojo', pronunciation: 'Red', category: 'primary' },
      { word: 'Blue', translation: 'Azul', pronunciation: 'Blu', category: 'primary' },
      { word: 'Yellow', translation: 'Amarillo', pronunciation: 'Iélou', category: 'primary' },
      { word: 'Green', translation: 'Verde', pronunciation: 'Grin', category: 'secondary' },
      { word: 'Orange', translation: 'Naranja', pronunciation: 'Órinch', category: 'secondary' },
      { word: 'Purple', translation: 'Morado', pronunciation: 'Pérpol', category: 'secondary' },
      { word: 'Pink', translation: 'Rosa', pronunciation: 'Pink', category: 'other' },
      { word: 'Brown', translation: 'Marrón/Café', pronunciation: 'Bráun', category: 'other' },
      { word: 'Black', translation: 'Negro', pronunciation: 'Blak', category: 'neutral' },
      { word: 'White', translation: 'Blanco', pronunciation: 'Wáit', category: 'neutral' },
      { word: 'Gray', translation: 'Gris', pronunciation: 'Gréi', category: 'neutral' },
      { word: 'Light', translation: 'Claro', pronunciation: 'Láit', category: 'modifier' },
      { word: 'Dark', translation: 'Oscuro', pronunciation: 'Dark', category: 'modifier' }
    ]
  },

  // === FAMILY ===
  {
    id: 'family',
    name: 'Family',
    nameEs: 'Familia',
    icon: '👨‍👩‍👧‍👦',
    level: 1,
    words: [
      { word: 'Family', translation: 'Familia', pronunciation: 'Fámili', category: 'general' },
      { word: 'Parents', translation: 'Padres', pronunciation: 'Pérents', category: 'relatives' },
      { word: 'Father', translation: 'Padre', pronunciation: 'Fáder', category: 'relatives' },
      { word: 'Dad', translation: 'Papá', pronunciation: 'Dad', category: 'relatives' },
      { word: 'Mother', translation: 'Madre', pronunciation: 'Máder', category: 'relatives' },
      { word: 'Mom', translation: 'Mamá', pronunciation: 'Mom', category: 'relatives' },
      { word: 'Mum', translation: 'Mamá (UK)', pronunciation: 'Mam', category: 'relatives' },
      { word: 'Son', translation: 'Hijo', pronunciation: 'San', category: 'relatives' },
      { word: 'Daughter', translation: 'Hija', pronunciation: 'Dóter', category: 'relatives' },
      { word: 'Brother', translation: 'Hermano', pronunciation: 'Bráder', category: 'relatives' },
      { word: 'Sister', translation: 'Hermana', pronunciation: 'Síster', category: 'relatives' },
      { word: 'Grandfather', translation: 'Abuelo', pronunciation: 'Grándfader', category: 'relatives' },
      { word: 'Grandmother', translation: 'Abuela', pronunciation: 'Grándmader', category: 'relatives' },
      { word: 'Grandparents', translation: 'Abuelos', pronunciation: 'Grándpérents', category: 'relatives' },
      { word: 'Grandson', translation: 'Nieto', pronunciation: 'Grándsan', category: 'relatives' },
      { word: 'Granddaughter', translation: 'Nieta', pronunciation: 'Gránddóter', category: 'relatives' },
      { word: 'Uncle', translation: 'Tío', pronunciation: 'Ánkol', category: 'relatives' },
      { word: 'Aunt', translation: 'Tía', pronunciation: 'Ant', category: 'relatives' },
      { word: 'Cousin', translation: 'Primo/a', pronunciation: 'Cásin', category: 'relatives' },
      { word: 'Nephew', translation: 'Sobrino', pronunciation: 'Néfiu', category: 'relatives' },
      { word: 'Niece', translation: 'Sobrina', pronunciation: 'Nis', category: 'relatives' },
      { word: 'Husband', translation: 'Esposo', pronunciation: 'Jásband', category: 'marriage' },
      { word: 'Wife', translation: 'Esposa', pronunciation: 'Wáif', category: 'marriage' },
      { word: 'Married', translation: 'Casado/a', pronunciation: 'Mérid', category: 'status' },
      { word: 'Single', translation: 'Soltero/a', pronunciation: 'Síngol', category: 'status' }
    ]
  }
];

// Helper functions
export const getVocabularyByTopic = (topicId: string): VocabularyTopic | undefined => {
  return everydayVocabulary.find(t => t.id === topicId);
};

export const getVocabularyByLevel = (level: number): VocabularyTopic[] => {
  return everydayVocabulary.filter(t => t.level <= level);
};

export const searchWord = (term: string): EverydayWord[] => {
  const lowerTerm = term.toLowerCase();
  const results: EverydayWord[] = [];
  
  everydayVocabulary.forEach(topic => {
    topic.words.forEach(word => {
      if (word.word.toLowerCase().includes(lowerTerm) || 
          word.translation.toLowerCase().includes(lowerTerm)) {
        results.push(word);
      }
    });
  });
  
  return results;
};

export const getTotalWordCount = (): number => {
  return everydayVocabulary.reduce((total, topic) => total + topic.words.length, 0);
};

export default everydayVocabulary;
