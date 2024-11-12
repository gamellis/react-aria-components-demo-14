import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import React from "react"
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components"
import SvgSpinner from "./spinner"
import { cn } from "./util"

interface IProps extends RACButtonProps, VariantProps<typeof buttonVariants> {
  label: string
  icon?: JSX.Element
  iconOnRight?: boolean
  srOnlyText?: string
  isLoading?: boolean
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "border-0 bg-gray-300 text-gray hover:bg-gray-400 pressed:bg-gray-500",
        primary:
          "border-0 bg-blue-500 text-white hover:bg-blue-600 pressed:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-700 disabled:data-[loading]:bg-blue disabled:data-[loading]:text-blue-inverse",
        danger:
          "border-0 bg-red-500 text-white hover:bg-red-600 pressed:bg-red-700 disabled:bg-gray-300 disabled:text-gray-700 disabled:data-[loading]:bg-red disabled:data-[loading]:text-red-inverse",
        text: "bg-transparent border-0 text-blue underline underline-offset-4 hover:text-blue-500 ",
      },
      size: {
        xs: "h-6 px-4 text-sm",
        sm: "h-8 px-4 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-8",
        xl: "h-14 px-10",
      },
      fullWidth: {
        true: "w-full max-w-[342px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const Spinner = ({
  size,
}: {
  size: "xs" | "sm" | "md" | "xl" | "lg" | null | undefined
}): JSX.Element => {
  const w = size === "xs" || size === "sm" ? 16 : 24
  return (
    <>
      <SvgSpinner width={w} height={w} />
      <span className="sr-only" aria-live="polite">
        Loading...
      </span>
    </>
  )
}

export default function Button({
  className,
  variant,
  fullWidth,
  isLoading,
  size,
  label,
  icon,
  iconOnRight,
  srOnlyText: srOnly,
  ...props
}: IProps): JSX.Element {
  const cls = cn(
    buttonVariants({
      variant,
      size,
      fullWidth,
      className,
    })
  )

  const renderLabel = () => {
    if (!icon) {
      return label
    }

    return (
      <span className="flex items-center gap-2">
        {iconOnRight ? null : (
          <>
            <span aria-hidden="true" className="mb-[0.25rem]">
              {icon}
            </span>
          </>
        )}
        <>
          <span>{label}</span>
          {srOnly === undefined ? null : (
            <span className="sr-only">{srOnly}</span>
          )}
        </>
        {iconOnRight ? (
          <span aria-hidden="true" className="mb-[0.25rem]">
            {icon}
          </span>
        ) : null}
      </span>
    )
  }

  return (
    <RACButton
      {...props}
      className={cls}
      isDisabled={isLoading ?? props.isDisabled}
      data-loading={isLoading}
      aria-state={isLoading ? "loading" : undefined}
    >
      {isLoading ? <Spinner size={size} /> : renderLabel}
    </RACButton>
  )
}
