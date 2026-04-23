export const projects = [
  {
    id: 1,
    title: 'Event Booking App',
    subtitle: 'Discover and book events seamlessly',
    shortDescription: 'A mobile app that allows users to discover events, view event details, book tickets, and manage their bookings with a smooth and intuitive interface.',
    description: 'A comprehensive event booking mobile application built with Flutter, featuring real-time event discovery, secure ticket booking, and booking management. The app helps users find and attend events effortlessly with an intuitive and engaging user experience.',
    role: 'Developer',
    duration: 'Feb 2025 - Present',
    team: '1 Developer, 1 Designer',
    platform: 'iOS & Android',
    type: 'Professional',
    haveCode: false,
    technologies: ['Flutter', 'RESTful API', 'Provider', 'GetX', 'Payment Gateway', 'API Authentication', 'Google Authentication', 'Facebook Authentication'],
    features: [
      'Event discovery with search and filters',
      'Detailed event information and venue maps',
      'Booking history and management',
      'Event reminders and notifications',
      'Multiple payment options',
      'User reviews and ratings',
      'Favorites, recently viewed and upcoming events',
      'Event host and travellers separation',
      'Multi-language support'
    ],
    challenges: [
      {
        problem: 'Multi-Platform Authentication',
        solution: 'Integrated Google and Facebook authentication alongside traditional API authentication, implementing a unified auth flow with secure token management and seamless user experience across all login methods.'
      },
      // {
      //   problem: 'Payment Gateway Integration',
      //   solution: 'Implemented multiple payment gateways with fallback mechanisms, proper error handling, and secure transaction processing to ensure smooth checkout experience and handle various payment methods reliably.'
      // },
      {
        problem: 'Real-time Event Updates',
        solution: 'Built a real-time notification system using Firebase Cloud Messaging to deliver instant event reminders, booking confirmations, and status updates to users, ensuring they never miss important information.'
      },
      {
        problem: 'State Management Complexity',
        solution: 'Utilized Provider and GetX for efficient state management across the app, handling complex user flows like booking history, favorites, and search filters while maintaining clean architecture and optimal performance.'
      }
    ],
    // results: [
    //     { metric: '5,000+', label: 'Downloads' },
    //     { metric: '4.5★', label: 'User Rating' },
    //     { metric: '2,000+', label: 'Events Booked' },
    //     { metric: '98%', label: 'Booking Success Rate' }
    // ],
    image: 'https://via.placeholder.com/400x300?text=Event+Booking+App',
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'Authenticator App',
    subtitle: 'Secure two-factor authentication',
    shortDescription: 'A secure authentication app that generates time-based OTP codes, supports multi-account setup, and provides a clean and reliable user experience.',
    description: 'A secure two-factor authentication mobile application that generates time-based one-time passwords (TOTP) for multiple accounts. Features include encrypted local storage, biometric authentication, backup and restore functionality, and a minimalist design focused on security and usability.',
    role: 'Developer',
    duration: 'Nov 2023 - Dec 2024',
    team: '1 Developer, 1 Designer',
    platform: 'iOS & Android',
    type: 'Professional',
    haveCode: false,
    technologies: ['Flutter', 'Provider', 'GetX', 'AES-256 Encryption', 'OAuth Authentication'],
    features: [
      'Time-based OTP code generation',
      'QR code scanning for easy setup',
      'Encrypted local storage',
      'Backup and restore functionality',
      'Search and organize accounts',
      'Multi-language support',
      'Dark mode support',
      'Offline functionality'
    ],
    challenges: [
      {
        problem: 'Data Security and Encryption',
        solution: 'Implemented AES-256 encryption for all locally stored sensitive data including OTP seeds and account information. Used platform-specific secure storage (Keychain for iOS, Keystore for Android) to protect encryption keys and ensure data remains secure even if the device is compromised.'
      },
      // {
      //   problem: 'Time Synchronization Accuracy',
      //   solution: 'Built automatic time synchronization with NTP servers to ensure accurate TOTP generation even when device time is incorrect. Implemented fallback mechanisms and time drift detection to maintain reliability for offline OTP generation while warning users of potential sync issues.'
      // },
      {
        problem: 'Secure Backup and Restore',
        solution: 'Developed an encrypted backup system that allows users to safely export and restore their accounts while maintaining security. Used password-based key derivation (PBKDF2) to encrypt backup files, ensuring that even backed-up data remains protected and can only be restored with the correct credentials.'
      },
      {
        problem: 'Offline-First Architecture',
        solution: 'Designed the app to function completely offline by storing all necessary data locally with encryption. Implemented efficient local database management using SQLite with Provider and GetX for state management, ensuring smooth performance and instant OTP generation without any network dependency.'
      }
    ],
    image: 'https://via.placeholder.com/400x300?text=Authenticator+App',
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Hotel Reservation App',
    subtitle: 'Find and book your perfect stay',
    shortDescription: 'A hotel booking application featuring room browsing, reservation management, user authentication, and rating & review functionality.',
    description: 'An academic project for a hotel reservation system that allows users to browse hotels, view room details, make reservations, and manage bookings. The app includes user authentication, real-time availability checking, booking management, and a review system for guests to share their experiences.',
    role: 'Developer',
    duration: 'Apr 2023 - Jul 2023',
    team: 'Solo Project',
    platform: 'iOS & Android',
    type: 'Academic',
    haveCode: true,
    technologies: ['Flutter', 'Firebase', 'Firebase Auth'],
    features: [
      'Hotel search with filters',
      'Detailed hotel and room information',
      'Real-time room availability',
      'User authentication and profiles',
      'Booking history and management',
      'Rating and review system',
    ],
    challenges: [
      {
        problem: 'Real-time Availability Management',
        solution: 'Implemented Firebase real-time listeners and Firestore transactions to handle concurrent bookings and prevent double-booking scenarios. Used atomic operations to ensure room availability updates are instantly reflected across all users while maintaining data consistency.'
      },
      {
        problem: 'Complex Search and Filtering',
        solution: 'Designed an efficient Firestore database schema with composite indexes to support multiple filter combinations (location, price range, amenities, ratings). Implemented client-side filtering for dynamic filter options while optimizing query performance and reducing read operations.'
      },
      {
        problem: 'Data Structure and Relationships',
        solution: 'Created a denormalized database structure to balance between data redundancy and query efficiency. Structured collections for hotels, rooms, bookings, and reviews with proper relationships, enabling fast retrieval of booking history and user-specific data while maintaining Firebase best practices.'
      },
      {
        problem: 'User Authentication Flow',
        solution: 'Integrated Firebase Authentication to handle secure user login, registration, and profile management. Implemented persistent authentication state, password reset functionality, and linked user profiles with their bookings and reviews to provide a personalized experience throughout the app.'
      }
    ],
    image: 'https://via.placeholder.com/400x300?text=Hotel+Reservation',
    liveLink: '#',
    githubLink: '#'
  },
  {
    id: 4,
    title: 'My Portfolio',
    subtitle: 'Personal portfolio website',
    shortDescription: 'A personal portfolio website showcasing projects, skills, and experience, designed with a clean UI and responsive layout.',
    description: 'A modern and responsive personal portfolio website built with React and Tailwind CSS. The site showcases my projects, technical skills, work experience, and provides an easy way for potential clients and employers to learn about my work and get in touch.',
    role: 'Solo Developer & Designer',
    duration: 'Dec 2024 - Dec 2024',
    team: 'Solo Project',
    platform: 'Web',
    type: 'Personal',
    haveCode: true,
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Responsive design for all devices',
      'Project showcase with details',
      'Skills and technologies display',
      'Work experience timeline',
      'Smooth scrolling navigation',
    ],
    challenges: [
      {
        problem: 'Responsive Design Consistency',
        solution: 'Created a comprehensive design system using Tailwind CSS utility classes to ensure consistent styling across all screen sizes. Implemented mobile-first approach with breakpoint-specific layouts and tested thoroughly on various devices to guarantee optimal user experience from mobile to desktop.'
      },
      {
        problem: 'Component Reusability',
        solution: 'Designed modular and reusable React components for repeated UI elements like project cards, skill bars, and section layouts. This approach reduced code duplication, simplified maintenance, and ensured consistent design patterns throughout the portfolio.'
      },
      {
        problem: 'Navigation and User Experience',
        solution: 'Implemented smooth scrolling navigation using anchor links and scroll behavior optimization to create seamless transitions between sections. Added scroll-to-top functionality and proper routing for project details to enhance overall user experience and site navigation.'
      },
      // {
      //   problem: 'Performance Optimization',
      //   solution: 'Optimized asset loading, implemented code splitting, and minimized bundle size to achieve fast load times. Used lazy loading for images and optimized Tailwind CSS by purging unused styles in production, resulting in improved performance scores and better user experience.'
      // }
    ],
    image: 'https://via.placeholder.com/400x300?text=My+Portfolio',
    liveLink: '#',
    githubLink: '#'
  }
];