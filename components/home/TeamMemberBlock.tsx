import React from 'react'
import TeamMember from '@/components/home/TeamMember'
import { teamMembers } from './teamMembers'
import styles from 'styles/Home.module.scss'
const TeamMemberBlock = () => {
  return (
    <div id="about" className={styles.mainTeam}>
      <h1 className={styles.subTitle}>Meet the team</h1>
      <div className={styles.teamMembersContainer}>
        {teamMembers.map((teamMember) => {
          return (
            <TeamMember
              name={teamMember.name}
              role={teamMember.role}
              image={teamMember.image}
              contactLink={teamMember.contactLink}
              contactText={teamMember.contactText}
              key={teamMember.name}

            />
          )
        })}
      </div>
    </div>
  )
}

export default TeamMemberBlock
