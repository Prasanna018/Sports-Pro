export const categories = [
  {
    id: "1",
    name: "Football",
    slug: "football",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Basketball",
    slug: "basketball",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Tennis",
    slug: "tennis",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Cricket",
    slug: "cricket",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1967&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Swimming",
    slug: "swimming",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Running",
    slug: "running",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop",
  },
]

// Generate 20 products for each category (120 total)
const generateProductsForCategory = (category, startId, count) => {
  const products = []
  const categoryData = {
    Football: {
      names: [
        "Pro Soccer Ball",
        "Elite Football",
        "Training Football",
        "Match Ball",
        "Indoor Football",
        "Youth Football",
        "Competition Ball",
        "Goalkeeper Gloves",
        "Football Boots",
        "Shin Guards",
        "Football Jersey",
        "Training Cones",
        "Football Socks",
        "Football Shorts",
        "Training Vest",
        "Football Bag",
        "Football Pump",
        "Goal Net",
        "Referee Kit",
        "Football Captain Armband",
      ],
      images: [
        "https://images.unsplash.com/photo-1614632537423-5e1c478e56c8?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1935&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1624526267942-ab0c0e53d0e3?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    Basketball: {
      names: [
        "Pro Basketball",
        "Indoor Basketball",
        "Outdoor Basketball",
        "Training Basketball",
        "Youth Basketball",
        "Basketball Hoop",
        "Basketball Jersey",
        "Basketball Shorts",
        "Basketball Socks",
        "Basketball Shoes",
        "Basketball Bag",
        "Basketball Pump",
        "Basketball Net",
        "Basketball Headband",
        "Basketball Wristband",
        "Basketball Board",
        "Basketball Stand",
        "Basketball Whistle",
        "Basketball Scoreboard",
        "Basketball Timer",
      ],
      images: [
        "https://images.unsplash.com/photo-1612118745077-9d5a5e6b8e54?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=2071&auto=format&fit=crop",
      ],
    },
    Tennis: {
      names: [
        "Pro Tennis Racket",
        "Tennis Balls",
        "Tennis Shoes",
        "Tennis Bag",
        "Tennis Strings",
        "Tennis Grips",
        "Tennis Dampeners",
        "Tennis Wristband",
        "Tennis Headband",
        "Tennis Shorts",
        "Tennis Skirt",
        "Tennis Dress",
        "Tennis Socks",
        "Tennis Cap",
        "Tennis Visor",
        "Tennis Net",
        "Tennis Court Marker",
        "Tennis Ball Machine",
        "Tennis Elbow Support",
        "Tennis Training Aids",
      ],
      images: [
        "https://images.unsplash.com/photo-1617083934551-ac1be4815d10?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1622279457486-28f6b1710b49?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=2060&auto=format&fit=crop",
      ],
    },
    Cricket: {
      names: [
        "Cricket Bat",
        "Cricket Ball",
        "Cricket Helmet",
        "Cricket Gloves",
        "Cricket Pads",
        "Cricket Shoes",
        "Cricket Stumps",
        "Cricket Jersey",
        "Cricket Trousers",
        "Cricket Bag",
        "Cricket Thigh Guard",
        "Cricket Chest Guard",
        "Cricket Abdominal Guard",
        "Cricket Cap",
        "Cricket Sunglasses",
        "Cricket Arm Guard",
        "Cricket Wicket Keeping Gloves",
        "Cricket Batting Inners",
        "Cricket Grip",
        "Cricket Bat Tape",
      ],
      images: [
        "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1967&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1589801258579-18e091f4ca26?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&w=2023&auto=format&fit=crop",
      ],
    },
    Swimming: {
      names: [
        "Swimming Goggles",
        "Swimming Cap",
        "Swimming Suit",
        "Swimming Trunks",
        "Swimming Fins",
        "Swimming Kickboard",
        "Swimming Pull Buoy",
        "Swimming Paddles",
        "Swimming Snorkel",
        "Swimming Ear Plugs",
        "Swimming Nose Clip",
        "Swimming Bag",
        "Swimming Towel",
        "Swimming Robe",
        "Swimming Flip Flops",
        "Swimming Training Watch",
        "Swimming Lap Counter",
        "Swimming Pool Float",
        "Swimming Pool Noodle",
        "Swimming Pool Thermometer",
      ],
      images: [
        "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?q=80&w=1964&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1560090995-01632a28895b?q=80&w=2069&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600965962575-7c119a27d5f4?q=80&w=2070&auto=format&fit=crop",
      ],
    },
    Running: {
      names: [
        "Running Shoes",
        "Running Shorts",
        "Running T-Shirt",
        "Running Jacket",
        "Running Socks",
        "Running Cap",
        "Running Sunglasses",
        "Running Watch",
        "Running Armband",
        "Running Belt",
        "Running Hydration Pack",
        "Running Water Bottle",
        "Running Headphones",
        "Running Reflective Vest",
        "Running Light",
        "Running Compression Sleeves",
        "Running Gloves",
        "Running Mask",
        "Running Insoles",
        "Running Recovery Sandals",
      ],
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1970&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550759073-9bfb4a7d4a1f?q=80&w=1974&auto=format&fit=crop",
      ],
    },
  }

  const { names, images } = categoryData[category]

  for (let i = 0; i < count; i++) {
    const nameIndex = i % names.length
    const imageIndex = i % images.length
    const price = Math.floor(Math.random() * 150) + 20 // Random price between $20 and $170
    const rating = (Math.random() * 2 + 3).toFixed(1) // Random rating between 3.0 and 5.0
    const reviewCount = Math.floor(Math.random() * 100) + 5 // Random review count between 5 and 105

    products.push({
      id: (startId + i).toString(),
      name: `${names[nameIndex]} ${i + 1}`,
      price: price,
      category: category,
      image: images[imageIndex],
      description: `Premium quality ${names[nameIndex].toLowerCase()} designed for professional athletes and sports enthusiasts. Features superior durability, comfort, and performance.`,
      rating: Number.parseFloat(rating),
      reviewCount: reviewCount,
      inStock: Math.random() > 0.1, // 90% chance of being in stock
    })
  }

  return products
}

// Generate products for each category
const footballProducts = generateProductsForCategory("Football", 1, 20)
const basketballProducts = generateProductsForCategory("Basketball", 21, 20)
const tennisProducts = generateProductsForCategory("Tennis", 41, 20)
const cricketProducts = generateProductsForCategory("Cricket", 61, 20)
const swimmingProducts = generateProductsForCategory("Swimming", 81, 20)
const runningProducts = generateProductsForCategory("Running", 101, 20)

// Combine all products
export const allProducts = [
  ...footballProducts,
  ...basketballProducts,
  ...tennisProducts,
  ...cricketProducts,
  ...swimmingProducts,
  ...runningProducts,
]

// Featured products (select a few from each category)
export const featuredProducts = [
  footballProducts[0],
  basketballProducts[0],
  tennisProducts[0],
  cricketProducts[0],
  swimmingProducts[0],
  runningProducts[0],
  footballProducts[1],
  basketballProducts[1],
]
