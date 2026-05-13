export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    slug: "heavy-transport-safety-saudi-arabia",
    title: "Safety First: Heavy Transport Protocols in KSA",
    excerpt: "Exploring the critical safety measures and regulatory requirements for heavy cargo transportation across the Kingdom.",
    content: `
      <p>Transportation of heavy and oversized cargo in Saudi Arabia requires more than just powerful engines. It requires a meticulous commitment to safety, engineering, and regional regulations. At GQS, we've refined our protocols over 15 years to ensure every delivery is incident-free.</p>
      
      <h2>Engineering Excellence in Logistics</h2>
      <p>Before a single unit moves, our team conducts exhaustive route surveys. We analyze bridge capacities, overhead clearances, and road conditions to identify potential bottlenecks. Engineering a safe route is the foundation of industrial logistics. This involves calculating load distributions and ensuring that the selected fleet is perfectly suited for the terrain.</p>
      
      <h2>Coordinated Escort & Safety Teams</h2>
      <p>Large-scale movements require coordination with local authorities and pilot vehicles. Our escort teams manage traffic flow and ensure the safety of other road users while protecting the integrity of the cargo. We utilize state-of-the-art communication systems to maintain real-time contact between the driver, escort, and our operations center.</p>
      
      <h2>Rigorous Equipment Maintenance</h2>
      <p>Our fleet undergoes rigorous daily inspections. From tire pressure to hydraulic systems on our lowbed trailers, everything must be in peak condition before mobilization. Preventive maintenance is not just a policy; it's our guarantee of reliability for our clients.</p>
      
      <p>By adhering to these strict protocols, we not only protect our team and assets but also ensure that our clients' projects stay on schedule, no matter the scale of the transportation challenge.</p>
    `,
    date: "May 12, 2024",
    author: "Eng. Ahmed Khalid",
    category: "Safety",
    image: "/blog-1.png"
  },
  {
    slug: "choosing-right-excavator-rental",
    title: "How to Choose the Right Excavator for Your Site",
    excerpt: "A technical guide to selecting the appropriate machinery for construction and excavation projects in the Eastern Province.",
    content: `
      <p>Selecting the wrong excavator can lead to significant project delays and increased costs. Understanding the technical requirements of your site is crucial for making the right rental decision. Whether you are working on a small residential site or a massive industrial plant, the choice of machinery defines your efficiency.</p>
      
      <h2>Analyzing Dig Depth & Reach</h2>
      <p>Start by calculating the maximum depth you need to reach. Renting a machine with more capacity than needed is inefficient, but falling short is a major blocker. You must also consider the "reach" – how far the arm can extend to dump material into trucks or over obstacles.</p>
      
      <h2>Matching Bucket Capacity to Material</h2>
      <p>Consider the material you are handling. Dense clay requires different power levels compared to loose sand. Our team can help you calculate the exact tonnage required for your specific earth-moving tasks. Using the wrong bucket size can either slow down the process or put unnecessary strain on the machine's hydraulics.</p>
      
      <h2>Terrain & Mobility Considerations</h2>
      <p>Will you be working on soft sand or stable asphalt? Tracked excavators provide superior stability on loose ground, while wheeled versions offer faster mobility between points on a large, paved site. Understanding your terrain is the third pillar of smart machinery rental.</p>
    `,
    date: "April 28, 2024",
    author: "Logistics Team",
    category: "Machinery",
    image: "/blog-2.png"
  },
  {
    slug: "cross-border-logistics-gcc",
    title: "Navigating GCC Cross-Border Logistics",
    excerpt: "Insights into the challenges and solutions for transporting industrial cargo between Saudi Arabia, UAE, and Oman.",
    content: `
      <p>The GCC region is a booming hub for industrial growth. However, moving heavy cargo across borders involves complex customs and permit systems. Here's how we simplify the process for our international partners.</p>
      
      <h2>Unified Customs & Documentation</h2>
      <p>Leveraging unified GCC protocols allows for faster processing, but documentation must be perfect. We handle all paperwork, including SASO certifications and industrial permits, to ensure your project stays on schedule. Any error in documentation can lead to days of delays at the border.</p>
      
      <h2>Inter-State Regulatory Compliance</h2>
      <p>Each country within the GCC has its own specific axle-load limits and daytime transport restrictions. Our team stays updated on these changing regulations so you don't have to. We plan the entire journey, ensuring compliance at every kilometer of the route.</p>
    `,
    date: "March 15, 2024",
    author: "Operations Manager",
    category: "Logistics",
    image: "/blog-3.png"
  }
];
