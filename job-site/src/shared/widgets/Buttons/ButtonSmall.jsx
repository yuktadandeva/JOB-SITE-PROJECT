import { Button } from "@mui/material"

export const ButtonSmall = ({
    value,
    size = "small",
    variant = "contained",
    color = "primary",
    onClick,
    type = "button"
}) => {
  return (
    <Button variant={variant} size={size} onClick={onClick} color={color}>{value}</Button>
  )
}
