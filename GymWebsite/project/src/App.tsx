import React from 'react';
import { Dumbbell, Heart, Target, Users, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

const equipmentData = [
  {
    title: "Free Weights",
    description: "Essential equipment for strength training",
    items: [
      {
        name: "Dumbbells",
        description: "Perfect for isolated movements and unilateral training",
        exercises: ["Dumbbell Press", "Bicep Curls", "Shoulder Raises"],
        image: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=800"
      },
      {
        name: "Barbells",
        description: "Ideal for compound movements and heavy lifting",
        exercises: ["Deadlifts", "Bench Press", "Squats"],
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800"
      }
    ]
  },
  {
    title: "Machines",
    description: "Guided movement patterns for targeted training",
    items: [
      {
        name: "Cable Machine",
        description: "Versatile equipment for various exercises",
        exercises: ["Cable Flyes", "Tricep Pushdowns", "Face Pulls"],
        image: "https://images.unsplash.com/photo-1596357395217-80de13130e92?auto=format&fit=crop&w=800"
      },
      {
        name: "Smith Machine",
        description: "Guided barbell movements for safety",
        exercises: ["Smith Squats", "Incline Press", "Lunges"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800"
      }
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">FitGuide by Dhruv</h1>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Your Complete Guide to Gym Equipment</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover the right equipment and exercises for your fitness journey
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Heart className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">Detailed instructions for proper form and technique</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Target className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Targeted Workouts</h3>
            <p className="text-gray-600">Equipment-specific exercises for every muscle group</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Users className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">Join others on their fitness journey</p>
          </div>
        </div>

        {/* Equipment Sections */}
        {equipmentData.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-3xl font-bold mb-8">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium">Popular Exercises:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {item.exercises.map((exercise, exerciseIndex) => (
                          <li key={exerciseIndex}>{exercise}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400">Have questions about equipment or exercises?</p>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <a href="mailto:contact@dhruvv.com" className="flex items-center space-x-2 hover:text-indigo-400">
              <Mail className="w-5 h-5" />
              <span>Dhruv171104@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p>© 2024 FitGuide by Dhruv. All rights reserved.</p>
        </div>https://github.com/Dhruv171104/hello-world
      </footer>
    </div>
  );
}

export default App;