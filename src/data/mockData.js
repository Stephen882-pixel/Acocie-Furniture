export const categories = [
  {
    id: 1,
    name: 'Office Desks',
    slug: 'office-desks',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop',
    description: 'Ergonomic and stylish desks for your workspace',
    itemCount: 45
  },
  {
    id: 2,
    name: 'Office Chairs',
    slug: 'office-chairs',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop',
    description: 'Comfortable seating for long work hours',
    itemCount: 38
  },
  {
    id: 3,
    name: 'Sofas',
    slug: 'sofas',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    description: 'Luxurious sofas for your living room',
    itemCount: 52
  },
  {
    id: 4,
    name: 'Storage',
    slug: 'storage',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=400&h=300&fit=crop',
    description: 'Organize your space with style',
    itemCount: 31
  }
];

export const featuredProducts = [
  {
    id: 1,
    name: 'Executive Oak Desk',
    price: 599.99,
    rating: 4.8,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=300&h=300&fit=crop',
    tag: 'Bestseller',
    category: 'office-desks',
    inStock: true
  },
  {
    id: 2,
    name: 'Ergonomic Pro Chair',
    price: 399.99,
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop',
    tag: 'New Arrival',
    category: 'office-chairs',
    inStock: true
  },
  {
    id: 3,
    name: 'Modern L-Sofa',
    price: 1299.99,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&h=300&fit=crop',
    tag: 'Sale',
    category: 'sofas',
    inStock: true
  }
];

export const allProducts = [
  ...featuredProducts,
  {
    id: 4,
    name: 'Standing Desk Pro',
    price: 799.99,
    rating: 4.6,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=300&h=300&fit=crop',
    category: 'office-desks',
    inStock: true
  },
  {
    id: 5,
    name: 'Mesh Office Chair',
    price: 299.99,
    rating: 4.5,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=300&h=300&fit=crop',
    category: 'office-chairs',
    inStock: true
  },
  {
    id: 6,
    name: 'Velvet Loveseat',
    price: 899.99,
    rating: 4.8,
    reviews: 92,
    image: 'https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=300&h=300&fit=crop',
    category: 'sofas',
    inStock: false
  }
];


