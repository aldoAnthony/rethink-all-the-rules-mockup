import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import book1Cover from "@/assets/book1-cover.jpg";
import book2Cover from "@/assets/book2-cover.jpg";
import book3Cover from "@/assets/book3-cover.jpg";

const books = [
  {
    id: 1,
    title: "Leadership Reimagined",
    subtitle: "Breaking Traditional Management Paradigms",
    description: "A revolutionary approach to leadership that challenges conventional wisdom and empowers authentic, transformative leadership styles.",
    image: book1Cover,
    price: "$24.99"
  },
  {
    id: 2,
    title: "Breaking Corporate Chains",
    subtitle: "Freedom in Professional Growth",
    description: "Discover how to navigate corporate structures while maintaining authenticity and driving meaningful change from within.",
    image: book2Cover,
    price: "$19.99"
  },
  {
    id: 3,
    title: "The Innovation Mindset",
    subtitle: "Cultivating Creative Thinking",
    description: "Unlock your creative potential and learn to think beyond traditional boundaries to solve complex business challenges.",
    image: book3Cover,
    price: "$22.99"
  }
];

const FeaturedBooks = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Featured Books</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover transformative insights through our collection of groundbreaking books on leadership, innovation, and personal growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book, index) => {
            const borderColors = ['border-purple', 'border-teal', 'border-orange'];
            const shadowColors = ['shadow-purple', 'shadow-teal', 'shadow-orange'];
            const borderColor = borderColors[index % 3];
            const shadowColor = shadowColors[index % 3];
            
            return (
              <Card key={book.id} className={`hover-lift group border-2 ${borderColor} ${shadowColor}`}>
                <CardContent className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple/80 to-pink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={book.image} 
                      alt={book.title}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-2">{book.title}</h3>
                      <p className="text-muted-foreground font-medium">{book.subtitle}</p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {book.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-2xl font-bold text-accent">{book.price}</span>
                      <Button variant="accent" className="font-semibold hover:scale-105 transition-transform">
                        Get Book
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;