export type MenuItem = {
  name: string
  description: string
  price: string
  tags?: string[]
  spicy?: boolean
  veg?: boolean
  vegan?: boolean
  glutenFree?: boolean
  dairyFree?: boolean
  nutFree?: boolean
  new?: boolean
}

export type MenuCategory = {
  id: string
  title: string
  subtitle: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'signatures',
    title: 'Signature MOMO',
    subtitle: 'The dumplings that started it all. Hand-pleated, steamed, and served with our house sauces.',
    items: [
      {
        name: 'Classic Chicken MOMO',
        description: 'Free-range chicken, ginger, garlic, and a secret blend of Himalayan spices. Steamed and served with tomato sesame chutney.',
        price: '€12',
        tags: ['Bestseller'],
        nutFree: true,
      },
      {
        name: 'Buff Jhol MOMO',
        description: 'Slow-braised buffalo dumplings swimming in a warm, spicy tomato-and-timur broth. Comfort in a bowl.',
        price: '€14',
        tags: ['Chef Pick', 'Spicy'],
        spicy: true,
        dairyFree: true,
      },
      {
        name: 'Veg Himalaya MOMO',
        description: 'Cabbage, carrot, mushroom, glass noodles, and toasted sesame. Bright, crunchy, and totally addictive.',
        price: '€11',
        tags: ['Vegan', 'Veg'],
        veg: true,
        vegan: true,
        dairyFree: true,
        nutFree: true,
      },
      {
        name: 'Chili Cheese MOMO',
        description: 'Creamy paneer and cheddar filling, tossed in our crackling chili-garlic oil. Indulgent and fiery.',
        price: '€13',
        tags: ['Spicy', 'Veg'],
        spicy: true,
        veg: true,
      },
      {
        name: 'Spicy Chili Crunch MOMO',
        description: 'Crispy-edged dumplings finished with our house chili crunch oil, scallions, and a squeeze of lime.',
        price: '€13',
        tags: ['Viral', 'Spicy', 'Vegan'],
        spicy: true,
        vegan: true,
        dairyFree: true,
        new: true,
      },
      {
        name: 'Truffle Mushroom MOMO',
        description: 'Wild mushrooms and truffle oil folded into delicate dumplings. Finished with parmesan shavings.',
        price: '€16',
        tags: ['Premium', 'Veg'],
        veg: true,
      },
    ],
  },
  {
    id: 'mains',
    title: 'Mains & Bowls',
    subtitle: 'Bigger plates built for hungry moments. Rice, noodles, bowls, and loaded goodness.',
    items: [
      {
        name: 'MOMO Bowl',
        description: 'Your choice of steamed momos over jasmine rice, pickled slaw, cucumber, and a soft boiled egg.',
        price: '€15',
        tags: ['Bowl', 'Filling'],
        nutFree: true,
      },
      {
        name: 'Loaded MOMO Fries',
        description: 'Crispy fries topped with chopped chili momos, sriracha mayo, scallions, and sesame. Built for sharing.',
        price: '€14',
        tags: ['Sharing', 'Viral'],
        spicy: true,
      },
      {
        name: 'Himalayan Fried Rice',
        description: 'Fragrant basmati with peas, carrots, scrambled egg, and a kick of green chili. Add momos on top for the full experience.',
        price: '€13',
        tags: ['Mild', 'Nut-free'],
        nutFree: true,
      },
      {
        name: 'Thukpa Noodle Soup',
        description: 'A hearty Tibetan-style noodle soup with seasonal vegetables, pulled chicken, and warming spices.',
        price: '€14',
        tags: ['Comfort food'],
        dairyFree: true,
      },
      {
        name: 'Bao MOMO Sliders',
        description: 'Three fluffy steamed buns stuffed with crispy momos, pickled daikon, and gochujang mayo.',
        price: '€15',
        tags: ['Street-style', 'Spicy'],
        spicy: true,
      },
      {
        name: 'Kothey Platter',
        description: 'Pan-seared potstickers, half-crispy and half-tender, served with two dipping sauces and a side of pickled slaw.',
        price: '€16',
        tags: ['Sharing'],
        dairyFree: true,
      },
    ],
  },
  {
    id: 'snacks',
    title: 'Snacks & Sides',
    subtitle: 'Small plates, big flavor. Perfect for grazing while you decide on round two.',
    items: [
      {
        name: 'Crispy MOMO Bites',
        description: 'Deep-fried mini momos tossed in sweet chili glaze and toasted sesame seeds. Dangerously snackable.',
        price: '€8',
        tags: ['Snack'],
        dairyFree: true,
      },
      {
        name: 'Spicy Cabbage Slaw',
        description: 'Shredded cabbage, carrot, and radish with lime, chili, and mustard oil. Refreshing and punchy.',
        price: '€5',
        tags: ['Veg', 'Vegan', 'GF'],
        veg: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        nutFree: true,
      },
      {
        name: 'MOMO Dipping Trio',
        description: 'Three house sauces: tomato sesame, spicy chili, and creamy cilantro. Great with any order.',
        price: '€4',
        tags: ['Veg', 'Vegan'],
        veg: true,
        vegan: true,
        dairyFree: true,
      },
      {
        name: 'Himalayan Popcorn Shrimp',
        description: 'Crispy battered shrimp with a squeeze of lime and our chili-garlic dust. A street-side favorite.',
        price: '€10',
        tags: ['New'],
        new: true,
        dairyFree: true,
      },
      {
        name: 'Edamame with Chili Salt',
        description: 'Steamed edamame tossed in Himalayan pink salt and chili flakes. Simple, salty, addictive.',
        price: '€6',
        tags: ['Vegan', 'GF'],
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        nutFree: true,
      },
      {
        name: 'Lotus Root Chips',
        description: 'Thinly sliced, crispy lotus root chips with a tangy tamarind dip. Light and crunchy.',
        price: '€7',
        tags: ['Vegan', 'GF'],
        vegan: true,
        glutenFree: true,
        dairyFree: true,
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    subtitle: 'Cool, spicy, or bubbly. Designed to balance every bite and look great in your feed.',
    items: [
      {
        name: 'Yuzu Lemonade',
        description: 'Fresh lemon, yuzu, ginger, mint, and a pinch of Himalayan pink salt. Bright and tangy.',
        price: '€5',
        tags: ['Refreshing', 'Vegan'],
        vegan: true,
        glutenFree: true,
        dairyFree: true,
      },
      {
        name: 'Mango Lassi',
        description: 'Creamy yogurt blended with Alphonso mango and a touch of cardamom. The ultimate cooler.',
        price: '€6',
        tags: ['Veg'],
        veg: true,
        glutenFree: true,
      },
      {
        name: 'Spiced Ginger Beer',
        description: 'House-made, fiery, and lightly sweetened. Pairs perfectly with our chili momos.',
        price: '€5',
        tags: ['Spicy', 'Vegan'],
        spicy: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
      },
      {
        name: 'Hibiscus Iced Tea',
        description: 'Hibiscus, citrus, and a hint of cinnamon. Deep red, tangy, and super refreshing.',
        price: '€5',
        tags: ['Vegan', 'GF'],
        vegan: true,
        glutenFree: true,
        dairyFree: true,
      },
      {
        name: 'Matcha Mylk',
        description: 'Oat milk shaken with ceremonial matcha and a touch of vanilla. Creamy, green, and smooth.',
        price: '€6',
        tags: ['Vegan', 'GF'],
        vegan: true,
        glutenFree: true,
        dairyFree: true,
      },
      {
        name: 'Pink Guava Soda',
        description: 'Sparkling water, pink guava, and lime. Tropical, bubbly, and made for the grid.',
        price: '€5',
        tags: ['Vegan', 'GF', 'New'],
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        new: true,
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    subtitle: 'Sweet endings with a playful twist.',
    items: [
      {
        name: 'Sweet MOMO',
        description: 'Steamed dumplings filled with coconut, jaggery, and cardamom. Served warm with salted caramel.',
        price: '€7',
        tags: ['Veg'],
        veg: true,
        nutFree: true,
      },
      {
        name: 'Gulab Jamun Bites',
        description: 'Three mini rose-syrup doughnuts with pistachio crumble and a dollop of cream.',
        price: '€6',
        tags: ['Veg'],
        veg: true,
      },
      {
        name: 'Mango Sticky Rice',
        description: 'Coconut sticky rice with fresh mango slices and toasted sesame. Simple and sweet.',
        price: '€7',
        tags: ['Veg', 'Vegan', 'GF'],
        veg: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
      },
      {
        name: 'Chai Donuts',
        description: 'Mini donuts rolled in chai-spiced sugar and served with a side of chocolate dip.',
        price: '€6',
        tags: ['Veg'],
        veg: true,
        new: true,
      },
      {
        name: 'Coconut Ice Cream MOMO',
        description: 'Warm fried momo served with coconut ice cream and a drizzle of palm-sugar caramel.',
        price: '€8',
        tags: ['Veg', 'Vegan option'],
        veg: true,
      },
    ],
  },
  {
    id: 'specials',
    title: 'MOMO Specials',
    subtitle: 'Limited-time creations and chef experiments. Grab them while they last.',
    items: [
      {
        name: 'Korean BBQ Beef MOMO',
        description: 'Bulgogi-style beef with gochujang glaze, pickled cucumber, and crispy shallots. East meets Himalaya.',
        price: '€17',
        tags: ['Limited', 'Spicy'],
        spicy: true,
        dairyFree: true,
      },
      {
        name: 'Tandoori Paneer MOMO',
        description: 'Paneer stuffed momos glazed with tandoori spice and served with mint chutney.',
        price: '€15',
        tags: ['Limited', 'Veg'],
        veg: true,
      },
      {
        name: 'Vegan Jackfruit MOMO',
        description: 'Slow-cooked jackfruit in smoky BBQ sauce. Bold, plant-based, and unapologetically good.',
        price: '€14',
        tags: ['Limited', 'Vegan'],
        vegan: true,
        dairyFree: true,
        nutFree: true,
      },
      {
        name: 'Cheese Pull MOMO',
        description: 'Mozzarella-stuffed momos fried until golden. Break one open and watch the cheese pull.',
        price: '€15',
        tags: ['Viral', 'Veg'],
        veg: true,
        new: true,
      },
      {
        name: 'MOMO Flight',
        description: 'Six momos, three styles: steamed, fried, and kothey. A little bit of everything.',
        price: '€18',
        tags: ['Sharing', 'New'],
        new: true,
      },
    ],
  },
]
