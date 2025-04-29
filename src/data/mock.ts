
export const users = [
  {
    name: "Ananya Sharma",
    role: "Ayurvedic Practitioner",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Marcus Johnson",
    role: "Wellness Coach",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Priya Nair",
    role: "Yoga Instructor",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Thomas Lee",
    role: "Meditation Guide",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Sunita Kaur",
    role: "Ayurvedic Chef",
    avatar: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=200&auto=format&fit=crop"
  }
];

export const doshaQuizQuestions = [
  {
    question: "How would you describe your body frame?",
    options: [
      { text: "Thin and lean with prominent joints", dosha: "vata" },
      { text: "Medium build with good muscle tone", dosha: "pitta" },
      { text: "Solid and sturdy with a tendency to gain weight", dosha: "kapha" }
    ]
  },
  {
    question: "How would you describe your skin?",
    options: [
      { text: "Dry, thin, cool to touch", dosha: "vata" },
      { text: "Warm, reddish, prone to irritation", dosha: "pitta" },
      { text: "Thick, smooth, and moist", dosha: "kapha" }
    ]
  },
  {
    question: "How is your appetite typically?",
    options: [
      { text: "Variable, sometimes I forget to eat", dosha: "vata" },
      { text: "Strong, I get irritable if I miss meals", dosha: "pitta" },
      { text: "Steady, but I can skip meals without much discomfort", dosha: "kapha" }
    ]
  },
  {
    question: "How do you respond to stress?",
    options: [
      { text: "Anxious, worried, overthinking", dosha: "vata" },
      { text: "Irritable, intense, confrontational", dosha: "pitta" },
      { text: "Calm initially, but can become withdrawn", dosha: "kapha" }
    ]
  }
];

export const doshaDescriptions = {
  vata: {
    title: "Vata Dosha",
    subtitle: "Air & Space",
    description: "You embody creativity, movement, and change. When in balance, you're lively, enthusiastic, and imaginative. Your energy flows freely, and you're a natural at adapting to new situations.",
    traits: ["Creative", "Energetic", "Quick learner", "Adaptable", "Enthusiastic"],
    imbalanceSigns: ["Anxiety", "Dry skin", "Irregular digestion", "Difficulty sleeping", "Fatigue"],
    balancingPractices: [
      "Establish regular routines",
      "Keep warm and grounded",
      "Practice gentle yoga and meditation",
      "Favor warm, cooked foods with healthy fats",
      "Get adequate rest"
    ]
  },
  pitta: {
    title: "Pitta Dosha",
    subtitle: "Fire & Water",
    description: "You are naturally focused, determined, and intelligent. When in balance, you're a natural leader with strong digestion, metabolism, and mental clarity. You approach challenges with precision and focus.",
    traits: ["Focused", "Determined", "Intelligent", "Organized", "Passionate"],
    imbalanceSigns: ["Irritability", "Acid reflux", "Skin inflammation", "Excessive body heat", "Impatience"],
    balancingPractices: [
      "Avoid excessive heat and sun exposure",
      "Incorporate cooling foods and herbs",
      "Practice calming, moonlight yoga",
      "Allow time for relaxation",
      "Cultivate patience and compassion"
    ]
  },
  kapha: {
    title: "Kapha Dosha",
    subtitle: "Earth & Water",
    description: "You exemplify strength, endurance, and stability. When in balance, you're compassionate, patient, and nurturing with excellent physical stamina and a calm, steady mind.",
    traits: ["Compassionate", "Patient", "Strong", "Loyal", "Grounded"],
    imbalanceSigns: ["Sluggishness", "Water retention", "Attachment issues", "Congestion", "Resistance to change"],
    balancingPractices: [
      "Maintain regular physical activity",
      "Embrace variety and change",
      "Favor warm, light, and spicy foods",
      "Practice stimulating exercise",
      "Rise early and stay active"
    ]
  }
};
