import { notFound } from 'next/navigation'

import { mentors } from '../mentor-data'
import MentorContent from './MentorContent'

type MentorPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return mentors.map((mentor) => ({ slug: mentor.slug }))
}

export function generateMetadata({ params }: MentorPageProps) {
  const mentor = mentors.find((profile) => profile.slug === params.slug)

  if (!mentor) {
    return {
      title: 'Mentor Not Found | Evolve Academy'
    }
  }

  return {
    title: `${mentor.name} | Evolve Academy Mentors`,
    description: mentor.bio
  }
}

export default function MentorPage({ params }: MentorPageProps) {
  const mentor = mentors.find((profile) => profile.slug === params.slug)

  if (!mentor) {
    notFound()
  }

  return <MentorContent mentor={mentor} />
}
