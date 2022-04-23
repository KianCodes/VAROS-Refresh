import React from 'react'
import styles from 'styles/Home.module.scss'
import { TeamMemberType } from './teamMembers'

const TeamMember = ({
  name,
  role,
  image,
  contactLink,
  contactText,
}: TeamMemberType) => {
  return (
    <div className={styles.teamItem}>
      <div className={styles.imgLinkContainer}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.imgLink}>
          <a href={contactLink}>{contactText}</a>
        </div>
      </div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  )
}

export default TeamMember
