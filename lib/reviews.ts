// All 24 five-star reviews for Grant Price
export interface Review {
  quote: string
  author: string
  rating: 5 // All are 5 stars
  featured?: boolean // For featured section
  category?: 'corporate' | 'virtual' | 'family' | 'conference'
}

export const allReviews: Review[] = [
  {
    quote: "It wasn't just the best show our company has ever hosted, but the most astonishing magic experience I've witnessed. The next day, and for days after, it was all anyone could talk about.",
    author: "Justin S.",
    rating: 5,
    featured: true,
    category: 'corporate',
  },
  {
    quote: "You crushed it. You were honest, humble, and entertaining... Everyone just loved it and had a blast!",
    author: "Josh P.",
    rating: 5,
    featured: true,
    category: 'corporate',
  },
  {
    quote: "People were blown away... a truly unique experience that we all shared in and will remember for years. It was the perfect way to start our week!",
    author: "James M.",
    rating: 5,
    featured: true,
    category: 'corporate',
  },
  {
    quote: "My clients raved about his performance and several wanted his contact information so they could have him for their own business corporate events. Grant was not only entertaining but also a class act.",
    author: "Johnny Y.",
    rating: 5,
    featured: true,
    category: 'corporate',
  },
  {
    quote: "Everyone's minds were blown. He is funny, entertaining, and does some pretty incredible tricks. Everyone is still talking about the crazy tricks he did. 10 out of 10!",
    author: "Malissa M.",
    rating: 5,
    featured: true,
    category: 'corporate',
  },
  {
    quote: "Grant entertained small groups before his show and stayed to mingle afterward. He is incredibly talented and personable. The recurring praise we heard was 'he hit it out of the ballpark!'",
    author: "Gina J.",
    rating: 5,
    featured: true,
    category: 'corporate',
  },
  {
    quote: "As much as I love watching Grant, watching the crowds' faces was by far my favorite. The shock, awe, and happiness truly made the event unique and memorable.",
    author: "Andrea H.",
    rating: 5,
    category: 'corporate',
  },
  {
    quote: "Grant made it easy to problem solve with us. His professionalism, skills, communication, sense of humor, and kindness created a memorable and successful hybrid event for our global audience.",
    author: "Nadia T.",
    rating: 5,
    category: 'corporate',
  },
  {
    quote: "We had Grant kick off our annual company conference. We could not have had a better experience from contracting through the performance itself. He tailored everything to our theme.",
    author: "Kevin B.",
    rating: 5,
    category: 'conference',
  },
  {
    quote: "We had Grant entertain for our company year-end celebration, and he was a 10 out of 10! From scheduling to the actual event, his whole bit is world class.",
    author: "Ryan A.",
    rating: 5,
    category: 'corporate',
  },
  {
    quote: "Our audience was on the edge of their seat the entire time and left feeling amazed. It was a perfect way for us to celebrate accomplishments for work completed!",
    author: "Brandi J.",
    rating: 5,
    category: 'corporate',
  },
  {
    quote: "Grant is warm, charismatic, and professional. His show was extraordinary and participants of my conference gave him glowing reviews. He does exactly as he promises.",
    author: "James M.",
    rating: 5,
    category: 'conference',
  },
  {
    quote: "Grant kept us all completely engaged 100% of the time. He is a consummate professional and very personable. It was a stellar show, and I would definitely recommend this to anyone!",
    author: "Elizabeth F.",
    rating: 5,
    category: 'corporate',
  },
  {
    quote: "Grant is fantastic! His magic is just as good (or better) as what you see on America's Got Talent. Loved it!",
    author: "Alex M.",
    rating: 5,
    category: 'corporate',
  },
  {
    quote: "His show BLEW OUR MINDS, plus we laughed a TON. You will elevate any event by hiring him to perform for you!",
    author: "Valerie M.",
    rating: 5,
    category: 'corporate',
  },
  {
    quote: "Remarkable magician and mentalist with a great engaging show that was fun and clean. He performed for our family over Zoom, was tremendously fun and capable of dealing with large groups.",
    author: "Alex H.",
    rating: 5,
    category: 'virtual',
  },
  {
    quote: "Incredible performance. Highly recommend! Great for corporate events, church groups, or anyone who wants to have their mind blown in the best way!",
    author: "Nelson S.",
    rating: 5,
    category: 'corporate',
  },
  {
    quote: "Grant does an excellent job getting the entire audience involved and entertained. It is a great mix of humor, magic, and mentalism. He should really charge more!",
    author: "Dan P.",
    rating: 5,
    category: 'corporate',
  },
  {
    quote: "Grant has amazing showmanship. He kept the show lively and ensured everyone had fun. I will be taking my wife for another one. He is great with interacting with the audience.",
    author: "Justin M.",
    rating: 5,
    category: 'corporate',
  },
  {
    quote: "My family loved the show Grant put on for us. He was funny, interactive, and talented. Kept us guessing about how he did the tricks until days after. Highly recommend!",
    author: "Kyle M.",
    rating: 5,
    category: 'family',
  },
  {
    quote: "This show was so incredible... even virtually my mind was BLOWN. Grant delivers amazing entertainment regardless of format!",
    author: "Maya F.",
    rating: 5,
    category: 'virtual',
  },
  {
    quote: "I was quite skeptical about a digital magic show, but Grant is amazingly talented and engaging! What a great time even over Zoom!",
    author: "Drew K.",
    rating: 5,
    category: 'virtual',
  },
]

// Get featured reviews (6 best ones)
export const featuredReviews = allReviews.filter(review => review.featured)

// Get all non-featured reviews
export const additionalReviews = allReviews.filter(review => !review.featured)

// Stats
export const reviewStats = {
  total: allReviews.length,
  averageRating: 5.0,
  fiveStarCount: allReviews.length,
}

