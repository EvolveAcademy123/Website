export type MentorProfile = {
  slug: string
  name: string
  title: string
  sport: string
  classYear?: string
  university: string
  universityLogo?: string
  image?: string
  bio: string
  highlights?: string[]
  formLink: string
}

export const mentors: MentorProfile[] = [
  {
    slug: 'ricky-rollo',
    name: 'Ricky Rollo',
    title: 'Current Student-Athlete',
    sport: 'Soccer',
    classYear: 'Class of 2026',
    university: 'Harvard University',
    universityLogo: '/harvard.png',
    image: '/RickyEvolve.png',
    bio: "Physics and Mathematics major who shares the realities of managing Ivy League academics with Division I soccer.",
    highlights: [
      'Navigated the Ivy League recruiting process successfully',
      'Offers academic planning advice for STEM-focused student-athletes',
      'Provides insight into maintaining mental and physical balance at the collegiate level'
    ],
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Ricky%20Rollo'
  },
  {
    slug: 'amir-yahalom',
    name: 'Amir Yahalom',
    title: 'Current Student-Athlete',
    sport: 'Soccer',
    classYear: 'Class of 2026',
    university: 'Columbia University',
    universityLogo: '/Columbialogo.jpg.png',
    image: '/amir-yahalom.jpg',
    bio: 'Competes in the Ivy League while balancing a rigorous academic load and mentoring the next wave of recruits.',
    highlights: [
      'Experience with balancing Ivy League academics and athletics',
      'Guides players on adapting to the speed and physicality of D1 soccer',
      'Shares strategies for winning roster spots as an impact freshman'
    ],
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Amir%20Yahalom'
  },
  {
    slug: 'george-nouaime',
    name: 'George Nouaime',
    title: 'Current Student-Athlete',
    sport: 'Soccer',
    classYear: 'Class of 2026',
    university: 'UMass Lowell',
    universityLogo: '/umassbostonlogo.jpg.png',
    image: '/george-nouaime.jpg',
    bio: 'Helps ambitious players understand the pathway from club soccer to earning minutes in the America East conference.',
    highlights: [
      'Walks through film, ID camps, and showcases from a mid-major perspective',
      'Discusses staying sharp while redshirting or waiting for opportunities',
      'Mentors on building productive relationships with coaching staff'
    ],
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=George%20Nouaime'
  },
  {
    slug: 'nick-mesquita',
    name: 'Nick Mesquita',
    title: 'Current Student-Athlete',
    sport: 'Soccer',
    classYear: 'Class of 2026',
    university: 'Fordham University',
    universityLogo: '/fordhamlogo.jpg.png',
    image: undefined,
    bio: 'Shares the Jesuit D1 experience—balancing service, classroom expectations, and Atlantic 10 competition.',
    highlights: [
      'Demystifies the recruiting timeline for private universities',
      'Breaks down the day-to-day rhythm of a Fordham student-athlete',
      'Provides tips for thriving while living away from home for the first time'
    ],
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Nick%20Mesquita'
  },
  {
    slug: 'zach-miles',
    name: 'Zach Miles',
    title: 'Current Student-Athlete',
    sport: 'Soccer',
    classYear: 'Class of 2026',
    university: 'Villanova University',
    universityLogo: '/villanovalogo.jpg.png',
    image: undefined,
    bio: 'Villanova Wildcat offering a first-hand look at BIG EAST competition and what it takes to stay ready for every match.',
    highlights: [
      'Explains how to handle the jump in pace and physicality from high school to BIG EAST',
      'Shares classroom and time-management frameworks',
      'Encourages goal-setters to create actionable habits that translate to the pitch'
    ],
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Zach%20Miles'
  },
  {
    slug: 'maxim-makar',
    name: 'Maxim Makar',
    title: 'Current Student-Athlete',
    sport: 'Soccer',
    classYear: 'Class of 2026',
    university: 'UMass Lowell',
    universityLogo: '/umassbostonlogo.jpg.png',
    image: '/maxim-makar.jpg.png',
    bio: 'Provides an international perspective on adapting to life in the NCAA, from housing to travel to strength programs.',
    highlights: [
      'Guides players on what to expect from NCAA compliance and travel',
      'Talks through managing academic loads during season',
      'Shares practical advice for earning trust as a first-year player'
    ],
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Maxim%20Makar'
  },
  {
    slug: 'mit-mentor',
    name: 'Placeholder Name',
    title: 'Current Student-Athlete',
    sport: 'Soccer',
    classYear: 'Class of 2026',
    university: 'MIT',
    universityLogo: undefined,
    image: undefined,
    bio: 'A future MIT mentor profile. We will update this bio once the athlete is confirmed.',
    highlights: [
      'Expected to share insight on balancing elite academics with college soccer',
      'Will cover recruiting paths into top STEM programs'
    ],
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=MIT%20Mentor'
  },
  {
    slug: 'duke-mentor',
    name: 'Placeholder Name',
    title: 'Current Student-Athlete',
    sport: 'Soccer',
    classYear: 'Class of 2026',
    university: 'Duke University',
    universityLogo: undefined,
    image: undefined,
    bio: 'A future Duke mentor profile. We will update this bio once the athlete is confirmed.',
    highlights: [
      'Will offer a perspective on playing in the ACC',
      'Will outline the recruiting steps for high-academic Division I programs'
    ],
    formLink:
      'https://docs.google.com/forms/d/e/1FAIpQLScyX3eVDqT0OnYoQSFufyGYhdG9Y5-3PdkP7BDJ8_k4yhV1aQ/viewform?usp=pp_url&entry.XXXXX=Duke%20Mentor'
  }
]

