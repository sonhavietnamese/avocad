import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      cursor: {
        "c-auto":
          "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQyIDQyIj48cGF0aCBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI0LjE3MSIgZD0iTTEwLjE1NyAzMC43MzhBLjA5NC4wOTQgMCAwIDEgMTAgMzAuNjZsMS43MTYtMjQuMTQ1YS41NTIuNTUyIDAgMCAxIC44Ny0uNDEybDE5LjcwOCAxNC4wNTFjLjA2OC4wNTMuMDQ3LjE1Ny0uMDM2LjE3MmwtOC45NjMgMS43NTJhLjI3OC4yNzggMCAwIDAtLjIwMy4zODZsNS40NTkgMTIuMTgtMi40OTggMS4xNzhMMjMuNTU2IDM3bC01LjkxOC0xMS45NjVhLjI3OS4yNzkgMCAwIDAtLjQyNy0uMDk0bC03LjA1NCA1Ljc5N1oiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTEuNzEgNi41MTUgMTAgMzAuNjZhLjA5NC4wOTQgMCAwIDAgLjE1Ny4wNzhsNy4wNTQtNS43OTdhLjI3OS4yNzkgMCAwIDEgLjQyNy4wOTRMMjMuNTU2IDM3bDIuNDk3LTEuMTc4IDIuNDk4LTEuMTc5LTUuNDYtMTIuMTc5YS4yNzguMjc4IDAgMCAxIC4yMDQtLjM4Nmw4Ljk2My0xLjc1MmMuMDgzLS4wMTUuMTA0LS4xMi4wMzYtLjE3MkwxMi41ODYgNi4xMDRhLjU1Mi41NTIgMCAwIDAtLjg3LjQxMWgtLjAwNloiLz48L3N2Zz4=), auto",
        "c-auto-clicked":
          "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQyIDQyIj48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSI0LjE3MSIgZD0iTTEwLjE1NyAzMC43MzhBLjA5NC4wOTQgMCAwIDEgMTAgMzAuNjZsMS43MTYtMjQuMTQ1YS41NTIuNTUyIDAgMCAxIC44Ny0uNDEybDE5LjcwOCAxNC4wNTFjLjA2OC4wNTMuMDQ3LjE1Ny0uMDM2LjE3MmwtOC45NjMgMS43NTJhLjI3OC4yNzggMCAwIDAtLjIwMy4zODZsNS40NTkgMTIuMTgtMi40OTggMS4xNzhMMjMuNTU2IDM3bC01LjkxOC0xMS45NjVhLjI3OS4yNzkgMCAwIDAtLjQyNy0uMDk0bC03LjA1NCA1Ljc5N1oiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTEuNzEgNi41MTUgMTAgMzAuNjZhLjA5NC4wOTQgMCAwIDAgLjE1Ny4wNzhsNy4wNTQtNS43OTdhLjI3OS4yNzkgMCAwIDEgLjQyNy4wOTRMMjMuNTU2IDM3bDIuNDk3LTEuMTc4IDIuNDk4LTEuMTc5LTUuNDYtMTIuMTc5YS4yNzguMjc4IDAgMCAxIC4yMDQtLjM4Nmw4Ljk2My0xLjc1MmMuMDgzLS4wMTUuMTA0LS4xMi4wMzYtLjE3MkwxMi41ODYgNi4xMDRhLjU1Mi41NTIgMCAwIDAtLjg3LjQxMWgtLjAwNloiLz48L3N2Zz4=), auto",
        "c-pointer":
          "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQyIDQyIj48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMuODI4IiBkPSJNMzIuNjQ2IDE1LjQ5N2EyLjQ3NCAyLjQ3NCAwIDAgMSAyLjQ3NCAyLjQ3NGwtLjA3NyAxMy4yM3MtLjAzOCA4Ljk1Ny0xMS42NzQgOC45NTdjLTEwLjU1NiAwLTE3LjIzLTguOTI4LTE4LjIyLTEyLjE0OWEzLjY5OCAzLjY5OCAwIDAgMS0uMDYzLS4yMjkgMS44OCAxLjg4IDAgMCAxLS4wNjItLjU3IDIuNjE4IDIuNjE4IDAgMCAxIDIuNjE3LTIuNjE3Yy42ODQgMCAxLjMwMi4yNjMgMS43Ny42OTRsLjQ0LjQwMiAyLjU5NCAyLjM3M2EuMzgzLjM4MyAwIDAgMCAuNjM2LS4yODdWNy40NzNhMi40NzQgMi40NzQgMCAwIDEgNC45NDcgMHYxMy44MzhhLjM3OS4zNzkgMCAwIDAgLjc1NiAwdi01LjY3NWEyLjQ3NCAyLjQ3NCAwIDAgMSA0Ljk0NyAwdjUuNzk0YS4zOTYuMzk2IDAgMSAwIC43OTUgMHYtNS4xMWEyLjQ3NCAyLjQ3NCAwIDAgMSA0Ljk0NyAwdjUuMTg3YzAgLjE5MS4xNTkuMzUuMzUuMzUuMTkyIDAgLjM1LS4xNTkuMzUtLjM1di0zLjUzNmEyLjQ3NyAyLjQ3NyAwIDAgMSAyLjQ3My0yLjQ3NFoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTguMDEzIDcuNDc0YTIuNDc2IDIuNDc2IDAgMCAwLTIuNDc2LTIuMzc3IDIuNDc2IDIuNDc2IDAgMCAwLTIuNDc1IDIuNTg2djIwLjA5M2MwIC4zMy0uMzg3LjUwMi0uNjM2LjI4N2wtMi44Ny0yLjYyNWEyLjYxNyAyLjYxNyAwIDAgMC00LjU0MiAxLjc2N0w1IDI3LjIxaC4wMWMtLjIxNiAyLjA5IDYuNzA4IDEyLjk0MyAxOC4zNDQgMTIuOTQzIDExLjYzNiAwIDExLjY3NS04Ljk1OCAxMS42NzUtOC45NThsLjA4Mi0xMy4wMTNhMi40NzQgMi40NzQgMCAxIDAtNC45MzktLjIxNmgtLjAwNHYzLjUzNmEuMzUxLjM1MSAwIDAgMS0uMzUuMzQ5LjM1MS4zNTEgMCAwIDEtLjM0OS0uMzV2LTQuNzRhMi40NzQgMi40NzQgMCAwIDAtNC45NDcgMGgtLjAwNXY0LjY2NGEuMzk2LjM5NiAwIDEgMS0uNzk0IDB2LTUuNjM0YTIuNDc0IDIuNDc0IDAgMSAwLTQuOTQzLS4xNmgtLjAxdjUuNjc1YS4zNzkuMzc5IDAgMCAxLS43NTYgMFY3LjYzNmEyLjM2MyAyLjM2MyAwIDAgMCAwLS4xMzF2LS4wMzJaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGg0MnY0MkgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==), pointer",
        "c-pointer-clicked":
          "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MiIgaGVpZ2h0PSI0MiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDQyIDQyIj48cGF0aCBzdHJva2U9IiMwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzLjgyOCIgZD0iTTMzIDE2LjMzNWEyLjQ3NCAyLjQ3NCAwIDAgMSAyLjQ3NCAyLjQ3M3YxLjQ3NGwtLjA4MSAxMC43OTRzLS4wMzkgOC45NTctMTEuNjc1IDguOTU3Yy0xMS42MzYgMC0xNi45MTQtMTAuODUxLTE2LjY5OS0xMi45NDJhMi42MTggMi42MTggMCAwIDEgNC45NzYtMS4xMzRsLjAyLjA0M2MuMDMzLjA3Mi4wNjIuMTQzLjA5LjIybC42OTQgMS43MThjLjE0OS4zNC42MzcuMDQzLjYzNy0uMjg3VjE2LjkyMmEyLjQ3NCAyLjQ3NCAwIDAgMSA0Ljk0NyAwdjQuMjY4YS4zNzkuMzc5IDAgMCAwIC43NTYgMHYtNC43MTdhMi40NzQgMi40NzQgMCAwIDEgNC45NDcgMHY0LjgzN2EuMzk2LjM5NiAwIDEgMCAuNzk1IDB2LTQuMTUzYTIuNDc0IDIuNDc0IDAgMCAxIDQuOTQ3IDB2NS42NjVjMCAuMTkxLjE1OC4zNS4zNS4zNS4xOSAwIC4zNDktLjE1OS4zNDktLjM1di00LjAxNUEyLjQ3NyAyLjQ3NyAwIDAgMSAzMyAxNi4zMzVaIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0LjA3NyAxNi42MzNhMi40NzQgMi40NzQgMCAxIDAtNC45NDMtLjE2aC0uMDF2NC43MThhLjM3OS4zNzkgMCAwIDEtLjc1NSAwdi00LjA0NGEyLjQ3NCAyLjQ3NCAwIDEgMC00LjkzOC0uMjI0aC0uMDE1djEwLjcyOGMwIC4zMy0uNDg4LjYyNi0uNjM2LjI4N2wtLjYzNS0xLjU3M2EyLjYxOCAyLjYxOCAwIDAgMC01LjEzLjcyM0w3IDI3LjA5bC4wMS4wMDVjLS4yMTYgMi4wOSA1LjA2MiAxMi45NDIgMTYuNjk4IDEyLjk0MiAxMS42MzcgMCAxMS42NzUtOC45NTcgMTEuNjc1LTguOTU3bC4wODYtMTIuMTIyYTIuNDkgMi40OSAwIDAgMCAuMDAyLS4yNjVsLjAwMy0uMzY0LS4wNDYuMDA0YTIuNDc0IDIuNDc0IDAgMCAwLTQuOTAyLjQ3NGgtLjAwNHY0LjAxNWMwIC4xOTEtLjE1OC4zNS0uMzUuMzVhLjM1MS4zNTEgMCAwIDEtLjM0OS0uMzV2LTUuNjY1YTIuNDc0IDIuNDc0IDAgMCAwLTQuOTQ3IDBoLS4wMDV2NC4xNTNhLjM5Ni4zOTYgMCAxIDEtLjc5NCAwdi00LjY3OFoiLz48L3N2Zz4=), pointer",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}
export default config
