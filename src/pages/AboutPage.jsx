import React from "react";
import {
  Target,
  Heart,
  Award,
  Users,
  TrendingUp,
  Shield,
  Leaf,
  Truck,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    { number: "10+", label: "Years in Business" },
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Products Available" },
    { number: "99%", label: "Customer Satisfaction" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "We put our customers at the heart of everything we do, ensuring quality products and exceptional service.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We source only the finest materials and work with skilled craftsmen to deliver superior furniture.",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description:
        "We believe in honest pricing, transparent policies, and building long-term relationships with our customers.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We are committed to eco-friendly practices and sustainable sourcing to protect our planet.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "We continuously evolve our designs and services to meet the changing needs of modern living.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description:
        "We ensure timely delivery and professional installation services for a hassle-free experience.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "With over 15 years of experience in furniture design, Sarah founded Acocie to bring quality furniture to every home.",
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
      bio: "Michael leads our design team, creating innovative furniture that combines style, comfort, and functionality.",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Emily ensures smooth operations and exceptional customer service across all our channels.",
    },
    {
      name: "David Thompson",
      role: "Sustainability Officer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      bio: "David spearheads our sustainability initiatives, ensuring eco-friendly practices in all our processes.",
    },
  ];

  const timeline = [
    {
      year: "2014",
      title: "The Beginning",
      description:
        "Acocie Furnitures was founded with a vision to make quality furniture accessible to everyone.",
    },
    {
      year: "2016",
      title: "First Showroom",
      description:
        "Opened our flagship showroom in New York, showcasing our complete furniture collection.",
    },
    {
      year: "2018",
      title: "Going Digital",
      description:
        "Launched our e-commerce platform, reaching customers nationwide with seamless online shopping.",
    },
    {
      year: "2020",
      title: "Sustainability Initiative",
      description:
        "Committed to 100% sustainable sourcing and launched our eco-friendly furniture line.",
    },
    {
      year: "2022",
      title: "Expansion",
      description:
        "Expanded to 5 showrooms across major cities and partnered with local craftsmen.",
    },
    {
      year: "2024",
      title: "Innovation Award",
      description:
        "Received the National Furniture Innovation Award for our smart furniture designs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Acocie Furnitures
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Crafting Quality Furniture Since 2014. We believe every home
              deserves beautiful, comfortable, and sustainable furniture.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2014, Acocie Furnitures began with a simple
                  mission: to make high-quality, beautifully designed furniture
                  accessible to everyone. What started as a small workshop in
                  New York has grown into a trusted furniture brand serving
                  thousands of happy customers across the country.
                </p>
                <p>
                  Our founder, Sarah Johnson, was frustrated with the limited
                  options available in the furniture market – either overpriced
                  designer pieces or low-quality mass-produced items. She
                  envisioned a company that could bridge this gap, offering
                  premium furniture at fair prices.
                </p>
                <p>
                  Today, we work directly with skilled craftsmen and sustainable
                  suppliers to bring you furniture that combines timeless
                  design, superior quality, and environmental responsibility.
                  Every piece we create is thoughtfully designed to enhance your
                  living space and stand the test of time.
                </p>
                <p>
                  We're more than just a furniture company – we're a team
                  passionate about helping you create a home you love.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=300&fit=crop"
                alt="Furniture workshop"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&h=300&fit=crop"
                alt="Furniture showroom"
                className="rounded-lg shadow-lg mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&h=300&fit=crop"
                alt="Furniture design"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop"
                alt="Modern furniture"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-orange-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To transform houses into homes by providing high-quality,
                sustainable furniture that combines exceptional design, comfort,
                and affordability. We strive to exceed customer expectations
                through innovative products and outstanding service.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted furniture brand globally, recognized
                for our commitment to quality, sustainability, and customer
                satisfaction. We envision a future where every home has access
                to beautiful, eco-friendly furniture that enhances daily living.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and help us deliver the
              best experience to our customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to industry leaders
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-300"></div>

            <div className="space-y-12">
              {timeline.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
                  >
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="text-3xl font-bold text-orange-500 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Acocie Furnitures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Explore our collection of premium furniture and find the perfect
            pieces for your home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => (window.location.href = "/products")}
              className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Shop Now
            </button>
            <button
              onClick={() => (window.location.href = "/contact")}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

