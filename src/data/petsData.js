// Shared pets database
import maxImg from "../assets/img/pets/max.jpg";
import lunaImg from "../assets/img/pets/luna.webp";
import buddyImg from "../assets/img/pets/buddy.webp";
import miloImg from "../assets/img/pets/milo.webp";
import bellaImg from "../assets/img/pets/bella.jpg";
import whiskersImg from "../assets/img/pets/whiskers.webp";

export const petsData = [
  {
    name: "Max",
    age: "2 years",
    breed: "Golden Retriever",
    gender: "Male",
    desc: "Playful and loving Golden Retriever who loves everyone he meets!",
    fullDesc: "Max is a loving 2-year-old Golden Retriever with a heart of gold. He's great with children, other dogs, and loves going for walks. Max is fully house trained, knows basic commands, and is looking for his forever family.",
    image: maxImg,
  },
  {
    name: "Luna",
    age: "1 year",
    breed: "Tabby Cat",
    gender: "Female",
    desc: "Sweet and cuddly cat who loves to curl up on your lap.",
    fullDesc: "Luna is an affectionate 1-year-old tabby cat who loves cuddles and quiet evenings. She's the perfect companion for someone looking for a calm and loving pet. Luna enjoys playing with toys and lounging in sunny spots.",
    image: lunaImg,
  },
  {
    name: "Buddy",
    age: "6 months",
    breed: "Beagle",
    gender: "Male",
    desc: "Energetic puppy ready for adventures and lots of love!",
    fullDesc: "Buddy is an adorable 6-month-old Beagle puppy full of energy and ready for adventures! He loves playing fetch, going for walks, and making new friends. Buddy would be perfect for an active family.",
    image: buddyImg,
  },
  {
    name: "Milo",
    age: "3 years",
    breed: "Siamese",
    gender: "Male",
    desc: "Elegant Siamese with beautiful blue eyes and sweet personality.",
    fullDesc: "Milo is an elegant 3-year-old Siamese cat with striking blue eyes and a sweet, affectionate personality. He loves attention and is known for his vocal nature. Milo would thrive in a loving home where he's treated as a family member.",
    image: miloImg,
  },
  {
    name: "Bella",
    age: "4 years",
    breed: "Labrador",
    gender: "Female",
    desc: "Loyal companion who loves walks and playing fetch.",
    fullDesc: "Bella is a 4-year-old Labrador Retriever known for her loyalty and gentle nature. She loves outdoor activities, walks, and playing fetch. Bella is great with families and other dogs, making her an ideal addition to any household.",
    image: bellaImg,
  },
  {
    name: "Whiskers",
    age: "3 months",
    breed: "Domestic Short Hair",
    gender: "Female",
    desc: "Tiny bundle of joy looking for her forever family.",
    fullDesc: "Whiskers is a tiny 3-month-old kitten full of playful energy and curiosity. She's still learning about the world and loves interactive toys. Whiskers would benefit from a patient family to help her grow into a wonderful adult cat.",
    image: whiskersImg,
  },
];

export const getPetByName = (name) => {
  return petsData.find((pet) => pet.name.toLowerCase() === name.toLowerCase());
};
