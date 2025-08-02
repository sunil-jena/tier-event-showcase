import { Event } from "../types/tier";

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript in this beginner-friendly workshop.',
    date: '2024-02-15',
    tier: 'free',
  },
  {
    id: '2',
    title: 'React Fundamentals Workshop',
    description: 'Master the core concepts of React including components, hooks, and state management.',
    date: '2024-02-20',
    tier: 'free',
  },
  {
    id: '3',
    title: 'Advanced TypeScript Patterns',
    description: 'Deep dive into advanced TypeScript features and design patterns for enterprise applications.',
    date: '2024-02-25',
    tier: 'silver',
  },
  {
    id: '4',
    title: 'System Design Masterclass',
    description: 'Learn how to design scalable systems from industry experts. Includes hands-on exercises.',
    date: '2024-03-01',
    tier: 'silver',
  },
  {
    id: '5',
    title: 'AI/ML Integration Workshop',
    description: 'Integrate machine learning models into your applications using modern tools and frameworks.',
    date: '2024-03-05',
    tier: 'gold',
  },
  {
    id: '6',
    title: 'Cloud Architecture Deep Dive',
    description: 'Master cloud architecture patterns with AWS, Azure, and GCP. Includes certification prep.',
    date: '2024-03-10',
    tier: 'gold',
  },
  {
    id: '7',
    title: 'Exclusive CTO Roundtable',
    description: 'Private networking session with CTOs from Fortune 500 companies. Limited to 20 participants.',
    date: '2024-03-15',
    tier: 'platinum',
  },
  {
    id: '8',
    title: 'Early Access: Next-Gen Framework Preview',
    description: 'Get exclusive early access to the next major web framework before public release.',
    date: '2024-03-20',
    tier: 'platinum',
  },
];