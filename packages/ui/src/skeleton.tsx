import { cn } from '@tszhong0411/utils'
import * as React from 'react'

type SkeletonProps = React.HTMLAttributes<HTMLDivElement>

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    const { className, ...rest } = props

    return (
      <div
        className={cn('animate-pulse rounded-md bg-border', className)}
        ref={ref}
        {...rest}
      />
    )
  }
)

Skeleton.displayName = 'Skeleton'

export { Skeleton }