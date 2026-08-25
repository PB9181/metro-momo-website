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
    title: 'Steamed MOMO',
    subtitle: 'Hand-pleated, steamed, and served with our house sauces.',
    items: [
      {
        name: 'Veg MOMO',
        description: 'Cabbage, carrot, mushroom, glass noodles, and toasted sesame.',
        price: '€8',
        tags: ['Veg', 'Vegan'],
        veg: true,
        vegan: true,
        dairyFree: true,
        nutFree: true,
      },
      {
        name: 'Chicken MOMO',
        description: 'Free-range chicken, ginger, garlic, and a secret blend of Himalayan spices.',
        price: '€9',
        tags: ['Bestseller'],
        nutFree: true,
      },
      {
        name: 'Lamb MOMO',
        description: 'Tender lamb with onion, coriander, and a gentle kick of warming spices.',
        price: '€10',
        tags: ['GF'],
        dairyFree: true,
      },
      {
        name: 'Mix MOMO',
        description: 'A mixed plate of veg, chicken, and lamb momos. Great for sharing.',
        price: '€10',
        tags: ['Sharing'],
        nutFree: true,
      },
    ],
  },
  {
    id: 'crispy',
    title: 'Crispy MOMO',
    subtitle: 'Golden, crunchy, and dangerously snackable.',
    items: [
      {
        name: 'Veg Crispy MOMO',
        description: 'Crispy-fried vegetable dumplings with a sweet-chili glaze.',
        price: '€9',
        tags: ['Veg', 'Vegan'],
        veg: true,
        vegan: true,
        dairyFree: true,
      },
      {
        name: 'Chicken Crispy MOMO',
        description: 'Crispy chicken momos finished with sesame and scallions.',
        price: '€10',
        tags: ['Bestseller'],
      },
      {
        name: 'Lamb Crispy MOMO',
        description: 'Lamb momos fried until golden and served with chili-garlic mayo.',
        price: '€11',
        dairyFree: true,
      },
      {
        name: 'Mix Crispy MOMO',
        description: 'A crispy mix of veg, chicken, and lamb momos.',
        price: '€11',
        tags: ['Sharing'],
      },
    ],
  },
  {
    id: 'chilli',
    title: 'Chilli MOMO',
    subtitle: 'Crispy momos tossed with onions, peppers, and our signature chilli sauce.',
    items: [
      {
        name: 'Veg Chilli MOMO',
        description: 'Crispy vegetable momos tossed in a spicy chilli sauce with peppers and onions.',
        price: '€10',
        tags: ['Veg', 'Vegan', 'Spicy'],
        veg: true,
        vegan: true,
        spicy: true,
        dairyFree: true,
      },
      {
        name: 'Chicken Chilli MOMO',
        description: 'Chicken momos stir-fried with chilli sauce, onions, and bell peppers.',
        price: '€11',
        tags: ['Spicy'],
        spicy: true,
      },
      {
        name: 'Lamb Chilli MOMO',
        description: 'Lamb momos coated in a fiery chilli sauce with fresh herbs.',
        price: '€12',
        tags: ['Spicy'],
        spicy: true,
        dairyFree: true,
      },
      {
        name: 'Mix Chilli MOMO',
        description: 'A mixed chilli momo plate with all three fillings.',
        price: '€12',
        tags: ['Spicy', 'Sharing'],
        spicy: true,
      },
    ],
  },
  {
    id: 'loaded',
    title: 'Loaded MOMO',
    subtitle: 'Momos topped with house sauces, chilli sauce, and fresh toppings.',
    items: [
      {
        name: 'Loaded Chicken MOMO',
        description: 'Chicken momos topped with house sauce, chilli sauce, and fresh toppings.',
        price: '€13',
        tags: ['Spicy'],
        spicy: true,
      },
      {
        name: 'Loaded Lamb MOMO',
        description: 'Lamb momos with signature house sauce and Kathmandu-style toppings.',
        price: '€14',
        tags: ['Spicy'],
        spicy: true,
      },
      {
        name: 'Loaded Mix MOMO',
        description: 'Chicken, lamb, and vegetable momos loaded with our signature toppings.',
        price: '€14',
        tags: ['Spicy', 'Sharing'],
        spicy: true,
      },
    ],
  },
  {
    id: 'wings',
    title: 'Wings',
    subtitle: 'Roast, masala, chilli, or BBQ. Pick your flavor.',
    items: [
      {
        name: 'Roast Wings',
        description: 'Slow-roasted wings with Himalayan herbs and a crisp finish.',
        price: '€8',
        nutFree: true,
      },
      {
        name: 'Masala Wings',
        description: 'Wings coated in a warm, spiced masala glaze.',
        price: '€8',
        tags: ['Spicy'],
        spicy: true,
      },
      {
        name: 'Chilli Wings',
        description: 'Crispy wings tossed in our signature chilli sauce.',
        price: '€9',
        tags: ['Spicy'],
        spicy: true,
      },
      {
        name: 'BBQ Wings',
        description: 'Smoky BBQ wings with a sweet, tangy glaze.',
        price: '€9',
        nutFree: true,
      },
      {
        name: 'Wing Box',
        description: 'Wings, chips, and a drink. A complete wing fix.',
        price: '€12',
        tags: ['Combo'],
      },
    ],
  },
  {
    id: 'street',
    title: 'Kathmandu Street Food',
    subtitle: 'Authentic Nepalese street snacks, fast and fresh.',
    items: [
      {
        name: 'Pani Puri',
        description: 'Crispy hollow shells filled with spiced potatoes and tangy tamarind water.',
        price: '€6',
        tags: ['Veg', 'Vegan'],
        veg: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
      },
      {
        name: 'Chatpate',
        description: 'A crunchy, spicy, and tangy street-side mix of puffed rice, veggies, and chutneys.',
        price: '€7',
        tags: ['Veg', 'Vegan'],
        veg: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
      },
      {
        name: 'Pani Puri & Chatpate Combo',
        description: 'The ultimate Kathmandu street food pairing.',
        price: '€11',
        tags: ['Veg', 'Vegan', 'Sharing'],
        veg: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
      },
    ],
  },
  {
    id: 'wok',
    title: 'Wok',
    subtitle: 'Noodles and fried rice, straight from the wok.',
    items: [
      {
        name: 'Vegetable Noodles',
        description: 'Wok-tossed noodles with seasonal vegetables and soy.',
        price: '€9',
        tags: ['Veg', 'Vegan'],
        veg: true,
        vegan: true,
        dairyFree: true,
        nutFree: true,
      },
      {
        name: 'Egg Noodles',
        description: 'Wok-fried noodles with scrambled egg and vegetables.',
        price: '€10',
        tags: ['Veg'],
        veg: true,
        dairyFree: true,
      },
      {
        name: 'Chicken Noodles',
        description: 'Wok-tossed noodles with chicken, vegetables, and soy.',
        price: '€11',
        dairyFree: true,
      },
      {
        name: 'Lamb Noodles',
        description: 'Wok-tossed noodles with tender lamb and fresh herbs.',
        price: '€12',
        dairyFree: true,
      },
      {
        name: 'Mix Noodles',
        description: 'Noodles with chicken, lamb, and vegetables.',
        price: '€12',
      },
      {
        name: 'Vegetable Fried Rice',
        description: 'Fragrant fried rice with peas, carrots, and soy.',
        price: '€9',
        tags: ['Veg', 'Vegan'],
        veg: true,
        vegan: true,
        dairyFree: true,
        nutFree: true,
      },
      {
        name: 'Egg Fried Rice',
        description: 'Fried rice with scrambled egg and vegetables.',
        price: '€10',
        tags: ['Veg'],
        veg: true,
        dairyFree: true,
      },
      {
        name: 'Chicken Fried Rice',
        description: 'Fried rice with chicken, vegetables, and a touch of soy.',
        price: '€11',
        dairyFree: true,
      },
      {
        name: 'Lamb Fried Rice',
        description: 'Fried rice with tender lamb and vegetables.',
        price: '€12',
        dairyFree: true,
      },
      {
        name: 'Mix Fried Rice',
        description: 'Fried rice with chicken, lamb, and vegetables.',
        price: '€12',
      },
    ],
  },
  {
    id: 'chips',
    title: 'Chips',
    subtitle: 'Plain, masala, or fully loaded.',
    items: [
      {
        name: 'Plain Chips',
        description: 'Crispy fries with a light salt seasoning.',
        price: '€4',
        tags: ['Veg', 'Vegan'],
        veg: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        nutFree: true,
      },
      {
        name: 'Masala Chips',
        description: 'Crispy fries tossed in spiced masala seasoning.',
        price: '€5',
        tags: ['Veg', 'Vegan'],
        veg: true,
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        nutFree: true,
      },
      {
        name: 'Loaded Chips',
        description: 'Crispy fries topped with cheese, sauces, and fresh toppings.',
        price: '€7',
        tags: ['Veg'],
        veg: true,
      },
    ],
  },
  {
    id: 'drinks',
    title: 'In-House Soda',
    subtitle: 'Refreshingly fizzy, made in-house.',
    items: [
      {
        name: 'House Soda',
        description: 'Choose your flavor: Elderflower, Lemon Mint, Green Apple, Strawberry, Orange, or Mango.',
        price: '€4',
        tags: ['Vegan', 'GF'],
        vegan: true,
        glutenFree: true,
        dairyFree: true,
        nutFree: true,
      },
    ],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    subtitle: 'Sweet finishes inspired by South Asia.',
    items: [
      {
        name: 'Kulfi',
        description: 'Traditional Indian ice cream. Flavors: Malai, Pistachio, Mango, Cardamom.',
        price: '€5',
        tags: ['Veg'],
        veg: true,
        glutenFree: true,
        nutFree: true,
      },
      {
        name: 'Ice Cream',
        description: 'Classic scoops. Flavors: Vanilla, Chocolate, Strawberry, Mango, Cardamom.',
        price: '€5',
        tags: ['Veg'],
        veg: true,
        glutenFree: true,
        nutFree: true,
      },
      {
        name: 'Gelato',
        description: 'Creamy gelato. Flavors: Vanilla, Chocolate, Mango, Pistachio, Strawberry, Cardamom.',
        price: '€6',
        tags: ['Veg'],
        veg: true,
        glutenFree: true,
      },
      {
        name: 'Chocolate Brownie & Vanilla Ice Cream',
        description: 'Warm chocolate brownie served with a scoop of vanilla ice cream.',
        price: '€7',
        tags: ['Veg'],
        veg: true,
        nutFree: true,
      },
      {
        name: 'Chocolate MOMOS & Cardamom Ice Cream',
        description: 'Sweet chocolate-filled momos with a scoop of cardamom ice cream.',
        price: '€8',
        tags: ['Signature', 'Veg'],
        veg: true,
        nutFree: true,
      },
    ],
  },
  {
    id: 'combos',
    title: 'Sharing & Combos',
    subtitle: 'Boxes, platters, and meals built for sharing.',
    items: [
      {
        name: 'MOMO Sharing Box',
        description: 'Choose two flavors of momos, served with chips and dips.',
        price: '€16',
        tags: ['Sharing'],
      },
      {
        name: 'Family MOMO Platter',
        description: 'Mixed momos, chips, and dips. Feeds 2-3.',
        price: '€22',
        tags: ['Sharing'],
      },
      {
        name: 'MOMO Meal',
        description: 'Momos, chips, and a drink.',
        price: '€14',
        tags: ['Combo'],
      },
      {
        name: 'Wing Meal',
        description: 'Wings, chips, and a drink.',
        price: '€14',
        tags: ['Combo'],
      },
      {
        name: 'Wok Meal',
        description: 'Noodles or fried rice with a drink.',
        price: '€13',
        tags: ['Combo'],
      },
      {
        name: 'Family Feast',
        description: 'Mixed momos, wings, chips, noodles, fried rice, and drinks. Feeds 4.',
        price: '€32',
        tags: ['Sharing'],
      },
    ],
  },
]
