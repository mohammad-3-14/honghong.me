'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '@tszhong0411/utils'
import * as React from 'react'

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(
        'relative flex size-10 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...rest}
    />
  )
})

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn('aspect-square size-full', className)}
      {...rest}
    />
  )
})

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>((props, ref) => {
  const { className, ...rest } = props

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(
        'flex size-full items-center justify-center rounded-full',
        className
      )}
      {...rest}
    />
  )
})

Avatar.displayName = AvatarPrimitive.Root.displayName
AvatarImage.displayName = AvatarPrimitive.Image.displayName
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }