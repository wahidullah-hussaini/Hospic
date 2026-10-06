// ALL PICTURES OF THE WEBSITE ARE HERE (online links for now).
//
// HOW TO MAKE THEM OFFLINE LATER:
// 1. Put your picture in src/assets/images/
// 2. Add an import at the top:   import hero from "../assets/images/bg.avif";
// 3. Replace the link with the name:   hero: hero,
// Nothing else in the project needs to change.

const online = (word, number) => `https://loremflickr.com/800/600/${word}?lock=${number}`;

export const images = {
  hero: online("hospital,doctor", 1),
  about: online("doctors,team", 2),
  why: online("doctor,patient", 3),
  packages: online("surgery,hospital", 4),

  service1: online("emergency,ambulance", 5),
  service2: online("doctor,medicine", 6),
  service3: online("pregnancy,doctor", 7),
  service4: online("xray,medical", 8),

  dept1: online("cardiology,heart", 9),
  dept2: online("brain,mri", 10),
  dept3: online("radiology,scan", 11),
  dept4: online("orthopedic,knee", 12),

  doctor1: online("doctor,portrait", 13),
  doctor2: online("doctor,man", 14),
  doctor3: online("surgeon,portrait", 15),
  doctor4: online("physician,portrait", 16),
  doctor5: online("doctor,smile", 17),
  doctor6: online("medical,doctor", 18),

  blog1: online("checkup,doctor", 19),
  blog2: online("health,woman", 20),
};
