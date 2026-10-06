// ALL TEXT AND IMAGES OF THE WEBSITE ARE HERE.
// To change a word, a price or a picture, edit only this file.
// Pictures come from src/data/images.js (if a picture is missing, a grey box shows).
import { images } from "../assets/images/image";

export const navLinks = ["Home", "About", "Departments", "Pricing", "Blog"];

export const bg = images.bg;
export const aboutImage = images.about;
export const img7 = images.img7;
export const video = images.video;

export const stats = [
  { value: "200+", label: "Experienced Doctors" },
  { value: "98%", label: "Patient Satisfaction" },
  { value: "24/7", label: "Emergency Care" },
];

export const services = [
  { title: "Emergency care", text: "Rapid immediate medical attention 24/7 from experienced emergency staff.", image: images.img3 },
  { title: "General medicine", text: "Comprehensive diagnosis, treatment and care for patients of all ages.", image: images.img4 },
  { title: "Women's health", text: "Complete gynecology, maternity, reproductive and wellness care.", image: images.img5 },
  { title: "Diagnostic imaging", text: "Advanced imaging and lab services including X-ray, ultrasound, CT scan.", image: images.img6 },
];

export const reasons = [
  { icon: "🩺", title: "Experienced specialists", text: "Expert diagnosis and treatment from highly qualified doctors." },
  { icon: "🔬", title: "Advanced technology", text: "Our hospital is equipped with modern diagnostic equipment." },
  { icon: "🛡️", title: "Trusted healthcare", text: "Thousands of families trust us for quality medical services." },
  { icon: "🚑", title: "24/7 emergency care", text: "Emergency medical services available around the clock." },
];

export const departments = [
  { icon: "❤️", name: "Cardiology", text: "Expert diagnosis and treatment for heart and cardiovascular care.", image: images.Specialized1 },
  { icon: "🧠", name: "Neurology", text: "Our Neurology Department treats brain and nervous system disorders.", image: images.Specialized2 },
  { icon: "🩻", name: "Radiology", text: "Advanced diagnostic imaging services including X-ray and MRI.", image: images.Specialized3 },
  { icon: "🦴", name: "Orthopedics", text: "Expert care for bones, joints, muscles and mobility.", image: images.Specialized4 },
];

export const packages = [
  { name: "Basic Health Check", price: 99, featured: false, text: "Perfect for routine wellness and regular health checks.", items: ["General physician consultation", "Complete blood count (CBC)", "Blood pressure check"] },
  { name: "Standard Health Check", price: 199, featured: true, text: "A comprehensive package with advanced diagnostic tests.", items: ["Everything in Basic", "Cholesterol and lipid profile", "Chest X-ray"] },
  { name: "Premium Health Check", price: 399, featured: false, text: "Our most complete package for full body health screening.", items: ["Everything in Standard", "Heart health screening", "Internal 8 X-RAY tests"] },
];

const reviewText = "The doctors were compassionate, attentive, and always available. The hospital's modern facilities, efficient service.";
export const testimonials = [
  { name: "Brian Fowler", place: "San Francisco, CA", text: reviewText },
  { name: "Melissa Grant", place: "Austin, TX", text: reviewText },
  { name: "Daniel Reyes", place: "Chicago, IL", text: reviewText },
  { name: "Sophie Tran", place: "Seattle, WA", text: reviewText },
];

export const doctors = [
  { name: "David Anderson", role: "Chief Medical Officer", image: images.img1 },
  { name: "Charles Morgan", role: "Pediatric Specialist", image: images.img2 },
  { name: "Mark Sullivan", role: "Orthopedic Surgeon", image: images.img3 },
  { name: "Steven Clark", role: "Chief Medical Officer", image: images.img4},
  { name: "Kevin Turner", role: "Pediatric Specialist", image: images.img5 },
  { name: "Charles Morgan", role: "Orthopedic Surgeon", image: images.img6},
];

export const faqs = [
  { question: "Do I need an appointment?", answer: "You can book online or walk in, but appointments reduce your waiting time." },
  { question: "Do you accept insurance?", answer: "Yes, we accept most major insurance plans. Contact us to confirm yours." },
  { question: "How can I book an appointment?", answer: "Use the Book an Appointment button, or call our front desk." },
  { question: "Do you provide emergency care?", answer: "Yes, our emergency department is open 24 hours a day, 7 days a week." },
  { question: "Can I choose my doctor?", answer: "Yes, you can choose a doctor based on specialty and availability." },
  { question: "Do you offer health checkup packages?", answer: "Yes, we offer Basic, Standard and Premium health check packages." },
];

export const posts = [
  { tag: "Health Tips", date: "Oct 9, 2026", title: "Annual health checkups are one of the most valuable investments.", image: images.Latest1 },
  { tag: "Patient Care", date: "Oct 16, 2026", title: "Explore the recommended health screenings every woman should consider.", image: images.Latest2 },
];

export const footerInfo = {
  hours: ["Monday – Friday: 8:00 AM – 7:00 PM", "Saturday: 8:00 AM – 2:00 PM"],
  contact: ["+1 (800) 000-0123", "hello@hospic.com", "Your Street, New York, NY"],
  pages: ["Home", "About Us", "Contact", "FAQ"],
  departments: ["Cardiology", "Neurology", "Radiology", "Orthopedics"],
};
