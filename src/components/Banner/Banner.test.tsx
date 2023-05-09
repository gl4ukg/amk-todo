import { render, screen } from "@testing-library/react"
import { Banner } from "./Banner.component"

describe("Banner", () => {
  test("renders with a title", () => {
    render(<Banner title="Home" />)
    expect(screen.getByText(/Home/i)).toBeInTheDocument()
  })

  test("renders with a curved style", () => {
    render(<Banner title="Home" isCurved />)
    expect(screen.getByTestId("banner")).toHaveClass("banner__curved")
  })

  test("renders without a curved style", () => {
    render(<Banner title="Home" />)
    expect(screen.getByTestId("banner")).not.toHaveClass("banner__curved")
  })

  test("renders title without 'Task Management -' prefix when curved", () => {
    render(<Banner title="Home" isCurved />)
    expect(screen.getByText("Home")).toBeInTheDocument()
  })
})
