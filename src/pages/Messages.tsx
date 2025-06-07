
import { useState } from "react";
import { Search, MoreVertical, Heart, Send, Image, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Emma",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      lastMessage: "Thanks for the beautiful poem! 💕",
      time: "2m ago",
      unread: 2,
      isOnline: true,
      messages: [
        { id: 1, text: "Hi! I loved your profile, especially the part about poetry 📚", sender: "them", time: "2:30 PM" },
        { id: 2, text: "Thank you! I see you appreciate classic literature too. What's your favorite poem?", sender: "me", time: "2:32 PM" },
        { id: 3, text: "Oh, that's hard to choose! But I'd say 'She Walks in Beauty' by Byron. Something about it just captures the essence of romantic admiration ✨", sender: "them", time: "2:35 PM" },
        { id: 4, text: "That's one of my favorites too! Here's a little something I wrote: 'In your eyes I see galaxies, in your smile I find my home...'", sender: "me", time: "2:40 PM" },
        { id: 5, text: "Thanks for the beautiful poem! 💕", sender: "them", time: "2:42 PM" }
      ]
    },
    {
      id: 2,
      name: "Alexander",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      lastMessage: "Would love to meet for coffee...",
      time: "1h ago",
      unread: 0,
      isOnline: false,
      messages: [
        { id: 1, text: "Your taste in jazz music is impeccable! Do you play any instruments?", sender: "them", time: "1:00 PM" },
        { id: 2, text: "I dabble with the piano, nothing professional though. Do you?", sender: "me", time: "1:05 PM" },
        { id: 3, text: "Would love to meet for coffee...", sender: "them", time: "1:10 PM" }
      ]
    },
    {
      id: 3,
      name: "Sofia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      lastMessage: "That stargazing spot looks magical ✨",
      time: "3h ago",
      unread: 1,
      isOnline: true,
      messages: [
        { id: 1, text: "I noticed you love stargazing! I know this perfect spot outside the city 🌙", sender: "me", time: "11:00 AM" },
        { id: 2, text: "That stargazing spot looks magical ✨", sender: "them", time: "11:30 AM" }
      ]
    }
  ];

  const currentConversation = conversations.find(conv => conv.id === selectedChat);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  if (selectedChat) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-romance-50 via-white to-romance-100 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white/80 backdrop-blur-lg border-b border-romance-200 p-4">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedChat(null)}
              className="text-romance-600"
            >
              ←
            </Button>
            <div className="relative">
              <img
                src={currentConversation?.image}
                alt={currentConversation?.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              {currentConversation?.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              )}
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-romance-800">{currentConversation?.name}</h2>
              <p className="text-xs text-romance-500">
                {currentConversation?.isOnline ? "Online now" : "Last seen 2h ago"}
              </p>
            </div>
            <Button variant="ghost" size="sm" className="text-romance-600">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
          {currentConversation?.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  message.sender === "me"
                    ? "love-gradient text-white"
                    : "bg-white border border-romance-200 text-romance-800"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === "me" ? "text-romance-100" : "text-romance-500"
                }`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white/80 backdrop-blur-lg border-t border-romance-200 p-4">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-romance-600">
              <Image className="w-5 h-5" />
            </Button>
            <div className="flex-1 relative">
              <Input
                placeholder="Type a romantic message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                className="border-romance-200 focus:border-romance-400 pr-10"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-romance-600"
              >
                <Mic className="w-4 h-4" />
              </Button>
            </div>
            <Button 
              onClick={sendMessage}
              className="love-gradient text-white border-none"
              size="sm"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-romance-50 via-white to-romance-100 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-romance-200">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-romance-700 mb-4">Messages</h1>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-romance-400 w-5 h-5" />
            <Input
              placeholder="Search conversations..."
              className="pl-10 border-romance-200 focus:border-romance-400"
            />
          </div>
        </div>
      </div>

      {/* Conversations List */}
      <div className="p-4 space-y-2">
        {conversations.map((conversation) => (
          <Card
            key={conversation.id}
            className="p-4 border-romance-200 cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setSelectedChat(conversation.id)}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={conversation.image}
                  alt={conversation.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                {conversation.isOnline && (
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-romance-800 truncate">{conversation.name}</h3>
                  <span className="text-xs text-romance-500">{conversation.time}</span>
                </div>
                <p className="text-sm text-romance-600 truncate">{conversation.lastMessage}</p>
              </div>
              
              {conversation.unread > 0 && (
                <div className="w-6 h-6 bg-romance-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{conversation.unread}</span>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Love Letter Feature */}
      <div className="p-4">
        <Card className="p-6 romantic-gradient border-romance-200">
          <div className="text-center">
            <Heart className="w-12 h-12 text-romance-500 mx-auto mb-3 animate-heart-beat" />
            <h3 className="text-lg font-bold text-romance-700 mb-2">Send a Love Letter</h3>
            <p className="text-romance-600 text-sm mb-4">
              Express your feelings with a beautifully crafted letter
            </p>
            <Button className="love-gradient text-white border-none">
              Write Love Letter
            </Button>
          </div>
        </Card>
      </div>

      <Navigation />
    </div>
  );
};

export default Messages;
