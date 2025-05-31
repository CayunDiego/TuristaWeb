import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const AvatarKathOriginaul = () => {
  return (
    <Avatar className="w-32 h-32 md:w-40 md:h-40 shadow-lg">
      <AvatarImage src="/images/sobremi.png" alt="Katherine Rangel" data-ai-hint="woman profile" />
      <AvatarFallback>KR</AvatarFallback>
    </Avatar>
  )
}

export default AvatarKathOriginaul
