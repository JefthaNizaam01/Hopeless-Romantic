
import { useState } from "react";
import { Search, Filter, MapPin, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Discovery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const romanticEvents = [
    {
      id: 1,
      title: "Poetry Night at Moonlight Café",
      date: "Tonight, 8 PM",
      location: "Downtown",
      attendees: 12,
      type: "Literary"
    },
    {
      id: 2,
      title: "Stargazing & Wine Tasting",
      date: "Saturday, 9 PM",
      location: "Hillside Park",
      attendees: 8,
      type: "Outdoor"
    },
    {
      id: 3,
      title: "Vintage Dance Class",
      date: "Sunday, 6 PM",
      location: "Ballroom Studio",
      attendees: 16,
      type: "Dance"
    }
  ];

  const romanticSpots = [
    {
      id: 1,
      name: "Sunset Bridge",
      rating: 4.8,
      type: "Scenic",
      distance: "0.5 miles",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Rose Garden Café",
      rating: 4.9,
      type: "Café",
      distance: "1.2 miles",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-romance-50 via-white to-romance-100 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-romance-200">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-romance-700 mb-4">Discover Love</h1>
          
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-romance-400 w-5 h-5" />
            <Input
              placeholder="Search romantic spots, events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-12 border-romance-200 focus:border-romance-400"
            />
            <Button variant="ghost" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
              <Filter className="w-4 h-4 text-romance-500" />
            </Button>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-2 overflow-x-auto">
            {["All", "Events", "Places", "Activities", "Date Ideas"].map((tab) => (
              <Button
                key={tab}
                variant={tab === "All" ? "default" : "outline"}
                size="sm"
                className={tab === "All" ? "love-gradient text-white border-none" : "border-romance-200 text-romance-600"}
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Romantic Events */}
        <section>
          <h2 className="text-xl font-semibold text-romance-700 mb-3">Romantic Events</h2>
          <div className="space-y-3">
            {romanticEvents.map((event) => (
              <Card key={event.id} className="p-4 border-romance-200">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-romance-800">{event.title}</h3>
                  <Badge variant="secondary" className="bg-romance-100 text-romance-700">
                    {event.type}
                  </Badge>
                </div>
                <div className="space-y-1 text-sm text-romance-600">
                  <p>{event.date}</p>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{event.location}</span>
                  </div>
                  <p>{event.attendees} romantics attending</p>
                </div>
                <Button size="sm" className="mt-3 love-gradient text-white border-none">
                  Join Event
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Romantic Spots */}
        <section>
          <h2 className="text-xl font-semibold text-romance-700 mb-3">Romantic Spots Nearby</h2>
          <div className="grid grid-cols-1 gap-4">
            {romanticSpots.map((spot) => (
              <Card key={spot.id} className="overflow-hidden border-romance-200">
                <div className="flex">
                  <img
                    src={spot.image}
                    alt={spot.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-romance-800">{spot.name}</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm text-romance-600">{spot.rating}</span>
                      </div>
                    </div>
                    <div className="space-y-1 text-sm text-romance-600">
                      <Badge variant="outline" className="border-romance-300 text-romance-600 text-xs">
                        {spot.type}
                      </Badge>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{spot.distance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Love Compatibility Quiz */}
        <section>
          <Card className="p-6 romantic-gradient border-romance-200">
            <div className="text-center">
              <Heart className="w-12 h-12 text-romance-500 mx-auto mb-3 animate-heart-beat" />
              <h3 className="text-xl font-bold text-romance-700 mb-2">Daily Love Compatibility Quiz</h3>
              <p className="text-romance-600 mb-4">
                Discover your romantic personality and find better matches!
              </p>
              <Button className="love-gradient text-white border-none">
                Take Quiz (3 min)
              </Button>
            </div>
          </Card>
        </section>
      </div>

      <Navigation />
    </div>
  );
};

export default Discovery;
