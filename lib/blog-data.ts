export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  image: string
  excerpt: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-5-maintenance-tips-for-artificial-turf",
    title: "Top 5 Maintenance Tips for Your Artificial Turf",
    date: "2025-07-11",
    author: "Jane Doe, Turf Expert",
    image: "/portfolio/sports-field-aritifical-turf-hero.jpg",
    excerpt:
      "Keep your artificial lawn looking pristine with these five simple maintenance tips. From regular brushing to dealing with spills, we've got you covered.",
    content: `
      <p>Artificial turf is known for its low maintenance, but a little care goes a long way in extending its life and keeping it beautiful. Here are our top five tips:</p>
      <ol class="list-decimal list-inside space-y-2 my-4">
        <li><strong>Regular Brushing:</strong> Use a stiff, synthetic-bristle brush to keep the grass blades upright and looking natural. Brush against the grain for the best results, especially in high-traffic areas.</li>
        <li><strong>Rinse Regularly:</strong> A quick rinse with a hose can wash away dust, pollen, and other debris. This is particularly important in dry, dusty climates or if you have pets.</li>
        <li><strong>Clean Spills Immediately:</strong> For spills like soda, coffee, or pet messes, it's best to clean them up right away. Blot the area with a towel and rinse with a mild soap and water solution.</li>
        <li><strong>Remove Weeds:</strong> While a proper installation includes a weed barrier, some persistent weeds might pop up at the edges. Remove them by hand as soon as you see them to prevent them from spreading.</li>
        <li><strong>Avoid Harsh Chemicals:</strong> Never use harsh chemicals, solvents, or oil-based products on your turf, as they can damage the synthetic fibers and backing. Stick to gentle, turf-friendly cleaners.</li>
      </ol>
      <p>By following these simple steps, you can ensure your investment stays green and gorgeous for years to come.</p>
    `,
  },
  {
    slug: "choosing-the-right-turf-for-your-home",
    title: "How to Choose the Right Artificial Turf for Your Home",
    date: "2025-07-04",
    author: "John Smith, Lead Installer",
    image: "/portfolio/pet-friendly-lawn-turf-hero.jpg",
    excerpt:
      "Not all turf is created equal. Learn about the key factors to consider when selecting the perfect artificial grass for your residential needs.",
    content: `
      <p>Choosing the right artificial turf is the most important step in ensuring you'll be happy with your new lawn. Here are the key factors to consider:</p>
      <ul class="list-disc list-inside space-y-2 my-4">
        <li><strong>Pile Height:</strong> This is the length of the grass blades. Shorter piles (around 1.25 inches) are durable and easy to clean, making them great for high-traffic areas and pets. Longer piles (up to 2.5 inches) offer a more lush, luxurious look.</li>
        <li><strong>Density and Weight:</strong> Higher density means more fibers per square inch, resulting in a fuller look and a more durable surface. Face weight refers to the weight of the yarn in a square yard, and a higher face weight often indicates better quality.</li>
        <li><strong>Thatch Layer:</strong> A thatch layer consists of shorter, curly fibers in a tan or brown color woven at the base of the turf. This mimics the look of natural grass and adds cushioning.</li>
        <li><strong>Infill Type:</strong> Infill provides stability, ballast, and cushioning. Common types include silica sand, rubber, and specialized pet-friendly or cooling infills. The right choice depends on your specific needs.</li>
        <li><strong>Color:</strong> Modern turf comes in various shades of green, often with brown or tan thatch for a more realistic appearance. Look for a color that matches the natural grass in your region.</li>
      </ul>
      <p>Considering these factors will help you select a turf that not only looks great but also performs perfectly for your lifestyle.</p>
    `,
  },
  {
    slug: "diy-vs-professional-turf-installation",
    title: "DIY vs. Professional Turf Installation: Which is Right for You?",
    date: "2025-06-28",
    author: "Jane Doe, Turf Expert",
    image: "/portfolio/general-turf-installation.jpg",
    excerpt:
      "Tempted to install your own turf? We break down the pros and cons of DIY versus hiring a professional team to help you make an informed decision.",
    content: `
      <p>A new artificial lawn is a significant investment, and the quality of the installation is just as important as the quality of the turf itself. So, should you do it yourself or hire a pro? Let's compare.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">DIY Installation</h3>
      <p><strong>Pros:</strong> The primary advantage is cost savings on labor. You also have complete control over the project timeline.</p>
      <p><strong>Cons:</strong> Turf installation is labor-intensive and requires specialized tools. Proper ground preparation is critical and difficult to get right without experience. Mistakes can lead to poor drainage, visible seams, and a shorter lifespan for your turf, potentially costing more in the long run.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Professional Installation</h3>
      <p><strong>Pros:</strong> Professionals have the experience, tools, and team to do the job efficiently and correctly. They ensure proper ground preparation, seamless connections, and correct infill application. Most importantly, professional installations come with a warranty, giving you peace of mind.</p>
      <p><strong>Cons:</strong> The upfront cost is higher due to labor charges.</p>
      <h3 class="text-xl font-semibold mt-4 mb-2">Conclusion</h3>
      <p>While a small, simple area might be a manageable DIY project for a skilled homeowner, we strongly recommend professional installation for most projects. The expertise and warranty provided by a professional team ensure your investment is protected and your lawn will look perfect for years to come.</p>
    `,
  },
]
