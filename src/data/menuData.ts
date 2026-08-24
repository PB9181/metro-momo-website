export type MenuItem = {
  name: string
  description: string
  price: string
  tags?: string[]
  spicy?: boolean
  veg?: boolean
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
      },
      {
        name: 'Buff Jhol MOMO',
        description: 'Slow-braised buffalo dumplings swimming in a warm, spicy tomato-and-timur broth. Comfort in a bowl.',
        price: '€14',
        tags: ['Chef Pick', 'Spicy'],
        spicy: true,
      },
      {
        name: 'Veg Himalaya MOMO',
        description: 'Cabbage, carrot, mushroom, glass noodles, and toasted sesame. Bright, crunchy, and totally addictive.',
        price: '€11',
        tags: ['Veg', 'Vegan friendly'],
        veg: true,
      },
      {
        name: 'Chili Cheese MOMO',
        description: 'Creamy paneer and cheddar filling, tossed in our crackling chili-garlic oil. Indulgent and fiery.',
        price: '€13',
        tags: ['Spicy', 'Veg'],
        spicy: true,
        veg: true,
      },
    ],
  },
  {
    id: 'mains',
    title: 'Mains & Bowls',
    subtitle: 'Bigger plates built for hungry moments. Rice, noodles, curries, and grilled goodness.',
    items: [
      {
        name: 'MOMO Chowmein',
        description: 'Wok-fried noodles with shredded veg, spring onion, and your choice of chicken, beef, or tofu. topped with two crispy fried momos.',
        price: '€15',
      },
      {
        name: 'Himalayan Fried Rice',
        description: 'Fragrant basmati with peas, carrots, scrambled egg, and a kick of green chili. Add momos on top for the full experience.',
        price: '€13',
        tags: ['Mild'],
      },
      {
        name: 'Thukpa Noodle Soup',
        description: 'A hearty Tibetan-style noodle soup with seasonal vegetables, pulled chicken, and warming spices.',
        price: '€14',
        tags: ['Comfort food'],
      },
      {
        name: 'Kothey Platter',
        description: 'Pan-seared potstickers, half-crispy and half-tender, served with two dipping sauces and a side of pickled slaw.',
        price: '€16',
        tags: ['Sharing'],
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
      },
      {
        name: 'Spicy Cabbage Slaw',
        description: 'Shredded cabbage, carrot, and radish with lime, chili, and mustard oil. Refreshing and punchy.',
        price: '€5',
        tags: ['Veg', 'Vegan'],
        veg: true,
      },
      {
        name: 'MOMO Dipping Trio',
        description: 'Three house sauces: tomato sesame, spicy chili, and creamy cilantro. Great with any order.',
        price: '€4',
        tags: ['Veg', 'Vegan'],
        veg: true,
      },
      {
        name: 'Himalayan Popcorn Shrimp',
        description: 'Crispy battered shrimp with a squeeze of lime and our chili-garlic dust. A street-side favorite.',
        price: '€10',
        tags: ['New'],
        new: true,
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    subtitle: 'Cool, spicy, or bubbly. Designed to balance every bite.',
    items: [
      {
        name: 'MOMO House Lemonade',
        description: 'Fresh lemon, ginger, mint, and a pinch of Himalayan pink salt. Bright and tangy.',
        price: '€5',
        tags: ['Refreshing'],
      },
      {
        name: 'Mango Lassi',
        description: 'Creamy yogurt blended with Alphonso mango and a touch of cardamom. The ultimate cooler.',
        price: '€6',
        tags: ['Veg'],
        veg: true,
      },
      {
        name: 'Spiced Ginger Beer',
        description: 'House-made, fiery, and lightly sweetened. Pairs perfectly with our chili momos.',
        price: '€5',
        tags: ['Spicy', 'Vegan'],
        spicy: true,
        veg: true,
      },
      {
        name: 'Himalayan Iced Tea',
        description: 'Black tea with citrus, clove, and a hint of cinnamon. Served over plenty of ice.',
        price: '€5',
        tags: ['Vegan'],
        veg: true,
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
        tags: ['Veg', 'Vegan'],
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
        name: 'Truffle Mushroom MOMO',
        description: 'Wild mushrooms and truffle oil folded into delicate dumplings. Finished with parmesan shavings.',
        price: '€16',
        tags: ['Limited', 'Veg'],
        veg: true,
      },
      {
        name: 'Korean BBQ Beef MOMO',
        description: 'Bulgogi-style beef with gochujang glaze, pickled cucumber, and crispy shallots. East meets Himalaya.',
        price: '€17',
        tags: ['Limited', 'Spicy'],
        spicy: true,
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