export const productDetails = {
  1: {
    description: "Elevate your workspace with our Executive Oak Desk. Crafted from premium solid oak, this desk combines timeless elegance with modern functionality. Features include built-in cable management, a spacious work surface, and three drawers for optimal organization.",
    features: [
      "Solid oak construction",
      "Built-in cable management system",
      "Three spacious drawers",
      "Scratch-resistant surface",
      "Easy assembly with included tools"
    ],
    specifications: {
      "Dimensions": "60\" W x 30\" D x 30\" H",
      "Material": "Solid Oak Wood",
      "Weight": "120 lbs",
      "Color": "Natural Oak",
      "Assembly": "Required (approx. 45 min)"
    },
    reviews: [
      {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        date: "2024-01-15",
        verified: true,
        title: "Outstanding Quality!",
        comment: "Absolutely love this desk! The quality is outstanding and it looks beautiful in my home office. The oak finish is gorgeous and the drawers are very spacious. Assembly was straightforward with clear instructions.",
        helpful: 24,
        notHelpful: 2,
        images: []
      },
      {
        id: 2,
        author: "John D.",
        rating: 4,
        date: "2024-01-10",
        verified: true,
        title: "Great desk, minor assembly issues",
        comment: "Great desk, very sturdy. Assembly took a bit longer than expected but worth it. The cable management system is genius! Only gave 4 stars because one of the drawer slides was slightly misaligned.",
        helpful: 18,
        notHelpful: 1,
        images: []
      },
      {
        id: 3,
        author: "Emily R.",
        rating: 5,
        date: "2024-01-05",
        verified: true,
        title: "Perfect for my home office",
        comment: "This desk has completely transformed my home office. The size is perfect, and the build quality is exceptional. I particularly love the cable management feature - keeps everything neat and tidy!",
        helpful: 31,
        notHelpful: 0,
        images: []
      },
      {
        id: 4,
        author: "Michael T.",
        rating: 3,
        date: "2023-12-28",
        verified: false,
        title: "Good but pricey",
        comment: "The desk is well-made and looks great, but I think it's a bit overpriced for what you get. That said, the quality is definitely there and it should last for years.",
        helpful: 7,
        notHelpful: 12,
        images: []
      },
      {
        id: 5,
        author: "Lisa K.",
        rating: 5,
        date: "2023-12-20",
        verified: true,
        title: "Best purchase this year!",
        comment: "I was hesitant about the price, but this desk exceeded all my expectations. The craftsmanship is superb, and it's incredibly sturdy. My only regret is not buying it sooner!",
        helpful: 45,
        notHelpful: 1,
        images: []
      }
    ],
    ratingBreakdown: {
      5: 89,
      4: 28,
      3: 5,
      2: 1,
      1: 1
    }
  },
  2: {
    description: "Experience ultimate comfort with our Ergonomic Pro Chair. Designed for long work sessions, this chair features adjustable lumbar support, breathable mesh back, and customizable armrests to reduce strain and boost productivity.",
    features: [
      "Adjustable lumbar support",
      "Breathable mesh backrest",
      "Height-adjustable seat",
      "4D adjustable armrests",
      "Smooth-rolling casters"
    ],
    specifications: {
      "Dimensions": "26\" W x 26\" D x 45\" H",
      "Material": "Mesh & Premium Foam",
      "Weight Capacity": "300 lbs",
      "Color": "Black",
      "Warranty": "2 years"
    },
    reviews: [
      {
        id: 1,
        author: "Mike R.",
        rating: 5,
        date: "2024-01-18",
        verified: true,
        title: "My back pain is gone!",
        comment: "Best chair I've ever owned. My back pain is gone after switching to this! The lumbar support is adjustable and really makes a difference. Highly recommend for anyone working long hours.",
        helpful: 67,
        notHelpful: 2,
        images: []
      },
      {
        id: 2,
        author: "Jennifer L.",
        rating: 5,
        date: "2024-01-12",
        verified: true,
        title: "Worth every penny",
        comment: "After months of research, I finally chose this chair and I'm so glad I did. The mesh back keeps me cool, and all the adjustments mean I can get it just right. Game changer for WFH!",
        helpful: 52,
        notHelpful: 1,
        images: []
      },
      {
        id: 3,
        author: "Tom S.",
        rating: 4,
        date: "2024-01-08",
        verified: true,
        title: "Great chair, slight learning curve",
        comment: "The chair is excellent quality and very comfortable once you get all the adjustments right. Took me a few days to dial in the perfect settings, but now it's perfect.",
        helpful: 23,
        notHelpful: 3,
        images: []
      }
    ],
    ratingBreakdown: {
      5: 178,
      4: 22,
      3: 2,
      2: 1,
      1: 0
    }
  },
  3: {
    description: "Transform your living room with this luxurious modern L-shaped sofa. Premium fabric upholstery and solid wood frame ensure both comfort and durability for years to come.",
    features: [
      "Premium fabric upholstery",
      "Removable cushions for easy cleaning",
      "Solid wood frame",
      "Deep seating for maximum comfort",
      "Modern contemporary design"
    ],
    specifications: {
      "Dimensions": "95\" W x 68\" D x 35\" H",
      "Material": "Fabric & Solid Wood",
      "Seating Capacity": "5-6 people",
      "Color": "Light Gray",
      "Assembly": "Minimal assembly required"
    },
    reviews: [
      {
        id: 1,
        author: "Emily K.",
        rating: 5,
        date: "2024-01-12",
        verified: true,
        title: "Perfect family sofa!",
        comment: "This sofa is perfect! So comfortable and looks amazing in our living room. The whole family loves it, and it fits perfectly in our space. Great quality for the price.",
        helpful: 41,
        notHelpful: 1,
        images: []
      },
      {
        id: 2,
        author: "David P.",
        rating: 4,
        date: "2024-01-06",
        verified: true,
        title: "Comfortable and stylish",
        comment: "Very happy with this purchase. The sofa is comfortable and looks great. Only minor complaint is that the cushions need fluffing regularly, but that's expected with this style.",
        helpful: 28,
        notHelpful: 2,
        images: []
      }
    ],
    ratingBreakdown: {
      5: 67,
      4: 18,
      3: 3,
      2: 1,
      1: 0
    }
  }
};

export const getProductById = (id) => {
  return allProducts.find(product => product.id === parseInt(id));
};


export const getAvarageRating = (productId) => {
  const details = productDetails[productId];
  if(!details || !details.ratingBreakdown) return 0;


  const breakdown = details.ratingBreakdown;
  let totalRating = 0;
  let totalReviews = 0;

  for(let rating = 1;rating <= 5;rating++){
    totalRating += rating * (breakdown[rating] || 0);
    totalReviews += breakdown[rating] || 0;
  }
  return totalReviews > 0 ? (totalRating / totalReviews).toFixed(1) : 0;
};

